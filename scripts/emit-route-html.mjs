/**
 * Post-build: emit per-route HTML shells with unique title / description / canonical
 * (and matching OG/Twitter tags) so crawlers do not see homepage meta on every path.
 *
 * When a page provides jsonLd, replaces the homepage Person graph in the shell so
 * project pages do not publish duplicate / incorrect homepage structured data.
 * Client-side <Seo /> still owns SPA navigations after hydration.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const indexPath = path.join(distDir, "index.html");

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function absoluteUrl(siteUrl, routePath) {
    if (routePath === "/") return `${siteUrl}/`;
    const clean = routePath.startsWith("/") ? routePath : `/${routePath}`;
    return `${siteUrl}${clean.replace(/\/$/, "")}`;
}

function applyPageMeta(
    html,
    { title, description, path: routePath, type, robots, jsonLd },
    siteUrl
) {
    const url = absoluteUrl(siteUrl, routePath);
    const ogType =
        type === "profile" ? "profile" : type === "article" ? "article" : "website";
    const t = escapeHtml(title);
    const d = escapeHtml(description);
    const u = escapeHtml(url);
    const h1 = escapeHtml(title);

    let next = html
        .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
        .replace(
            /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
            `<meta\n      name="description"\n      content="${d}"\n    />`
        )
        .replace(
            /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
            `<link rel="canonical" href="${u}" />`
        )
        .replace(
            /<meta\s+property="og:type"\s+content="[^"]*"\s*\/>/,
            `<meta property="og:type" content="${ogType}" />`
        )
        .replace(
            /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
            `<meta property="og:title" content="${t}" />`
        )
        .replace(
            /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
            `<meta\n      property="og:description"\n      content="${d}"\n    />`
        )
        .replace(
            /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
            `<meta property="og:url" content="${u}" />`
        )
        .replace(
            /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
            `<meta name="twitter:title" content="${t}" />`
        )
        .replace(
            /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
            `<meta\n      name="twitter:description"\n      content="${d}"\n    />`
        )
        // Crawlable H1 in page source (SPA shell). React replaces #root on hydrate.
        .replace(
            /(<div id="root">\s*<main class="seo-shell">\s*)<h1>[^<]*<\/h1>(\s*<\/main>\s*<\/div>)/,
            `$1<h1>${h1}</h1>$2`
        );

    // Drop leftover robots meta, then set when requested.
    next = next.replace(
        /\s*<meta\s+name="robots"\s+content="[^"]*"\s*\/>/g,
        ""
    );
    if (robots) {
        next = next.replace(
            /(<link rel="canonical"[^>]*>)/,
            `$1\n    <meta name="robots" content="${escapeHtml(robots)}" />`
        );
    }

    if (jsonLd) {
        const serialized = JSON.stringify(jsonLd, null, 2)
            .split("\n")
            .map((line, i) => (i === 0 ? line : `      ${line}`))
            .join("\n");
        next = next.replace(
            /<script(?:\s+id="page-json-ld")?\s+type="application\/ld\+json">[\s\S]*?<\/script>/,
            `<script id="page-json-ld" type="application/ld+json">\n      ${serialized}\n    </script>`
        );
    }

    return next;
}

async function writeRouteHtml(baseHtml, page, siteUrl) {
    const html = applyPageMeta(baseHtml, page, siteUrl);
    const segments = page.path.split("/").filter(Boolean);
    const outFile = path.join(distDir, ...segments, "index.html");
    await fs.mkdir(path.dirname(outFile), { recursive: true });
    await fs.writeFile(outFile, html, "utf8");
    return path.relative(distDir, outFile);
}

async function main() {
    const baseHtml = await fs.readFile(indexPath, "utf8");

    const server = await createServer({
        root,
        server: { middlewareMode: true },
        appType: "custom",
        // Avoid picking up a conflicting preview server; we only need module load.
        optimizeDeps: { noDiscovery: true },
    });

    try {
        const seo = await server.ssrLoadModule("/src/constants/seo.ts");
        const projectsMod = await server.ssrLoadModule(
            "/src/constants/projects.tsx"
        );

        const landingsMod = await server.ssrLoadModule(
            "/src/constants/serviceLandings.ts"
        );

        const articlesMod = await server.ssrLoadModule(
            "/src/constants/articles.ts"
        );

        const pages = [
            ...seo.STATIC_PAGE_SEO,
            ...landingsMod.serviceLandings.map((service) =>
                seo.serviceLandingPageSeo(service)
            ),
            ...[projectsMod.awardProject, ...projectsMod.proProjects, ...projectsMod.persoProjects].map(
                (project) => seo.projectPageSeo(project)
            ),
            ...articlesMod.articles.map((article) =>
                seo.articlePageSeo(article)
            ),
        ];

        const written = [];
        for (const page of pages) {
            written.push(await writeRouteHtml(baseHtml, page, seo.SITE_URL));
        }

        console.log(
            `[emit-route-html] Wrote ${written.length} route HTML files:\n` +
                written.map((f) => `  - ${f}`).join("\n")
        );
    } finally {
        await server.close();
    }
}

main().catch((err) => {
    console.error("[emit-route-html] Failed:", err);
    process.exit(1);
});
