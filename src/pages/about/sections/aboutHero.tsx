import { Link } from 'react-router-dom'
import { TransText } from '../../../components/TransText'
export default function AboutHero() {
  return <section className="studio-container about-introduction about-introduction-v2">
    <div><p className="eyebrow"><TransText en="The person behind the pixels" fr="La personne derrière les interfaces" /></p>
      <h1>Ayman Boujjar.<br /><span className="serif-line"><TransText en="Curiosity, put to work." fr="La curiosité à l’œuvre." /></span></h1>
      <p className="about-lead"><TransText en="I connect what people see with what makes it work. From a web interface to its Laravel backend, or a mobile app in someone’s pocket." fr="Je relie ce que les gens voient à ce qui le fait fonctionner. D’une interface web à son backend Laravel, jusqu’à une application mobile dans leur poche." /></p>
      <p><TransText en="Based in Casablanca, I build with the Coding PRO team at LionsGeek. My work spans community platforms, cultural heritage, media, and education—different contexts, with the same aim: make something useful and easy to use." fr="Basé à Casablanca, je développe avec l’équipe Coding PRO de LionsGeek. Mes projets touchent aux communautés, au patrimoine, aux médias et à l’éducation, avec un même objectif : créer des produits utiles et simples à utiliser." /></p>
      <div className="hero-actions"><Link className="studio-button" to="/contact"><TransText en="Let’s work together" fr="Travaillons ensemble" /> ↗</Link><a className="text-link" href="/Ayman_Boujjar_CV.pdf" download><TransText en="Download my CV" fr="Télécharger mon CV" /> ↓</a></div>
    </div>
    <aside className="about-dossier" aria-label="Professional profile">
      <div className="dossier-heading"><span>AB / <TransText en="FIELD NOTES" fr="REPÈRES" /></span><span aria-hidden="true">✳</span></div>
      <p className="dossier-statement"><TransText en="One developer. Both sides of the experience." fr="Un développeur. Les deux côtés de l’expérience." /></p>
      <dl><div><dt><TransText en="Home base" fr="Basé à" /></dt><dd>Casablanca, Morocco</dd></div><div><dt><TransText en="Web toolkit" fr="Stack web" /></dt><dd>Laravel · React · Inertia</dd></div><div><dt><TransText en="Mobile toolkit" fr="Stack mobile" /></dt><dd>React Native · Expo</dd></div><div><dt><TransText en="Working together" fr="Collaboration" /></dt><dd><TransText en="Freelance · Teams · Remote" fr="Freelance · Équipes · À distance" /></dd></div></dl>
      <Link to="/project/Ada-Lovelace" className="dossier-award"><span aria-hidden="true">↗</span><div><strong>Jury’s Coup de Cœur</strong><p><TransText en="Ada Lovelace · LionsGeek team" fr="Ada Lovelace · Équipe LionsGeek" /><br />[IN]VISIBLE · Brussels, 2026</p></div></Link>
    </aside>
  </section>
}
