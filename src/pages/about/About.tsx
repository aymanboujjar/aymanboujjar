import AboutEducation from './sections/aboutEducation'
import AboutExperience from './sections/aboutExperience'
import AboutHero from './sections/aboutHero'
import AboutInterests from './sections/aboutInterests'


export default function About() {

  return (
    <>
      {/* hero section */}
      <AboutHero />

      {/* Education Section */}
      <AboutEducation />

      {/* Experience Section */}
      <AboutExperience />

      {/* Personal Interests */}
      <AboutInterests />
    </>
  )
}