import Seo from '../../components/Seo'
import { TransText } from '../../components/TransText'
import { Link } from 'react-router-dom'
import AboutHero from './sections/aboutHero'
import { ABOUT_PAGE_SEO } from '../../constants/seo'
import { education, experience } from '../../constants/aboutInfo'

export default function About() {
  const current = experience[0]
  return <div className="studio-home about-page">
    <Seo {...ABOUT_PAGE_SEO} />
    <AboutHero />
    <section className="studio-container about-principles" aria-label="How I approach development">{[
      ['01', 'Start with people.', 'Commencer par les gens.', 'Understand the task someone needs to complete before choosing how to build it.', 'Comprendre ce qu’une personne doit accomplir avant de choisir comment le construire.'],
      ['02', 'Connect the details.', 'Relier les détails.', 'Keep the interface, the API, and the data working together as one coherent product.', 'Faire fonctionner l’interface, l’API et les données comme un seul produit cohérent.'],
      ['03', 'Build together.', 'Construire ensemble.', 'Share context, make contributions clear, and leave room for the team’s expertise.', 'Partager le contexte, clarifier les contributions et faire place à l’expertise de l’équipe.'],
    ].map(([n,en,fr,desc,descFr]) => <article key={n}><span className="eyebrow">{n} /</span><h2><TransText en={en} fr={fr} /></h2><p><TransText en={desc} fr={descFr} /></p></article>)}</section>
    <section className="studio-container about-current">
      <div><p className="eyebrow">01 / <TransText en="Where I build" fr="Là où je développe" /></p><h2><TransText en="Part of a team." fr="Au sein d’une équipe." /><br /><span className="serif-line"><TransText en="Hands on the product." fr="Au cœur du produit." /></span></h2><p><TransText en="Since June 2024, I’ve worked across web and mobile products at LionsGeek Association’s Coding PRO studio." fr="Depuis juin 2024, je travaille sur des produits web et mobile au studio Coding PRO de LionsGeek Association." /></p></div>
      <article className="current-role"><p className="eyebrow">{current.period}</p><h3><TransText {...current.role} /></h3><a className="timeline-company" href={current.website} target="_blank" rel="noreferrer">{current.company} ↗</a><ul>{current.achievements.map(item => <li key={item.en}><TransText {...item} /></li>)}</ul><div className="timeline-projects">{current.relatedProjects?.map(project => <Link key={project.id} to={`/project/${project.name.replace(/\s+/g,'-')}`}>{project.name} ↗</Link>)}</div></article>
    </section>
    <section className="studio-container about-collaborations"><div className="section-heading"><div><p className="eyebrow">02 / <TransText en="Project collaborations" fr="Collaborations sur des projets" /></p><h2><TransText en="Different worlds. Useful work." fr="Des univers variés. Des projets utiles." /></h2></div><Link className="text-link" to="/projects"><TransText en="Explore the work" fr="Voir les projets" /> ↗</Link></div><p className="collaboration-intro"><TransText en="Selected client and partner projects delivered with LionsGeek and collaborating teams." fr="Une sélection de projets clients et partenaires réalisés avec LionsGeek et les équipes associées." /></p><div className="collaboration-grid">{experience.slice(1).map(item => <article key={item.company}><div className="collaboration-top"><span className="eyebrow">{item.period}</span><a href={item.website} target="_blank" rel="noreferrer" aria-label={item.company}>↗</a></div><h3>{item.company}</h3><p className="collaboration-role"><TransText {...item.role} /></p><ul>{item.achievements.map(achievement => <li key={achievement.en}><TransText {...achievement} /></li>)}</ul><div className="timeline-projects">{item.relatedProjects?.map(project => <Link key={project.id} to={`/project/${project.name.replace(/\s+/g,'-')}`}>{project.name} ↗</Link>)}</div></article>)}</div></section>
    <section className="studio-container about-learning"><div className="section-heading"><div><p className="eyebrow">03 / <TransText en="Education" fr="Formation" /></p><h2><TransText en="A foundation. Always growing." fr="Des bases. Toujours progresser." /></h2></div></div><div className="learning-grid">{[...education].reverse().map(item => <article key={item.year}><p className="eyebrow">{item.year}</p><h3><TransText {...item.degree} /></h3><p className="timeline-company">{item.institution}</p><p><TransText {...item.description} /></p></article>)}</div></section>
    <section className="studio-container about-contact"><h2><TransText en="Your idea. My next challenge." fr="Votre idée. Mon prochain défi." /></h2><Link className="studio-button" to="/contact"><TransText en="Discuss a project" fr="Parlons de votre projet" /> ↗</Link></section>
  </div>
}
