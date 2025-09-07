import { TransText } from "../../../components/TransText"
import profile from "../../../assets/images/bojojojo.jpeg"

export default function AboutHero() {
    return (
        <section className="px-16 py-20 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-5xl text-alpha font-semibold">
                        <TransText
                            en="Passionate Full Stack Developer"
                            fr="Développeur Full Stack Passionné"
                        />
                    </h2>
                    <p className="text-xl leading-relaxed">
                        <TransText
                            en="I'm a dedicated web developer with a passion for creating innovative solutions that make a difference. With expertise in modern web technologies and a collaborative approach, I bring ideas to life through clean, efficient code."
                            fr="Je suis un développeur web dévoué avec une passion pour créer des solutions innovantes qui font la différence. Avec une expertise dans les technologies web modernes et une approche collaborative, je donne vie aux idées grâce à un code propre et efficace."
                        />
                    </p>
                    <p className="text-lg">
                        <TransText
                            en="When I'm not coding, you'll find me exploring new technologies and contributing to open source projects."
                            fr="Quand je ne code pas, vous me trouverez en train d'explorer de nouvelles technologies et de contribuer à des projets open source."
                        />
                    </p>
                </div>
                <div className="flex justify-center">
                    <img
                        src={profile}
                        alt="Oussama Jebrane"
                        className="w-80 rounded-2xl hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </section>
    )
}