import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import ServiceLanding from './pages/ServiceLanding'
import Projects from './pages/Projects'
import ProjectPage from './pages/ProjectPage'
import Articles from './pages/Articles'
import ArticlePage from './pages/ArticlePage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceLanding />} />
          <Route path="projects" element={<Projects />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:slug" element={<ArticlePage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project/:name" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
