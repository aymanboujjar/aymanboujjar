import ProjectCard from "../../../components/ProjectCard"
import Title from "../../../components/Title"
import { proProjects , persoProjects } from "../../../constants/projects"
import { TransText } from "../../../components/TransText"

export default function Projects() {
    console.log(proProjects);
    
    return (
        <section id="projects" className="min-h-screen py-16 lg:py-24">
            <div className="px-4 sm:px-6 lg:px-8">
                <Title title={<TransText en="Projects" fr="Projets" />} />

                <div className="mt-12 lg:mt-16 space-y-8">
                    {/* pro projects */}
                    <div className="space-y-8">
                        <h2 className="text-2xl lg:text-3xl font-bold underline mb-8">
                            <TransText en="Professional Projects" fr="Projets Professionnels" />
                        </h2>

                        <div className="grid gap-2">

                            {proProjects.slice(0,3).map((project, ind) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    index={ind}
                                    type="pro"
                                />
                            ))}
                            
                        </div>
                    </div>

                    {/* perso projects */}
                    <div className="space-y-8 mt-16">
                        <h2 className="text-2xl lg:text-4xl font-bold underline mb-8">
                            <TransText en="Personal Projects" fr="Projets Personnels" />
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">

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
        </section>
    )
}
