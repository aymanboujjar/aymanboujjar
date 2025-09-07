import { TransText } from "./TransText";


export default function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <div className=" pl-12">
            <div className="absolute left-0 w-8 h-8 bg-alpha rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-alpha">
                        <TransText {...experience.role} />
                    </h3>
                    <span className="font-medium">{experience.period}</span>
                </div>
                <a href={experience.website} className="text-xl underline mb-4">{experience.company}</a>
                <ul className="space-y-2">
                    {experience.achievements.map((achievement, i) => (
                        <li key={i} className=" flex items-start">
                            <span className="text-alpha mr-2">•</span>
                            <TransText {...achievement} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}