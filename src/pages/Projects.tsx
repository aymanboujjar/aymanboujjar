import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Seo from '../components/Seo'
import { TransText } from '../components/TransText'
import { useAppContext } from '../contexts/useAppContext'
import { proProjects, awardProject } from '../constants/projects'
import { orderedProjects } from '../constants/featuredProjects'
import { PROJECTS_PAGE_SEO, projectImageAlt, buildProjectsPageJsonLd } from '../constants/seo'
export default function Projects() {
  const [params, setParams] = useSearchParams()
  const [filter, setFilter] = useState('all')
  const { selectedLanguage: lang } = useAppContext()
  const tech = params.get('tech')?.trim() || ''
  const projects = useMemo(() => orderedProjects.filter(p => {
    const mobile = p.techs.some(t => /expo|react native/i.test(t.name))
    return (filter === 'all' || (filter === 'mobile' ? mobile : !mobile)) && (!tech || p.techs.some(t => t.name.toLowerCase().includes(tech.toLowerCase())))
  }), [filter, tech])
  return <div className="studio-home studio-container archive-page">
    <Seo {...PROJECTS_PAGE_SEO} jsonLd={buildProjectsPageJsonLd([awardProject, ...proProjects])} />
    <p className="eyebrow"><TransText en="The project collection" fr="La collection de projets" /></p>
    <div className="section-heading"><h1><TransText en="Ideas, brought" fr="Des idées" /><br /><span className="serif-line"><TransText en="to life." fr="qui prennent vie." /></span></h1><p className="archive-intro"><TransText en="Web platforms, mobile experiences, and the people behind them. Explore what I built and where I contributed." fr="Plateformes web, expériences mobiles et les équipes qui les créent. Découvrez mes réalisations et mes contributions." /></p></div>
    <div className="work-toolbar"><p>{projects.length} <TransText en="projects to explore" fr="projets à découvrir" />{tech && <> · {tech} <button className="text-link" onClick={() => setParams({})}><TransText en="Clear filter ×" fr="Effacer le filtre ×" /></button></>}</p><div className="work-filters" aria-label="Filter projects">{[['all','All work','Tous'],['web','Web','Web'],['mobile','Mobile','Mobile']].map(([id,en,fr]) => <button key={id} aria-pressed={filter === id} onClick={() => setFilter(id)}><TransText en={en} fr={fr} /></button>)}</div></div>
    <div className="studio-project-grid">{projects.map(p => <Link className={`studio-project ${p.techs.some(t => /expo|react native/i.test(t.name)) ? 'mobile-project' : ''}`} key={p.id} to={`/project/${p.name.replace(/\s+/g,'-')}`}><div className="project-preview"><div className="preview-top"><span>{p.client || p.name}</span><span className="project-arrow">↗</span></div><img src={p.preview} alt={projectImageAlt(p)} loading="lazy" /><span className="preview-caption"><TransText en="Explore the case study" fr="Découvrir le projet" /> ↗</span></div><div className="project-meta"><h3>{p.name}</h3><span>{p.techs.some(t => /expo|react native/i.test(t.name)) ? 'Mobile' : 'Web'}</span></div><p className="project-role">{p.role?.[lang]}</p><div className="project-techs">{p.techs.slice(0,3).map(t => <span key={t.name}>{t.name}</span>)}</div></Link>)}</div>
    {!projects.length && <p className="archive-empty"><TransText en="No projects match this filter. Try another category or clear the technology filter." fr="Aucun projet ne correspond. Essayez une autre catégorie ou effacez le filtre technologique." /></p>}
    <Link className="archive-award text-link" to="/project/Ada-Lovelace">✳ <TransText en={`Also explore: ${awardProject.name} — Jury’s Coup de Cœur, Brussels 2026`} fr={`À découvrir : ${awardProject.name} — Coup de Cœur du Jury, Bruxelles 2026`} /> ↗</Link>
  </div>
}
