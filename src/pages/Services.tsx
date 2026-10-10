import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { TransText } from '../components/TransText'
import { services } from '../constants/services'
import ServiceOffers from '../components/ServiceOffers'
import CollaborationProcess from '../components/CollaborationProcess'
import { awardProject, proProjects } from '../constants/projects'
import { SERVICES_PAGE_SEO } from '../constants/seo'
const catalog=[awardProject,...proProjects]
export default function Services() {
  return <div className="studio-home studio-container services-page">
    <Seo {...SERVICES_PAGE_SEO} />
    <p className="eyebrow"><TransText en="Freelance full-stack & mobile development" fr="Développement full-stack & mobile freelance" /></p>
    <div className="section-heading"><h1><TransText en="Useful products." fr="Des produits utiles." /><br /><span className="serif-line"><TransText en="Built together." fr="Créés ensemble." /></span></h1><p className="archive-intro"><TransText en="I help teams turn ideas into web and mobile applications, and improve products already in use. Based in Casablanca, available for remote projects worldwide." fr="J’aide les équipes à créer des applications web et mobiles, et à améliorer leurs produits existants. Basé à Casablanca, disponible à distance dans le monde entier." /></p></div>
    <ServiceOffers headingLevel={2} />
    <section className="service-capabilities"><div className="section-heading"><div><p className="eyebrow"><TransText en="What that looks like in practice" fr="Concrètement" /></p><h2><TransText en="The pieces that make a product." fr="Ce qui donne vie à un produit." /></h2></div></div><div>{services.map(service => <article key={service.id}><span className="eyebrow">{service.index}</span><div><h3><TransText {...service.title} /></h3><p><TransText {...service.description} /></p><div className="service-evidence">{service.projectIds.slice(0,3).map(id => {const project=catalog.find(p=>p.id===id);return project ? <Link key={id} to={`/project/${project.name.replace(/\s+/g,'-')}`}>{project.name} ↗</Link> : null})}</div></div></article>)}</div></section>
    <CollaborationProcess />
    <section className="about-contact"><h2><TransText en="Have a product in mind? Let’s talk it through." fr="Un produit en tête ? Parlons-en." /></h2><Link className="studio-button" to="/contact"><TransText en="Discuss your project" fr="Parlons de votre projet" /> ↗</Link></section>
  </div>
}
