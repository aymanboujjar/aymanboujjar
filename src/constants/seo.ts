export const SITE_URL = "https://aymanboujjar.com";
export const SITE_NAME = "Ayman Boujjar";
export const DEFAULT_TITLE = "Ayman Boujjar — Full-Stack & Mobile Developer";
export const DEFAULT_DESCRIPTION =
    "Ayman Boujjar is a Full-Stack & Mobile Developer specializing in Laravel, React, React Native, Expo, iOS, Android, APIs and AI-powered applications.";
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
                inLanguage: "en",
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
                jobTitle: "Full-Stack & Mobile Developer",
                description:
                    "Full-Stack & Mobile Developer based in Morocco, building web and mobile products with Laravel, React, React Native, Expo, APIs and AI integrations.",
                image: OG_IMAGE,
                sameAs: [...SAME_AS],
                knowsAbout: [
                    "Full-Stack Development",
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
    const techHint = project.techs
        .map((t) => t.name)
        .filter((n) =>
            /laravel|react native|expo|react|inertia/i.test(n)
        )
        .slice(0, 2)
        .join(" & ");

    if (techHint) {
        return `${project.name} — ${techHint} Project | Ayman Boujjar`;
    }
    return `${project.name} | Ayman Boujjar`;
}

export function projectImageAlt(project: Project): string {
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
