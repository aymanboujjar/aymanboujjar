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

import clickteePreview from "../assets/images/projects/clicktee/Capture d’écran 2025-07-28 152229.png";
import clicktee1 from "../assets/images/projects/clicktee/1.png";
import clicktee2 from "../assets/images/projects/clicktee/2.png";
import clicktee3 from "../assets/images/projects/clicktee/3.png";
export const proProjects: Project[] = [
    {
        id: 1,
        name: 'A1 Atelier',
        github: '',
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
        github: '',
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
        github: '',
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
        github: '',
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
        github: '',
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
        github: 'https://github.com/Osama-Jeb/yesmobile',
        website: '',
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
    
    {
    id: 7,
    name: 'ClickTee',
    github: '',
    website: 'https://clicktee.ma/', // replace with real link if available
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
    clientWebsite: 'https://clicktee.ma/', // replace with real if available
    preview: clickteePreview, // image placeholder
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
    additionalImages: [clicktee1, clicktee2, clicktee3] // placeholders for screenshots
    }

];

export const persoProjects: Project[] = [

    



];



