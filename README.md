# Ayman Boujjar

Full-Stack & Mobile Developer and freelance developer based in Casablanca, Morocco.

Available for worldwide remote freelance and contract work.

## What I Build

- Web applications with Laravel and React
- Mobile applications with React Native and Expo
- APIs, backend systems and integrations
- Real-time features
- AI integrations where relevant to the product

## Current Work

Full Stack Developer at LionsGeek Association, contributing to web and mobile products with the team.

## Selected Work

### Portfolio

Personal portfolio and case studies.

https://aymanboujjar.com

### SONOTIC

Personal static corporate website built with React, Vite, and Tailwind CSS.

- Live: https://sonotic.ma/
- Repository: https://github.com/aymanboujjar/sonotic

### LionsGeek Mobile

Team contribution to the LionsGeek mobile application (React Native / Expo).

This is team-delivered work — not a sole-authored product. Case study and store links:

https://aymanboujjar.com/project/LionsGeek-Mobile

### MyLionsGeek

Team contribution to the MyLionsGeek platform (Laravel / Inertia / React).

This is team-delivered work — not a sole-authored product. Case study:

https://aymanboujjar.com/project/MyLionsGeek

## Contact form (production)

The `/contact` page posts to `/api/contact` (Vercel) and emails **boujjarr@gmail.com** via [Resend](https://resend.com). Visitors stay on your site.

**Required (one-time):**

1. Create a free account at https://resend.com — use **boujjarr@gmail.com** (Resend’s test sender can only deliver to the signup email until you verify a domain).
2. Create an API key: https://resend.com/api-keys
3. In Vercel → your project → **Settings → Environment Variables**, add:
   - `RESEND_API_KEY` = `re_...` (Production + Preview)
4. Redeploy the site.

Optional overrides (defaults already point to your Gmail):

- `CONTACT_TO_EMAIL` — default `boujjarr@gmail.com`
- `CONTACT_FROM_EMAIL` — default `Ayman Boujjar <onboarding@resend.dev>`

After verifying `aymanboujjar.com` in Resend, set `CONTACT_FROM_EMAIL` to e.g. `Ayman Boujjar <contact@aymanboujjar.com>`.

Local API testing: `npx vercel dev` (plain `npm run dev` does not run `/api`).

## Links

- Portfolio: https://aymanboujjar.com
- Services: https://aymanboujjar.com/services
- Projects: https://aymanboujjar.com/projects
- Contact: https://aymanboujjar.com/contact
- LinkedIn: https://www.linkedin.com/in/aymanboujjar
- GitHub: https://github.com/aymanboujjar

## Local development and search visibility

- Run `npm run dev` for the local React app.
- Run `npm run build` for production. The post-build step renders 21 pages from the same React components used by the browser, including the homepage, services, profile, and case studies.
- Run `npm run check:seo` after a build to verify static content, titles, descriptions, canonical URLs, entity graphs, the sitemap, redirects, and local links.
- Run `npm run preview` to inspect the production output.

The sitemap is generated from the prerender route catalog, so it stays aligned with the files deployed. The JSON-LD graph identifies Ayman, the website, and the current page; team contributions remain distinct from sole authorship. The homepage FAQ is visible to visitors and included in the static HTML. The English/French toggle updates the document language; both languages currently share one canonical URL, so no separate language URLs or hreflang claims are published.

Retired article URLs and legacy numeric project URLs have permanent redirects in `vercel.json`. The journal is no longer part of the site. Portraits are not displayed or declared in the Person schema; social cards use a typographic image.

`robots.txt` allows public pages and OAI-SearchBot while excluding the contact API. `llms.txt` provides a concise linked summary of public services and project contributions. It is a supplemental discovery file, not a guarantee of AI citations or rankings. After deployment, use Google Search Console and Bing Webmaster Tools to submit the sitemap and inspect indexing; these changes do not deploy or submit it automatically.
