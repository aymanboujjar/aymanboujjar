# Contact API release operations

Live integration verification completed on 10 October 2026. Persistent Upstash was provisioned, Preview and Production variables were configured, and protected preview deployments were tested against real Redis and Resend. Production was not deployed or promoted. Local mocks supplement the live evidence below.

## Infrastructure decision

The repository originally had no Redis client or durable limiter. The selected database is `ayman-contact`, AWS us-east-1, on Upstash's free plan with eviction disabled. Preview and Production share this persistent database with separate namespaces and independently generated HMAC secrets. This separates counters, but shares availability and account quotas; separate databases provide stronger operational isolation. No external WAF rate-limit rule is assumed.

Vercel WAF rate limiting is an alternative, but needs account configuration and plan/region verification; an edge-generated response also needs verification against the required API contract. The selected implementation uses Upstash Redis REST with one atomic EVAL, native fetch, and Node HMAC; no new npm dependency. See [Upstash REST](https://upstash.com/docs/redis/features/restapi), [EVAL](https://upstash.com/docs/redis/sdks/ts/commands/scripts/eval), and [Vercel WAF pricing](https://vercel.com/docs/vercel-firewall/vercel-waf/usage-and-pricing).

## Required environment variables

Set these server-only variables in Vercel Project → Settings → Environment Variables. Do not use VITE_ prefixes or commit real values.

| Variable | Value / purpose |
| --- | --- |
| UPSTASH_REDIS_REST_URL | Database HTTPS REST origin, e.g. https://your-database.upstash.io; no path, query, credentials, or custom port |
| UPSTASH_REDIS_REST_TOKEN | Standard/write REST token; read-only tokens cannot enforce limits |
| CONTACT_RATE_LIMIT_SECRET | Cryptographically random secret of at least 32 characters; HMACs the client IP |
| RESEND_API_KEY | Resend sending key |

Optional: CONTACT_TO_EMAIL defaults to boujjarr@gmail.com; CONTACT_FROM_EMAIL defaults to Ayman Boujjar <onboarding@resend.dev>. Verify the sender domain and use an approved sender for production. CONTACT_RATE_LIMIT_NAMESPACE allows a stable namespace of 1–80 letters, digits, underscores, or hyphens. Without it, the namespace is ayman-contact-production, ayman-contact-preview, or ayman-contact-development based on VERCEL_ENV. VERCEL/VERCEL_ENV are platform-provided, not visitor inputs.

## Vercel setup

1. Create a persistent Upstash Redis database in your own account (or through Vercel Marketplace). Choose a region near the function; avoid temporary/demo databases. Keep eviction disabled so counters cannot disappear early. Select a plan with capacity appropriate to production and review billing limits.
2. Copy its REST URL and standard token into Preview and Production environment scopes. Prefer separate preview/production databases and secrets. If sharing a database, keep distinct namespaces. Never use the production namespace for preview testing.
3. Generate CONTACT_RATE_LIMIT_SECRET with a password manager or `node -e "process.stdout.write(require('node:crypto').randomBytes(32).toString('hex'))"`. Store it securely. Do not print it in CI logs. Keep it stable across instances and redeployments; changing it resets per-IP identities.
4. Set Resend variables as described in README. Restrict the key to the intended sending use where supported; use a verified sender domain. The onboarding sender is limited to permitted test recipients: verify your account's current rules in [Resend's sender guidance](https://resend.com/docs/knowledge-base/403-error-resend-dev-domain).
5. After configuration, manually create a preview deployment. Environment changes affect new deployments. The API function maxDuration is 25 seconds; Redis has a 2-second deadline and Resend 15 seconds, inside the client's existing 20-second deadline under normal conditions.
6. Keep the origin behind Vercel ingress. The API uses x-vercel-forwarded-for, falling back to Vercel's x-forwarded-for; malformed or missing identity fails closed. Outside Vercel, only socket.remoteAddress is used. Do not put an untrusted proxy in front or run this API on another platform without revisiting identity handling. See [Vercel request headers](https://vercel.com/docs/headers/request-headers).

## Enforcement and limitations

- Valid, non-honeypot POST inquiries reserve an attempt before Resend. Invalid data returns 400; honeypot submissions return fake success without contacting Redis or Resend. Non-POST returns 405.
- Limit: 5 send attempts per IP over a 600-second fixed window starting at the first attempt, plus 30 attempts site-wide per 3600-second window. Both checks and counter updates run in one Redis script; counters survive serverless instance changes. Denied attempts do not extend the window.
- Both keys use the same Redis hash tag. Only HMAC IP digests, integer counts, and expiration metadata are stored. No raw IP, email, name, or message is used as a Redis key/value. Keys expire after at most one hour. The provider still sees the server's network request and has its own logging/retention policy.
- 429 returns `{ "error": "Too many requests. Please try again later." }` with integer Retry-After seconds. Redis/configuration/identity failures return 503 with safe JSON, Retry-After: 60, and no email. All responses use Cache-Control: no-store. There is no fail-open switch.
- Provider failures consume a reserved attempt; automatic retries are deliberately absent. A timeout can have an uncertain delivery outcome. Confirm inbox receipt before retrying repeatedly.
- Shared offices/NATs share the IP quota. IPv6 rotation or botnets can bypass a per-IP quota, but the global cap limits send volume. At fixed-window boundaries, bursts can reach twice the nominal allowance across adjacent windows. Global exhaustion can temporarily block legitimate visitors; the direct email fallback remains available.
- This bounds email volume, not all function invocations or Redis costs. Repeated valid blocked requests still call Redis; malformed traffic still invokes the function. Vercel WAF controls are recommended for flood protection. They are additional protection, not an unverified substitute for Redis.
- Monitor rate limiter availability, Redis usage, 429/503 counts, and Resend sending failures. Logs include categories/status only, without inquiry content, raw IPs, tokens, or provider response bodies. Quota exhaustion, revoked tokens, missing identity, and the 2-second Redis deadline intentionally stop sending.

## Deployed preview verification — release gate

Use an isolated preview database/namespace and an inbox you control. Each accepted test sends a real email; no test data is sent to strangers. Preserve deployment protection; authenticate with your normal Vercel preview access if needed.

1. Submit an inquiry in the browser with a Unicode name, valid email you control, subject, multiline message, service, organization/project URL, timeline, and budget. Confirm 200 JSON success and visible success state. Check inbox and spam folder. Inspect Reply-To and use Reply without sending: it must target the visitor's submitted email. Confirm all inquiry fields in both text and HTML, and that literal HTML in inputs is displayed safely.
2. From the same network/IP, submit five valid requests total (the first inquiry counts). The sixth must return 429, safe JSON, and Retry-After in 1–600 seconds. Check Resend activity and inbox: there must be only five sends. Repeat across different serverless instances/redeployments while keeping the namespace and secret unchanged; the sixth must remain blocked.
3. Wait until Retry-After expires, then confirm a valid request succeeds. Do not erase production counters to accelerate tests. Preview-only keys may be cleared through the provider console if explicitly disposable.
4. Verify the global cap in the isolated preview: after 30 allowed attempts using multiple genuine client IPs, the next distinct IP must receive 429 and no Resend send. Do not spoof forwarded headers as a substitute for ingress verification. Expect 30 real emails and account usage. If this is deferred, record it as unverified.
5. In a separate disposable preview configuration, remove a Redis variable or use an invalid token, then manually deploy that preview. A valid inquiry must return 503 and produce no Resend event. Restore configuration afterward. Also check malformed headers and Redis outage/quota behavior where practical.
6. Confirm CR/LF/NUL in subject or email returns 400 before either external service; legitimate international names and newline/tab message text still work. Check the browser's bilingual 429/error message and draft preservation. Inspect logs for safe categories only.
7. Record deployment URL, test time, response statuses, Retry-After, Redis counters/expiry, Resend event IDs, delivery and Reply-To results. Do not put private addresses, credentials, message contents, or bypass tokens in the public repository.

Useful request shape for a controlled preview test (replace the address with your own, and target your actual preview):

```json
{"name":"Preview test","email":"your-controlled-address@example.com","subject":"Contact release verification","message":"Controlled test inquiry","company":"","service":"web","organization":"Preview QA","timeline":"To discuss","budget":"To discuss"}
```

## Local checks and costs

Run npm run lint, npm run check:api, npm run test:contact, npm run build, then npm run check:seo. Contact tests mock the shared Redis transport and Resend; they verify handler behavior across independent imports, validation, privacy of keys, headers, expiry, fail-closed cases and send suppression. They do not execute Lua against live Redis or prove actual email receipt.

As checked on 10 October 2026, [Upstash Redis pricing](https://upstash.com/pricing/redis) lists a free tier with 500K monthly commands and pay-as-you-go at $0.20 per 100K commands; production SLA/HA may require paid options. The provisioned free-plan dashboard confirms 500K monthly commands, 10GB bandwidth, and approximately 250MB storage. Lua issues multiple internal Redis commands per attempt; budget using provider-reported usage rather than assuming one HTTP call equals one billed command. Inactivity and availability limitations still apply. [Resend pricing](https://resend.com/pricing) and your Vercel plan also impose quotas/costs. No paid plan was purchased or payment method added.

## Completed live evidence

Final protected preview: https://aymanboujjar-3ywtyl859-aymanboujjars-projects.vercel.app . Deployment protection remained enabled. Production deployment `dpl_C4B8WNbqkdqkYUK7Rvtdbt5F5H7L` was unchanged by this work.

| Check (10 October, UTC) | Observed result |
| --- | --- |
| Five valid inquiries, including across a redeployment, 22:27–22:31 | 200; persistent Redis IP/global counters reached five; real deliveries |
| Sixth inquiry in that IP window, 22:31:16 | 429, safe JSON, Retry-After 358; no Resend event at that time |
| Invalid Redis token fixture, 22:32:02 | 503, Retry-After 60; no Resend event |
| Missing secret fixture, 22:34:26 | 503, Retry-After 60; no Resend event |
| Preview global counter temporarily seeded to 30, 22:34:33 | 429, Retry-After 3161; no send; original counter and TTL restored |
| CRLF email / NUL subject, 22:42 | 400; honeypot returned simulated success |
| Final browser inquiry, 22:45:43 | Visible success; real Gmail inbox receipt with mobile service and all inquiry fields |

Fault fixtures were separate preview deployments with deployment-only overrides; saved variables were not removed or replaced. No production counters were manipulated. A later network request acquired a distinct IP bucket and was correctly accepted; the original exhausted bucket remained at five. This illustrates the documented IP-rotation limitation. Redis expirations were observed, followed by a successful final browser inquiry in a fresh window.

Seven controlled QA inquiries were delivered in total. Gmail MIME inspection verified Reply-To matches the submitted visitor address, and name, email, subject, service, organization, timeline, budget, and multiline message are present in both text and HTML. French/Arabic characters survived and literal HTML was escaped. SPF, DKIM, and DMARC passed. The tested sender remains `onboarding@resend.dev`, delivering to the configured account-owned recipient; a branded sender/domain was not configured. No reply email was sent.

Browser verification covered all three direct service query values, invalid service fallback, French validation and first-invalid keyboard focus, language switching with retained inquiry data, and successful submission. A hydration issue with direct-query service preselection was fixed without changing the design. Vercel build/output are explicitly set to `npm run build` / `dist`; direct Node development types fix API compilation in remote builds.

Final recommendation: **GO for the reviewed release**, with explicit user-controlled production deployment. The core release gates have live evidence. After deployment, manually smoke-test the production contact route and inspect receipt/Reply-To; environment changes only apply to new deployments. Monitor Redis quotas and 429/503/provider failures. Real iOS/Android and screen-reader review remain advisable. Thirty genuine clients exhausting the global quota were not exercised: the global boundary was verified using a temporary live Redis fixture and regression tests. This limitation is recorded rather than represented as a 30-email load test.

## Files and completed local checks

| Files changed in this release-hardening pass | Purpose |
| --- | --- |
| api/contact.ts | Atomic Redis limiter, hashed identities, fail-closed behavior, input hardening and safe logs |
| src/lib/contactApi.ts | English/French throttling feedback |
| src/components/ServiceOffers.tsx; src/pages/Services.tsx; src/pages/home/studio.css | Correct heading levels with unchanged card typography |
| vercel.json | Explicit function duration envelope |
| .env.example; .gitignore | Placeholder configuration and tracked example; real secrets remain ignored |
| package.json; scripts/contact.test.mjs | Repeatable API type check and 11 passing regression tests |
| README.md; CONTACT_OPERATIONS.md; CONVERSION_REVIEW.md | Setup, costs/limitations, validation and live release gates |

Completed: lint; application TypeScript via build; strict API TypeScript; all 11 contact tests; production build; SEO validation across 21 pages and 532 local links; diff whitespace check; secret-pattern scan with no matches. Browser review confirmed H2 card headings, 25px/400 typography, 30px line height, and zero heading margin. The pre-existing conversion changes remain in the working tree; no unrelated feature or redesign was added in this pass.
