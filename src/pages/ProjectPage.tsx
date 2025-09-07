import { useParams, Navigate } from 'react-router-dom'
import ProjectDetails from '../components/ProjectDetails'
import { proProjects, persoProjects } from '../constants/projects'
import { TransText } from '../components/TransText'

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  
  // if no id then go back to home
  if (!id) {
    return <Navigate to="/" replace />
  }

  const projectId = parseInt(id, 10)
  // if project id is not a number then go back to home
  if (isNaN(projectId)) {
    return <Navigate to="/" replace />
  }

  // combine both project arrays and find the selected project
  const project = [...proProjects, ...persoProjects].find(p => p.id === projectId)

  // if project not found the 404
  if (!project) {
    
    return (
      <div className="min-h-screen py-16 lg:py-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-alpha mb-4">
            <TransText en="Project Not Found" fr="Projet Introuvable" />
          </h1>
          <p className="mb-8">
            <TransText
              en="The project you're looking for doesn't exist."
              fr="Le projet que vous recherchez n'existe pas."
            />
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-alpha text-black rounded-lg hover:bg-alpha/80 transition-colors"
          >
            <TransText en="Back to Home" fr="Retour à l'Accueil" />
          </a>
        </div>
      </div>
    )
  }

  // finally return project details 
  return <ProjectDetails project={project} />
}