import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/Projects'
import ProjectPage from './pages/ProjectPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:id" element={<ProjectPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
