import Skill from "../../../components/SkillCard";
import Title from "../../../components/Title";
import { languages, frameworks, others } from "../../../constants/skills";
import { TransText } from "../../../components/TransText";

export default function Skills() {

    const categories = [
        {
            title: <TransText en="Languages" fr="Langages" />,
            skills: languages
        },
        {
            title: <TransText en="Frameworks & Libraries" fr="Frameworks & Bibliothèques" />,
            skills: frameworks
        },
        {
            title: <TransText en="Others" fr="Autres" />,
            skills: others
        },
    ];


    return (
        <section id="skills" className="relative">
            <div className="w-full px-16">
                <Title title={<TransText en="Techno-Stack" fr="Stack Technologique" />} />
                <div className="flex items-center justify-center flex-col">
                    <div className="flex flex-col gap-6">

                        {categories.map((category, index) => (
                            <div key={index} className="mt-7">
                                <p className="text-3xl tracking-wider font-bold mb-2">{category.title}:</p>
                                <div
                                    className="flex items-center gap-3 flex-wrap">
                                    {category.skills.map((skill, i) => (
                                        <Skill skill={skill} key={i}/>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}