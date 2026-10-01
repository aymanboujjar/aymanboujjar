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

function upsertLink(rel: string, href: string) {
    let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
    }
    el.setAttribute("href", href);
}

function upsertJsonLd(data?: PageSeo["jsonLd"]) {
    const existing = document.getElementById(JSON_LD_ID);
    if (!data) {
        existing?.remove();
        return;
    }
    let el = existing as HTMLScriptElement | null;
    if (!el) {
        el = document.createElement("script");
        el.type = "application/ld+json";
        el.id = JSON_LD_ID;
        document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
}

/**
 * Route-level document head updates without adding react-helmet.
 * Baseline Person/WebSite/ProfilePage JSON-LD stays in index.html.
 */
export default function Seo({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    path = "/",
    type = "website",
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

        upsertMeta("property", "og:type", type === "profile" ? "profile" : "website");
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
    }, [title, description, path, type, jsonLdSerialized]);

    return null;
}
