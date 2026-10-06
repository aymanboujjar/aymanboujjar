/**
 * Phase 4 topical articles — English, experience-driven, evidence from project data only.
 * No invented metrics, dates, or architecture beyond what case studies document.
 */

export type ArticleSection = {
    heading: string;
    paragraphs: string[];
};

export type Article = {
    slug: string;
    /** Full document title including "| Ayman Boujjar" */
    title: string;
    /** Visible H1 / schema headline (no brand suffix) */
    headline: string;
    description: string;
    intro: string;
    sections: ArticleSection[];
    projectIds: number[];
    serviceSlugs: string[];
    techs: string[];
};

export const articles: Article[] = [
    {
        slug: "laravel-react-community-platform-mylionsgeek",
        title: "Building a Production Community Platform with Laravel, Inertia, and React | Ayman Boujjar",
        headline:
            "Building a Production Community Platform with Laravel, Inertia, and React",
        description:
            "How Ayman Boujjar contributed to MyLionsGeek — a Laravel, Inertia, and React community platform with social, messaging, and operations features.",
        intro:
            "MyLionsGeek is the internal community and operations platform for LionsGeek Association. It combines social features, messaging, jobs, leaderboards, and studio/cowork reservations with an admin dashboard for members and equipment. This article describes the stack and Ayman Boujjar’s contribution as a full-stack developer on the LionsGeek team — not as a sole author.",
        techs: ["Laravel", "Inertia", "React", "TypeScript", "Tailwind"],
        projectIds: [10],
        serviceSlugs: ["full-stack-development", "laravel-development"],
        sections: [
            {
                heading: "Context",
                paragraphs: [
                    "LionsGeek needed a single hub for students, coaches, and staff: community interaction, operational bookings, and administrative oversight. MyLionsGeek addresses that as an ongoing internal platform at LionsGeek Association.",
                    "The public case study describes a full-stack hub where members interact through posts and profiles, book studios and cowork spaces, track engagement via leaderboards, and browse jobs, while admins manage users, reservations, computers, and equipment.",
                ],
            },
            {
                heading: "Stack",
                paragraphs: [
                    "The project uses Laravel, Inertia, and React, with TypeScript and Tailwind on the frontend surface documented in the portfolio. That pairing keeps application routes and UI in one delivery path rather than a separate SPA API layer for every screen.",
                    "Documented solutions include a modular Laravel + Inertia architecture with role-based access — important when the same product serves students and administrators with different workflows.",
                ],
            },
            {
                heading: "Product surfaces",
                paragraphs: [
                    "Key features listed for MyLionsGeek include a social feed with posts, likes (Geeked), comments, and reposts; Spaces reservations for studios and cowork tables; leaderboards; direct messaging; an admin overview of members, computers, and equipment; and a jobs board with member profiles.",
                    "Challenges documented in the case study include unifying social, booking, and admin workflows in one platform, and delivering messaging and engagement features that feel responsive in day-to-day use.",
                ],
            },
            {
                heading: "Ayman’s role",
                paragraphs: [
                    "Authorship on this case is contributor. Ayman’s documented contributions include building and upgrading MyLionsGeek with Laravel, Inertia, React, and TypeScript; working on studio/cowork reservation flows (Spaces booking UI, calendars, availability); working on social feed, jobs, messaging, leaderboards, and member profiles; and working on the admin dashboard for members, computers, equipment, and reservations with role-based access.",
                    "Team context remains explicit: the platform was built and upgraded with the LionsGeek team — not as a solo product.",
                ],
            },
            {
                heading: "Takeaways",
                paragraphs: [
                    "Lessons recorded on the case study include building internal tools that serve both community and operations, designing role-based UX for students versus administrators, and evolving a reservation system alongside social features.",
                    "For readers evaluating Laravel and React experience, MyLionsGeek is a concrete production example of that stack in a multi-role community product — with contribution boundaries stated clearly.",
                ],
            },
        ],
    },
    {
        slug: "reservation-flows-laravel-react-mylionsgeek",
        title: "Studio and Cowork Reservation Flows in a Laravel + React Platform | Ayman Boujjar",
        headline:
            "Studio and Cowork Reservation Flows in a Laravel + React Platform",
        description:
            "Ayman Boujjar’s contribution to MyLionsGeek reservation flows — Spaces booking UI, calendars, availability, and admin oversight on Laravel and React.",
        intro:
            "Reservation is not a side feature on MyLionsGeek — it sits next to social feed, messaging, and admin tools. This article focuses on the studio and cowork booking work documented in the portfolio, and on Ayman Boujjar’s contribution to those flows as part of the LionsGeek team.",
        techs: ["Laravel", "Inertia", "React", "TypeScript", "Tailwind"],
        projectIds: [10],
        serviceSlugs: ["full-stack-development", "laravel-development"],
        sections: [
            {
                heading: "Goal",
                paragraphs: [
                    "Members need to book studios and cowork tables; staff need visibility into availability and equipment. The case study lists Spaces & reservations for studios and cowork tables as a core feature, alongside an admin overview that includes reservations.",
                    "Documented challenges include managing studios, cowork tables, and equipment availability, and unifying booking with social and admin workflows in one platform.",
                ],
            },
            {
                heading: "What the product exposes",
                paragraphs: [
                    "Solutions described for MyLionsGeek include a Spaces booking UI with studios/cowork filters and calendars, and an admin dashboard with live stats for users, gear, and reservations.",
                    "The detailed description also notes that members book studios and cowork spaces while admins get a 360° overview of users, reservations, computers, and equipment — all on Laravel, Inertia, and React.",
                ],
            },
            {
                heading: "Contribution focus",
                paragraphs: [
                    "Ayman’s contribution list specifically includes work on studio/cowork reservation flows (Spaces booking UI, calendars, availability) and on the admin dashboard for members, computers, equipment, and reservations with role-based access.",
                    "That is contributor work on a team-delivered platform. It does not claim sole ownership of the booking subsystem or invent scheduling algorithms beyond what the portfolio records.",
                ],
            },
            {
                heading: "Why it matters for full-stack work",
                paragraphs: [
                    "Reservation flows touch UI state (filters, calendars), authorization (who can book or administer), and operational data (spaces, equipment). On this project those concerns live in the same Laravel + Inertia + React delivery.",
                    "Lessons listed on the case study include scaling a reservation system alongside social features — a practical constraint when community and operations share one product.",
                ],
            },
        ],
    },
    {
        slug: "react-native-expo-production-lionsgeek-mobile",
        title: "Shipping a React Native Expo App to the App Store and Google Play | Ayman Boujjar",
        headline:
            "Shipping a React Native Expo App to the App Store and Google Play",
        description:
            "How Ayman Boujjar contributed to LionsGeek Mobile — a React Native and Expo app with feed, messaging, reservations, and QR check-in on iOS and Android.",
        intro:
            "LionsGeek Mobile is the official companion app for LionsGeek on iOS and Android. It brings community feed, messaging, studio/cowork reservations, events with QR check-in, and member profiles to phones. This article covers the stack and Ayman Boujjar’s mobile contribution with the LionsGeek team — including production release on the App Store and Google Play.",
        techs: ["React Native", "Expo", "NativeWind", "TypeScript"],
        projectIds: [12],
        serviceSlugs: ["mobile-app-development"],
        sections: [
            {
                heading: "Context",
                paragraphs: [
                    "The web platform already covered social, booking, and events. The mobile case study describes the need for parity across those surfaces on phones, plus staff tools for QR check-in and event participant management.",
                    "Team context is explicit: this is a LionsGeek team project in production on both stores — not a sole-author app.",
                ],
            },
            {
                heading: "Stack and delivery",
                paragraphs: [
                    "Technologies listed are React Native, Expo, NativeWind, and TypeScript. Documented solutions include an Expo + React Native shared codebase for iOS and Android, native calendars and interactive schedule booking flows, and camera-based QR scanning with role-aware staff features.",
                    "Public store links are part of the case study evidence: App Store and Google Play listings for the LionsGeek app.",
                ],
            },
            {
                heading: "Features tied to contribution",
                paragraphs: [
                    "Key features include a community feed with Stories and posts, messaging with calls support, studio and cowork reservations with an availability calendar, events and info sessions with QR participant check-in, and profiles with settings and a Coding Mode dark theme.",
                    "Ayman’s contributions include building and upgrading the React Native / Expo / TypeScript app; working on community feed, messaging with calls support, and member profiles; working on studio/cowork reservation calendars and event/info-session flows with QR check-in for staff; and shipping the production Expo app to both stores with the LionsGeek team.",
                ],
            },
            {
                heading: "Related mobile work",
                paragraphs: [
                    "YES Mobile App is a separate React Native / Expo companion for YES Africa / Jadara participants, with Firebase and Redux, including documented offline content access and push notifications. It reinforces the same mobile stack family without merging two products into one story.",
                    "Future improvements listed for LionsGeek Mobile — deeper offline support and richer push notification preferences — are roadmap notes, not claims of current implementation.",
                ],
            },
            {
                heading: "Takeaways",
                paragraphs: [
                    "Lessons on the case study include shipping a production Expo app to both stores, designing mobile-first booking and social UX, and role-based features for students, coaches, and staff.",
                    "For mobile app development authority, LionsGeek Mobile is a store-backed React Native / Expo example with clear contributor attribution.",
                ],
            },
        ],
    },
    {
        slug: "laravel-react-production-web-experience",
        title: "From Backend to Frontend: Laravel and React Across Production Web Products | Ayman Boujjar",
        headline:
            "From Backend to Frontend: Laravel and React Across Production Web Products",
        description:
            "Ayman Boujjar’s contributor experience across Laravel and React production web products — MyLionsGeek, Tilila, and YES Africa.",
        intro:
            "Several portfolio case studies share a Laravel and React (or ReactJS) web stack, often with Inertia. This article connects those cases at the technology and contribution level — without treating them as one product or claiming sole authorship.",
        techs: ["Laravel", "Inertia", "React", "ReactJS", "TypeScript", "Tailwind"],
        projectIds: [10, 9, 3],
        serviceSlugs: ["full-stack-development", "laravel-development"],
        sections: [
            {
                heading: "Why these projects group together",
                paragraphs: [
                    "MyLionsGeek and Tilila document Laravel, Inertia, and React. YES Africa documents ReactJS, Tailwind, and Laravel for the Jadara Foundation summit web platform. Across these cases, Laravel anchors the backend application layer while React handles frontend experience — sometimes via Inertia.",
                    "Each product has a different domain: internal community operations, media equity programs, and a multilingual summit platform. The shared pattern is production web delivery with that stack family.",
                ],
            },
            {
                heading: "MyLionsGeek",
                paragraphs: [
                    "As covered in the MyLionsGeek case study, Ayman contributed as a full-stack developer on the LionsGeek team to Laravel, Inertia, React, and TypeScript work spanning reservations, social feed, messaging, jobs, and admin dashboards.",
                    "It is the deepest documented example of that stack for community and operations in one product.",
                ],
            },
            {
                heading: "Tilila",
                paragraphs: [
                    "Tilila is a Laravel + React / Inertia platform for equity, diversity, and inclusion in media initiatives (Tilila Awards, Tililab, Expertes directory). Ayman’s role is documented as Full-Stack Contributor on the LionsGeek team.",
                    "Documented contribution includes work on the Tilila platform for media representation initiatives. Architecture notes in the case study mention modular Laravel + Inertia with shared UI components and collaboration on a production Laravel + React stack.",
                ],
            },
            {
                heading: "YES Africa",
                paragraphs: [
                    "YES Africa is the summit web platform for Fondation Jadara — connecting NGOs and supporting NEET youth with multilingual summit operations. Technologies listed include ReactJS, Tailwind, and Laravel.",
                    "Ayman’s role is Web Developer — contributor. The case study frames the work as contributor delivery, not sole authorship.",
                ],
            },
            {
                heading: "What this shows",
                paragraphs: [
                    "Together, these cases support topical authority in Laravel and React web development through multiple production contexts, with contributor attribution kept accurate.",
                    "They also map cleanly to the Full-Stack Development and Laravel Development service pages, which cite the same project evidence.",
                ],
            },
        ],
    },
    {
        slug: "conversational-3d-avatar-ada-lovelace",
        title: "Building a Conversational 3D Avatar with Three.js and Real-Time Voice | Ayman Boujjar",
        headline:
            "Building a Conversational 3D Avatar with Three.js and Real-Time Voice",
        description:
            "Ayman Boujjar’s contribution to the LionsGeek Ada Lovelace festival project — Three.js avatar work and Moroccan Darija integration with a LiveKit real-time voice stack.",
        intro:
            "Ada Lovelace was a LionsGeek team project for the Concours AVATARS — Héroïnes de la Science at [IN]VISIBLE Festival 2026 in Brussels (XR4Heritage). The team shipped a conversational 3D avatar with real-time voice. This article sticks to what the portfolio documents — including Ayman Boujjar’s focused contribution — and does not invent system ownership beyond that.",
        techs: ["Next.js", "React", "Three.js", "LiveKit", "Python", "AI"],
        projectIds: [14],
        serviceSlugs: [],
        sections: [
            {
                heading: "Team delivery",
                paragraphs: [
                    "Team members listed in the case study are Mehdi Forkani, Fatima Zahra Chourfi, Ayman Boujjar, and Yahya Moussair. Teammates built other parts of the system; Ayman focused on the 3D avatar and Darija integration.",
                    "The team won the Prix Coup de Cœur Jury. Authorship on the portfolio case is contributor.",
                ],
            },
            {
                heading: "System as documented",
                paragraphs: [
                    "The detailed description records a Next.js + Three.js front end with a LiveKit real-time voice agent (speech-to-text, LLM replies, text-to-speech) and lip-sync. Solutions also mention a Python LiveKit voice agent with STT, switchable LLM, and TTS, and lip-sync driven by remote audio level / visemes.",
                    "Challenges listed include shipping a competition-ready AI avatar for an international festival jury, building a real-time conversational loop between voice, LLM, and a 3D avatar, and synchronizing lip-sync with remote agent audio.",
                ],
            },
            {
                heading: "Ayman’s contribution",
                paragraphs: [
                    "Documented contributions: created the conversational 3D Ada Lovelace avatar (Three.js) for the festival experience; integrated Moroccan Darija into existing team-built parts of the conversational experience; and shared the Prix Coup de Cœur Jury award with the LionsGeek team.",
                    "This article does not claim that Ayman alone built the LiveKit agent, LLM pipeline, or full product. Those pieces are described at team/system level in the case study.",
                ],
            },
            {
                heading: "Why it belongs in the portfolio",
                paragraphs: [
                    "The project shows interactive 3D work (Three.js) alongside a real-time voice stack (LiveKit) in a festival competition setting. Lessons listed include building under festival constraints as a full-stack team and shipping a multi-stack AI experience (web 3D + realtime voice agent) as a team.",
                    "For topical authority, it complements Laravel/React and React Native case studies with a distinct interactive AI experience — still tied to clear contributor boundaries.",
                ],
            },
        ],
    },
];

export function getArticle(slug: string): Article | undefined {
    return articles.find((a) => a.slug === slug);
}

export function getArticlesForProject(projectId: number): Article[] {
    return articles.filter((a) => a.projectIds.includes(projectId));
}

export function getArticlesForService(serviceSlug: string): Article[] {
    return articles.filter((a) => a.serviceSlugs.includes(serviceSlug));
}
