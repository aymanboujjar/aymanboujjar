# Portfolio conversion review — 10 October 2026

Release verification follow-up: persistent Upstash and Vercel variables are configured. Protected previews verified real throttling, fail-closed behavior, and Resend inbox delivery with correct Reply-To and inquiry fields. Recommendation: GO for the reviewed release; production remains undeployed. See [CONTACT_OPERATIONS.md](CONTACT_OPERATIONS.md) for evidence, configuration, costs, limitations, and post-deployment checks.

## Audit

- React 19 / TypeScript / Vite application with React Router, Tailwind, and Framer Motion. Direct `@types/node` was added as a development dependency to ensure API compilation in Vercel builds; no runtime dependency was added.
- Active homepage: `src/pages/home/Home.tsx`, using `studio.css` and WorkShowcase. Older home section components are not mounted by this homepage.
- Existing routes: home, about, services, three service landing pages, projects, contact, and named project case studies. Public routes and redirects retained.
- Case studies already contain contribution, team, technology, and authorship data. MyLionsGeek records ongoing upgrades, dashboards, and reservations; LionsGeek Mobile records features and team store delivery. Offers use those records without attributing sole ownership or inventing performance/security outcomes.
- SEO uses shared metadata, canonical URLs, JSON-LD entity graphs, static rendering of 21 pages, generated sitemap, robots.txt, and legacy redirects. Existing architecture retained.
- Contact already uses a Vercel function and Resend, server validation, HTML escaping, honeypot, and success/error states. Production configuration is documented in README. No existing dedicated test suite was found.

## Priorities implemented

1. Business-oriented homepage hero and exact English CTAs: Discuss a Project / View My Work.
2. Three shared offers with relevant real case-study links and recorded team roles.
3. Shared discovery, scope and estimate, development, and delivery process, including direct clients and white-label agencies.
4. Service-preselected inquiry links, optional organization/project URL, timeline and budget; required-field feedback and focus; direct email fallback. Existing honeypot retained. Additional server validation, bounded provider requests, provider exception handling, and explicit successful JSON response checking.
5. Focused mocked contact API regression checks without external email delivery.

## Files changed

| File | Change |
| --- | --- |
| `src/pages/home/Home.tsx` | Hero, offers, collaboration process |
| `src/pages/Services.tsx` | Shared offer and process sections |
| `src/pages/ServiceLanding.tsx` | Service-specific inquiry CTA |
| `src/constants/offers.ts` | Bilingual offers and evidence mapping |
| `src/components/ServiceOffers.tsx` | Shared offer cards with case-study attribution |
| `src/components/CollaborationProcess.tsx` | Shared four-step process |
| `src/pages/home/studio.css` | Responsive offer/process/form styles |
| `src/pages/Contact.tsx` | Qualification fields, preselection, accessible validation, email fallback |
| `src/lib/contactApi.ts` | Inquiry payload, timeout, JSON success verification |
| `api/contact.ts` | Optional field validation, email context, timeout and exception handling |
| `scripts/contact.test.mjs` | Mocked API regression checks |
| `package.json`; `package-lock.json`; `vercel.json` | Direct Node types, strict API check, explicit build/output settings |
| `CONVERSION_REVIEW.md` | Audit and handoff report |

## Validation

- `npm run lint` — passed.
- `npm run build` — passed, including application TypeScript checks and 21-page prerender. Vite needed sandbox escalation to launch esbuild.
- `npm run check:seo` — passed for 21 pages and 532 local links, including metadata, graphs, sitemap, redirects, and readable static content.
- `npm run check:api` — strict API TypeScript passed with direct Node types; final remote preview build also passed without API type errors.

- `node scripts/contact.test.mjs` — passed. Covers invalid input, honeypot suppression, context delivery, HTML escaping, legacy payloads, missing configuration, provider rejection and network failure. Uses fake fetch responses; sends no email.
- Browser review: desktop homepage/services; mobile English/French hero and contact; service preselection; required-field errors and first-invalid focus. Mobile document width matched scroll width. Language switching exposed stale English field errors; those now render from bilingual error codes.

## Manual verification

- Live preview inquiries, inbox receipt, Reply-To, qualification fields, HTML escaping, throttling, and fail-closed fixtures passed. Direct-query hydration/preselection was corrected and all three service values verified. French validation, keyboard focus, language switching, and successful browser submission passed.
- After a user-controlled production deployment, smoke-test its contact route and inbox receipt. The current tested onboarding sender works for the configured permitted recipient; a future branded sender change requires domain verification and another delivery check.
- Review with a screen reader and on real iOS/Android devices. Browser checks are not a comprehensive accessibility audit.
- Measure qualified inquiry rate after deployment; no conversion uplift is claimed without data.

Only protected preview deployments were created; production was not deployed or promoted. No prices, testimonials, new clients, metrics, technologies, or professional experience were invented. Existing project data, public project URLs, and animations were preserved.
