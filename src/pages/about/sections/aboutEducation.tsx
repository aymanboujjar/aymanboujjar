import Title from "../../../components/Title"
import { education } from "../../../constants/aboutInfo"
import { TransText } from "../../../components/TransText"
import EducationCard from "../../../components/EducationCard"

export default function AboutEducation() {

    return (
        <section className="px-16 py-20 relative">
            <div className='w-full'>
                <Title title={<TransText en="Education & Certifications" fr="Formation & Certifications" />} />
                <div className="max-w-4xl mx-auto mt-12 space-y-8">

                    {education.map((edu, index) => (
                        <EducationCard education={edu} key={index} />
                    ))}

                </div>
            </div>
        </section>
    )
}