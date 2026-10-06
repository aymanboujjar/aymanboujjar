export const SITE_URL = "https://aymanboujjar.com";
export const SITE_NAME = "Ayman Boujjar";
export const DEFAULT_TITLE =
    "Ayman Boujjar — Full-Stack & Mobile Developer in Casablanca, Morocco";
export const DEFAULT_DESCRIPTION =
    "Ayman Boujjar is a full-stack and mobile developer based in Casablanca, Morocco, specializing in Laravel, React, React Native and Expo.";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const PROFILE_ID = `${SITE_URL}/#profile`;

/** Canonical professional profile URLs — keep UI and Person sameAs in sync */
export const SAME_AS = [
    "https://github.com/aymanboujjar",
    "https://www.linkedin.com/in/aymanboujjar",
] as const;

export const GITHUB_URL = SAME_AS[0];
export const LINKEDIN_URL = SAME_AS[1];

/** Accessible labels for icon-only profile links */
export const GITHUB_ARIA_LABEL = "Ayman Boujjar on GitHub";
export const LINKEDIN_ARIA_LABEL = "Ayman Boujjar on LinkedIn";

/** Current affiliation — matches About experience; not founder/owner */
export const LIONSGEEK_ORG = {
    name: "LionsGeek Association",
    url: "https://lionsgeek.ma/",
} as const;

export const PERSON_DESCRIPTION =
    "Ayman Boujjar is a full-stack and mobile developer based in Casablanca, Morocco, specializing in Laravel, React, React Native and Expo. Builds production web and mobile applications. Full Stack Developer at LionsGeek Association; also available for freelance and contract work worldwide.";

export type PageSeo = {
    title: string;
    description: string;
    path: string;
    type?: "website" | "profile" | "article";
    /** Meta robots content (e.g. "noindex"). Omit for default indexable pages. */
    robots?: string;
    jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

/** Indexable static routes — shared by <Seo /> and post-build raw HTML emission */
export const ABOUT_PAGE_SEO: PageSeo = {
    title: "About Ayman Boujjar — Full-Stack & Mobile Developer and Freelancer",
    description:
        "About Ayman Boujjar — full-stack & mobile developer in Casablanca. Laravel, React, React Native & Expo. Worldwide remote.",
    path: "/about",
    type: "profile",
};

export const SERVICES_PAGE_SEO: PageSeo = {
    title: "Freelance Full-Stack & Mobile Development — Ayman Boujjar",
    description:
        "Freelance full-stack & mobile development by Ayman Boujjar — Laravel, React, React Native, Expo. Worldwide remote.",
    path: "/services",
};

export const PROJECTS_PAGE_SEO: PageSeo = {
    title: "Projects — Ayman Boujjar | Full-Stack & Mobile Developer",
    description:
        "Web and mobile projects by Ayman Boujjar — Laravel, React, React Native & Expo. Remote from Casablanca, Morocco.",
    path: "/projects",
};

export const CONTACT_PAGE_SEO: PageSeo = {
    title: "Contact — Ayman Boujjar | Full-Stack & Mobile Freelancer",
    description:
        "Contact Ayman Boujjar for freelance full-stack and mobile work — Laravel, React, React Native, Expo. Worldwide remote.",
    path: "/contact",
};

export const ARTICLES_PAGE_SEO: PageSeo = {
    title: "Technical Articles — Ayman Boujjar | Laravel, React & React Native",
    description:
        "Experience-based technical articles by Ayman Boujjar on Laravel, React, React Native, and Expo — tied to real portfolio projects.",
    path: "/articles",
};

export function buildAboutPageJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/about#webpage`,
        url: `${SITE_URL}/about`,
        name: ABOUT_PAGE_SEO.title,
        description: ABOUT_PAGE_SEO.description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        mainEntity: { "@id": PERSON_ID },
        inLanguage: ["en", "fr"],
    };
}

export function buildProjectsPageJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/projects#webpage`,
        url: `${SITE_URL}/projects`,
        name: PROJECTS_PAGE_SEO.title,
        description: PROJECTS_PAGE_SEO.description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        mainEntity: { "@id": PERSON_ID },
        inLanguage: ["en", "fr"],
    };
}

export function buildArticlesPageJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/articles#webpage`,
        url: `${SITE_URL}/articles`,
        name: "Technical Articles — Ayman Boujjar",
        description: ARTICLES_PAGE_SEO.description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        mainEntity: { "@id": PERSON_ID },
        inLanguage: "en",
    };
}

/**
 * Attach page schemas so emit-route-html replaces the homepage Person graph
 * on every static shell (not only after SPA hydration).
 */
ABOUT_PAGE_SEO.jsonLd = buildAboutPageJsonLd();
PROJECTS_PAGE_SEO.jsonLd = buildProjectsPageJsonLd();
ARTICLES_PAGE_SEO.jsonLd = buildArticlesPageJsonLd();

export const STATIC_PAGE_SEO: PageSeo[] = [
    ABOUT_PAGE_SEO,
    SERVICES_PAGE_SEO,
    PROJECTS_PAGE_SEO,
    CONTACT_PAGE_SEO,
    ARTICLES_PAGE_SEO,
];

export function absoluteUrl(path: string): string {
    if (path.startsWith("http")) return path.split("?")[0];
    const clean = path.startsWith("/") ? path : `/${path}`;
    return `${SITE_URL}${clean === "/" ? "/" : clean.replace(/\/$/, "")}`;
}

/**
 * Person entity for Ayman Boujjar.
 * Reused by buildPersonGraph(); do not also inject via Seo.jsonLd on the
 * homepage (index.html already embeds the graph for static crawlers).
 */
export function buildPersonJsonLd() {
    return {
        "@type": "Person",
        "@id": PERSON_ID,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        jobTitle: [
            "Full-Stack & Mobile Developer",
            "Freelance Developer",
            "Développeur Full-Stack & Mobile",
            "Développeur Freelance",
        ],
        description: PERSON_DESCRIPTION,
        image: OG_IMAGE,
        sameAs: [...SAME_AS],
        worksFor: {
            "@type": "Organization",
            name: LIONSGEEK_ORG.name,
            url: LIONSGEEK_ORG.url,
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: "Casablanca",
            addressCountry: "MA",
        },
        homeLocation: {
            "@type": "Place",
            name: "Casablanca, Morocco",
        },
        knowsAbout: [
            "Full-Stack Development",
            "Web Development",
            "Mobile App Development",
            "Web Application Development",
            "Mobile Application Development",
            "Laravel",
            "React",
            "React Native",
            "Expo",
            "TypeScript",
            "JavaScript",
            "PHP",
            "Frontend Development",
            "Backend Development",
            "API Development",
            "REST APIs",
            "Real-Time Applications",
            "iOS Development",
            "Android Development",
        ],
    };
}

/**
 * Canonical Person / WebSite / ProfilePage graph.
 * Consumed as the TypeScript source of truth; mirrored in index.html for
 * static crawlers. Do not also inject this via Seo.jsonLd on the homepage
 * (that would duplicate the static script in index.html).
 */
export function buildPersonGraph() {
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": WEBSITE_ID,
                url: `${SITE_URL}/`,
                name: SITE_NAME,
                description: DEFAULT_DESCRIPTION,
                publisher: { "@id": PERSON_ID },
                inLanguage: ["en", "fr"],
            },
            {
                "@type": "ProfilePage",
                "@id": PROFILE_ID,
                url: `${SITE_URL}/`,
                name: DEFAULT_TITLE,
                isPartOf: { "@id": WEBSITE_ID },
                mainEntity: { "@id": PERSON_ID },
            },
            buildPersonJsonLd(),
        ],
    };
}

export function buildContactPageJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact#webpage`,
        url: `${SITE_URL}/contact`,
        name: "Contact — Ayman Boujjar",
        description: CONTACT_PAGE_SEO.description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        mainEntity: { "@id": PERSON_ID },
        inLanguage: ["en", "fr"],
    };
}

export function buildServicesPageJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${SITE_URL}/services#webpage`,
        url: `${SITE_URL}/services`,
        name: "Freelance Full-Stack & Mobile Development — Ayman Boujjar",
        description: SERVICES_PAGE_SEO.description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        mainEntity: { "@id": PERSON_ID },
        inLanguage: ["en", "fr"],
    };
}

/** Wire after builders exist (STATIC_PAGE_SEO is declared above). */
SERVICES_PAGE_SEO.jsonLd = buildServicesPageJsonLd();
CONTACT_PAGE_SEO.jsonLd = buildContactPageJsonLd();

type ServiceLandingLike = {
    slug: string;
    name: LocalizedString;
    title: string;
    description: string;
    techs: string[];
};

/**
 * Service landing JSON-LD: Service + BreadcrumbList.
 * Provider points at the existing Person entity (no duplicate Person node).
 */
export function buildServiceLandingJsonLd(service: ServiceLandingLike) {
    const url = `${SITE_URL}/services/${service.slug}`;
    const serviceName = service.name.en;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": `${url}#service`,
                name: serviceName,
                description: service.description,
                url,
                provider: { "@id": PERSON_ID },
                areaServed: [
                    {
                        "@type": "City",
                        name: "Casablanca",
                    },
                    {
                        "@type": "Country",
                        name: "Morocco",
                    },
                ],
                serviceType: serviceName,
                ...(service.techs.length
                    ? { category: service.techs.join(", ") }
                    : {}),
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${url}#breadcrumb`,
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: `${SITE_URL}/`,
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Services",
                        item: `${SITE_URL}/services`,
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: serviceName,
                        item: url,
                    },
                ],
            },
        ],
    };
}

export function serviceLandingPageSeo(service: ServiceLandingLike): PageSeo {
    return {
        title: service.title,
        description: service.description,
        path: `/services/${service.slug}`,
        jsonLd: buildServiceLandingJsonLd(service),
    };
}

/** Short role fragment for titles — uses text before an em/en dash when present */
export function projectRoleTitleHint(project: Project): string | null {
    const role = project.role?.en?.trim();
    if (!role) return null;
    const primary = role.split(/\s*[—–]\s*/)[0]?.trim() || role;
    if (primary.length <= 48) return primary;
    return `${primary.slice(0, 45).trimEnd()}…`;
}

/**
 * Project case-study JSON-LD (@graph): work entity + BreadcrumbList.
 * Authorship: sole → author Person; contributor → contributor Person
 * (and LionsGeek as creator when the project client is LionsGeek).
 */
export function buildProjectJsonLd(project: Project) {
    const techNames = project.techs.map((t) => t.name);
    const isMobileApp =
        Boolean(project.appStore || project.playStore) ||
        techNames.some((n) => /react native|expo/i.test(n));
    const isStaticMarketingSite =
        project.authorship === "sole" &&
        !isMobileApp &&
        techNames.every((n) => /react|vite|tailwind/i.test(n));

    const soleAuthor = project.authorship === "sole";
    const roleHint = project.role?.en ? ` Role: ${project.role.en}.` : "";
    const teamHint = project.teamContext?.en
        ? ` ${project.teamContext.en}`
        : "";
    const projectUrl = `${SITE_URL}/project/${project.name.replace(/\s+/g, "-")}`;

    const work: Record<string, unknown> = {
        "@type": isStaticMarketingSite ? "CreativeWork" : "SoftwareApplication",
        "@id": `${projectUrl}#work`,
        name: project.name,
        description: `${project.desc.en}${roleHint}${teamHint}`,
        url: projectUrl,
        isPartOf: { "@id": WEBSITE_ID },
    };

    if (!isStaticMarketingSite) {
        work.applicationCategory = isMobileApp
            ? "MobileApplication"
            : "WebApplication";
        const osParts: string[] = [];
        if (isMobileApp || project.appStore) osParts.push("iOS");
        if (isMobileApp || project.playStore) osParts.push("Android");
        if (osParts.length) {
            work.operatingSystem = [...new Set(osParts)].join(", ");
        }
    }

    const lionsgeekClient = /lionsgeek/i.test(project.client ?? "");

    if (soleAuthor) {
        work.author = { "@id": PERSON_ID };
    } else {
        work.contributor = { "@id": PERSON_ID };
        if (lionsgeekClient) {
            work.creator = {
                "@type": "Organization",
                name: LIONSGEEK_ORG.name,
                url: LIONSGEEK_ORG.url,
            };
        }
    }

    const sameAs: string[] = [];
    if (project.website) sameAs.push(project.website);
    if (project.appStore) sameAs.push(project.appStore);
    if (project.playStore) sameAs.push(project.playStore);
    if (sameAs.length) work.sameAs = sameAs;

    if (techNames.length) {
        work.keywords = techNames.join(", ");
    }

    const breadcrumb = {
        "@type": "BreadcrumbList",
        "@id": `${projectUrl}#breadcrumb`,
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${SITE_URL}/`,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Projects",
                item: `${SITE_URL}/projects`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: project.name,
                item: projectUrl,
            },
        ],
    };

    return {
        "@context": "https://schema.org",
        "@graph": [work, breadcrumb],
    };
}

/** Meta description length: Google/SEO tools expect ~25–160 characters */
const META_DESC_MAX = 160;

function clipMetaDescription(text: string): string {
    const cleaned = text.replace(/\s+/g, " ").trim();
    if (cleaned.length <= META_DESC_MAX) return cleaned;
    const cut = cleaned.slice(0, META_DESC_MAX - 1);
    const lastSpace = cut.lastIndexOf(" ");
    const clipped = (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trimEnd();
    return `${clipped}…`;
}

export function projectPageDescription(project: Project): string {
    const roleHint = projectRoleTitleHint(project);
    const techs = project.techs.map((t) => t.name).slice(0, 3).join(", ");
    const techHint = techs ? ` ${techs}.` : "";
    const sole = project.authorship === "sole";

    // Lead with authorship so clipping long blurbs cannot drop the Person link.
    const relation = sole
        ? roleHint
            ? `Built by Ayman Boujjar as ${roleHint}.`
            : "Built by Ayman Boujjar."
        : roleHint
          ? `Ayman Boujjar contributed as ${roleHint}.`
          : "Ayman Boujjar contributed to this project.";

    return clipMetaDescription(
        `${relation} ${project.desc.en}${techHint}`
    );
}

export function projectPageSeo(project: Project): PageSeo {
    return {
        title: projectPageTitle(project),
        description: projectPageDescription(project),
        path: `/project/${project.name.replace(/\s+/g, "-")}`,
        jsonLd: buildProjectJsonLd(project),
    };
}

export function projectPageTitle(project: Project): string {
    const roleHint = projectRoleTitleHint(project);
    if (roleHint) {
        return `${project.name} — ${roleHint} | Ayman Boujjar`;
    }

    const techNames = project.techs.map((t) => t.name);
    const isMobile =
        Boolean(project.appStore || project.playStore) ||
        techNames.some((n) => /react native|expo/i.test(n)) ||
        /mobile/i.test(project.name);

    if (isMobile) {
        return `${project.name} — React Native & Expo | Ayman Boujjar`;
    }

    const hasLaravel = techNames.some((n) => /laravel/i.test(n));
    const hasReact = techNames.some(
        (n) => /^react$/i.test(n) || /inertia/i.test(n)
    );
    if (hasLaravel && hasReact) {
        return `${project.name} — Full-Stack Development | Ayman Boujjar`;
    }
    if (hasLaravel) {
        return `${project.name} — Laravel Development | Ayman Boujjar`;
    }

    const techHint = techNames
        .filter((n) => /next\.js|react|three\.js|python|vue/i.test(n))
        .slice(0, 2)
        .join(" & ");

    if (techHint) {
        return `${project.name} — ${techHint} | Ayman Boujjar`;
    }
    return `${project.name} | Ayman Boujjar`;
}

/** Same-client related case studies for internal linking (max 3). */
export function getRelatedProjects(
    project: Project,
    catalog: Project[],
    limit = 3
): Project[] {
    if (!project.client) return [];
    return catalog
        .filter((p) => p.id !== project.id && p.client === project.client)
        .slice(0, limit);
}

type ArticleLike = {
    slug: string;
    title: string;
    headline: string;
    description: string;
    techs: string[];
};

/**
 * Article / TechArticle JSON-LD + BreadcrumbList.
 * Author references the canonical Person @id (no duplicate Person node).
 * No datePublished / dateModified — portfolio does not define publication dates.
 */
export function buildArticleJsonLd(article: ArticleLike) {
    const url = `${SITE_URL}/articles/${article.slug}`;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TechArticle",
                "@id": `${url}#article`,
                headline: article.headline,
                name: article.headline,
                description: article.description,
                url,
                mainEntityOfPage: url,
                isPartOf: { "@id": WEBSITE_ID },
                author: { "@id": PERSON_ID },
                image: OG_IMAGE,
                inLanguage: "en",
                ...(article.techs.length
                    ? { keywords: article.techs.join(", ") }
                    : {}),
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${url}#breadcrumb`,
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: `${SITE_URL}/`,
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Articles",
                        item: `${SITE_URL}/articles`,
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: article.headline,
                        item: url,
                    },
                ],
            },
        ],
    };
}

export function articlePageSeo(article: ArticleLike): PageSeo {
    return {
        title: article.title,
        description: article.description,
        path: `/articles/${article.slug}`,
        type: "article",
        jsonLd: buildArticleJsonLd(article),
    };
}

export function projectImageAlt(project: Project): string {
    if (project.name === "Ada Lovelace") {
        return "LionsGeek team holding Prix Coup de Cœur Jury certificate for Ada Lovelace avatar at [IN]VISIBLE Festival 2026";
    }

    const techHint = project.techs
        .map((t) => t.name)
        .filter((n) =>
            /laravel|react native|expo|react|inertia|firebase/i.test(n)
        )
        .slice(0, 3);

    if (techHint.length) {
        return `${project.name} built with ${techHint.join(", ")}`;
    }
    return `${project.name} project screenshot`;
}
