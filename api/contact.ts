import type { VercelRequest, VercelResponse } from "@vercel/node";

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
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ error: "Method not allowed" });
    }

    const body = (req.body ?? {}) as ContactBody;

    if (typeof body.company === "string" && body.company.trim()) {
        return res.status(200).json({ ok: true });
    }

    const name = trimStr(body.name, LIMITS.name);
    const email = trimStr(body.email, 254);
    const subject = trimStr(body.subject, LIMITS.subject);
    const message = trimStr(body.message, LIMITS.message);

    if (!name || !email || !subject || !message || !isValidEmail(email)) {
        return res.status(400).json({ error: "Invalid form data" });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
        console.error("[contact] Missing RESEND_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL");
        return res.status(503).json({ error: "Contact form is not configured" });
    }

    const text = [
        "New message from aymanboujjar.com contact form",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        message,
    ].join("\n");

    const html = [
        "<p>New message from <strong>aymanboujjar.com</strong> contact form</p>",
        `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
        `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
        `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>`,
        `<pre style="font-family:ui-monospace,monospace;white-space:pre-wrap">${escapeHtml(message)}</pre>`,
    ].join("\n");

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
    });

    if (!sendRes.ok) {
        const detail = await sendRes.text();
        console.error("[contact] Resend error:", sendRes.status, detail);
        return res.status(502).json({ error: "Failed to send message" });
    }

    return res.status(200).json({ ok: true });
}
