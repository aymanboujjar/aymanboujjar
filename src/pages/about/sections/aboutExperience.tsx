import Title from "../../../components/Title";
import { experience } from "../../../constants/aboutInfo";
import { TransText } from "../../../components/TransText";
import ExperienceCard from "../../../components/ExperienceCard";

export default function AboutExperience() {
    return (
        <section className="px-16 py-20">
            <div className="w-full">
                <Title title={<TransText en="Professional Experience" fr="Expérience Professionnelle" />} />
                <div className="max-w-4xl mx-auto mt-12">
                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-alpha"></div>
                        <div className="space-y-12">

                            {experience.map((exp, index) => (
                                <ExperienceCard experience={exp} key={index} />
                            ))}
                            
                        </div>
                    </div>
                </div></div>
        </section>
    )
}