import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import ServiceLanding from './pages/ServiceLanding'
import Projects from './pages/Projects'
import ProjectPage from './pages/ProjectPage'
import NotFound from './pages/NotFound'

export default function AppRoutes() {
  return <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="services/:slug" element={<ServiceLanding />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      <Route path="project/:name" element={<ProjectPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
}
