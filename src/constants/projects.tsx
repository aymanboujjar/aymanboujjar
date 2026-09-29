import tililaPreview from "../assets/images/projects/tilila/tilila1.jpg";
import tilila2 from "../assets/images/projects/tilila/tilila2.jpg";
import tilila3 from "../assets/images/projects/tilila/tilila3.jpg";
import tilila4 from "../assets/images/projects/tilila/tilila4.png";

import mylionsgeekPreview from "../assets/images/projects/mylionsgeek/mylionsgeek1.png";
import mylionsgeek2 from "../assets/images/projects/mylionsgeek/mylionsgeek2.jpg";
import mylionsgeek3 from "../assets/images/projects/mylionsgeek/mylionsgeek3.png";
import mylionsgeek4 from "../assets/images/projects/mylionsgeek/mylionsgeek4.jpg";
import mylionsgeek5 from "../assets/images/projects/mylionsgeek/mylionsgeek5.png";
import mylionsgeek6 from "../assets/images/projects/mylionsgeek/mylionsgeek6.png";

import lionsgeekPreview from "../assets/images/projects/lionsgeek/lionsgeek1.png";
import lionsgeek2 from "../assets/images/projects/lionsgeek/lionsgeek2.png";
import lionsgeek3 from "../assets/images/projects/lionsgeek/lionsgeek3.png";
import lionsgeek4 from "../assets/images/projects/lionsgeek/lionsgeek4.png";
import lionsgeek5 from "../assets/images/projects/lionsgeek/lionsgeek5.png";
import lionsgeek6 from "../assets/images/projects/lionsgeek/lionsgeek6.jpg";

import lgmobilePreview from "../assets/images/projects/lionsgeek-mobile/lgmobile1.png";
import lgmobile2 from "../assets/images/projects/lionsgeek-mobile/lgmobile2.png";
import lgmobile3 from "../assets/images/projects/lionsgeek-mobile/lgmobile3.png";
import lgmobile4 from "../assets/images/projects/lionsgeek-mobile/lgmobile4.png";
import lgmobile5 from "../assets/images/projects/lionsgeek-mobile/lgmobile5.png";

import israrPreview from "../assets/images/projects/israr/israr1.png";
import israr2 from "../assets/images/projects/israr/israr2.png";
import israr3 from "../assets/images/projects/israr/israr3.jpg";

import lionsPreview from "../assets/images/projects/a1atelier/atelier2.png";
import lions1 from "../assets/images/projects/a1atelier/atelier2.png";
import lions2 from "../assets/images/projects/a1atelier/atelier3.png";
import lions3 from "../assets/images/projects/a1atelier/atelier4.png";

import casaPreview from "../assets/images/projects/casatourat/casa1.png"
import casa2 from "../assets/images/projects/casatourat/casa2.png";
import casa3 from "../assets/images/projects/casatourat/casa3.png";
import casa4 from "../assets/images/projects/casatourat/casa4.png";
import casa5 from "../assets/images/projects/casatourat/casa5.png";

import africaPreview from "../assets/images/projects/yesafrica/africa1.png"
import africa2 from "../assets/images/projects/yesafrica/africa2.png";
import africa3 from "../assets/images/projects/yesafrica/africa3.png";
import africa4 from "../assets/images/projects/yesafrica/africa4.png";

import herPreview from "../assets/images/projects/herday/her1.png";
import her2 from "../assets/images/projects/herday/her2.png";
import her3 from "../assets/images/projects/herday/her3.png";

import moocPreview from "../assets/images/projects/mooc/mooc1.png";
import mooc2 from "../assets/images/projects/mooc/mooc2.png";
import mooc3 from "../assets/images/projects/mooc/mooc3.png";
import mooc4 from "../assets/images/projects/mooc/mooc4.png";
import mooc5 from "../assets/images/projects/mooc/mooc5.png";

import yesmobilePreview from "../assets/images/projects/yesmobile/yesmobile1.png";
import yesmobile2 from "../assets/images/projects/yesmobile/yesmobile2.png";
import yesmobile3 from "../assets/images/projects/yesmobile/yesmobile3.png";
import yesmobile4 from "../assets/images/projects/yesmobile/yesmobile4.png";
import yesmobile5 from "../assets/images/projects/yesmobile/yesmobile5.png";


import sonoticPreview from "../assets/images/projects/sonotic/sonotic1.png";
import sonotic1 from "../assets/images/projects/sonotic/sonotic1.png";
import sonotic2 from "../assets/images/projects/sonotic/sonotic4.png";
import sonotic3 from "../assets/images/projects/sonotic/sonotic3.png";
export const proProjects: Project[] = [
    {
        id: 9,
        name: 'Tilila',
        website: 'https://tilila.org/',
        desc: {
            en: "A multi-program platform built with the LionsGeek team for equity, diversity, and inclusion in media. Tilila brings together Tilila Awards, Tililab, and an expert directory — connecting campaigns, emerging storytellers, and women experts across Morocco, Africa, and the diaspora.",
            fr: "Une plateforme multi-programmes développée avec l’équipe LionsGeek pour l’équité, la diversité et l’inclusion dans les médias. Tilila réunit Tilila Awards, Tililab et un annuaire d’expertes — connectant campagnes, talents du storytelling et expertes au Maroc, en Afrique et dans la diaspora."
        },
        detailedDesc: {
            en: "Tilila is a comprehensive web platform supporting media representation initiatives. It includes Tilila Awards for recognizing campaigns that evolve representations, Tililab for mentoring tomorrow’s storytelling talents, and a searchable Expertes directory for journalists and collaborators. Built with Laravel, Inertia, and React for a seamless, multilingual experience.",
            fr: "Tilila est une plateforme web complète au service des initiatives de représentation dans les médias. Elle comprend Tilila Awards pour récompenser les campagnes qui font évoluer les représentations, Tililab pour accompagner les talents du storytelling de demain, et un annuaire Expertes consultable pour les journalistes et collaborateurs. Développée avec Laravel, Inertia et React pour une expérience fluide et multilingue."
        },
        techs: [
            { name: 'Laravel', color: 'bg-[#ff2d20]' },
            { name: 'Inertia', color: 'bg-[#3b4654]' },
            { name: 'React', color: 'bg-[#00d8ff]' },
            { name: 'TypeScript', color: 'bg-[#3178c6] text-white' },
            { name: 'Tailwind', color: 'bg-[#38bdf8]' },
        ],
        client: 'Tilila / 2M',
        clientWebsite: 'https://tilila.org/',
        preview: tililaPreview,
        timeline: {
            en: "2025 - 2026 (Team project with LionsGeek)",
            fr: "2025 - 2026 (Projet d’équipe avec LionsGeek)"
        },
        challenges: [
            { en: "Unifying Awards, Tililab, and Expertes into one coherent platform", fr: "Unifier Awards, Tililab et Expertes dans une plateforme cohérente" },
            { en: "Building searchable expert directories with multi-criteria filters", fr: "Construire des annuaires d’expertes recherchables avec filtres multi-critères" },
            { en: "Supporting bilingual content and distinct program workflows", fr: "Gérer le contenu bilingue et des flux métier distincts par programme" }
        ],
        solutions: [
            { en: "Modular Laravel + Inertia architecture with shared UI components", fr: "Architecture Laravel + Inertia modulaire avec composants UI partagés" },
            { en: "Filterable Expertes directory by region, country, city, and languages", fr: "Annuaire Expertes filtrable par région, pays, ville et langues" },
            { en: "Dedicated program pages with registration and application flows", fr: "Pages dédiées par programme avec flux d’inscription et de candidature" }
        ],
        keyFeatures: [
            { en: "Tilila Awards registration and program presentation", fr: "Inscription et présentation du programme Tilila Awards" },
            { en: "Tililab candidacy and talent mentoring flows", fr: "Candidatures Tililab et parcours d’accompagnement des talents" },
            { en: "Expertes directory with search and advanced filters", fr: "Annuaire Expertes avec recherche et filtres avancés" },
            { en: "Journalist and expert access pathways", fr: "Parcours d’accès journaliste et experte" },
            { en: "Multilingual French / English interface", fr: "Interface multilingue français / anglais" }
        ],
        lessonsLearned: [
            { en: "Designing multi-program platforms with clear user journeys", fr: "Concevoir des plateformes multi-programmes avec des parcours utilisateurs clairs" },
            { en: "Collaborating in a team on a production Laravel + React stack", fr: "Collaborer en équipe sur une stack Laravel + React en production" },
            { en: "Building accessible directories for media professionals", fr: "Construire des annuaires accessibles pour les professionnels des médias" }
        ],
        futureImprovements: [
            { en: "Expanded analytics for Awards and Tililab impact", fr: "Analyses élargies de l’impact Awards et Tililab" },
            { en: "Richer expert profiles and collaboration tools", fr: "Profils d’expertes enrichis et outils de collaboration" }
        ],
        additionalImages: [tilila2, tilila3, tilila4]
    },
    {
        id: 10,
        name: 'MyLionsGeek',
        website: 'https://mylionsgeek.ma/',
        desc: {
            en: "The internal community and operations platform for LionsGeek. MyLionsGeek combines a social feed, jobs, leaderboards, messaging, and studio/cowork reservations — plus an admin dashboard to manage members, equipment, and bookings.",
            fr: "La plateforme interne de communauté et d’opérations de LionsGeek. MyLionsGeek réunit un fil d’actualité, des offres d’emploi, un classement, la messagerie et les réservations de studios/cowork — ainsi qu’un tableau de bord admin pour gérer membres, équipements et réservations."
        },
        detailedDesc: {
            en: "MyLionsGeek is a full-stack hub for LionsGeek students and staff. Members interact through posts, profiles, and real-time messaging; book studios and cowork spaces; track engagement via leaderboards; and browse jobs. Admins get a 360° overview of users, reservations, computers, and equipment. Built with Laravel, Inertia, and React.",
            fr: "MyLionsGeek est un hub fullstack pour les étudiants et le staff LionsGeek. Les membres interagissent via posts, profils et messagerie ; réservent studios et espaces cowork ; suivent l’engagement via le classement ; et consultent les offres. Les admins disposent d’une vue 360° sur utilisateurs, réservations, ordinateurs et équipements. Développé avec Laravel, Inertia et React."
        },
        techs: [
            { name: 'Laravel', color: 'bg-[#ff2d20]' },
            { name: 'Inertia', color: 'bg-[#3b4654]' },
            { name: 'React', color: 'bg-[#00d8ff]' },
            { name: 'TypeScript', color: 'bg-[#3178c6] text-white' },
            { name: 'Tailwind', color: 'bg-[#38bdf8]' },
        ],
        client: 'LionsGeek Association',
        clientWebsite: 'https://lionsgeek.ma/',
        preview: mylionsgeekPreview,
        timeline: {
            en: "2024 - Present (Ongoing at LionsGeek)",
            fr: "2024 - Présent (En cours chez LionsGeek)"
        },
        challenges: [
            { en: "Unifying social, booking, and admin workflows in one platform", fr: "Unifier réseaux sociaux, réservations et admin dans une seule plateforme" },
            { en: "Real-time-feel messaging and community engagement features", fr: "Messagerie et fonctionnalités d’engagement communautaire fluides" },
            { en: "Managing studios, cowork tables, and equipment availability", fr: "Gérer la disponibilité des studios, tables cowork et équipements" }
        ],
        solutions: [
            { en: "Modular Laravel + Inertia architecture with role-based access", fr: "Architecture Laravel + Inertia modulaire avec accès basé sur les rôles" },
            { en: "Spaces booking UI with studios/cowork filters and calendars", fr: "UI de réservation Spaces avec filtres studios/cowork et calendriers" },
            { en: "Admin dashboard with live stats for users, gear, and reservations", fr: "Dashboard admin avec stats en direct sur utilisateurs, matériel et réservations" }
        ],
        keyFeatures: [
            { en: "Social feed with posts, likes (Geeked), comments, and reposts", fr: "Fil social avec posts, likes (Geeked), commentaires et reposts" },
            { en: "Spaces & reservations for studios and cowork tables", fr: "Spaces & réservations pour studios et tables cowork" },
            { en: "Leaderboard and member engagement tracking", fr: "Classement et suivi de l’engagement des membres" },
            { en: "Direct messaging between members", fr: "Messagerie directe entre membres" },
            { en: "Admin 360° overview of members, computers, and equipment", fr: "Vue admin 360° sur membres, ordinateurs et équipements" },
            { en: "Jobs board and member profiles", fr: "Espace Jobs et profils membres" }
        ],
        lessonsLearned: [
            { en: "Building internal tools that serve both community and operations", fr: "Construire des outils internes pour la communauté et les opérations" },
            { en: "Role-based UX for students vs administrators", fr: "UX basée sur les rôles étudiants vs administrateurs" },
            { en: "Scaling a reservation system alongside social features", fr: "Faire évoluer un système de réservation avec des fonctionnalités sociales" }
        ],
        futureImprovements: [
            { en: "Deeper mobile parity with the LionsGeek app", fr: "Meilleure parité mobile avec l’app LionsGeek" },
            { en: "Smarter equipment analytics and booking insights", fr: "Analyses équipements et insights de réservation plus poussés" }
        ],
        additionalImages: [mylionsgeek2, mylionsgeek3, mylionsgeek4, mylionsgeek5, mylionsgeek6]
    },
    {
        id: 11,
        name: 'LionsGeek',
        website: 'https://lionsgeek.ma/',
        desc: {
            en: "The public website for LionsGeek, a non-profit empowering young Moroccans with free digital skills. It presents training programs, events & hackathons, coworking, and LionsGeek Pro services — with multilingual support and dark mode.",
            fr: "Le site public de LionsGeek, une association qui forme gratuitement les jeunes Marocains aux compétences numériques. Il présente les formations, événements & hackathons, le coworking et les services LionsGeek Pro — avec support multilingue et mode sombre."
        },
        detailedDesc: {
            en: "LionsGeek.ma is the association’s main digital gateway: storytelling about the mission, 6-month Full Stack and Digital Content Creator programs, upcoming events and hackathon registration, coworking info, and Pro services (web development, audiovisual production, and more). Built with Laravel, Inertia, and React for a polished bilingual experience.",
            fr: "LionsGeek.ma est la vitrine digitale de l’association : présentation de la mission, programmes Full Stack et Digital Content Creator de 6 mois, événements et inscriptions aux hackathons, coworking, et services Pro (développement web, production audiovisuelle, etc.). Développé avec Laravel, Inertia et React pour une expérience bilingue soignée."
        },
        techs: [
            { name: 'Laravel', color: 'bg-[#ff2d20]' },
            { name: 'Inertia', color: 'bg-[#3b4654]' },
            { name: 'React', color: 'bg-[#00d8ff]' },
            { name: 'Tailwind', color: 'bg-[#38bdf8]' },
        ],
        client: 'LionsGeek Association',
        clientWebsite: 'https://lionsgeek.ma/',
        preview: lionsgeekPreview,
        timeline: {
            en: "2024 - Present (Ongoing at LionsGeek)",
            fr: "2024 - Présent (En cours chez LionsGeek)"
        },
        challenges: [
            { en: "Presenting programs, events, and Pro services in one clear journey", fr: "Présenter formations, événements et services Pro dans un parcours clair" },
            { en: "Multilingual content (EN / FR / AR) with consistent branding", fr: "Contenu multilingue (EN / FR / AR) avec une identité visuelle cohérente" },
            { en: "Event and hackathon registration flows with real availability", fr: "Flux d’inscription événements/hackathons avec disponibilités réelles" }
        ],
        solutions: [
            { en: "Sectioned marketing site with dedicated Training, Events, and Pro pages", fr: "Site marketing structuré avec pages Training, Events et Pro dédiées" },
            { en: "Shared TransText / i18n patterns across pages", fr: "Patterns TransText / i18n partagés sur les pages" },
            { en: "Event cards with filters, spots left, and registration CTAs", fr: "Cartes d’événements avec filtres, places restantes et CTA d’inscription" }
        ],
        keyFeatures: [
            { en: "Hero landing with pillars: Training, Co-working, Events", fr: "Landing hero avec piliers : Training, Co-working, Events" },
            { en: "6-month Full Stack & Digital Content Creator programs", fr: "Programmes Full Stack & Digital Content Creator de 6 mois" },
            { en: "Events & hackathons listing with registration", fr: "Liste événements & hackathons avec inscription" },
            { en: "LionsGeek Pro services showcase", fr: "Vitrine des services LionsGeek Pro" },
            { en: "Dark / light mode and language switcher", fr: "Mode sombre / clair et sélecteur de langue" }
        ],
        lessonsLearned: [
            { en: "Designing an association brand site that converts visitors into applicants", fr: "Concevoir un site d’association qui convertit les visiteurs en candidats" },
            { en: "Balancing storytelling with operational registration flows", fr: "Équilibrer storytelling et flux d’inscription opérationnels" },
            { en: "Maintaining yellow/black brand identity across light and dark themes", fr: "Maintenir l’identité jaune/noir en thèmes clair et sombre" }
        ],
        futureImprovements: [
            { en: "Richer alumni / success-story storytelling", fr: "Storytelling alumni / success stories enrichi" },
            { en: "Tighter sync with MyLionsGeek for applicant pipelines", fr: "Sync plus étroite avec MyLionsGeek pour les pipelines candidats" }
        ],
        additionalImages: [lionsgeek2, lionsgeek3, lionsgeek4, lionsgeek5, lionsgeek6]
    },
    {
        id: 12,
        name: 'LionsGeek Mobile',
        website: '',
        appStore: 'https://apps.apple.com/us/app/lionsgeek/id6759228520',
        playStore: 'https://play.google.com/store/apps/details?id=com.lionsgeek_pro.lionsgeek',
        desc: {
            en: "The official LionsGeek companion app for iOS and Android — social feed, messaging, studio/cowork reservations, events with QR check-in, and member profiles. Built with React Native and Expo so the community stays connected on the go.",
            fr: "L’application officielle LionsGeek pour iOS et Android — fil d’actualité, messagerie, réservations studios/cowork, événements avec check-in QR, et profils membres. Développée avec React Native et Expo pour garder la communauté connectée en mobilité."
        },
        detailedDesc: {
            en: "LionsGeek Mobile brings the full community platform to phones: Stories and posts, real-time chat and calls, calendar booking for studios and cowork spaces, events & info sessions with staff QR scanning, and profiles with gamification. Available on the App Store and Google Play.",
            fr: "LionsGeek Mobile porte toute la plateforme communauté sur mobile : Stories et posts, chat et appels en temps réel, réservation calendrier des studios et espaces cowork, événements & infosessions avec scan QR pour le staff, et profils avec gamification. Disponible sur l’App Store et Google Play."
        },
        techs: [
            { name: 'React Native', color: 'bg-[#00d8ff]' },
            { name: 'Expo', color: 'bg-white text-black' },
            { name: 'NativeWind', color: 'bg-[#38bdf8]' },
            { name: 'TypeScript', color: 'bg-[#3178c6] text-white' },
        ],
        client: 'LionsGeek Association',
        clientWebsite: 'https://lionsgeek.ma/',
        preview: lgmobilePreview,
        timeline: {
            en: "2025 - Present (Team project with LionsGeek)",
            fr: "2025 - Présent (Projet d’équipe avec LionsGeek)"
        },
        challenges: [
            { en: "Parity with the web platform across social, booking, and events", fr: "Parité avec le web pour le social, les réservations et les événements" },
            { en: "Cross-platform booking UX with calendars and time-slot dragging", fr: "UX de réservation multiplateforme avec calendriers et créneaux glissables" },
            { en: "Staff tools for QR check-in and event participant management", fr: "Outils staff pour check-in QR et gestion des participants aux événements" }
        ],
        solutions: [
            { en: "Expo + React Native shared codebase for iOS and Android", fr: "Codebase partagée Expo + React Native pour iOS et Android" },
            { en: "Native calendars and interactive schedule booking flows", fr: "Calendriers natifs et flux de réservation interactifs" },
            { en: "Camera-based QR scanning with role-aware staff features", fr: "Scan QR via caméra avec fonctionnalités staff selon les rôles" }
        ],
        keyFeatures: [
            { en: "Community feed with Stories, posts, and engagements", fr: "Fil communautaire avec Stories, posts et interactions" },
            { en: "Messaging with calls support", fr: "Messagerie avec support d’appels" },
            { en: "Studio & cowork reservations with availability calendar", fr: "Réservations studios & cowork avec calendrier de disponibilités" },
            { en: "Events & info sessions with QR participant check-in", fr: "Événements & infosessions avec check-in QR des participants" },
            { en: "Profiles, settings, and Coding Mode dark theme", fr: "Profils, paramètres et mode Coding (thème sombre)" }
        ],
        lessonsLearned: [
            { en: "Shipping a production Expo app to both App Store and Play Store", fr: "Publier une app Expo en production sur App Store et Play Store" },
            { en: "Designing mobile-first booking and social UX", fr: "Concevoir une UX mobile-first pour réservations et social" },
            { en: "Role-based features for students, coaches, and staff", fr: "Fonctionnalités basées sur les rôles étudiants, coachs et staff" }
        ],
        futureImprovements: [
            { en: "Deeper offline support for reservations and feed", fr: "Support hors ligne plus poussé pour réservations et fil" },
            { en: "Richer push notification preferences", fr: "Préférences de notifications push plus riches" }
        ],
        additionalImages: [lgmobile2, lgmobile3, lgmobile4, lgmobile5]
    },
    {
        id: 13,
        name: 'ISRAR',
        website: 'https://israr.ma/',
        desc: {
            en: "Digital platform for Coalition ISRAR — a national network of 19 associations across 8 Moroccan regions fighting gender-based violence. Listening, support, advocacy, programs, and legal-aid pathways in French and Arabic.",
            fr: "Plateforme numérique de la Coalition ISRAR — un réseau national de 19 associations dans 8 régions du Maroc contre les violences fondées sur le genre. Écoute, accompagnement, plaidoyer, programmes et aide juridique en français et en arabe."
        },
        detailedDesc: {
            en: "Built with Laravel, Inertia, and React for Coalition ISRAR’s 2025 digital platform: public storytelling, program impact by region, publications, petitions, blog, and a clear “Je cherche de l’aide” help journey for women seeking support.",
            fr: "Développée avec Laravel, Inertia et React pour la plateforme numérique 2025 de la Coalition ISRAR : storytelling public, impact des programmes par région, publications, pétitions, blog, et un parcours clair « Je cherche de l’aide » pour les femmes en quête de soutien."
        },
        techs: [
            { name: 'Laravel', color: 'bg-[#ff2d20]' },
            { name: 'Inertia', color: 'bg-[#3b4654]' },
            { name: 'React', color: 'bg-[#00d8ff]' },
            { name: 'Tailwind', color: 'bg-[#38bdf8]' },
        ],
        client: 'Coalition ISRAR',
        clientWebsite: 'https://israr.ma/',
        preview: israrPreview,
        timeline: {
            en: "2025 (Digital platform launch)",
            fr: "2025 (Lancement de la plateforme numérique)"
        },
        challenges: [
            { en: "Serving survivors and associations with sensitive help-seeking flows", fr: "Servir les survivantes et associations avec des parcours d’aide sensibles" },
            { en: "Showcasing programs and regional impact for a 19-association network", fr: "Présenter programmes et impact régional pour un réseau de 19 associations" },
            { en: "Bilingual French / Arabic institutional content", fr: "Contenu institutionnel bilingue français / arabe" }
        ],
        solutions: [
            { en: "Clear public IA with Accueil, Programmes, Aide juridique, and help CTA", fr: "IA publique claire avec Accueil, Programmes, Aide juridique et CTA d’aide" },
            { en: "Program cards with status filters and regional impact storytelling", fr: "Cartes programmes avec filtres de statut et storytelling d’impact régional" },
            { en: "Laravel + Inertia + React stack for maintainable bilingual pages", fr: "Stack Laravel + Inertia + React pour des pages bilingues maintenables" }
        ],
        keyFeatures: [
            { en: "Coalition presentation and timeline (SaMMa, digital platform)", fr: "Présentation de la coalition et parcours (SaMMa, plateforme numérique)" },
            { en: "Programs directory with ongoing / closed filters", fr: "Annuaire des programmes avec filtres en cours / clôturés" },
            { en: "Help-seeking CTA and legal-aid pathways", fr: "CTA « Je cherche de l’aide » et parcours d’aide juridique" },
            { en: "Publications, blog, and petitions sections", fr: "Sections publications, blog et pétitions" },
            { en: "French / Arabic language support", fr: "Support français / arabe" }
        ],
        lessonsLearned: [
            { en: "Designing civic platforms around safety and trust", fr: "Concevoir des plateformes civiques autour de la sécurité et de la confiance" },
            { en: "Balancing advocacy storytelling with operational program data", fr: "Équilibrer storytelling de plaidoyer et données opérationnelles des programmes" },
            { en: "Building for multi-association networks at national scale", fr: "Construire pour des réseaux multi-associations à l’échelle nationale" }
        ],
        futureImprovements: [
            { en: "Richer member-association dashboards", fr: "Tableaux de bord associations membres plus riches" },
            { en: "Deeper impact analytics by region and program", fr: "Analyses d’impact plus poussées par région et programme" }
        ],
        additionalImages: [israr2, israr3]
    },
    {
        id: 1,
        name: 'A1 Atelier',
        website: 'https://a1.mylionsgeek.ma/',
        desc: {
            en: "We collaborated with A1 Atelier, an architecture company, to build a modern platform that streamlines project management, client meetings, and resource scheduling. Leveraging Laravel, Inertia, and Tailwind, we created a system that improves both internal workflows and client communication.",
            fr: "Nous avons collaboré avec A1 Atelier, une entreprise d’architecture, pour développer une plateforme moderne qui rationalise la gestion de projets, les réunions clients et la planification des ressources. En tirant parti de Laravel, Inertia et Tailwind, nous avons conçu un système qui améliore à la fois les flux de travail internes et la communication avec les clients."
        },
        detailedDesc: {
            en: "A robust project management solution tailored for A1 Atelier’s architectural workflows. The system simplifies scheduling, centralizes project timelines, and provides tools for client collaboration, all while offering a clean and intuitive user interface.",
            fr: "Une solution de gestion de projet robuste adaptée aux flux de travail architecturaux de A1 Atelier. Le système simplifie la planification, centralise les échéances des projets et fournit des outils de collaboration avec les clients, tout en offrant une interface utilisateur claire et intuitive."
        },
        techs: [
            { name: 'Laravel', color: 'bg-[#ff2d20]' },
            { name: 'Inertia', color: 'bg-[#3b4654]' },
            { name: 'Tailwind', color: 'bg-[#38bdf8]' },
        ],
        client: 'A1 Atelier',
        clientWebsite: 'https://a1atelier.ma/', // replace with real if available
        preview: lionsPreview,
        timeline: {
            en: "4 months (January 2024 - April 2024)",
            fr: "4 mois (Janvier 2024 - Avril 2024)"
        },
        challenges: [
            { en: "Coordinating multiple architectural projects with shared resources", fr: "Coordination de plusieurs projets architecturaux avec des ressources partagées" },
            { en: "Managing client meeting schedules alongside project deadlines", fr: "Gestion des rendez-vous clients en parallèle des échéances des projets" },
            { en: "Ensuring secure access for different user roles (architects, clients, contractors)", fr: "Assurer un accès sécurisé pour différents rôles utilisateurs (architectes, clients, entrepreneurs)" }
        ],
        solutions: [
            { en: "Implemented centralized scheduling with Laravel & FullCalendar integration", fr: "Mise en place d’une planification centralisée avec intégration Laravel & FullCalendar" },
            { en: "Used Inertia to provide a seamless SPA-like client dashboard", fr: "Utilisation d’Inertia pour offrir un tableau de bord fluide de type SPA" },
            { en: "Designed responsive UI with Tailwind for architects and clients", fr: "Conception d’une interface utilisateur réactive avec Tailwind pour les architectes et les clients" }
        ],
        keyFeatures: [
            { en: "Project timeline and milestone tracking", fr: "Suivi des échéances et jalons de projets" },
            { en: "Resource and equipment scheduling", fr: "Planification des ressources et équipements" },
            { en: "Client meeting coordination", fr: "Coordination des rendez-vous clients" },
            { en: "Automated progress reports", fr: "Rapports d’avancement automatisés" },
            { en: "Analytics for project performance", fr: "Analyses des performances des projets" }
        ],
        lessonsLearned: [
            { en: "Best practices for integrating Inertia with Laravel", fr: "Meilleures pratiques pour intégrer Inertia avec Laravel" },
            { en: "Scalable architectural project scheduling", fr: "Planification évolutive des projets architecturaux" },
            { en: "UI/UX design tailored for professional firms", fr: "Conception UI/UX adaptée aux entreprises professionnelles" }
        ],
        futureImprovements: [
            { en: "3D model integration for project previews", fr: "Intégration de modèles 3D pour les aperçus de projets" },
            { en: "Mobile app for on-site project updates", fr: "Application mobile pour les mises à jour de projet sur site" },
            { en: "Enhanced client collaboration tools", fr: "Outils de collaboration client améliorés" }
        ],
        additionalImages: [lions1, lions2, lions3]
    },

    {
        id: 2,
        name: 'Casatourat',
        website: 'http://casatourat.ma/',
        desc: {
            en: "A mobile application built with React Native and Expo for the Casa Memoire association, designed to showcase the rich history of Casablanca. This project provided invaluable experience in mobile app development, user interface design, and a deeper understanding of the differences and requirements between Android and iOS platforms",
            fr: "Une application mobile développée avec React Native et Expo pour l’association Casa Mémoire, conçue pour mettre en valeur la riche histoire de Casablanca. Ce projet a offert une expérience précieuse en développement mobile, en design d’interface utilisateur, ainsi qu’une meilleure compréhension des différences et exigences entre les plateformes Android et iOS."
        },
        detailedDesc: {
            en: "An immersive mobile experience that brings Casablanca's rich history to life through interactive tours, historical content, and location-based features. Built for Casa Memoire association to promote cultural heritage.",
            fr: "Une expérience mobile immersive qui donne vie à la riche histoire de Casablanca à travers des visites interactives, du contenu historique et des fonctionnalités basées sur la géolocalisation. Développée pour l’association Casa Mémoire afin de promouvoir le patrimoine culturel."
        },
        techs: [
            { name: 'React Native', color: 'bg-[#00d8ff]' },
            { name: 'Expo', color: 'bg-white' },
            { name: 'Laravel', color: 'bg-[#ff2d20] text-white' },
        ],
        client: 'Casamemoire',
        clientWebsite: 'https://casamemoire.org',
        preview: casaPreview,
        timeline: {
            en: "6 months (June 2024 - December 2024)",
            fr: "6 mois (Juin 2024 - December 2024)"
        },
        challenges: [
            { en: "Cross-platform mobile development", fr: "Développement mobile multiplateforme" },
            { en: "GPS integration and location services", fr: "Intégration GPS et services de localisation" },
            { en: "Guest content accessibility", fr: "Accessibilité du contenu aux visiteurs" }
        ],
        solutions: [
            { en: "Used Expo for streamlined development workflow", fr: "Utilisation d’Expo pour un flux de développement simplifié" },
            { en: "Implemented layout and routes for users and guests", fr: "Implémentation de la navigation et des interfaces pour utilisateurs et visiteurs" },
            { en: "Created responsive design for various screen sizes", fr: "Conception d’un design réactif adapté à différentes tailles d’écran" }
        ],
        keyFeatures: [
            { en: "Interactive historical tours", fr: "Visites historiques interactives" },
            { en: "GPS-based location services", fr: "Services de localisation basés sur le GPS" },
            { en: "Multilingual support", fr: "Support multilingue" },
            { en: "Rich media content display", fr: "Affichage de contenu multimédia riche" },
            { en: "Push notifications", fr: "Notifications push" }
        ],
        lessonsLearned: [
            { en: "Mobile-first development principles", fr: "Principes de développement mobile-first" },
            { en: "Platform-specific UI/UX considerations", fr: "Considérations UI/UX spécifiques à chaque plateforme" },
            { en: "Performance optimization for mobile devices", fr: "Optimisation des performances pour les appareils mobiles" }
        ],
        futureImprovements: [
            { en: "Social sharing capabilities", fr: "Fonctionnalités de partage sur les réseaux sociaux" },
            { en: "User-generated content features", fr: "Fonctionnalités de contenu généré par les utilisateurs" }
        ],
        additionalImages: [casa2, casa3, casa4, casa5]
    },

    {
        id: 3,
        name: 'YES Africa',
        website: 'https://youthempowermentsummit.africa/',
        desc: {
            en: "This is the website for the Foundation Jadara, an NGO dedicated to supporting NEET youth across African countries. The goal of this platform is to connect and highlight various NGO foundations, helping them reach more young people throughout the continent and provide the necessary support for their education, employment, and training.",
            fr: "Il s'agit du site web de la Fondation Jadara, une ONG dédiée au soutien des jeunes NEET (ni en éducation, ni en emploi, ni en formation) à travers les pays africains. Cette plateforme vise à connecter et mettre en valeur diverses fondations, afin de toucher plus de jeunes sur le continent et leur offrir le soutien nécessaire en matière d’éducation, d’emploi et de formation."
        },
        detailedDesc: {
            en: "A comprehensive platform connecting NGOs across Africa to support NEET (Not in Education, Employment, or Training) youth. The platform facilitates collaboration, resource sharing, and program coordination across multiple countries.",
            fr: "Une plateforme complète connectant les ONG à travers l’Afrique pour soutenir les jeunes NEET (ni en éducation, ni en emploi, ni en formation). Elle facilite la collaboration, le partage de ressources et la coordination des programmes dans plusieurs pays."
        },
        techs: [
            { name: 'ReactJS', color: 'bg-[#00d8ff]' },
            { name: 'Tailwind', color: 'bg-[#30b8c7]' },
            { name: 'Laravel', color: 'bg-[#ff2d20] text-white' },
        ],
        client: 'Jadara Foundation',
        clientWebsite: 'https://jadara.foundation/',
        preview: africaPreview,
        timeline: {
            en: "2 months (January 2025 - February 2025)",
            fr: "2 mois (Janvier 2025 - Février 2025)",
        },
        challenges: [
            { en: "Multi-language support for African countries", fr: "Support multilingue pour les pays africains" },
            { en: "Complex data visualization for impact metrics", fr: "Visualisation complexe des données pour les indicateurs d’impact" },
            { en: "Scalable architecture for multiple NGOs", fr: "Architecture évolutive pour plusieurs ONG" }
        ],
        solutions: [
            { en: "Implemented custom component for multiple languages", fr: "Mise en place d’un composant personnalisé pour plusieurs langues" },
            { en: "Built custom dashboard with Chart.js", fr: "Création d’un tableau de bord personnalisé avec Chart.js" },
            { en: "Created modular architecture for easy scaling", fr: "Développement d’une architecture modulaire pour une mise à l’échelle facile" }
        ],
        keyFeatures: [
            { en: "NGO directory and profiles", fr: "Annuaire et profils des ONG" },
            { en: "Program management system", fr: "Système de gestion des programmes" },
            { en: "Impact tracking and reporting", fr: "Suivi et rapport d’impact" },
            { en: "Multi-language support", fr: "Support multilingue" }
        ],
        lessonsLearned: [
            { en: "International web development considerations", fr: "Considérations pour le développement web international" },
            { en: "Complex data visualization techniques", fr: "Techniques de visualisation de données complexes" },
            { en: "Collaborative platform architecture", fr: "Architecture de plateforme collaborative" }
        ],
        futureImprovements: [
            { en: "Mobile application development", fr: "Développement d’une application mobile" },
            { en: "Advanced analytics dashboard", fr: "Tableau de bord d’analytique avancé" }
        ],
        additionalImages: [africa2, africa3, africa4]
    },
    {
        id: 4,
        name: 'Her Day For Her',
        website: 'https://herdayforher.ma/',
        desc: {
            en: "This is the leadership initiative by the Fondation Marocaine de l’Étudiant (FME) aimed at empowering young Moroccan women scholars. The goal is to inspire and support female students through mentorship, soft skills training, and career guidance with the help of accomplished women professionals.",
            fr: "Il s'agit d'une initiative de leadership de la Fondation Marocaine de l’Étudiant (FME), visant à autonomiser les jeunes étudiantes marocaines. Elle a pour objectif d'inspirer et de soutenir les étudiantes grâce à du mentorat, des formations aux compétences non techniques et des conseils d’orientation professionnelle offerts par des femmes professionnelles accomplies."
        },
        detailedDesc: {
            en: "A leadership development program launched by the Fondation Marocaine de l’Étudiant (FME) to equip young Moroccan women—especially scholarship recipients—with the confidence, skills, and networks needed for personal and professional success. Through MasterClasses, mentorship, and outreach events, the initiative connects students with inspiring female role models and promotes gender equality in education and careers.",
            fr: "Un programme de développement du leadership lancé par la Fondation Marocaine de l’Étudiant (FME), visant à doter les jeunes femmes marocaines — notamment les boursières — de la confiance, des compétences et des réseaux nécessaires à leur réussite personnelle et professionnelle. Grâce aux MasterClasses, au mentorat et aux événements de sensibilisation, l’initiative met en relation les étudiantes avec des femmes modèles inspirantes et promeut l’égalité des sexes dans l’éducation et les carrières."
        },
        techs: [
            { name: 'Inertia', color: 'bg-[#00d8ff]' },
            { name: 'Tailwind', color: 'bg-[#30b8c7]' },
        ],
        client: 'Jadara Foundation',
        clientWebsite: 'https://jadara.foundation/',
        preview: herPreview,
        timeline: {
            en: "2 weeks (August 2025)",
            fr: "2 semaines (Août 2025)"
        },
        challenges: [
            { en: "Multi-language support for African countries", fr: "Support multilingue pour les pays africains" },
            { en: "Complex data visualization for impact metrics", fr: "Visualisation complexe des données pour les indicateurs d’impact" },
            { en: "Scalable architecture for multiple NGOs", fr: "Architecture évolutive pour plusieurs ONG" }
        ],
        solutions: [
            { en: "Implemented i18n for multiple languages", fr: "Mise en œuvre de i18n pour plusieurs langues" },
            { en: "Built custom dashboard with Chart.js", fr: "Création d’un tableau de bord personnalisé avec Chart.js" },
            { en: "Created modular architecture for easy scaling", fr: "Développement d’une architecture modulaire pour une mise à l’échelle facile" }
        ],
        keyFeatures: [
            { en: "NGO directory and profiles", fr: "Annuaire et profils des ONG" },
            { en: "Program management system", fr: "Système de gestion des programmes" },
            { en: "Impact tracking and reporting", fr: "Suivi et rapport d’impact" },
            { en: "Multi-language support", fr: "Support multilingue" },
            { en: "Resource sharing platform", fr: "Plateforme de partage de ressources" }
        ],
        lessonsLearned: [
            { en: "International web development considerations", fr: "Considérations pour le développement web international" },
            { en: "Complex data visualization techniques", fr: "Techniques de visualisation de données complexes" },
            { en: "Collaborative platform architecture", fr: "Architecture de plateforme collaborative" }
        ],
        futureImprovements: [
            { en: "Mobile application development", fr: "Développement d’une application mobile" },
            { en: "AI-powered matching system", fr: "Système de mise en relation basé sur l’IA" },
            { en: "Advanced analytics dashboard", fr: "Tableau de bord d’analytique avancé" }
        ],
        additionalImages: [her2, her3]
    },

    {
        id: 5,
        name: 'MOOC Platform',
        website: '',
        desc: {
            en: "A comprehensive Massive Open Online Course (MOOC) platform designed to provide accessible education to learners worldwide. This platform features course management, student enrollment, progress tracking, and interactive learning modules with a modern, user-friendly interface.",
            fr: "Une plateforme complète de cours en ligne ouverts et massifs (MOOC) conçue pour offrir un accès à l'éducation à des apprenants du monde entier. Elle comprend la gestion des cours, l’inscription des étudiants, le suivi des progrès et des modules d’apprentissage interactifs avec une interface moderne et conviviale."
        },
        detailedDesc: {
            en: "An advanced educational platform that democratizes access to quality education through online courses. The platform supports multiple learning formats, assessment tools, and provides detailed analytics for both instructors and students.",
            fr: "Une plateforme éducative avancée qui démocratise l’accès à une éducation de qualité via des cours en ligne. Elle prend en charge plusieurs formats d’apprentissage, propose des outils d’évaluation et fournit des analyses détaillées pour les enseignants comme pour les étudiants."
        },
        techs: [
            { name: 'Laravel', color: 'bg-[#ff2d20] text-white' },
            { name: 'Vue.js', color: 'bg-[#4FC08D] text-white' },
            { name: 'MySQL', color: 'bg-[#4479A1] text-white' },
            { name: 'Tailwind', color: 'bg-[#30b8c7]' },
        ],
        client: 'Educational Institution',
        preview: moocPreview,
        timeline: {
            en: "3 months (Personal project)",
            fr: "3 mois (Projet personnel)"
        },
        challenges: [
            { en: "Scalable video streaming and content delivery", fr: "Diffusion vidéo évolutive et livraison de contenu" },
            { en: "Complex user role management (students, instructors, admins)", fr: "Gestion complexe des rôles utilisateurs (étudiants, enseignants, administrateurs)" },
            { en: "Real-time progress tracking and analytics", fr: "Suivi des progrès et analyses en temps réel" }
        ],
        solutions: [
            { en: "Implemented efficient video streaming with adaptive quality", fr: "Implémentation d’un streaming vidéo efficace avec qualité adaptative" },
            { en: "Built comprehensive role-based access control system", fr: "Création d’un système complet de gestion des accès basé sur les rôles" },
            { en: "Created detailed analytics dashboard with real-time updates", fr: "Création d’un tableau de bord analytique avec mises à jour en temps réel" }
        ],
        keyFeatures: [
            { en: "Course creation and management tools", fr: "Outils de création et de gestion de cours" },
            { en: "Video streaming and content delivery", fr: "Streaming vidéo et diffusion de contenu" },
            { en: "Student progress tracking", fr: "Suivi des progrès des étudiants" },
            { en: "Interactive quizzes and assessments", fr: "Quiz interactifs et évaluations" },
            { en: "Discussion forums and community features", fr: "Forums de discussion et fonctionnalités communautaires" },
            { en: "Certificate generation system", fr: "Système de génération de certificats" }
        ],
        lessonsLearned: [
            { en: "Large-scale application architecture", fr: "Architecture d’application à grande échelle" },
            { en: "Video streaming optimization", fr: "Optimisation du streaming vidéo" },
            { en: "Educational technology best practices", fr: "Bonnes pratiques en technologie éducative" }
        ],
        futureImprovements: [
            { en: "Mobile application development", fr: "Développement d’une application mobile" },
            { en: "AI-powered personalized learning paths", fr: "Parcours d’apprentissage personnalisés basés sur l’IA" },
            { en: "Advanced analytics and reporting", fr: "Analyses et rapports avancés" }
        ],
        additionalImages: [mooc2, mooc3, mooc4, mooc5]
    },
    {
        id: 6,
        name: 'YES Mobile App',
        website: 'https://youthempowermentsummit.africa/',
        desc: {
            en: "The mobile companion app for the YES Africa platform, built with React Native. This app extends the reach of the youth empowerment initiative by providing mobile access to NGO resources, program information, and community features for young people across African countries.",
            fr: "L'application mobile compagnon de la plateforme YES Africa, développée avec React Native. Elle étend la portée de l’initiative d’autonomisation des jeunes en offrant un accès mobile aux ressources des ONG, aux informations sur les programmes et aux fonctionnalités communautaires pour les jeunes à travers les pays africains."
        },
        detailedDesc: {
            en: "A mobile application that brings the YES Africa platform to smartphones, making youth empowerment resources more accessible across the continent. Features offline capabilities, push notifications, and location-based services to connect young people with nearby opportunities.",
            fr: "Une application mobile qui rend la plateforme YES Africa accessible sur smartphone, facilitant l’accès aux ressources d’autonomisation des jeunes à l’échelle du continent. Elle offre des fonctionnalités hors ligne, des notifications push et des services basés sur la localisation pour connecter les jeunes aux opportunités proches."
        },
        techs: [
            { name: 'React Native', color: 'bg-[#00d8ff]' },
            { name: 'Expo', color: 'bg-white text-black' },
            { name: 'Firebase', color: "bg-alpha text-white" },
            { name: 'Redux', color: 'bg-[#764ABC] text-white' },
        ],
        preview: yesmobilePreview,
        timeline: {
            en: "3 months (Personal project)",
            fr: "3 mois (Projet personnel)"
        },
        challenges: [
            { en: "Cross-platform mobile development for diverse African markets", fr: "Développement mobile multiplateforme pour divers marchés africains" },
            { en: "Offline functionality for areas with limited connectivity", fr: "Fonctionnalité hors ligne pour les zones à connectivité limitée" },
            { en: "Multi-language support for various African languages", fr: "Support multilingue pour différentes langues africaines" }
        ],
        solutions: [
            { en: "Used React Native with Expo for efficient cross-platform development", fr: "Utilisation de React Native avec Expo pour un développement multiplateforme efficace" },
            { en: "Implemented offline-first architecture with local data caching", fr: "Mise en place d’une architecture hors ligne avec mise en cache locale des données" },
            { en: "Created flexible internationalization system", fr: "Création d’un système d’internationalisation flexible" }
        ],
        keyFeatures: [
            { en: "NGO directory with location-based search", fr: "Annuaire des ONG avec recherche basée sur la localisation" },
            { en: "Program enrollment and tracking", fr: "Inscription et suivi des programmes" },
            { en: "Offline content access", fr: "Accès au contenu hors ligne" },
            { en: "Push notifications for opportunities", fr: "Notifications push pour les opportunités" },
            { en: "Multi-language support", fr: "Support multilingue" },
            { en: "Community messaging features", fr: "Fonctionnalités de messagerie communautaire" }
        ],
        lessonsLearned: [
            { en: "Mobile-first development for emerging markets", fr: "Développement mobile-first pour les marchés émergents" },
            { en: "Offline-first application architecture", fr: "Architecture d’application hors ligne par défaut" },
            { en: "Cross-cultural mobile UX design", fr: "Conception UX mobile interculturelle" }
        ],
        futureImprovements: [
            { en: "Voice interface for accessibility", fr: "Interface vocale pour l’accessibilité" },
            { en: "AI-powered opportunity matching", fr: "Correspondance des opportunités basée sur l’IA" },
            { en: "Blockchain-based achievement verification", fr: "Vérification des réalisations via la blockchain" }
        ],
        additionalImages: [yesmobile2, yesmobile3, yesmobile4, yesmobile5]
    },

    // ClickTee hidden for now
    /*
    {
    id: 7,
    name: 'ClickTee',
    website: 'https://clicktee.ma/',
    desc: {
        en: "ClickTee is an online store dedicated to unique, artist-designed T-shirts. Our goal was to create a smooth and engaging shopping experience where customers can easily explore collections, preview designs, and securely place orders.",
        fr: "ClickTee est une boutique en ligne dédiée aux T-shirts uniques conçus par des artistes. Notre objectif était de créer une expérience d’achat fluide et engageante, permettant aux clients d’explorer facilement les collections, d’apercevoir les designs et de passer des commandes en toute sécurité."
    },
    detailedDesc: {
        en: "ClickTee provides a platform for independent artists to showcase their creativity through T-shirt designs. We built a fast and responsive e-commerce system that highlights artwork while ensuring intuitive browsing and checkout. The platform supports promotions, customer accounts, and dynamic product filtering.",
        fr: "ClickTee offre une plateforme permettant aux artistes indépendants de mettre en valeur leur créativité à travers des designs de T-shirts. Nous avons développé un système e-commerce rapide et réactif qui met en avant les œuvres tout en assurant une navigation et un paiement intuitifs. La plateforme prend en charge les promotions, les comptes clients et le filtrage dynamique des produits."
    },
    techs: [
        { name: 'Laravel', color: 'bg-[#ff2d20]' },
        { name: 'Inertia', color: 'bg-[#3b4654]' },
        { name: 'Tailwind', color: 'bg-[#38bdf8]' },
    ],
    client: 'ClickTee',
    clientWebsite: 'https://clicktee.ma/',
    preview: clickteePreview,
    timeline: {
        en: "3 months (May 2024 - July 2024)",
        fr: "3 mois (Mai 2024 - Juillet 2024)"
    },
    challenges: [
        { en: "Showcasing unique T-shirt designs without overwhelming users", fr: "Mettre en valeur les designs uniques de T-shirts sans surcharger les utilisateurs" },
        { en: "Implementing secure and user-friendly checkout", fr: "Mise en place d’un processus de paiement sécurisé et convivial" },
        { en: "Ensuring responsive design across devices", fr: "Assurer un design réactif sur tous les appareils" }
    ],
    solutions: [
        { en: "Grid-based product display with filtering and search", fr: "Affichage des produits en grille avec filtrage et recherche" },
        { en: "Integrated payment gateway with Laravel cashier", fr: "Intégration d’une passerelle de paiement avec Laravel cashier" },
        { en: "Tailwind-based responsive UI optimized for mobile shopping", fr: "UI réactive basée sur Tailwind, optimisée pour les achats mobiles" }
    ],
    keyFeatures: [
        { en: "Artist-driven T-shirt collections", fr: "Collections de T-shirts conçus par des artistes" },
        { en: "Product previews with zoom & detail views", fr: "Aperçus des produits avec zoom et vues détaillées" },
        { en: "Shopping cart & secure checkout", fr: "Panier et paiement sécurisé" },
        { en: "Customer accounts with order history", fr: "Comptes clients avec historique des commandes" },
        { en: "Discount codes and promotions", fr: "Codes de réduction et promotions" }
    ],
    lessonsLearned: [
        { en: "Balancing aesthetics with performance in e-commerce", fr: "Équilibrer l’esthétique et les performances dans l’e-commerce" },
        { en: "Best practices for integrating payment systems", fr: "Meilleures pratiques pour intégrer des systèmes de paiement" },
        { en: "Designing for both desktop and mobile users", fr: "Concevoir pour les utilisateurs desktop et mobiles" }
    ],
    futureImprovements: [
        { en: "Artist dashboard for uploading designs", fr: "Tableau de bord artiste pour téléverser des designs" },
        { en: "AI-powered product recommendations", fr: "Recommandations de produits basées sur l’IA" },
        { en: "Integration with print-on-demand services", fr: "Intégration avec des services d’impression à la demande" }
    ],
    additionalImages: [clicktee1, clicktee2, clicktee3]
    },
    */

    {
    id: 8,
    name: 'SONOTIC',
    website: 'https://sonotic.ma/',
    desc: {
        en: "SONOTIC is Morocco's trusted partner for over 25 years, providing industrial and food-grade pipes for water supply, sanitation, irrigation, and industrial infrastructure. We built a modern, responsive website showcasing their comprehensive range of materials including PVC, HDPE, steel, and concrete, all meeting the strictest international and Moroccan standards.",
        fr: "SONOTIC est le partenaire de confiance du Maroc depuis plus de 25 ans, fournissant des tuyaux industriels et alimentaires pour l'approvisionnement en eau, l'assainissement, l'irrigation et les infrastructures industrielles. Nous avons développé un site web moderne et réactif mettant en valeur leur large gamme de matériaux incluant PVC, HDPE, acier et béton, tous conformes aux normes internationales et marocaines les plus strictes."
    },
    detailedDesc: {
        en: "A professional corporate website for SONOTIC, a leading supplier of industrial and food-grade pipes in Morocco. The platform highlights their 25+ years of expertise, showcasing their diverse product range including PVC, HDPE, steel, and concrete pipes. Built with modern web technologies to ensure fast performance, excellent user experience, and mobile responsiveness.",
        fr: "Un site web d'entreprise professionnel pour SONOTIC, un fournisseur leader de tuyaux industriels et alimentaires au Maroc. La plateforme met en valeur leurs plus de 25 ans d'expertise, présentant leur gamme diversifiée de produits incluant des tuyaux en PVC, HDPE, acier et béton. Développé avec des technologies web modernes pour assurer des performances rapides, une excellente expérience utilisateur et une réactivité mobile."
    },
    techs: [
        { name: 'React', color: 'bg-[#00d8ff]' },
        { name: 'Vite', color: 'bg-[#646cff]' },
        { name: 'Tailwind CSS', color: 'bg-[#38bdf8]' },
    ],
    client: 'SONOTIC',
    clientWebsite: 'https://sonotic.ma/',
    preview: sonoticPreview,
    timeline: {
        en: "2 months (Project timeline)",
        fr: "2 mois (Durée du projet)"
    },
    challenges: [
        { en: "Showcasing technical product specifications in an accessible way", fr: "Présenter les spécifications techniques des produits de manière accessible" },
        { en: "Creating a professional corporate image while maintaining usability", fr: "Créer une image d'entreprise professionnelle tout en maintenant la facilité d'utilisation" },
        { en: "Ensuring responsive design for various devices and screen sizes", fr: "Assurer un design réactif pour divers appareils et tailles d'écran" }
    ],
    solutions: [
        { en: "Designed intuitive product catalog with clear categorization", fr: "Conception d'un catalogue de produits intuitif avec catégorisation claire" },
        { en: "Implemented modern UI with Tailwind CSS for professional aesthetics", fr: "Mise en œuvre d'une interface moderne avec Tailwind CSS pour une esthétique professionnelle" },
        { en: "Built fast, responsive website using React and Vite for optimal performance", fr: "Développement d'un site web rapide et réactif utilisant React et Vite pour des performances optimales" }
    ],
    keyFeatures: [
        { en: "Product catalog showcasing PVC, HDPE, steel, and concrete pipes", fr: "Catalogue de produits présentant des tuyaux en PVC, HDPE, acier et béton" },
        { en: "Company history and expertise presentation", fr: "Présentation de l'histoire et de l'expertise de l'entreprise" },
        { en: "Responsive design for all devices", fr: "Design réactif pour tous les appareils" },
        { en: "Contact and inquiry forms", fr: "Formulaires de contact et de demande" },
        { en: "Fast loading times and optimized performance", fr: "Temps de chargement rapides et performances optimisées" }
    ],
    lessonsLearned: [
        { en: "Best practices for corporate website development", fr: "Meilleures pratiques pour le développement de sites web d'entreprise" },
        { en: "Balancing technical content with user-friendly presentation", fr: "Équilibrer le contenu technique avec une présentation conviviale" },
        { en: "Optimizing React applications with Vite for production", fr: "Optimisation des applications React avec Vite pour la production" }
    ],
    futureImprovements: [
        { en: "Product configurator tool for custom pipe specifications", fr: "Outil de configuration de produits pour des spécifications de tuyaux personnalisées" },
        { en: "Multi-language support (Arabic, French, English)", fr: "Support multilingue (Arabe, Français, Anglais)" },
        { en: "Integration with CRM for lead management", fr: "Intégration avec un CRM pour la gestion des prospects" }
    ],
    additionalImages: [sonotic1, sonotic2, sonotic3]
    }

];

export const persoProjects: Project[] = [

    



];



