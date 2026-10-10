import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../../components/Seo'
import ServiceOffers from '../../components/ServiceOffers'
import CollaborationProcess from '../../components/CollaborationProcess'
import WorkShowcase from '../../components/WorkShowcase'
import { TransText } from '../../components/TransText'
import { useAppContext } from '../../contexts/useAppContext'
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, buildPersonGraph, projectImageAlt } from '../../constants/seo'
import { awardProject } from '../../constants/projects'
import { featuredProjects } from '../../constants/featuredProjects'
import { trusted } from '../../constants/trusted'
import { portfolioFaq } from '../../constants/faq'
import './studio.css'

const selected = featuredProjects
const pathFor = (name: string) => `/project/${name.replace(/\s+/g, '-')}`
const projectSummaries: Record<string, { en: string; fr: string }> = {
  Tilila: { en: 'A media platform bringing awards, mentoring, and a searchable directory of women experts together.', fr: 'Une plateforme média réunissant prix, mentorat et annuaire consultable de femmes expertes.' },
  MyLionsGeek: { en: 'A community hub for members, with social features, messaging, jobs, and studio reservations.', fr: 'Un espace communautaire avec échanges, messagerie, offres d’emploi et réservations de studios.' },
  Casatourat: { en: 'A mobile heritage guide that helps people explore Casablanca through history and location-based tours.', fr: 'Un guide mobile du patrimoine de Casablanca, avec contenus historiques et visites géolocalisées.' },
  'LionsGeek Mobile': { en: 'The LionsGeek community in your pocket, built for members on iOS and Android.', fr: 'La communauté LionsGeek dans votre poche, pour les membres sur iOS et Android.' },
}

export default function Home() {
  const [filter, setFilter] = useState('all')
  const { selectedLanguage: lang } = useAppContext()
  const projects = selected.filter(p => filter === 'all' || (p.techs.some(t => t.name === 'Expo') ? filter === 'mobile' : filter === 'web'))
  return <>
    <Seo title={DEFAULT_TITLE} description={DEFAULT_DESCRIPTION} path="/" type="profile" jsonLd={buildPersonGraph(lang)} />
    <div className="studio-home">
      <section className="studio-hero studio-container">
        <div className="hero-topline">
          <span className="eyebrow"><span className="status-dot" /><TransText en="Available for freelance projects" fr="Disponible pour vos projets freelance" /></span>
          <span className="hero-location"><TransText en="Casablanca, Morocco · Working worldwide" fr="Casablanca, Maroc · Missions à distance" /></span>
        </div>
        <div className="hero-composition">
          <div className="hero-copy">
            <p className="eyebrow hero-intro"><TransText en="Ayman Boujjar / Freelance web & mobile developer" fr="Ayman Boujjar / Développeur web & mobile freelance" /></p>
            <h1><TransText en="Web & mobile." fr="Web & mobile." /><br /><span className="serif-line"><TransText en="Built for business." fr="Pensés pour votre activité." /></span></h1>
            <p className="hero-description"><TransText en="Launch new features, simplify business workflows, or improve an existing product. I build web applications with Laravel and React, and iOS and Android apps with React Native and Expo. Based in Casablanca, available for freelance and contract work with founders, businesses, and agencies worldwide." fr="Lancez de nouvelles fonctionnalités, simplifiez vos processus métier ou améliorez votre produit. Je développe des applications web avec Laravel et React, et des apps iOS et Android avec React Native et Expo. Basé à Casablanca, disponible en freelance pour les fondateurs, entreprises et agences du monde entier." /></p>
            <div className="hero-actions"><Link className="studio-button" to="/contact"><TransText en="Discuss a Project" fr="Parlons de votre projet" /><span>↗</span></Link><a className="text-link" href="#selected-work"><TransText en="View My Work" fr="Découvrir mes projets" /><span>↘</span></a></div>
          </div>
          <WorkShowcase />
        </div>
        <div className="hero-bottom"><span><TransText en="From a first idea to a product people use." fr="De la première idée à un produit utile." /></span><a href="#selected-work"><TransText en="Scroll to discover" fr="Faites défiler" /> ↓</a></div>
      </section>
      <section className="studio-trusted studio-container" id="partners" aria-label="Organizations I have worked with">
        <p className="eyebrow"><TransText en="Projects delivered with LionsGeek and partner teams" fr="Des projets réalisés avec LionsGeek et ses partenaires" /></p>
        <div>{trusted.map(org => <a className={`trusted-partner trusted-${org.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`} key={org.name} href={org.website} target="_blank" rel="noreferrer" title={org.name}><span className="trusted-logo"><img src={org.image} alt="" loading="lazy" /></span><span className="trusted-name">{org.name} <span aria-hidden="true">↗</span></span></a>)}</div>
      </section>
      <section className="studio-work studio-container" id="selected-work">
        <div className="section-heading"><div><p className="eyebrow">01 / <TransText en="Selected work" fr="Projets choisis" /></p><h2><TransText en="Made for the real world." fr="Pensés pour le monde réel." /></h2></div><Link className="text-link" to="/projects"><TransText en="All projects" fr="Tous les projets" /> ↗</Link></div>
        <div className="work-toolbar"><p><TransText en="Three projects that show how I build for communities, media, and mobile." fr="Trois projets qui illustrent mon travail pour les communautés, les médias et le mobile." /></p><div className="work-filters" aria-label={lang === 'fr' ? 'Filtrer les projets' : 'Filter selected projects'}>{[['all','All','Tous'],['web','Web','Web'],['mobile','Mobile','Mobile']].map(([id,en,fr]) => <button key={id} aria-pressed={filter === id} onClick={() => setFilter(id)}><TransText en={en} fr={fr} />{filter === id && <span> ·</span>}</button>)}</div></div>
        <div className="studio-project-grid">{projects.map(p => <Link to={pathFor(p.name)} key={p.id} className={`studio-project ${p.techs.some(t => t.name === 'Expo') ? 'mobile-project' : ''}`}>
          <div className="project-preview"><div className="preview-top"><span>{p.client || p.name}</span><span className="project-arrow">↗</span></div><img src={p.preview} alt={projectImageAlt(p)} loading="lazy" /><span className="preview-caption"><TransText en="Explore the case study" fr="Découvrir le projet" /> ↗</span></div>
          <div className="project-meta"><h3>{p.name}</h3><span><TransText en={p.techs.some(t => t.name === 'Expo') ? 'Mobile application' : 'Web platform'} fr={p.techs.some(t => t.name === 'Expo') ? 'Application mobile' : 'Plateforme web'} /></span></div>
          <p className="project-summary"><TransText {...projectSummaries[p.name]} /></p>
          <p className="project-role">{p.role?.[lang]}</p><div className="project-techs">{p.techs.slice(0,3).map(t => <span key={t.name}>{t.name}</span>)}</div>
        </Link>)}</div>
      </section>
      <section className="home-offers studio-container"><div className="section-heading"><div><p className="eyebrow">02 / <TransText en="Services" fr="Services" /></p><h2><TransText en="What does your product need next?" fr="Quelle est la prochaine étape ?" /></h2></div><Link className="text-link" to="/services"><TransText en="All services" fr="Tous les services" /> ↗</Link></div><ServiceOffers /></section>
      <div className="studio-container"><CollaborationProcess /></div>
      <section className="studio-award studio-container"><Link to={pathFor(awardProject.name)} className="award-feature"><img src={awardProject.preview} alt={projectImageAlt(awardProject)} loading="lazy" /><div><p className="eyebrow">✳ <TransText en="A shared moment of pride" fr="Une fierté collective" /></p><h2>Ada Lovelace.<br /><span className="serif-line"><TransText en="An idea with a voice." fr="Une idée qui prend voix." /></span></h2><p><TransText en="Our LionsGeek team’s conversational 3D avatar won the Jury’s Coup de Cœur at [IN]VISIBLE Festival 2026 in Brussels. My part: the 3D avatar and Moroccan Darija integration." fr="Notre avatar 3D conversationnel, créé avec LionsGeek, a remporté le Coup de Cœur du Jury au festival [IN]VISIBLE 2026 à Bruxelles. Ma contribution : l’avatar 3D et l’intégration de la darija." /></p><span className="text-link"><TransText en="Meet the project" fr="Découvrir le projet" /> ↗</span></div></Link></section>
      <section className="studio-faq studio-container">
        <div><p className="eyebrow">03 / <TransText en="Before we start" fr="Avant de commencer" /></p><h2><TransText en="A few useful answers." fr="Quelques réponses utiles." /></h2><p><TransText en="Have another question? I’m happy to hear about your project." fr="Une autre question ? Parlons de votre projet." /></p><Link className="text-link" to="/contact"><TransText en="Get in touch" fr="Me contacter" /> ↗</Link></div>
        <div>{portfolioFaq.map(faq => <details key={faq.question.en}><summary><TransText {...faq.question} /><span aria-hidden="true">+</span></summary><p><TransText {...faq.answer} /></p></details>)}</div>
      </section>
      <section className="studio-cta studio-container"><p className="eyebrow"><span className="status-dot" /><TransText en="Good things start with a conversation" fr="Tout commence par une conversation" /></p><Link to="/contact"><h2><TransText en="Have something" fr="Une idée" /><br /><span className="serif-line"><TransText en="in mind?" fr="en tête ?" /></span></h2><span className="cta-arrow" aria-hidden="true">↗</span></Link><div><p><TransText en="Share your idea, your timeline, and what success looks like." fr="Partagez votre idée, vos délais et les résultats attendus." /></p><Link to="/contact" className="studio-button"><TransText en="Let’s build together" fr="Construisons ensemble" /> ↗</Link></div></section>
    </div>
  </>
}
