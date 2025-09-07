import ProjectCard from "../components/ProjectCard"
import Title from "../components/Title"
import { persoProjects, proProjects } from "../constants/projects"
import { TransText } from "../components/TransText"

export default function Projects() {
    return (
        <div className="min-h-screen py-16 lg:py-24">
            <div className="px-4 sm:px-6 lg:px-8">
                <Title title={<TransText en="My Projects" fr="Mes Projets" />} />

                <div className="mt-12 lg:mt-16 space-y-16">
                    {/* Professional Projects Section */}
                    <div className="space-y-8">
                        <h2 className="text-2xl lg:text-3xl font-bold text-alpha underline decoration-alpha/50 underline-offset-8 mb-8">
                            <TransText en="Professional Projects" fr="Projets Professionnels" />
                        </h2>

                        <div className="space-y-8 grid grid-cols-1 lg:grid-cols-2 gap-3">
                            {proProjects.map((project, ind) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    index={ind}
                                    type="pro"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Personal Projects Section */}
                    <div className="space-y-8">
                        <h2 className="text-2xl lg:text-3xl font-bold text-alpha underline decoration-alpha/50 underline-offset-8 mb-8">

                            <TransText en="Personal Projects" fr="projets Personnels" />

                        </h2>

                        <div className="space-y-8 grid grid-cols-1 lg:grid-cols-2 gap-2">
                            {persoProjects.map((project, ind) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    index={ind + proProjects.length}
                                    type="perso"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
