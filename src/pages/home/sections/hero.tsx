import { TransText } from "../../../components/TransText";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

export default function Hero() {
    
    return (
        <section className="min-h-[90vh] relative overflow-hidden" id="hero">

            <motion.div
                className="flex items-center justify-around w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                <motion.div
                    className="text-center space-y-6 p-3"
                    variants={itemVariants}
                >
                    {/* intro */}
                    <motion.h1
                        className="text-2xl lg:text-5xl font-bold"
                        variants={itemVariants}
                    >
                        <TransText
                            en="Hi 👋, I'm Ayman Boujjar"
                            fr="Salut 👋, je suis Ayman Boujjar"
                        />
                    </motion.h1>
                    <br />
                    <motion.div variants={itemVariants}>
                        <div className="flex gap-1">
                            <motion.h1
                                className="text-4xl lg:text-7xl font-bold text-alpha"
                                variants={itemVariants}
                            >
                                <TransText
                                    en="FULLSTACK WEB DEVELOPER"
                                    fr="DÉVELOPPEUR WEB FULLSTACK"
                                />
                            </motion.h1>
                            <motion.div
                                className="w-[4px] h-[50px] bg-alpha"
                                animate={{
                                    y: [0, -10, 0],
                                    opacity: [1, 0.7, 1]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            ></motion.div>
                        </div>
                        <br />
                        <motion.h3
                            className="text-xl lg:text-2xl font-bold"
                            variants={itemVariants}
                        >
                            <TransText
                                en="I conceive and build intuitive websites and mobile applications."
                                fr="Je conçois et développe des sites web et applications mobiles intuitifs."
                            />
                        </motion.h3>
                    </motion.div>

                    {/* cta buttons */}
                    <br />
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        variants={itemVariants}
                    >
                        <motion.a
                            href="#projects"
                            className="bg-alpha text-white px-8 py-4 rounded-2xl font-semibold
                                border-2 border-alpha transition-all duration-300
                                inline-flex items-center gap-2 group"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <TransText
                                en="View My Work"
                                fr="Voir Mon Travail"
                            />
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.a>

                        <motion.a
                            href="#contact"
                            className="bg-transparent text-alpha border-2 border-alpha
                                px-8 py-4 rounded-2xl font-semibold transition-all duration-300
                                inline-flex items-center gap-2"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255,255,255,0.1)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <TransText
                                en="Get In Touch"
                                fr="Contactez-Moi"
                            />
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </motion.a>
                    </motion.div>

                    {/* arrow button */}
                    <a href="#skills" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <svg className="w-6 h-6 text-alpha" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                </motion.div>


            </motion.div>
        </section>
    )
}