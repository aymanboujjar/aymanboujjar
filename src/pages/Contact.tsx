import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { TransText } from '../components/TransText'
import { useAppContext } from '../contexts/useAppContext'
import { CONTACT_PAGE_SEO, GITHUB_URL, LINKEDIN_URL } from '../constants/seo'
import { submitContactForm } from '../lib/contactApi'
type FormState = 'idle' | 'submitting' | 'success' | 'error'
export default function Contact() {
  const [formState,setFormState] = useState<FormState>('idle')
  const [error,setError] = useState<string | null>(null)
  const {selectedLanguage:lang} = useAppContext()
  const busy = formState === 'submitting'
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (busy) return
    const form=event.currentTarget
    const data=new FormData(form)
    setFormState('submitting')
    setError(null)
    const result=await submitContactForm({name:String(data.get('name')??''),email:String(data.get('email')??''),subject:String(data.get('subject')??''),message:String(data.get('message')??''),company:String(data.get('company')??'')})
    if(result.ok){setFormState('success');form.reset()}
    else{setFormState('error');setError(result.error)}
  }
  return <div className="studio-home studio-container contact-page">
    <Seo {...CONTACT_PAGE_SEO} />
    <p className="eyebrow"><span className="status-dot" /><TransText en="Let’s start a conversation" fr="Commençons par une conversation" /></p>
    <div className="section-heading"><h1><TransText en="Your next idea." fr="Votre prochaine idée." /><br /><span className="serif-line"><TransText en="Let’s build it." fr="Donnons-lui vie." /></span></h1><p className="archive-intro"><TransText en="Contact Ayman Boujjar for freelance web and mobile development. Based in Casablanca, working remotely with teams worldwide." fr="Contactez Ayman Boujjar pour vos projets web et mobiles. Basé à Casablanca, je travaille à distance avec des équipes dans le monde entier." /></p></div>
    <div className="contact-layout">
      <noscript><style>{'.studio-contact-form{display:none}'}</style><p className="contact-nojs">JavaScript is needed for the contact form. You can email <a href="mailto:boujjarr@gmail.com">boujjarr@gmail.com</a> instead.</p></noscript>
      <form className="studio-contact-form" method="post" action="/api/contact" onSubmit={onSubmit} aria-busy={busy}>
        <div className="form-honeypot" aria-hidden="true"><label htmlFor="company">Company</label><input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" /></div>
        <div className="contact-form-row">
          <div><label htmlFor="name"><TransText en="Your name" fr="Votre nom" /></label><input id="name" name="name" required autoComplete="name" maxLength={120} disabled={busy} /></div>
          <div><label htmlFor="email"><TransText en="Email address" fr="Adresse e-mail" /></label><input id="email" name="email" type="email" required autoComplete="email" maxLength={254} disabled={busy} /></div>
        </div>
        <div><label htmlFor="subject"><TransText en="What are you working on?" fr="Quel est votre projet ?" /></label><input id="subject" name="subject" required maxLength={200} placeholder={lang==='en'?'A web platform, a mobile app, an existing product…':'Une plateforme web, une app mobile, un produit existant…'} disabled={busy} /></div>
        <div><label htmlFor="message"><TransText en="Tell me a little more" fr="Dites-m’en un peu plus" /></label><textarea id="message" name="message" required rows={7} maxLength={5000} placeholder={lang==='en'?'The goal, your users, what already exists, your timeline, and your budget range.':'L’objectif, les utilisateurs, l’existant, vos délais et votre budget indicatif.'} disabled={busy} /></div>
        <p className="form-note"><TransText en="All fields are required. Your details are used to reply to this enquiry." fr="Tous les champs sont obligatoires. Vos coordonnées servent à répondre à votre demande." /></p>
        {formState==='success' && <p className="form-success" role="status"><TransText en="Message sent. Thank you — I’ll get back to you by email." fr="Message envoyé. Merci, je vous répondrai par e-mail." /></p>}
        {formState==='error' && error && <p className="form-error" role="alert">{error}</p>}
        <button type="submit" className="studio-button" disabled={busy}><TransText en={busy?'Sending…':'Send your message'} fr={busy?'Envoi en cours…':'Envoyer votre message'} /><span aria-hidden="true">↗</span></button>
      </form>
      <aside className="contact-aside"><div><p className="eyebrow"><TransText en="A useful starting point" fr="Pour bien commencer" /></p><h2><TransText en="A little context goes a long way." fr="Un peu de contexte fait la différence." /></h2><ul><li><TransText en="What do you want the product to do?" fr="Que doit faire votre produit ?" /></li><li><TransText en="Who will use it?" fr="À qui s’adresse-t-il ?" /></li><li><TransText en="Are we starting fresh or improving something?" fr="Partons-nous de zéro ou d’un produit existant ?" /></li><li><TransText en="What timeline and budget should we work with?" fr="Quels sont vos délais et votre budget ?" /></li></ul></div><div className="contact-availability"><span className="status-dot" /><p><TransText en="Available for freelance and contract work, remotely worldwide." fr="Disponible pour des missions freelance à distance dans le monde entier." /></p></div><div className="contact-socials"><a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub ↗</a><a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn ↗</a></div><Link className="text-link" to="/services"><TransText en="Explore what I can help with" fr="Découvrir mes services" /> ↗</Link></aside>
    </div>
  </div>
}
