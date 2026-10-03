import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Title from "../../../components/Title";
import { TransText } from "../../../components/TransText";
import { awardProject } from "../../../constants/projects";
import { projectImageAlt } from "../../../constants/seo";

export default function Award() {
    const imageAlt = projectImageAlt(awardProject);

    return (
        <section id="award" className="relative overflow-hidden py-16 lg:py-24">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(24deg, #0077BE 0 1px, transparent 1px 20px)",
                    maskImage:
                        "radial-gradient(ellipse at 70% 40%, black 12%, transparent 68%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -right-16 top-1/4 h-[360px] w-[360px] rounded-full bg-alpha/[0.08] blur-3xl"
            />

            <div className="relative px-4 sm:px-6 lg:px-16">
                <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.35em] text-alpha">
                            <TransText en="Distinction" fr="Distinction" />
                        </p>
                        <Title title={<TransText en="Award" fr="Prix" />} />
                    </div>
                    <motion.p
                        className="max-w-md text-sm leading-relaxed text-white/55 sm:text-base"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <TransText
                            en="Festival win — kept apart from the project archive."
                            fr="Victoire festival — présentée à part de l’archive projets."
                        />
                    </motion.p>
                </div>

                <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="group relative grid overflow-hidden border border-alpha/30 bg-[#070b14]/85 backdrop-blur-md lg:grid-cols-2"
                >
                    <div className="relative overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
                        <img
                            src={awardProject.preview}
                            alt={imageAlt}
                            className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050810]/70 via-transparent to-transparent" />
                        <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.3em] text-alpha">
                            <TransText en="Coup de Cœur Jury" fr="Coup de Cœur Jury" />
                        </span>
                    </div>

                    <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 lg:p-10">
                        <div>
                            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-alpha">
                                [IN]VISIBLE Festival 2026 · Brussels
                            </p>
                            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                                {awardProject.name}
                            </h2>
                        </div>

                        <p className="text-sm leading-relaxed text-white/60 sm:text-base">
                            <TransText
                                en={awardProject.desc.en}
                                fr={awardProject.desc.fr}
                            />
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {awardProject.techs.map((tech) => (
                                <span
                                    key={tech.name}
                                    className={`rounded px-2.5 py-1 font-mono text-[11px] ${tech.color}`}
                                >
                                    {tech.name}
                                </span>
                            ))}
                        </div>

                        <div>
                            <Link
                                to={`/project/${awardProject.id}`}
                                className="group/link inline-flex items-center gap-3 border border-alpha/50 bg-alpha/10 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-alpha hover:shadow-[0_0_28px_rgba(0,119,190,0.3)]"
                            >
                                <TransText en="Open case" fr="Ouvrir le cas" />
                                <span className="font-mono text-alpha transition-colors group-hover/link:text-white">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </motion.article>
            </div>
        </section>
    );
}
