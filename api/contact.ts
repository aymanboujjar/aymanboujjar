import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createHmac } from "node:crypto";
import { isIP } from "node:net";

// Redis owns the counters; one atomic EVAL checks both limits before reserving
// a send attempt. Expirations start with the first accepted attempt per key.
const RATE_LIMIT_SCRIPT = `
local retry = 0
for i = 1, 2 do
  local count = tonumber(redis.call('GET', KEYS[i]) or '0')
  local ttl = redis.call('TTL', KEYS[i])
  if count > 0 and ttl < 0 then return redis.error_reply('Invalid limiter expiry') end
  if count >= tonumber(ARGV[(i - 1) * 2 + 1]) then
    retry = math.max(retry, math.max(1, ttl))
  end
end
if retry > 0 then return {0, retry} end
for i = 1, 2 do
  local count = redis.call('INCR', KEYS[i])
  if count == 1 then redis.call('EXPIRE', KEYS[i], ARGV[i * 2]) end
end
return {1, 0}
`;

async function reserveContactAttempt(req: VercelRequest): Promise<number> {
    const endpoint = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    const secret = process.env.CONTACT_RATE_LIMIT_SECRET;
    const namespace = process.env.CONTACT_RATE_LIMIT_NAMESPACE ||
        `ayman-contact-${process.env.VERCEL_ENV || "development"}`;
    if (!endpoint || !token || !secret || secret.length < 32 || !/^[a-zA-Z0-9_-]{1,80}$/.test(namespace)) {
        throw new Error("Rate limiter configuration unavailable");
    }
    const url = new URL(endpoint);
    if (url.protocol !== "https:" || !url.hostname.endsWith(".upstash.io") ||
        url.username || url.password || url.port || url.pathname !== "/" || url.search || url.hash) {
        throw new Error("Invalid rate limiter endpoint");
    }
    // Only trust forwarded headers when the function is behind Vercel's ingress.
    // Locally, use the socket; never accept a user-supplied identity or email key.
    const address = process.env.VERCEL === "1"
        ? req.headers["x-vercel-forwarded-for"] ?? req.headers["x-forwarded-for"]
        : req.socket?.remoteAddress;
    if (typeof address !== "string" || !isIP(address.trim())) {
        throw new Error("Client address unavailable");
    }
    const ip = address.includes(":") ? new URL(`http://[${address.trim()}]/`).hostname : address.trim();
    const digest = createHmac("sha256", secret).update(ip).digest("hex");
    const prefix = `contact:{${namespace}}`;
    const response = await fetch(url, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify(["EVAL", RATE_LIMIT_SCRIPT, "2", `${prefix}:ip:${digest}`, `${prefix}:global`, "5", "600", "30", "3600"]),
        signal: AbortSignal.timeout(2000),
        redirect: "error",
    });
    if (!response.ok) throw new Error("Rate limiter request failed");
    const payload: unknown = await response.json();
    const result = payload && typeof payload === "object" && "result" in payload ? payload.result : null;
    if ((payload && typeof payload === "object" && "error" in payload) || !Array.isArray(result) || result.length !== 2 ||
        !((result[0] === 1 && result[1] === 0) ||
        (result[0] === 0 && Number.isInteger(result[1]) && result[1] >= 1 && result[1] <= 3600))) {
        throw new Error("Invalid rate limiter response");
    }
    return result[1];
}

function hasHeaderControls(value: string): boolean {
    // C0/C1 controls include CR, LF, NUL and DEL. Unicode names and body text
    // remain supported; only header-like values use this restriction.
    return Array.from(value).some(character => {
        const code = character.charCodeAt(0);
        return code <= 31 || (code >= 127 && code <= 159) || code === 0x2028 || code === 0x2029;
    });
}

const LIMITS = {
    name: 120,
    subject: 200,
    message: 5000,
} as const;

type ContactBody = {
    name?: unknown;
    email?: unknown;
    subject?: unknown;
    message?: unknown;
    /** Honeypot — must stay empty */
    company?: unknown;
    service?: unknown;
    organization?: unknown;
    timeline?: unknown;
    budget?: unknown;
};

function trimStr(value: unknown, max: number): string | null {
    if (typeof value !== "string") return null;
    const trimmed = value.trim();
    if (!trimmed || trimmed.length > max) return null;
    return trimmed;
}

function isValidEmail(email: string): boolean {
    return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(text: string): string {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader("Cache-Control", "no-store");
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ error: "Method not allowed" });
    }

    const body = (req.body ?? {}) as ContactBody;
    if (typeof body !== "object" || body === null || Array.isArray(body)) {
        return res.status(400).json({ error: "Invalid form data" });
    }

    if (typeof body.company === "string" && body.company.trim()) {
        return res.status(200).json({ ok: true });
    }

    // Check before trimming so leading/trailing controls cannot disappear.
    if ([body.email, body.subject].some(value => typeof value === "string" && hasHeaderControls(value))) {
        return res.status(400).json({ error: "Invalid form data" });
    }

    const name = trimStr(body.name, LIMITS.name);
    const email = trimStr(body.email, 254);
    const subject = trimStr(body.subject, LIMITS.subject);
    const message = trimStr(body.message, LIMITS.message);
    const context: Record<string, string> = {};
    for (const [key, max] of [["service", 30], ["organization", 300], ["timeline", 200], ["budget", 200]] as const) {
        const value = body[key];
        if (value === undefined || value === "") continue;
        if (typeof value !== "string" || value.length > max) {
            return res.status(400).json({ error: "Invalid form data" });
        }
        context[key] = value.trim();
    }
    if (context.service && !["fix", "web", "mobile"].includes(context.service)) {
        return res.status(400).json({ error: "Invalid form data" });
    }

    if (!name || !email || !subject || !message || !isValidEmail(email)) {
        return res.status(400).json({ error: "Invalid form data" });
    }

    const apiKey = process.env.RESEND_API_KEY;
    // Public inbox already shown on the site; recipient override is optional.
    const to = process.env.CONTACT_TO_EMAIL?.trim() || "boujjarr@gmail.com";
    // Resend test sender works without a verified domain; replace after verifying aymanboujjar.com
    const from =
        process.env.CONTACT_FROM_EMAIL?.trim() ||
        "Ayman Boujjar <onboarding@resend.dev>";

    if (!apiKey) {
        console.error("[contact] Missing RESEND_API_KEY");
        return res.status(503).json({ error: "Contact form is not configured" });
    }

    if (hasHeaderControls(from) || hasHeaderControls(to)) {
        return res.status(503).json({ error: "The contact form is temporarily unavailable" });
    }
    try {
        const retryAfter = await reserveContactAttempt(req);
        if (retryAfter > 0) {
            res.setHeader("Retry-After", String(retryAfter));
            return res.status(429).json({ error: "Too many requests. Please try again later." });
        }
    } catch {
        console.error("[contact] Rate limiter unavailable");
        res.setHeader("Retry-After", "60");
        return res.status(503).json({ error: "The contact form is temporarily unavailable" });
    }

    const text = [
        "New message from aymanboujjar.com contact form",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        ...Object.entries(context).map(([key, value]) => `${key}: ${value}`),
        "",
        message,
    ].join("\n");

    const html = [
        "<p>New message from <strong>aymanboujjar.com</strong> contact form</p>",
        `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
        `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
        `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>`,
        ...Object.entries(context).map(([key, value]) => `<p><strong>${key}:</strong> ${escapeHtml(value)}</p>`),
        `<pre style="font-family:ui-monospace,monospace;white-space:pre-wrap">${escapeHtml(message)}</pre>`,
    ].join("\n");

    try {
        const sendRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from,
                to: [to],
                reply_to: email,
                subject: `[Contact] ${subject}`,
                text,
                html,
            }),
            signal: AbortSignal.timeout(15000),
        });

        if (!sendRes.ok) {
            console.error("[contact] Resend error:", sendRes.status);
            return res.status(502).json({ error: "Failed to send message" });
        }

        return res.status(200).json({ ok: true });
    } catch {
        console.error("[contact] Email provider unavailable");
        return res.status(502).json({ error: "Failed to send message" });
    }
}
