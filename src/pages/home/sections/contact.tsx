import { motion } from 'framer-motion'
import Title from '../../../components/Title'
import { socials } from '../../../constants/socials'
import { TransText } from '../../../components/TransText'

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

export default function Contact() {

    return (
        <motion.section
            id="contact"
            className="py-16 lg:py-24"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="px-4 sm:px-6 lg:px-8">
                <Title title={<TransText en="Get In Touch" fr="Contactez-Moi" />} />

                <div className="mt-12 lg:mt-16 max-w-4xl mx-auto">
                    {/* Centered Contact Content */}
                    <motion.div
                        className="text-center space-y-8"
                        variants={itemVariants}
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl lg:text-3xl font-bold text-alpha mb-6">
                                <TransText
                                    en="Let's Work Together"
                                    fr="Travaillons Ensemble"
                                />
                            </h3>
                            <p className="text text-lg leading-relaxed max-w-2xl mx-auto">
                                <TransText
                                    en="I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!"
                                    fr="Je suis toujours intéressé par de nouvelles opportunités et des projets passionnants. Que vous ayez une question ou que vous souhaitiez simplement dire bonjour, n'hésitez pas à me contacter !"
                                />
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.2
                                    }
                                }
                            }}
                        >
                            {
                                socials.map((soc, ind) => (

                                    <motion.div
                                        key={ind}
                                        className="flex  justify-center gap-4 p-6 bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 hover:border-alpha/50 transition-all duration-300"
                                        variants={itemVariants}
                                        whileHover={{
                                            scale: 1.05,
                                            y: -5,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        <a href={soc.link}
                                            target="_blank" rel="noopener noreferrer"
                                            className="text-white hover:text-alpha transition-colors font-medium flex flex-col items-center gap-2">
                                            <div className="w-16 h-16 bg-alpha/20 rounded-full flex items-center justify-center">
                                                {soc.icon}
                                            </div>
                                            <div className="text-center">
                                                <p className=" text-sm mb-2">{soc.name}</p>
                                                <p className="text-lg">{soc.label}</p>
                                            </div>
                                        </a>
                                    </motion.div>
                                ))
                            }
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}