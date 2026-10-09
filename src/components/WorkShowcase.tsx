import { useState } from 'react'
import { Link } from 'react-router-dom'
import { featuredProjects } from '../constants/featuredProjects'
import { TransText } from './TransText'

const pieces = [...featuredProjects].sort((a, b) => Number(b.name === 'Tilila') - Number(a.name === 'Tilila'))

export default function WorkShowcase() {
  const [active, setActive] = useState(0)
  const project = pieces[active]
  const mobile = project.techs.some(tech => tech.name === 'Expo')
  return <aside className="work-showcase" aria-label="Selected project preview">
    <div className="showcase-orbit" aria-hidden="true"><span>✳</span></div>
    <div className="showcase-label"><span>AB / <TransText en="IN PRACTICE" fr="EN PRATIQUE" /></span><span>0{active + 1} — 03</span></div>
    <Link className={`showcase-window ${mobile ? 'is-mobile' : ''}`} to={`/project/${project.name.replace(/\s+/g, '-')}`} aria-label={`Explore ${project.name}`}>
      <div className="window-chrome" aria-hidden="true"><span /><span /><span /><small>{project.name}</small><b>↗</b></div>
      <div className="showcase-screen"><img key={project.name} src={project.preview} alt={`${project.name} application interface`} fetchPriority="high" /></div>
    </Link>
    <div className="showcase-foot"><div><p><TransText en="Real products. Real collaboration." fr="De vrais produits. Un travail collectif." /></p><Link to={`/project/${project.name.replace(/\s+/g, '-')}`}>{project.name} <span>↗</span></Link></div><div className="showcase-controls" aria-label="Choose a project">{pieces.map((piece, index) => <button key={piece.name} onClick={() => setActive(index)} aria-label={`Preview ${piece.name}`} aria-pressed={index === active}>0{index + 1}</button>)}</div></div>
    <div className="showcase-stamp"><span>MA</span><TransText en="Made with care in Casablanca" fr="Créé avec soin à Casablanca" /></div>
  </aside>
}
