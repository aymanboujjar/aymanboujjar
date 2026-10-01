import AboutEducation from './sections/aboutEducation'
import AboutExperience from './sections/aboutExperience'
import AboutHero from './sections/aboutHero'
import Seo from '../../components/Seo'

export default function About() {
  return (
    <>
      <Seo
        title="About Ayman Boujjar — Full-Stack & Mobile Developer"
        description="Learn about Ayman Boujjar — Full-Stack & Mobile Developer based in Morocco, with experience in Laravel, React, React Native, Expo, APIs and real client projects."
        path="/about"
        type="profile"
      />
      <AboutHero />
      <AboutEducation />
      <AboutExperience />
    </>
  )
}
