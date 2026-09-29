import { motion } from 'framer-motion'
import Title from '../../../components/Title'
import { socials } from '../../../constants/socials'
import { TransText } from '../../../components/TransText'

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
}

const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.55, ease: 'easeOut' }
    }
}

export default function Contact() {
    return (
        <motion.section
            id="contact"
            className="py-16 lg:py-24 relative overflow-hidden"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={containerVariants}
        >
            {/* atmosphere */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, #0077BE 1px, transparent 1px), linear-gradient(to bottom, #0077BE 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                    maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-alpha/15 blur-3xl"
            />

            <div className="relative px-4 sm:px-6 lg:px-16">
                <Title title={<TransText en="Get In Touch" fr="Contactez-Moi" />} />

                <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
                    <motion.div className="lg:col-span-5 space-y-6" variants={itemVariants}>
                        <p className="text-alpha text-sm tracking-[0.25em] uppercase">
                            <TransText en="Available for work" fr="Disponible pour collaborer" />
                        </p>
                        <h3 className="text-3xl lg:text-5xl font-bold leading-tight">
                            <TransText
                                en="Let's build something solid."
                                fr="Construisons quelque chose de solide."
                            />
                        </h3>
                        <p className="text-white/70 text-base lg:text-lg leading-relaxed max-w-md">
                            <TransText
                                en="Open to new opportunities and interesting projects. Questions, collabs, or a quick hello — reach out anytime."
                                fr="Ouvert aux nouvelles opportunités et aux projets intéressants. Questions, collabs, ou un simple bonjour — écrivez-moi."
                            />
                        </p>

                        <motion.a
                            href="/Ayman_Boujjar_CV.docx"
                            download="Ayman_Boujjar_CV.docx"
                            className="inline-flex items-center gap-3 bg-alpha text-white px-6 py-3.5 font-semibold
                                border border-alpha transition-colors duration-300 hover:bg-transparent hover:text-alpha"
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <TransText en="Download CV" fr="Télécharger le CV" />
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </motion.a>
                    </motion.div>

                    <motion.div className="lg:col-span-7 space-y-3" variants={itemVariants}>
                        {socials.map((soc) => (
                            <motion.a
                                key={soc.name}
                                href={soc.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-5 border border-white/10 bg-black/40 px-5 py-5
                                    transition-all duration-300 hover:border-alpha hover:bg-alpha/5"
                                variants={itemVariants}
                                whileHover={{ x: 6 }}
                            >
                                <div className="shrink-0 text-alpha transition-transform duration-300 group-hover:scale-110">
                                    {soc.icon}
                                </div>
                                <div className="min-w-0 flex-1 text-left">
                                    <p className="text-xs tracking-[0.2em] uppercase text-white/45 mb-1">
                                        {soc.name}
                                    </p>
                                    <p className="text-lg lg:text-xl text-white truncate group-hover:text-alpha transition-colors">
                                        {soc.label}
                                    </p>
                                </div>
                                <svg
                                    className="w-5 h-5 shrink-0 text-white/30 transition-all duration-300 group-hover:text-alpha group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
