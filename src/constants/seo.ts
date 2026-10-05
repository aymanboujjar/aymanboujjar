export const SITE_URL = "https://aymanboujjar.com";
export const SITE_NAME = "Ayman Boujjar";
export const DEFAULT_TITLE =
    "Ayman Boujjar — Full-Stack & Mobile Developer and Freelancer";
export const DEFAULT_DESCRIPTION =
    "Ayman Boujjar — full-stack & mobile freelancer in Casablanca. Laravel, React, React Native & Expo. Worldwide remote.";
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
    "Ayman Boujjar is a full-stack and mobile developer and freelancer based in Casablanca, Morocco — available for worldwide remote freelance and contract work. Builds web applications with Laravel and React, mobile apps with React Native and Expo, plus APIs, integrations, and AI-powered features. Full Stack Developer at LionsGeek Association.";

export type PageSeo = {
    title: string;
    description: string;
    path: string;
    type?: "website" | "profile" | "article";
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

export const STATIC_PAGE_SEO: PageSeo[] = [
    ABOUT_PAGE_SEO,
    SERVICES_PAGE_SEO,
    PROJECTS_PAGE_SEO,
    CONTACT_PAGE_SEO,
];

export function absoluteUrl(path: string): string {
    if (path.startsWith("http")) return path.split("?")[0];
    const clean = path.startsWith("/") ? path : `/${path}`;
    return `${SITE_URL}${clean === "/" ? "/" : clean.replace(/\/$/, "")}`;
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
            {
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
                    "Web Application Development",
                    "Mobile Application Development",
                    "Freelance Software Development",
                    "Laravel",
                    "PHP",
                    "React",
                    "React Native",
                    "Expo",
                    "TypeScript",
                    "JavaScript",
                    "Frontend Development",
                    "Backend Development",
                    "API Development",
                    "REST APIs",
                    "Real-Time Applications",
                    "iOS Development",
                    "Android Development",
                    "Artificial Intelligence",
                    "AI Integrations",
                ],
            },
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

export function buildProjectJsonLd(project: Project) {
    const techNames = project.techs.map((t) => t.name);
    const isMobile = techNames.some((n) =>
        /react native|expo|ios|android/i.test(n)
    );
    const osParts: string[] = [];
    if (isMobile || project.appStore) osParts.push("iOS");
    if (isMobile || project.playStore) osParts.push("Android");

    const soleAuthor = project.authorship === "sole";
    const roleHint = project.role?.en ? ` Role: ${project.role.en}.` : "";
    const teamHint = project.teamContext?.en
        ? ` ${project.teamContext.en}`
        : "";

    const data: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/project/${project.id}#software`,
        name: project.name,
        description: `${project.desc.en}${roleHint}${teamHint}`,
        url: `${SITE_URL}/project/${project.id}`,
        applicationCategory: isMobile ? "MobileApplication" : "WebApplication",
    };

    // Team / contributor work: do not imply sole authorship via author
    if (soleAuthor) {
        data.author = { "@id": PERSON_ID };
    } else {
        data.contributor = { "@id": PERSON_ID };
    }

    if (osParts.length) {
        data.operatingSystem = [...new Set(osParts)].join(", ");
    }

    const sameAs: string[] = [];
    if (project.website) sameAs.push(project.website);
    if (project.appStore) sameAs.push(project.appStore);
    if (project.playStore) sameAs.push(project.playStore);
    if (sameAs.length) data.sameAs = sameAs;

    if (techNames.length) {
        data.keywords = techNames.join(", ");
    }

    return data;
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
    const role = project.role?.en ? ` ${project.role.en}.` : "";
    const techs = project.techs.map((t) => t.name).slice(0, 4).join(", ");
    const techHint = techs ? ` ${techs}.` : "";
    return clipMetaDescription(`${project.desc.en}${role}${techHint}`);
}

export function projectPageSeo(project: Project): PageSeo {
    return {
        title: projectPageTitle(project),
        description: projectPageDescription(project),
        path: `/project/${project.id}`,
    };
}

export function projectPageTitle(project: Project): string {
    const techNames = project.techs.map((t) => t.name);
    const isMobile =
        Boolean(project.appStore || project.playStore) ||
        techNames.some((n) => /react native|expo/i.test(n)) ||
        /mobile/i.test(project.name);

    if (isMobile) {
        return `${project.name} — React Native iOS & Android App | Ayman Boujjar`;
    }

    const hasLaravel = techNames.some((n) => /laravel/i.test(n));
    const hasReact = techNames.some((n) => /^react$/i.test(n) || /inertia/i.test(n));
    if (hasLaravel && hasReact) {
        return `${project.name} — Laravel Full-Stack Web App | Ayman Boujjar`;
    }
    if (hasLaravel) {
        return `${project.name} — Laravel Backend Project | Ayman Boujjar`;
    }

    const techHint = techNames
        .filter((n) => /next\.js|react|three\.js|python|vue/i.test(n))
        .slice(0, 2)
        .join(" & ");

    if (techHint) {
        return `${project.name} — ${techHint} Project | Ayman Boujjar`;
    }
    return `${project.name} | Ayman Boujjar`;
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
