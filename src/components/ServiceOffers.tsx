import { Link } from 'react-router-dom'
import { offers } from '../constants/offers'
import { proProjects } from '../constants/projects'
import { TransText } from './TransText'

export default function ServiceOffers({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  return <div className="service-card-grid offer-grid">{offers.map((offer, index) => <article key={offer.id}>
    <div className="service-card-label"><span>0{index + 1}</span><span aria-hidden="true">↗</span></div>
    <Heading className="offer-heading"><Link to={`/services/${offer.slug}`}><TransText {...offer.name} /></Link></Heading>
    <p><TransText {...offer.description} /></p>
    <Link className="text-link" to={`/contact?service=${offer.id}`}><TransText en="Discuss a Project" fr="Parlons de votre projet" /> ↗</Link>
    <div className="offer-evidence"><p><TransText {...offer.evidence} /></p>{offer.projectIds.map(id => {
      const project = proProjects.find(item => item.id === id)
      return project ? <Link key={id} to={`/project/${project.name.replace(/\s+/g, '-')}`}><strong>{project.name} ↗</strong>{project.role && <span><TransText {...project.role} /></span>}</Link> : null
    })}</div>
  </article>)}</div>
}
