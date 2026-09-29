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
                    <a
                        href="/Ayman_Boujjar_CV.docx"
                        download="Ayman_Boujjar_CV.docx"
                        className="inline-flex items-center gap-2 bg-alpha text-white px-6 py-3 rounded-2xl font-semibold
                            border-2 border-alpha transition-all duration-300 hover:scale-105"
                    >
                        <TransText en="Download CV" fr="Télécharger le CV" />
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </a>
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