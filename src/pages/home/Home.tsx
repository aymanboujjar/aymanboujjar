import Contact from './sections/contact'
import Hero from './sections/hero'
import Projects from './sections/projects'
import Skills from './sections/skills'
import Trusted from './sections/trusted'

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Trusted />
      <Contact />
    </>
  )
}