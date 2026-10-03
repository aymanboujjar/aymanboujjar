export const education: Education[] = [
{
    degree: {
        en: "Baccalaureate in Physical Science",
        fr: "Baccalauréat en Sciences Physiques"
    },
    institution: "High School",
    year: "2022",
    description: {
        en: "Focused on physics, chemistry, and scientific problem-solving",
        fr: "Axé sur la physique, la chimie et la résolution de problèmes scientifiques"
    }
},
    {
        degree: {
            en: "Electrical, Electronics & Communications Engineering studies",
            fr: "Études en Génie Électrique, Électronique et Télécommunications"
        },
        institution: "Université Hassan II",
        year: "2022 - 2023",
        description: {
            en: "Engineering studies in Casablanca, Morocco",
            fr: "Études d’ingénierie à Casablanca, Maroc"
        }
    },
    {
        degree: {
            en: "LionsGeek Fullstack Developer Bootcamp",
            fr: "Bootcamp Développeur Fullstack LionsGeek"
        },
        institution: "LionsGeek 2M",
        year: "2024",
        description: {
            en: "Certified full-stack training covering Frontend and Backend development",
            fr: "Formation fullstack certifiée couvrant le développement Frontend et Backend"
        }
    },
];

export const experience: Experience[] = [
    {
        role: {
            en: "Full Stack Developer",
            fr: "Développeur Full Stack"
        },
        company: "LionsGeek Association",
        website: "https://lionsgeek.ma/",
        period: "Jun 2024 - Present",
        achievements: [
            {
                en: "Ship full-stack web and mobile products for LionsGeek’s Coding PRO studio — community tools and client platforms",
                fr: "Livrer des produits web et mobile fullstack pour le studio Coding PRO de LionsGeek — outils communautaires et plateformes clients"
            },
            {
                en: "Built and upgraded MyLionsGeek (reservations, social feed, jobs, messaging, admin) and LionsGeek Mobile (iOS/Android) used by students, coaches, and staff",
                fr: "Construit et fait évoluer MyLionsGeek (réservations, fil social, jobs, messagerie, admin) et LionsGeek Mobile (iOS/Android) utilisés par étudiants, coachs et staff"
            },
            {
                en: "Delivered the public LionsGeek website (Laravel, Inertia, React, Tailwind)",
                fr: "Livré le site public LionsGeek (Laravel, Inertia, React, Tailwind)"
            },
            {
                en: "On LionsGeek’s Ada Lovelace AI avatar for [IN]VISIBLE Festival 2026 (Brussels / XR4Heritage): created the 3D avatar and integrated Moroccan Darija into teammates’ existing parts — team won Prix Coup de Cœur Jury",
                fr: "Sur l’avatar IA Ada Lovelace de LionsGeek pour le festival [IN]VISIBLE 2026 (Bruxelles / XR4Heritage) : créé l’avatar 3D et intégré la darija marocaine aux parties déjà faites par l’équipe — Prix Coup de Cœur Jury remporté"
            }
        ],
        relatedProjects: [
            { id: 10, name: "MyLionsGeek" },
            { id: 12, name: "LionsGeek Mobile" },
            { id: 11, name: "LionsGeek" },
            { id: 14, name: "Ada Lovelace" },
        ]
    },
    {
        role: {
            en: "Tilila Platform",
            fr: "Plateforme Tilila"
        },
        company: "CPD — Comité Parité et Diversité 2M",
        website: "https://tilila.org/",
        period: "2025 - 2026",
        achievements: [
            {
                en: "Contributed to Tilila (tilila.org), the equity, diversity and inclusion platform for 2M’s Comité Parité et Diversité",
                fr: "Contribué à Tilila (tilila.org), la plateforme d’équité, diversité et inclusion du Comité Parité et Diversité 2M"
            },
            {
                en: "Built program experiences for Tilila Awards, Tililab mentoring, and the Expertes directory with search and filters",
                fr: "Développé les parcours Tilila Awards, Tililab et l’annuaire Expertes avec recherche et filtres"
            },
            {
                en: "Worked on Laravel + React / Inertia flows for registrations, candidacies, and multilingual institutional content",
                fr: "Travaillé sur les flux Laravel + React / Inertia pour inscriptions, candidatures et contenu institutionnel multilingue"
            }
        ],
        relatedProjects: [
            { id: 9, name: "Tilila" },
        ]
    },
    {
        role: {
            en: "Studio Website",
            fr: "Site du Studio"
        },
        company: "Atelier A1",
        website: "https://ateliera1.com/",
        period: "2024",
        achievements: [
            {
                en: "Developed work for Atelier A1 spanning public studio presence and project-management / scheduling tooling — live at ateliera1.com",
                fr: "Développé des livrables pour Atelier A1 couvrant la présence studio et des outils de gestion de projets / planification — en ligne sur ateliera1.com"
            },
            {
                en: "Built with Laravel, Inertia, React, and Tailwind — aesthetic, functional, and aligned with the agency’s identity",
                fr: "Construit avec Laravel, Inertia, React et Tailwind — esthétique, fonctionnel et aligné sur l’identité de l’agence"
            },
            {
                en: "Delivered project management, client meeting coordination, and scheduling features to streamline studio workflows",
                fr: "Livré des fonctionnalités de gestion de projets, coordination de rendez-vous clients et planification pour fluidifier les flux du studio"
            }
        ],
        relatedProjects: [
            { id: 1, name: "A1 Atelier" },
        ]
    },
    {
        role: {
            en: "Mobile App Developer",
            fr: "Développeur d'Applications Mobiles"
        },
        company: "Casa Mémoire",
        website: "https://www.casamemoire.org",
        period: "2024",
        achievements: [
            {
                en: "Helped ship Casatourat — a React Native / Expo heritage guide that lets users explore Casablanca’s buildings and history",
                fr: "Contribué à Casatourat — un guide patrimoine React Native / Expo qui fait découvrir l’histoire des bâtiments de Casablanca"
            },
            {
                en: "Integrated GPS-based location services for interactive tours",
                fr: "Intégré des services de géolocalisation GPS pour des visites interactives"
            },
            {
                en: "Delivered a cross-platform iOS and Android client backed by a Laravel API with LionsGeek",
                fr: "Livré un client iOS et Android multiplateforme branché sur une API Laravel avec LionsGeek"
            }
        ],
        relatedProjects: [
            { id: 2, name: "Casatourat" },
        ]
    },
    {
        role: {
            en: "Web & Mobile Developer",
            fr: "Développeur Web & Mobile"
        },
        company: "Jadara Foundation",
        website: "https://jadara.ngo/",
        period: "2025",
        achievements: [
            {
                en: "Contributed to the YES Africa web platform — multilingual summit site, NGO registration, interactive map, and event operations",
                fr: "Contribué à la plateforme web YES Africa — site summit multilingue, inscription ONG, carte interactive et opérations événementielles"
            },
            {
                en: "Built YES Mobile, the React Native / Expo companion app (Firebase, Redux) used by participants during the summit",
                fr: "Développé YES Mobile, l’app compagnon React Native / Expo (Firebase, Redux) utilisée par les participants pendant le summit"
            },
            {
                en: "Contributed to Her Day For Her and YES Learning / MOOC initiatives within the YES Africa ecosystem",
                fr: "Contribué aux initiatives Her Day For Her et YES Learning / MOOC au sein de l’écosystème YES Africa"
            }
        ],
        relatedProjects: [
            { id: 3, name: "YES Africa" },
            { id: 6, name: "YES Mobile App" },
            { id: 4, name: "Her Day For Her" },
            { id: 5, name: "MOOC Platform" },
        ]
    }
];
