import AboutEducation from './sections/aboutEducation'
import AboutExperience from './sections/aboutExperience'
import AboutHero from './sections/aboutHero'
import Seo from '../../components/Seo'
import { ABOUT_PAGE_SEO } from '../../constants/seo'

export default function About() {
  return (
    <>
      <Seo {...ABOUT_PAGE_SEO} />
      <AboutHero />
      <AboutEducation />
      <AboutExperience />
    </>
  )
}
