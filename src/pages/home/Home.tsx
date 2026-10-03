import Contact from './sections/contact'
import Hero from './sections/hero'
import Award from './sections/award'
import Projects from './sections/projects'
import Skills from './sections/skills'
import Trusted from './sections/trusted'
import Seo from '../../components/Seo'
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from '../../constants/seo'

export default function Home() {
  return (
    <>
      <Seo
        title={DEFAULT_TITLE}
        description={DEFAULT_DESCRIPTION}
        path="/"
        type="profile"
      />
      <Hero />
      <Skills />
      <Award />
      <Projects />
      <Trusted />
      <Contact />
    </>
  )
}
