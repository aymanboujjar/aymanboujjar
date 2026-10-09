import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { TransText } from './TransText'
import { useAppContext } from '../contexts/useAppContext'
import { awardProject, proProjects, persoProjects } from '../constants/projects'
import { getRelatedServiceLandings } from '../constants/serviceLandings'
import { getRelatedProjects, projectImageAlt } from '../constants/seo'
import { projectFit, projectBriefs } from '../constants/featuredProjects'

type Localized = { en: string; fr: string }
const catalog = [awardProject, ...proProjects, ...persoProjects]
const pathFor = (name: string) => `/project/${name.replace(/\s+/g, '-')}`

export default function ProjectDetails({ project }: { project: Project }) {
  const [active, setActive] = useState(0)
  const [zoomed, setZoomed] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const { selectedLanguage: lang } = useAppContext()
  const gallery = [project.preview, ...(project.additionalImages ?? [])]
  const imageAlt = projectImageAlt(project)
  const related = getRelatedProjects(project, catalog).slice(0, 3)
  const services = getRelatedServiceLandings(project)
  function openImage(index: number) {
    setZoomed(false)
    setActive(index)
    dialog.current?.showModal()
  }
  return <article className="studio-home studio-container case-page">
    <nav className="case-breadcrumb" aria-label="Breadcrumb"><Link to="/projects">← <TransText en="All work" fr="Tous les projets" /></Link><span>{project.name}</span></nav>
    <header className="case-header">
      <div><p className="eyebrow"><TransText en="A closer look /" fr="De plus près /" /> {String(project.id).padStart(2, '0')}</p><h1>{project.name}</h1><p className="case-description"><TransText {...project.desc} /></p><div className="hero-actions">{project.website && <a className="studio-button" href={project.website} target="_blank" rel="noreferrer"><TransText en="Visit the website" fr="Voir le site" /> ↗</a>}{project.appStore && <a className="text-link" href={project.appStore} target="_blank" rel="noreferrer">App Store ↗</a>}{project.playStore && <a className="text-link" href={project.playStore} target="_blank" rel="noreferrer">Google Play ↗</a>}</div></div>
      <dl className="case-facts">{project.role && <div><dt><TransText en="My role" fr="Mon rôle" /></dt><dd><TransText {...project.role} /></dd></div>}{project.client && <div><dt><TransText en="Organization" fr="Organisation" /></dt><dd>{project.clientWebsite ? <a href={project.clientWebsite} target="_blank" rel="noreferrer">{project.client} ↗</a> : project.client}</dd></div>}{project.timeline && <div><dt><TransText en="Timeline" fr="Période" /></dt><dd><TransText {...project.timeline} /></dd></div>}<div><dt><TransText en="Built with" fr="Technologies" /></dt><dd className="case-stack">{project.techs.map(tech => <Link key={tech.name} to={`/projects?tech=${encodeURIComponent(tech.name)}`}>{tech.name}</Link>)}</dd></div></dl>
    </header>
    {projectBriefs[project.name] && <section className="case-brief" aria-label={lang === 'fr' ? 'Le projet en bref' : 'Project at a glance'}><div><p className="eyebrow"><TransText en="Who it’s for" fr="Pour qui" /></p><p><TransText {...projectBriefs[project.name].audience} /></p></div><div><p className="eyebrow"><TransText en="What I worked on" fr="Ma contribution" /></p><p><TransText {...projectBriefs[project.name].contribution} /></p></div></section>}
    <figure className="case-cover"><button onClick={() => openImage(0)} aria-label={lang === 'fr' ? 'Agrandir l’aperçu du projet' : 'Enlarge project preview'}><img src={project.preview} alt={imageAlt} fetchPriority="high" /><span className="case-enlarge"><TransText en="View full image" fr="Voir l’image entière" /> ⤢</span></button><figcaption>{project.name} / <TransText en="Product preview" fr="Aperçu du produit" /></figcaption></figure>
    <nav className="case-contents" aria-label={lang === 'fr' ? 'Dans cette étude de cas' : 'In this case study'}><a href="#overview"><TransText en="The context" fr="Le contexte" /></a><a href="#contributions"><TransText en="My contribution" fr="Ma contribution" /></a><a href="#delivery"><TransText en="The result" fr="Le résultat" /></a><a href="#gallery"><TransText en="Screenshots" fr="Captures" /></a></nav>
    <CaseSection id="overview" number="01" en="The context." fr="Le contexte."><p className="case-prose"><TransText {...project.detailedDesc} /></p>{!!project.challenges?.length && <div className="case-challenges"><p className="eyebrow"><TransText en="What needed solving" fr="Les défis à résoudre" /></p><DetailList items={project.challenges} /></div>}</CaseSection>
    <CaseSection id="contributions" number="02" en="My part in the product." fr="Ma contribution au produit.">{project.teamContext && <p className="case-team"><TransText {...project.teamContext} /></p>}<p className="case-credit"><TransText en={project.authorship === 'sole' ? 'Project built by Ayman Boujjar.' : 'Team project. The contributions below describe my part.'} fr={project.authorship === 'sole' ? 'Projet réalisé par Ayman Boujjar.' : 'Projet d’équipe. Les contributions ci-dessous présentent ma part.'} /></p>{project.contributions?.length ? <DetailList items={project.contributions} numbered /> : project.role ? <p className="case-prose"><TransText {...project.role} /></p> : null}{!!project.solutions?.length && <details className="case-more"><summary><TransText en="Explore the technical approach" fr="Voir l’approche technique" /><span aria-hidden="true">+</span></summary><DetailList items={project.solutions} /></details>}</CaseSection>
    <CaseSection id="delivery" number="03" en="What the product delivers." fr="Ce que le produit apporte."><p className="case-section-intro"><TransText en="The resulting features and experiences, delivered through the project." fr="Les fonctionnalités et expériences réalisées dans le cadre du projet." /></p>{!!project.keyFeatures?.length && <DetailList items={project.keyFeatures} numbered />}{!!project.lessonsLearned?.length && <details className="case-more"><summary><TransText en="What I learned along the way" fr="Ce que j’ai appris" /><span aria-hidden="true">+</span></summary><DetailList items={project.lessonsLearned} /></details>}{!!project.futureImprovements?.length && <details className="case-more"><summary><TransText en="Possible next steps" fr="Les prochaines pistes" /><span aria-hidden="true">+</span></summary><DetailList items={project.futureImprovements} /></details>}</CaseSection>
    <section className="case-gallery" id="gallery"><div className="section-heading"><div><p className="eyebrow">04 / <TransText en="In detail" fr="En détail" /></p><h2><TransText en="A look inside." fr="Un aperçu de l’intérieur." /></h2></div><p className="case-gallery-hint"><TransText en="Select an image to explore it in full." fr="Sélectionnez une image pour l’agrandir." /></p></div><div className="case-gallery-grid">{gallery.map((src,index) => <figure key={src + index}><button onClick={() => openImage(index)} aria-label={`${lang === 'fr' ? 'Agrandir la capture' : 'Enlarge screenshot'} ${index + 1}`}><img src={src} alt={`${imageAlt} — ${lang === 'fr' ? 'vue' : 'view'} ${index + 1}`} loading="lazy" /><span aria-hidden="true">⤢</span></button><figcaption>{String(index + 1).padStart(2,'0')} / {project.name}</figcaption></figure>)}</div></section>
    {!!services.length && <div className="case-services"><p className="eyebrow"><TransText en="Related expertise" fr="Expertise associée" /></p>{services.map(service => <Link className="text-link" key={service.slug} to={`/services/${service.slug}`}><TransText {...service.name} /> ↗</Link>)}</div>}
    {!!related.length && <section className="case-related"><div className="section-heading"><h2><TransText en="Keep exploring." fr="Continuez la découverte." /></h2><Link className="text-link" to="/projects"><TransText en="All work" fr="Tous les projets" /> ↗</Link></div><div>{related.map(piece => <Link key={piece.id} to={pathFor(piece.name)}><img src={piece.preview} alt={projectImageAlt(piece)} loading="lazy" /><span>{piece.name} <span>↗</span></span></Link>)}</div></section>}
    <section className="about-contact case-enquiry"><div><h2><TransText en="Something similar in mind?" fr="Un projet similaire en tête ?" /></h2>{projectFit[project.name] && <p><TransText {...projectFit[project.name]} /></p>}</div><Link className="studio-button" to="/contact"><TransText en="Discuss your project" fr="Parlons de votre projet" /> ↗</Link></section>
    <dialog ref={dialog} className="case-lightbox" aria-label={lang === 'fr' ? 'Galerie du projet' : 'Project image gallery'} onClick={event => {if (event.target === event.currentTarget) dialog.current?.close()}}><div className="lightbox-toolbar"><p>{project.name} · {active + 1} / {gallery.length}</p><div><button aria-pressed={zoomed} onClick={() => setZoomed(value => !value)}><TransText en={zoomed ? 'Fit image' : 'Zoom in'} fr={zoomed ? 'Vue entière' : 'Agrandir'} /></button><button onClick={() => dialog.current?.close()} autoFocus><TransText en="Close" fr="Fermer" /> ×</button></div></div><div className={`lightbox-image ${zoomed ? 'is-zoomed' : ''}`} key={`${active}-${zoomed}`} tabIndex={zoomed ? 0 : undefined} aria-label={zoomed ? (lang === 'fr' ? 'Image agrandie, défilement horizontal et vertical' : 'Zoomed image, scroll horizontally and vertically') : undefined}><img src={gallery[active]} alt={`${imageAlt} — view ${active + 1}`} /></div><div className="lightbox-controls"><button disabled={gallery.length === 1} onClick={() => {setZoomed(false);setActive(index => (index - 1 + gallery.length) % gallery.length)}}>← <TransText en="Previous" fr="Précédente" /></button><button disabled={gallery.length === 1} onClick={() => {setZoomed(false);setActive(index => (index + 1) % gallery.length)}}><TransText en="Next" fr="Suivante" /> →</button></div></dialog>
  </article>
}

function DetailList({items, numbered = false}: {items: Localized[]; numbered?: boolean}) {
  return <ul className={`case-list ${numbered ? 'is-numbered' : ''}`}>{items.map((item,index) => <li key={item.en}>{numbered && <span aria-hidden="true">{String(index + 1).padStart(2,'0')}</span>}<p><TransText {...item} /></p></li>)}</ul>
}
function CaseSection({id,number,en,fr,children}: {id:string;number:string;en:string;fr:string;children:React.ReactNode}) {
  return <section id={id} className="case-section"><div><p className="eyebrow">{number} /</p><h2><TransText en={en} fr={fr} /></h2></div><div>{children}</div></section>
}
