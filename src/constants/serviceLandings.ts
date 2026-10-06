/**
 * Phase 3 service landing pages — evidence mapped from existing project data only.
 * Keep this set small; do not invent capabilities.
 */

export type ServiceLanding = {
    slug: string;
    index: string;
    /** Short label for cards / related links */
    name: LocalizedString;
    h1: LocalizedString;
    positioning: LocalizedString;
    overview: LocalizedString;
    capabilities: LocalizedString[];
    approach: LocalizedString;
    audience: LocalizedString;
    techs: string[];
    /** Project ids that explicitly support this service in portfolio data */
    projectIds: number[];
    title: string;
    description: string;
};

export const serviceLandings: ServiceLanding[] = [
    {
        slug: "full-stack-development",
        index: "01",
        name: {
            en: "Full-Stack Development",
            fr: "Développement Full-Stack",
        },
        h1: {
            en: "Full-Stack Developer in Casablanca, Morocco",
            fr: "Développeur Full-Stack à Casablanca, Maroc",
        },
        positioning: {
            en: "Ayman Boujjar builds production web applications end-to-end — Laravel on the backend, React on the frontend, with APIs and database-driven workflows where the product needs them.",
            fr: "Ayman Boujjar construit des applications web en production de bout en bout — Laravel côté backend, React côté frontend, avec APIs et flux pilotés par base de données quand le produit l’exige.",
        },
        overview: {
            en: "Full-stack work here means shipping institutional and community platforms with clear user journeys: public sites, internal tools, and multilingual product surfaces. Contributions are documented per project — many deliveries are team work at LionsGeek or with partner organizations, not sole-author builds.",
            fr: "Le full-stack ici, c’est livrer des plateformes institutionnelles et communautaires avec des parcours clairs : sites publics, outils internes et surfaces produit multilingues. Les contributions sont documentées par projet — beaucoup de livraisons sont du travail d’équipe chez LionsGeek ou avec des partenaires, pas des builds en solo.",
        },
        capabilities: [
            {
                en: "Laravel + React / Inertia application structure for web products",
                fr: "Structure d’applications Laravel + React / Inertia pour des produits web",
            },
            {
                en: "Frontend interfaces with TypeScript and Tailwind CSS where used on the project",
                fr: "Interfaces frontend avec TypeScript et Tailwind CSS quand le projet les utilise",
            },
            {
                en: "Backend flows and APIs that connect web clients to data and features",
                fr: "Flux backend et APIs qui connectent les clients web aux données et fonctionnalités",
            },
            {
                en: "Production platforms for communities, media initiatives, and institutional programs",
                fr: "Plateformes en production pour communautés, initiatives média et programmes institutionnels",
            },
        ],
        approach: {
            en: "Start from the product goal and existing constraints, then shape the stack around what already ships in the portfolio — Laravel, React, Inertia, TypeScript, and Tailwind when they fit. Keep authorship honest: contributor language for team deliveries, sole-author language only when the case study says so.",
            fr: "Partir de l’objectif produit et des contraintes, puis caler la stack sur ce qui est déjà livré dans le portfolio — Laravel, React, Inertia, TypeScript et Tailwind quand c’est pertinent. Garder l’attribution honnête : langage contributeur pour les livraisons d’équipe, langage auteur seul uniquement quand le cas le dit.",
        },
        audience: {
            en: "Teams and organizations that need a full-stack developer in Casablanca, Morocco — or remotely worldwide — for Laravel/React web applications grounded in shipped portfolio work.",
            fr: "Équipes et organisations qui ont besoin d’un développeur full-stack à Casablanca, Maroc — ou en remote mondial — pour des applications web Laravel/React ancrées dans des projets livrés.",
        },
        techs: ["Laravel", "React", "Inertia", "TypeScript", "Tailwind"],
        projectIds: [10, 9, 3],
        title: "Full-Stack Development in Casablanca — Ayman Boujjar",
        description:
            "Ayman Boujjar builds production web applications with Laravel, React and modern frontend technologies from Casablanca, Morocco.",
    },
    {
        slug: "laravel-development",
        index: "02",
        name: {
            en: "Laravel Development",
            fr: "Développement Laravel",
        },
        h1: {
            en: "Laravel Developer in Casablanca, Morocco",
            fr: "Développeur Laravel à Casablanca, Maroc",
        },
        positioning: {
            en: "Ayman Boujjar develops Laravel applications and backend systems — often paired with React and Inertia — for community platforms, institutional sites, and program tools.",
            fr: "Ayman Boujjar développe des applications Laravel et des systèmes backend — souvent associés à React et Inertia — pour plateformes communautaires, sites institutionnels et outils de programmes.",
        },
        overview: {
            en: "Laravel shows up across shipped portfolio cases as the backend for web products: data models, application flows, and APIs that power React or mobile clients. On team projects, Ayman’s role is documented as contributor or full-stack developer — not as sole author unless the case study states that.",
            fr: "Laravel apparaît dans les cas livrés comme backend de produits web : modèles de données, flux applicatifs et APIs qui alimentent des clients React ou mobiles. Sur les projets d’équipe, le rôle d’Ayman est documenté comme contributeur ou développeur full-stack — pas comme auteur seul sauf si le cas le précise.",
        },
        capabilities: [
            {
                en: "Laravel web applications with Inertia and React frontends",
                fr: "Applications web Laravel avec frontends Inertia et React",
            },
            {
                en: "Backend systems and REST-oriented APIs for web and mobile clients",
                fr: "Systèmes backend et APIs orientées REST pour clients web et mobile",
            },
            {
                en: "Database-backed features such as feeds, jobs, messaging, and program content",
                fr: "Fonctionnalités basées sur base de données : feeds, jobs, messagerie et contenus de programmes",
            },
            {
                en: "Integrations between Laravel backends and companion products in the same ecosystem",
                fr: "Intégrations entre backends Laravel et produits compagnons du même écosystème",
            },
        ],
        approach: {
            en: "Prefer Laravel when the product needs a solid PHP backend with clear models and routes. Pair it with React/Inertia when the UI is part of the same delivery — the same pattern used on MyLionsGeek, Tilila, and YES Africa in the portfolio.",
            fr: "Privilégier Laravel quand le produit a besoin d’un backend PHP solide avec modèles et routes clairs. L’associer à React/Inertia quand l’UI fait partie de la même livraison — le même schéma que MyLionsGeek, Tilila et YES Africa dans le portfolio.",
        },
        audience: {
            en: "Product owners and teams looking for a Laravel developer in Casablanca or Morocco (also available worldwide remote) for backend-heavy or full-stack Laravel deliveries.",
            fr: "Product owners et équipes qui cherchent un développeur Laravel à Casablanca ou au Maroc (aussi disponible en remote mondial) pour des livraisons Laravel backend ou full-stack.",
        },
        techs: ["Laravel", "PHP", "Inertia", "React", "MySQL"],
        projectIds: [10, 9, 3],
        title: "Laravel Development in Casablanca — Ayman Boujjar",
        description:
            "Ayman Boujjar develops Laravel applications and backend systems, combining Laravel with React and modern web technologies.",
    },
    {
        slug: "mobile-app-development",
        index: "03",
        name: {
            en: "Mobile App Development",
            fr: "Développement d’applications mobiles",
        },
        h1: {
            en: "React Native & Expo Mobile App Developer in Morocco",
            fr: "Développeur d’apps mobiles React Native & Expo au Maroc",
        },
        positioning: {
            en: "Ayman Boujjar builds cross-platform mobile applications with React Native and Expo for iOS and Android — companion apps and community clients backed by production web stacks.",
            fr: "Ayman Boujjar construit des applications mobiles multiplateformes avec React Native et Expo pour iOS et Android — apps compagnons et clients communautaires appuyés sur des stacks web en production.",
        },
        overview: {
            en: "Mobile cases in the portfolio include LionsGeek Mobile (App Store and Google Play) and the YES Mobile companion app. Features depend on the product: social feed, messaging, reservations, QR check-in, offline access, or push notifications when the case study documents them. These were team or ecosystem deliveries — contribution wording applies.",
            fr: "Les cas mobiles du portfolio incluent LionsGeek Mobile (App Store et Google Play) et l’app compagnon YES Mobile. Les fonctionnalités dépendent du produit : fil social, messagerie, réservations, check-in QR, accès hors ligne ou notifications push quand le cas les documente. Ce sont des livraisons d’équipe ou d’écosystème — le langage contribution s’applique.",
        },
        capabilities: [
            {
                en: "React Native and Expo apps targeting iOS and Android",
                fr: "Apps React Native et Expo ciblant iOS et Android",
            },
            {
                en: "Store-ready companion apps with TypeScript and NativeWind where used",
                fr: "Apps compagnons prêtes pour les stores avec TypeScript et NativeWind quand utilisés",
            },
            {
                en: "Integration with backend APIs and related web platforms in the same product family",
                fr: "Intégration avec APIs backend et plateformes web de la même famille produit",
            },
            {
                en: "Product features such as messaging, bookings, QR check-in, offline access, and push notifications when present on the shipped app",
                fr: "Fonctionnalités produit telles que messagerie, réservations, check-in QR, hors ligne et notifications push quand présentes sur l’app livrée",
            },
        ],
        approach: {
            en: "Use React Native and Expo for shared iOS/Android codebases, then connect the app to the backend the product already uses. Keep claims tied to what each case study lists — for example store links on LionsGeek Mobile, or Firebase/offline/push notes on YES Mobile.",
            fr: "Utiliser React Native et Expo pour un codebase iOS/Android partagé, puis connecter l’app au backend déjà utilisé par le produit. Garder les affirmations liées à ce que chaque cas liste — par exemple les liens stores sur LionsGeek Mobile, ou Firebase/hors ligne/push sur YES Mobile.",
        },
        audience: {
            en: "Teams that need a React Native / Expo mobile developer in Morocco (Casablanca-based, worldwide remote) for companion or community apps with real store or production context.",
            fr: "Équipes qui ont besoin d’un développeur mobile React Native / Expo au Maroc (basé à Casablanca, remote mondial) pour des apps compagnons ou communautaires avec un vrai contexte store ou production.",
        },
        techs: ["React Native", "Expo", "TypeScript", "NativeWind", "Firebase"],
        projectIds: [12, 6],
        title: "Mobile App Development in Morocco — Ayman Boujjar",
        description:
            "Ayman Boujjar builds mobile applications with React Native and Expo for iOS and Android, backed by production web technologies.",
    },
];

export function getServiceLanding(slug: string): ServiceLanding | undefined {
    return serviceLandings.find((s) => s.slug === slug);
}

/** Services genuinely supported by a project's tech stack (Phase 3 reverse links). */
export function getRelatedServiceLandings(project: Project): ServiceLanding[] {
    const names = project.techs.map((t) => t.name);
    const joined = names.join(" ");
    const hasLaravel = /laravel/i.test(joined);
    const hasMobile = /react native|expo/i.test(joined);
    const hasReactWeb = names.some((n) =>
        /^(react|reactjs)$/i.test(n) || /inertia/i.test(n)
    );

    const out: ServiceLanding[] = [];
    const bySlug = (slug: string) =>
        serviceLandings.find((s) => s.slug === slug)!;

    if (hasLaravel && hasReactWeb) {
        out.push(bySlug("full-stack-development"), bySlug("laravel-development"));
    } else if (hasLaravel) {
        out.push(bySlug("laravel-development"));
    } else if (hasReactWeb && !hasMobile) {
        // Frontend-only cases (e.g. SONOTIC) are not marketed as full-stack services.
    }

    if (hasMobile) {
        out.push(bySlug("mobile-app-development"));
    }

    return out.filter(
        (s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i
    );
}
