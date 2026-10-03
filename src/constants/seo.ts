export const SITE_URL = "https://aymanboujjar.com";
export const SITE_NAME = "Ayman Boujjar";
export const DEFAULT_TITLE = "Ayman Boujjar — Full-Stack & Mobile Developer";
export const DEFAULT_DESCRIPTION =
    "Ayman Boujjar — full-stack and mobile developer in Casablanca, Morocco. Frontend, backend, Laravel, React, React Native, Expo, iOS and Android apps, APIs and AI. Développeur full-stack et mobile.";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const PROFILE_ID = `${SITE_URL}/#profile`;

export const SAME_AS = [
    "https://github.com/aymanboujjar",
    "https://www.linkedin.com/in/aymanboujjar",
] as const;

export type PageSeo = {
    title: string;
    description: string;
    path: string;
    type?: "website" | "profile" | "article";
    jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export function absoluteUrl(path: string): string {
    if (path.startsWith("http")) return path.split("?")[0];
    const clean = path.startsWith("/") ? path : `/${path}`;
    return `${SITE_URL}${clean === "/" ? "/" : clean.replace(/\/$/, "")}`;
}

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
                    "Développeur Full-Stack & Mobile",
                ],
                description:
                    "Full-stack and mobile developer based in Casablanca, Morocco — frontend, backend, Laravel, React, React Native, Expo, iOS, Android, APIs and AI integrations. Développeur full-stack et mobile.",
                image: OG_IMAGE,
                sameAs: [...SAME_AS],
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
                    "Développement Full-Stack",
                    "Laravel",
                    "PHP",
                    "React",
                    "React Native",
                    "Expo",
                    "TypeScript",
                    "JavaScript",
                    "Frontend Development",
                    "Backend Development",
                    "Mobile App Development",
                    "Développement Mobile",
                    "iOS Development",
                    "Android Development",
                    "REST APIs",
                    "Real-Time Applications",
                    "Artificial Intelligence",
                ],
            },
        ],
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

    const data: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": isMobile ? "SoftwareApplication" : "SoftwareApplication",
        "@id": `${SITE_URL}/project/${project.id}#software`,
        name: project.name,
        description: project.desc.en,
        url: `${SITE_URL}/project/${project.id}`,
        author: { "@id": PERSON_ID },
        applicationCategory: isMobile ? "MobileApplication" : "WebApplication",
    };

    if (osParts.length) {
        data.operatingSystem = [...new Set(osParts)].join(", ");
    }

    if (project.website) {
        data.sameAs = [project.website];
    }

    if (techNames.length) {
        data.keywords = techNames.join(", ");
    }

    return data;
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
