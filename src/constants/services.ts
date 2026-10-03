export type ServiceItem = {
    id: string;
    index: string;
    title: LocalizedString;
    description: LocalizedString;
    techs: string[];
    projectIds: number[];
};

export const servicesIntro: LocalizedString = {
    en: "Ayman Boujjar is a full-stack & mobile developer and freelancer based in Casablanca, Morocco — available for worldwide remote freelance and contract work on web apps, mobile apps, and APIs.",
    fr: "Ayman Boujjar est développeur full-stack & mobile et freelance basé à Casablanca, Maroc — disponible en remote dans le monde entier pour des missions freelance et contrats sur des apps web, mobiles et APIs.",
};

export const services: ServiceItem[] = [
    {
        id: "web",
        index: "01",
        title: {
            en: "Web Application Development",
            fr: "Développement d’applications web",
        },
        description: {
            en: "Production web applications with Laravel, React, and Inertia — institutional platforms, community tools, and corporate sites with clear user journeys.",
            fr: "Applications web en production avec Laravel, React et Inertia — plateformes institutionnelles, outils communautaires et sites corporate avec des parcours utilisateurs clairs.",
        },
        techs: ["Laravel", "React", "Inertia", "TypeScript", "Tailwind"],
        projectIds: [9, 10, 11, 13, 8],
    },
    {
        id: "mobile",
        index: "02",
        title: {
            en: "Mobile Application Development",
            fr: "Développement d’applications mobiles",
        },
        description: {
            en: "Cross-platform iOS and Android apps with React Native and Expo — companion apps, community features, bookings, and store-ready clients.",
            fr: "Applications iOS et Android multiplateformes avec React Native et Expo — apps compagnons, fonctionnalités communautaires, réservations et clients prêts pour les stores.",
        },
        techs: ["React Native", "Expo", "TypeScript", "NativeWind"],
        projectIds: [12, 2, 6],
    },
    {
        id: "api",
        index: "03",
        title: {
            en: "API & Backend Development",
            fr: "APIs & développement backend",
        },
        description: {
            en: "Laravel APIs and backend flows that power web and mobile clients — authentication, data models, and integrations between products.",
            fr: "APIs Laravel et flux backend qui alimentent les clients web et mobile — authentification, modèles de données et intégrations entre produits.",
        },
        techs: ["Laravel", "PHP", "REST APIs", "MySQL"],
        projectIds: [10, 12, 2, 3],
    },
    {
        id: "realtime",
        index: "04",
        title: {
            en: "Real-Time & Product Integrations",
            fr: "Temps réel & intégrations produit",
        },
        description: {
            en: "Messaging, notifications, booking systems, and third-party integrations that keep products connected — grounded in shipped community and event platforms.",
            fr: "Messagerie, notifications, systèmes de réservation et intégrations tierces pour des produits connectés — issus de plateformes communautaires et événementielles livrées.",
        },
        techs: ["Laravel", "React Native", "Expo", "Firebase", "LiveKit"],
        projectIds: [10, 12, 6, 14],
    },
    {
        id: "ai",
        index: "05",
        title: {
            en: "AI Integrations & AI-Powered Features",
            fr: "Intégrations IA & fonctionnalités IA",
        },
        description: {
            en: "AI-powered application features where the product needs them — including conversational agents and real-time voice experiences, as delivered on the Ada Lovelace festival project.",
            fr: "Fonctionnalités IA quand le produit l’exige — agents conversationnels et expériences vocales temps réel, comme sur le projet festival Ada Lovelace.",
        },
        techs: ["AI", "LiveKit", "Python", "Next.js", "Three.js"],
        projectIds: [14],
    },
];
