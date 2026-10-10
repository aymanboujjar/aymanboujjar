import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Seo from '../components/Seo'
import { TransText } from '../components/TransText'
import { useAppContext } from '../contexts/useAppContext'
import { CONTACT_PAGE_SEO, GITHUB_URL, LINKEDIN_URL } from '../constants/seo'
import { submitContactForm } from '../lib/contactApi'
import { offers } from '../constants/offers'
type FormState = 'idle' | 'submitting' | 'success' | 'error'
export default function Contact() {
  const [formState,setFormState] = useState<FormState>('idle')
  const [error,setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [searchParams] = useSearchParams()
  const serviceField = useRef<HTMLSelectElement>(null)
  const requestedService = searchParams.get('service') ?? ''
  const initialService = offers.some(offer => offer.id === requestedService) ? requestedService : ''
  useEffect(() => {
    // Prerendered HTML has no query string. Apply the inquiry link after
    // hydration, including its native reset default, without resetting drafts.
    const field = serviceField.current
    if (!field) return
    for (const option of field.options) option.defaultSelected = option.value === initialService
    field.value = initialService
  }, [initialService])
  const {selectedLanguage:lang} = useAppContext()
  const busy = formState === 'submitting'
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (busy) return
    const form=event.currentTarget
    const errors: Record<string, string> = {}
    for (const element of Array.from(form.elements)) {
      if (!(element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement) || element.name === 'company') continue
      if (!element.validity.valid || (element.required && !element.value.trim())) {
        errors[element.name] = element.validity.typeMismatch ? 'email' : 'required'
      }
    }
    setFieldErrors(errors)
    if (Object.keys(errors).length) {
      setFormState('idle')
      setError(null)
      const firstInvalid = form.elements.namedItem(Object.keys(errors)[0])
      if (firstInvalid instanceof HTMLElement) firstInvalid.focus()
      return
    }
    const data=new FormData(form)
    setFormState('submitting')
    setError(null)
    const result=await submitContactForm({name:String(data.get('name')??''),email:String(data.get('email')??''),subject:String(data.get('subject')??''),message:String(data.get('message')??''),company:String(data.get('company')??''),service:String(data.get('service')??''),timeline:String(data.get('timeline')??''),budget:String(data.get('budget')??''),organization:String(data.get('organization')??'')})
    if(result.ok){setFormState('success');form.reset()}
    else{setFormState('error');setError(result.error)}
  }
  const validation = (name: string) => ({ 'aria-invalid': Boolean(fieldErrors[name]), 'aria-describedby': fieldErrors[name] ? `${name}-error` : undefined })
  const fieldError = (name: string) => fieldErrors[name] ? <p id={`${name}-error`} className="field-error"><TransText en={fieldErrors[name] === 'email' ? 'Enter a valid email address.' : 'Please complete this field.'} fr={fieldErrors[name] === 'email' ? 'Saisissez une adresse e-mail valide.' : 'Veuillez renseigner ce champ.'} /></p> : null
  return <div className="studio-home studio-container contact-page">
    <Seo {...CONTACT_PAGE_SEO} />
    <p className="eyebrow"><span className="status-dot" /><TransText en="Let’s start a conversation" fr="Commençons par une conversation" /></p>
    <div className="section-heading"><h1><TransText en="Your next idea." fr="Votre prochaine idée." /><br /><span className="serif-line"><TransText en="Let’s build it." fr="Donnons-lui vie." /></span></h1><p className="archive-intro"><TransText en="Contact Ayman Boujjar for freelance web and mobile development. Based in Casablanca, working remotely with teams worldwide." fr="Contactez Ayman Boujjar pour vos projets web et mobiles. Basé à Casablanca, je travaille à distance avec des équipes dans le monde entier." /></p></div>
    <div className="contact-layout">
      <noscript><style>{'.studio-contact-form{display:none}'}</style><p className="contact-nojs">JavaScript is needed for the contact form. You can email <a href="mailto:boujjarr@gmail.com">boujjarr@gmail.com</a> instead.</p></noscript>
      <form className="studio-contact-form" method="post" action="/api/contact" noValidate onSubmit={onSubmit} aria-busy={busy} onChange={event => {const target=event.target; if ('name' in target && typeof target.name === 'string') setFieldErrors(current => {const next={...current}; delete next[target.name as string]; return next})}}>
        <div className="form-honeypot" aria-hidden="true"><label htmlFor="company">Company</label><input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" /></div>
        <div className="contact-form-row">
          <div><label htmlFor="name"><TransText en="Your name" fr="Votre nom" /></label><input id="name" name="name" required autoComplete="name" maxLength={120} disabled={busy} {...validation('name')} />{fieldError('name')}</div>
          <div><label htmlFor="email"><TransText en="Email address" fr="Adresse e-mail" /></label><input id="email" name="email" type="email" required autoComplete="email" maxLength={254} disabled={busy} {...validation('email')} />{fieldError('email')}</div>
        </div>
        <div><label htmlFor="service"><TransText en="What help do you need?" fr="De quoi avez-vous besoin ?" /></label><select ref={serviceField} id="service" name="service" disabled={busy} defaultValue={initialService}><option value=""><TransText en="Not sure yet — let’s discuss" fr="À définir ensemble" /></option>{offers.map(offer => <option key={offer.id} value={offer.id}>{offer.name[lang]}</option>)}</select></div>
        <div><label htmlFor="organization"><TransText en="Company / agency / project URL (optional)" fr="Entreprise / agence / lien du projet (facultatif)" /></label><input id="organization" name="organization" maxLength={300} disabled={busy} /></div>
        <div className="contact-form-row"><div><label htmlFor="timeline"><TransText en="Target timeline (optional)" fr="Délai souhaité (facultatif)" /></label><input id="timeline" name="timeline" maxLength={200} disabled={busy} /></div><div><label htmlFor="budget"><TransText en="Budget range & currency (optional)" fr="Budget indicatif & devise (facultatif)" /></label><input id="budget" name="budget" maxLength={200} disabled={busy} placeholder={lang === 'fr' ? 'Vous pouvez indiquer « à définir »' : '“To be discussed” is fine'} /></div></div>
        <div><label htmlFor="subject"><TransText en="What are you working on?" fr="Quel est votre projet ?" /></label><input id="subject" name="subject" {...validation('subject')} required maxLength={200} placeholder={lang==='en'?'A web platform, a mobile app, an existing product…':'Une plateforme web, une app mobile, un produit existant…'} disabled={busy} />{fieldError('subject')}</div>
        <div><label htmlFor="message"><TransText en="Tell me a little more" fr="Dites-m’en un peu plus" /></label><textarea id="message" name="message" {...validation('message')} required rows={7} maxLength={5000} placeholder={lang==='en'?'The goal, your users, what already exists, your timeline, and your budget range.':'L’objectif, les utilisateurs, l’existant, vos délais et votre budget indicatif.'} disabled={busy} />{fieldError('message')}</div>
        <p className="form-note"><TransText en="Name, email, project title, and message are required. Your details are used to reply to this enquiry. Please don’t include passwords or private credentials." fr="Nom, e-mail, titre du projet et message sont obligatoires. Vos coordonnées servent à répondre à votre demande. N’incluez pas de mots de passe ni d’identifiants confidentiels." /></p>
        {formState==='success' && <p className="form-success" role="status"><TransText en="Message sent. Thank you — I’ll get back to you by email." fr="Message envoyé. Merci, je vous répondrai par e-mail." /></p>}
        {formState==='error' && error && <p className="form-error" role="alert">{error}</p>}
        <button type="submit" className="studio-button" disabled={busy}><TransText en={busy?'Sending…':'Send your message'} fr={busy?'Envoi en cours…':'Envoyer votre message'} /><span aria-hidden="true">↗</span></button>
        <p className="form-note"><TransText en="Prefer email?" fr="Vous préférez l’e-mail ?" /> <a className="text-link" href="mailto:boujjarr@gmail.com">boujjarr@gmail.com ↗</a></p>
      </form>
      <aside className="contact-aside"><div><p className="eyebrow"><TransText en="A useful starting point" fr="Pour bien commencer" /></p><h2><TransText en="A little context goes a long way." fr="Un peu de contexte fait la différence." /></h2><ul><li><TransText en="What do you want the product to do?" fr="Que doit faire votre produit ?" /></li><li><TransText en="Who will use it?" fr="À qui s’adresse-t-il ?" /></li><li><TransText en="Are we starting fresh or improving something?" fr="Partons-nous de zéro ou d’un produit existant ?" /></li><li><TransText en="What timeline and budget should we work with?" fr="Quels sont vos délais et votre budget ?" /></li></ul></div><div className="contact-availability"><span className="status-dot" /><p><TransText en="Available for freelance and contract work, remotely worldwide." fr="Disponible pour des missions freelance à distance dans le monde entier." /></p></div><div className="contact-socials"><a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub ↗</a><a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn ↗</a></div><Link className="text-link" to="/services"><TransText en="Explore what I can help with" fr="Découvrir mes services" /> ↗</Link></aside>
    </div>
  </div>
}
