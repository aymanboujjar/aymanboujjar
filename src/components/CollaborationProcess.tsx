import { TransText } from './TransText'

const steps = [
  ['Discovery', 'Découverte', 'We discuss your goals, users, existing product, and constraints.', 'Nous discutons des objectifs, des utilisateurs, de l’existant et des contraintes.'],
  ['Scope & estimate', 'Périmètre & estimation', 'We agree on deliverables, priorities, timeline, and an estimate before development begins.', 'Nous convenons des livrables, priorités, délais et d’une estimation avant le développement.'],
  ['Development', 'Développement', 'Review progress together, test the key flows, and agree on any changes to scope.', 'Nous suivons l’avancement, testons les parcours clés et validons les changements de périmètre.'],
  ['Delivery', 'Livraison', 'Review the agreed work, prepare deployment, and hand over code and the context your team needs.', 'Nous vérifions les livrables, préparons le déploiement et transmettons le code et les informations utiles.'],
]

export default function CollaborationProcess() {
  return <section className="service-process collaboration-process">
    <div><p className="eyebrow"><TransText en="How We Work Together" fr="Comment nous travaillons ensemble" /></p><h2><TransText en="A clear path from brief to delivery." fr="Du besoin à la livraison." /></h2><p className="process-intro"><TransText en="For founders, businesses, and startups — directly or as a white-label developer alongside your agency. We agree on communication, responsibilities, and handover from the start." fr="Pour les fondateurs, entreprises et startups — en direct ou en marque blanche avec votre agence. Nous définissons dès le départ les échanges, responsabilités et modalités de livraison." /></p></div>
    <div>{steps.map(([en, fr, description, descriptionFr], index) => <article key={en}><span className="eyebrow">0{index + 1}</span><h3><TransText en={en} fr={fr} /></h3><p><TransText en={description} fr={descriptionFr} /></p></article>)}</div>
  </section>
}
