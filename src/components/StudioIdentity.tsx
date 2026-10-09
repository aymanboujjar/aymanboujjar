import { TransText } from './TransText'

export default function StudioIdentity() {
  return <aside className="identity-card" aria-label="Ayman Boujjar — development specialties">
    <div className="identity-card-top"><span>AYMAN BOUJJAR</span><span aria-hidden="true">↗</span></div>
    <div className="identity-monogram" aria-hidden="true">ab<span>✳</span></div>
    <p className="identity-title">Web. Mobile.<br /><TransText en="Built with intention." fr="Pensés avec soin." /></p>
    <div className="identity-stack"><span>Laravel + React</span><span>React Native + Expo</span></div>
    <div className="identity-card-bottom"><span><TransText en="Based in Casablanca" fr="Basé à Casablanca" /></span><span><TransText en="Working worldwide" fr="Missions à distance" /></span></div>
  </aside>
}
