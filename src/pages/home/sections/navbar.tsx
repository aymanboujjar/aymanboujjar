import { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useAppContext } from '../../../contexts/useAppContext'
import { TransText } from '../../../components/TransText'
export default function Navbar() {
  const [openPath, setOpenPath] = useState<string | null>(null)
  const { pathname } = useLocation()
  const open = openPath === pathname
  const { selectedLanguage, toggleLanguage } = useAppContext()
  return <header className="studio-header">
    <nav className="studio-container studio-nav" aria-label="Main navigation">
      <Link to="/" className="wordmark" aria-label="Ayman Boujjar home" onClick={() => setOpenPath(null)}>ayman<span>®</span></Link>
      <div className={`studio-links ${open ? 'is-open' : ''}`} id="navigation-links">
        {[['/projects', 'Work', 'Projets'], ['/about', 'About', 'À propos'], ['/services', 'Services', 'Services']].map(([to, en, fr]) => <NavLink key={to} to={to} onClick={() => setOpenPath(null)}><TransText en={en} fr={fr} /></NavLink>)}
        <Link className="nav-contact" to="/contact" onClick={() => setOpenPath(null)}><TransText en="Let’s talk" fr="Parlons-en" /> <span>↗</span></Link>
      </div>
      <div className="nav-controls"><button className="language-button" onClick={toggleLanguage} aria-label={selectedLanguage === 'en' ? 'Switch to French' : 'Passer en anglais'}>{selectedLanguage.toUpperCase()}<span>⌄</span></button><button className="menu-button" aria-controls="navigation-links" aria-expanded={open} onClick={() => setOpenPath(open ? null : pathname)}>{open ? 'Close −' : 'Menu +'}</button></div>
    </nav>
  </header>
}
