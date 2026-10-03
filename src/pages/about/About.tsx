import AboutEducation from './sections/aboutEducation'
import AboutExperience from './sections/aboutExperience'
import AboutHero from './sections/aboutHero'
import Seo from '../../components/Seo'

export default function About() {
  return (
    <>
      <Seo
        title="About Ayman Boujjar — Full-Stack & Mobile Developer"
        description="About Ayman Boujjar — full-stack and mobile developer (développeur full-stack et mobile) in Casablanca, Morocco. Frontend, backend, Laravel, React, React Native, Expo, iOS and Android apps for real clients."
        path="/about"
        type="profile"
      />
      <AboutHero />
      <AboutEducation />
      <AboutExperience />
    </>
  )
}
