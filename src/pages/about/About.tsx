import AboutEducation from './sections/aboutEducation'
import AboutExperience from './sections/aboutExperience'
import AboutHero from './sections/aboutHero'
import Seo from '../../components/Seo'

export default function About() {
  return (
    <>
      <Seo
        title="About Ayman Boujjar — Full-Stack & Mobile Developer and Freelancer"
        description="About Ayman Boujjar — full-stack & mobile developer and freelancer in Casablanca, Morocco. Full Stack Developer at LionsGeek Association. Available for worldwide remote work. Laravel, React, React Native, Expo — web apps, mobile apps, and APIs."
        path="/about"
        type="profile"
      />
      <AboutHero />
      <AboutEducation />
      <AboutExperience />
    </>
  )
}
