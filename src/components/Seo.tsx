import { useEffect, useMemo } from "react";
import {
    DEFAULT_DESCRIPTION,
    DEFAULT_TITLE,
    OG_IMAGE,
    SITE_NAME,
    absoluteUrl,
    type PageSeo,
} from "../constants/seo";

const JSON_LD_ID = "page-json-ld";

function upsertMeta(
    attr: "name" | "property",
    key: string,
    content: string
) {
    let el = document.head.querySelector<HTMLMetaElement>(
        `meta[${attr}="${key}"]`
    );
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
}

function removeMeta(attr: "name" | "property", key: string) {
    document.head
        .querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
        ?.remove();
}

function upsertLink(rel: string, href: string) {
    let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
    }
    el.setAttribute("href", href);
}

/**
 * Prefer the shared #page-json-ld node (also used in index.html / emit shells)
 * so SPA navigations replace homepage Person graph instead of stacking scripts.
 */
function upsertJsonLd(data?: PageSeo["jsonLd"]) {
    const byId = document.getElementById(JSON_LD_ID) as HTMLScriptElement | null;
    const orphan = document.head.querySelector<HTMLScriptElement>(
        'script[type="application/ld+json"]:not([id])'
    );

    if (!data) {
        byId?.remove();
        orphan?.remove();
        return;
    }

    let el = byId ?? orphan;
    if (!el) {
        el = document.createElement("script");
        el.type = "application/ld+json";
        document.head.appendChild(el);
    }
    el.id = JSON_LD_ID;
    el.type = "application/ld+json";
    el.textContent = JSON.stringify(data);

    // Remove any leftover duplicate JSON-LD nodes
    document.head
        .querySelectorAll('script[type="application/ld+json"]')
        .forEach((node) => {
            if (node !== el) node.remove();
        });
}

/**
 * Route-level document head updates without adding react-helmet.
 * Baseline Person/WebSite/ProfilePage JSON-LD lives in index.html as #page-json-ld;
 * non-home routes replace it via jsonLd (and emit-route-html for static shells).
 */
export default function Seo({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    path = "/",
    type = "website",
    robots,
    jsonLd,
}: Partial<PageSeo>) {
    const jsonLdSerialized = useMemo(
        () => (jsonLd ? JSON.stringify(jsonLd) : null),
        [jsonLd]
    );

    useEffect(() => {
        const url = absoluteUrl(path);
        document.title = title;

        upsertMeta("name", "description", description);
        upsertLink("canonical", url);

        if (robots) {
            upsertMeta("name", "robots", robots);
        } else {
            removeMeta("name", "robots");
        }

        upsertMeta(
            "property",
            "og:type",
            type === "profile" ? "profile" : type === "article" ? "article" : "website"
        );
        upsertMeta("property", "og:title", title);
        upsertMeta("property", "og:description", description);
        upsertMeta("property", "og:url", url);
        upsertMeta("property", "og:site_name", SITE_NAME);
        upsertMeta("property", "og:image", OG_IMAGE);

        upsertMeta("name", "twitter:card", "summary_large_image");
        upsertMeta("name", "twitter:title", title);
        upsertMeta("name", "twitter:description", description);
        upsertMeta("name", "twitter:image", OG_IMAGE);

        upsertJsonLd(jsonLdSerialized ? JSON.parse(jsonLdSerialized) : undefined);
    }, [title, description, path, type, robots, jsonLdSerialized]);

    return null;
}
