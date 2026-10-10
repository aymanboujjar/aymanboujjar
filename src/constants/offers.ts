export const offers = [
  {
    id: 'fix', slug: 'laravel-development',
    name: { en: 'Fix & Improve', fr: 'Corriger & améliorer' },
    description: { en: 'Get an existing Laravel or React product moving again: debugging, API issues, security fixes, performance improvements, and maintenance scoped around your priorities.', fr: 'Faites avancer votre produit Laravel ou React : débogage, problèmes d’API, correctifs de sécurité, performance et maintenance selon vos priorités.' },
    evidence: { en: 'Relevant experience: improving an existing platform with the LionsGeek team.', fr: 'Expérience pertinente : évolution d’une plateforme existante avec l’équipe LionsGeek.' },
    projectIds: [10],
  },
  {
    id: 'web', slug: 'full-stack-development',
    name: { en: 'Web & SaaS Development', fr: 'Développement web & SaaS' },
    description: { en: 'Turn business workflows into Laravel and React applications: dashboards, SaaS features, booking flows, and integrations built around the people who use them.', fr: 'Transformez vos processus métier en applications Laravel et React : tableaux de bord, fonctionnalités SaaS, réservations et intégrations adaptées aux utilisateurs.' },
    evidence: { en: 'Related team contributions to administration, bookings, and media platforms.', fr: 'Contributions en équipe à des plateformes d’administration, de réservation et de médias.' },
    projectIds: [10, 9],
  },
  {
    id: 'mobile', slug: 'mobile-app-development',
    name: { en: 'Mobile Development', fr: 'Développement mobile' },
    description: { en: 'Bring your product to iOS and Android with React Native and Expo: new features, debugging, API integration, and app delivery alongside your team.', fr: 'Déployez votre produit sur iOS et Android avec React Native et Expo : fonctionnalités, débogage, intégration d’API et livraison avec votre équipe.' },
    evidence: { en: 'Related team contributions to mobile features and App Store / Google Play delivery.', fr: 'Contributions en équipe aux fonctionnalités mobiles et à la publication sur les stores.' },
    projectIds: [12, 2],
  },
] as const
