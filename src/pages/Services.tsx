import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { TransText } from '../components/TransText'
import { services } from '../constants/services'
import { serviceLandings } from '../constants/serviceLandings'
import { awardProject, proProjects } from '../constants/projects'
import { SERVICES_PAGE_SEO } from '../constants/seo'
const catalog=[awardProject,...proProjects]
export default function Services() {
  return <div className="studio-home studio-container services-page">
    <Seo {...SERVICES_PAGE_SEO} />
    <p className="eyebrow"><TransText en="Freelance full-stack & mobile development" fr="Développement full-stack & mobile freelance" /></p>
    <div className="section-heading"><h1><TransText en="Useful products." fr="Des produits utiles." /><br /><span className="serif-line"><TransText en="Built together." fr="Créés ensemble." /></span></h1><p className="archive-intro"><TransText en="I help teams turn ideas into web and mobile applications, and improve products already in use. Based in Casablanca, available for remote projects worldwide." fr="J’aide les équipes à créer des applications web et mobiles, et à améliorer leurs produits existants. Basé à Casablanca, disponible à distance dans le monde entier." /></p></div>
    <div className="service-card-grid">{serviceLandings.map(service => <Link key={service.slug} to={`/services/${service.slug}`}><div className="service-card-label"><span>{service.index}</span><span>↗</span></div><h2><TransText {...service.name} /></h2><p><TransText {...service.positioning} /></p><div className="project-techs">{service.techs.slice(0,3).map(tech => <span key={tech}>{tech}</span>)}</div><span className="text-link"><TransText en="Explore the service" fr="Découvrir le service" /> →</span></Link>)}</div>
    <section className="service-capabilities"><div className="section-heading"><div><p className="eyebrow"><TransText en="What that looks like in practice" fr="Concrètement" /></p><h2><TransText en="The pieces that make a product." fr="Ce qui donne vie à un produit." /></h2></div></div><div>{services.map(service => <article key={service.id}><span className="eyebrow">{service.index}</span><div><h3><TransText {...service.title} /></h3><p><TransText {...service.description} /></p><div className="service-evidence">{service.projectIds.slice(0,3).map(id => {const project=catalog.find(p=>p.id===id);return project ? <Link key={id} to={`/project/${project.name.replace(/\s+/g,'-')}`}>{project.name} ↗</Link> : null})}</div></div></article>)}</div></section>
    <section className="service-process"><div><p className="eyebrow"><TransText en="Working together" fr="Travailler ensemble" /></p><h2><TransText en="Clear goals. Close collaboration." fr="Des objectifs clairs. Une vraie collaboration." /></h2></div><div>{[
      ['01','Understand the need','Comprendre le besoin','Your users, the goal, the existing product, and the constraints. We work out what matters first.','Vos utilisateurs, l’objectif, l’existant et les contraintes. Nous identifions les priorités.'],
      ['02','Build the essentials','Créer l’essentiel','Interfaces and backend features that support the core journeys, with clear communication as the work progresses.','Des interfaces et un backend au service des parcours essentiels, avec des échanges clairs tout au long du projet.'],
      ['03','Make it ready to use','Préparer la mise en service','Review the key flows, address issues, and prepare the product for the next stage with your team.','Vérifier les parcours clés, résoudre les problèmes et préparer la suite du produit avec votre équipe.'],
    ].map(([num,en,fr,desc,descFr]) => <article key={num}><span className="eyebrow">{num}</span><h3><TransText en={en} fr={fr} /></h3><p><TransText en={desc} fr={descFr} /></p></article>)}</div></section>
    <section className="about-contact"><h2><TransText en="Have a product in mind? Let’s talk it through." fr="Un produit en tête ? Parlons-en." /></h2><Link className="studio-button" to="/contact"><TransText en="Discuss your project" fr="Parlons de votre projet" /> ↗</Link></section>
  </div>
}
