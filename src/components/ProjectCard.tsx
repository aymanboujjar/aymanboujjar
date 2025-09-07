
import { Link } from 'react-router-dom';
import { TransText } from './TransText';

export default function ProjectCard({ project, index, type }: ProjectCardProps) {
    const reverse = index % 2 === 0

    return (
        <div
            className={`group mb-16 flex flex-col lg:flex-row gap-8 ${reverse ? 'lg:flex-row-reverse' : ''} 
                    bg-gray-900/50 backdrop-blur-sm
                    rounded-t-3xl p-6 lg:p-8 border border-gray-700/50 group
                    hover:border-alpha/50 transition-all duration-500 relative`}>

            {/* preview image if type is pro */}
            {type == "pro" && (
                <div className="lg:w-1/2 relative overflow-hidden rounded-2xl">
                    <img
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src={project.preview}
                        alt={project.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            )}

            {/* project details */}
            <div className={`${type == "pro" ? "lg:w-1/2" : "w-full"} flex flex-col justify-center space-y-6`}>
                <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-alpha group-hover:text-alpha/80 transition-colors">
                        {project.name}
                    </h3>

                    <p className="leading-relaxed text-sm lg:text-base">
                        <TransText {...project.desc} />
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {project.techs.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className={`px-3 py-1 rounded-full text-xs font-medium ${tech.color} transition-transform hover:scale-105`}
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>

                    {/* links */}
                    <div className="flex gap-4 pt-2">
                        {project.website && (
                            <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 bg-[#E1E1E1] text-black rounded-full transition-colors font-medium hover:scale-110"
                            >
                                Live Website →
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 bg-black text-white rounded-full transition-colors font-medium hover:scale-110"
                            >
                                GitHub →
                            </a>
                        )}
                    </div>

                    {/* project details page */}
                    <Link
                        to={`/project/${project.id}`}
                        className="inline-block w-full mt-4 
                                border bg-gradient-to-r px-4 py-3 rounded-xl text-center
                                font-medium from-alpha/30 to-alpha/20 border-alpha/50 transition-all duration-300 
                                hover:shadow-lg hover:shadow-alpha/10 hover:from-alpha/40 hover:to-alpha/30"
                    >
                        View Project Details
                    </Link>
                </div>
            </div>

            <div className='bg-alpha h-1 w-0 group-hover:w-full transition-all duration-500 absolute bottom-0 left-0'></div>
        </div>
    )
}
