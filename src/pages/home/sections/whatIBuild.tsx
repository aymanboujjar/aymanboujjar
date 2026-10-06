import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Title from "../../../components/Title";
import { TransText } from "../../../components/TransText";
import { serviceLandings } from "../../../constants/serviceLandings";

export default function WhatIBuild() {
    return (
        <section id="services" className="relative overflow-hidden py-16 lg:py-24">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(-12deg, #0077BE 0 1px, transparent 1px 20px)",
                    maskImage:
                        "radial-gradient(ellipse at 50% 30%, black 12%, transparent 70%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute left-[10%] top-1/3 h-[340px] w-[340px] rounded-full bg-alpha/[0.07] blur-3xl"
            />

            <div className="relative px-4 sm:px-6 lg:px-16">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <Title
                            title={
                                <TransText en="What I Build" fr="Ce que je construis" />
                            }
                        />
                        <motion.p
                            className="mt-4 max-w-lg text-sm leading-relaxed text-white/55 sm:text-base"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <TransText
                                en="Full-stack, Laravel, and mobile work from Casablanca — linked to real project case studies."
                                fr="Travail full-stack, Laravel et mobile depuis Casablanca — relié à de vraies études de cas."
                            />
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/services"
                            className="group inline-flex items-center gap-3 border border-alpha/50 bg-alpha/10 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-alpha hover:shadow-[0_0_28px_rgba(0,119,190,0.3)]"
                        >
                            <TransText en="All services" fr="Tous les services" />
                            <span className="font-mono text-alpha transition-colors group-hover:text-white">
                                →
                            </span>
                        </Link>
                    </motion.div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-12">
                    {serviceLandings.map((service, i) => (
                        <motion.article
                            key={service.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: Math.min(i * 0.06, 0.24) }}
                            className="flex flex-col border border-white/10 bg-[#070b14]/80 p-6 backdrop-blur-md transition-[border-color,box-shadow] duration-500 hover:border-alpha/40 hover:shadow-[0_0_32px_rgba(0,119,190,0.1)]"
                        >
                            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-alpha">
                                {service.index}
                            </p>
                            <h3 className="text-xl font-semibold text-white">
                                <Link
                                    to={`/services/${service.slug}`}
                                    className="hover:text-alpha"
                                >
                                    <TransText {...service.name} />
                                </Link>
                            </h3>
                            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                                <TransText {...service.positioning} />
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {service.techs.slice(0, 4).map((tech) => (
                                    <span
                                        key={tech}
                                        className="border border-white/10 px-2.5 py-1 font-mono text-[11px] text-white/70"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <Link
                                to={`/services/${service.slug}`}
                                className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-alpha transition-colors hover:text-white"
                            >
                                <TransText en="Details" fr="Détails" /> →
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
