import { proProjects } from './projects'

// Portfolio owner's selected lead projects, in presentation order.
export const featuredProjects = ['MyLionsGeek', 'Tilila', 'LionsGeek Mobile']
  .map(name => proProjects.find(project => project.name === name))
  .filter((project): project is Project => Boolean(project))

export const orderedProjects = [
  ...featuredProjects,
  ...proProjects.filter(project => !featuredProjects.some(featured => featured.id === project.id)),
]

// Summarized from the existing case-study contribution records, without impact estimates.
export const projectBriefs: Record<string, {
  audience: { en: string; fr: string }
  contribution: { en: string; fr: string }
}> = {
  MyLionsGeek: {
    audience: { en: 'LionsGeek students, coaches, and staff.', fr: 'Les étudiants, coachs et équipes LionsGeek.' },
    contribution: { en: 'Booking calendars, community features, and administration workflows, developed with the LionsGeek team.', fr: 'Calendriers de réservation, fonctions communautaires et parcours d’administration, développés avec l’équipe LionsGeek.' },
  },
  Tilila: {
    audience: { en: 'Media professionals, women experts, and applicants to the Awards and Tililab programs.', fr: 'Professionnels des médias, femmes expertes et candidats aux programmes Awards et Tililab.' },
    contribution: { en: 'Program journeys, directory search and filters, registrations, and multilingual content flows with LionsGeek.', fr: 'Parcours des programmes, recherche et filtres de l’annuaire, inscriptions et contenus multilingues avec LionsGeek.' },
  },
  'LionsGeek Mobile': {
    audience: { en: 'The LionsGeek community on iOS and Android.', fr: 'La communauté LionsGeek sur iOS et Android.' },
    contribution: { en: 'Community feed, messaging, booking calendars, event check-in, and app-store delivery with the LionsGeek team.', fr: 'Fil communautaire, messagerie, calendriers de réservation, check-in événements et publication sur les stores avec l’équipe LionsGeek.' },
  },
}

export const projectFit: Record<string, { en: string; fr: string }> = {
  MyLionsGeek: {
    en: 'Planning a member platform, booking system, or internal dashboard? Let’s discuss the workflows your users need.',
    fr: 'Une plateforme membres, un système de réservation ou un tableau de bord interne ? Parlons des parcours dont vos utilisateurs ont besoin.',
  },
  Tilila: {
    en: 'Bringing several programs, applications, or a searchable directory into one platform? Let’s map out a clear experience.',
    fr: 'Plusieurs programmes, candidatures ou un annuaire à réunir dans une plateforme ? Définissons une expérience claire.',
  },
  'LionsGeek Mobile': {
    en: 'Want to bring your community or existing web product to iOS and Android? Let’s explore the mobile experience and API integration.',
    fr: 'Votre communauté ou produit web sur iOS et Android ? Parlons de l’expérience mobile et de l’intégration de vos API.',
  },
}
