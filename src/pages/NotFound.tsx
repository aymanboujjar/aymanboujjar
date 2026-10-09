import { Link, useLocation } from 'react-router-dom'
import Seo from '../components/Seo'
import { TransText } from '../components/TransText'
export default function NotFound() {
  const {pathname}=useLocation()
  return <section className="studio-container studio-home missing-page">
    <Seo title="Page not found — Ayman Boujjar" description="This page is unavailable. Explore Ayman Boujjar’s web and mobile portfolio or get in touch about a project." path={pathname} robots="noindex, follow" />
    <p className="eyebrow">404 / <TransText en="Page not found" fr="Page introuvable" /></p>
    <h1><TransText en="A small detour." fr="Un petit détour." /><br /><span className="serif-line"><TransText en="Let’s get you back." fr="Retrouvons le bon chemin." /></span></h1>
    <p><TransText en="The page you’re looking for is unavailable. You can explore my web and mobile projects, or tell me about something you’d like to build." fr="Cette page n’est pas disponible. Découvrez mes projets web et mobiles, ou parlons de ce que vous aimeriez créer." /></p>
    <div className="hero-actions"><Link className="studio-button" to="/"><TransText en="Back to home" fr="Retour à l’accueil" /> ↗</Link><Link className="text-link" to="/projects"><TransText en="Explore my work" fr="Découvrir mes projets" /> ↗</Link></div>
  </section>
}
