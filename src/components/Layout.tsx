import { Outlet, useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../pages/home/sections/navbar'
import { GITHUB_URL, LINKEDIN_URL } from '../constants/seo'
import { TransText } from './TransText'
export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return <div className="portfolio-shell">
    <a className="skip-link" href="#main-content"><TransText en="Skip to content" fr="Aller au contenu" /></a>
    <Navbar />
    <main id="main-content" tabIndex={-1}><Outlet /></main>
    <footer className="studio-footer studio-container">
      <Link to="/" className="wordmark">ayman<span>®</span></Link>
      <p>© {new Date().getFullYear()} Ayman Boujjar</p>
      <div><a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub ↗</a><a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn ↗</a><Link to="/contact"><TransText en="Say hello ↗" fr="Dites bonjour ↗" /></Link></div>
    </footer>
  </div>
}
