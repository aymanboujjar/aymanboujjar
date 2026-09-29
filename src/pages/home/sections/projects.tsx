import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../../../components/ProjectCard";
import Title from "../../../components/Title";
import { proProjects } from "../../../constants/projects";
import { TransText } from "../../../components/TransText";

const featured = proProjects.slice(0, 4);

export default function Projects() {
    const [active, setActive] = useState(0);
    const current = featured[active] ?? featured[0];

    return (
        <section id="projects" className="relative min-h-screen overflow-hidden py-16 lg:py-28">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(-18deg, #0077BE 0 1px, transparent 1px 19px)",
                    maskImage:
                        "radial-gradient(ellipse at 35% 50%, black 15%, transparent 72%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -left-20 top-1/3 h-[420px] w-[420px] rounded-full bg-alpha/[0.07] blur-3xl"
            />

            <div className="relative px-4 sm:px-6 lg:px-16">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <Title title={<TransText en="Projects" fr="Projets" />} />
                        <motion.p
                            className="mt-4 max-w-md text-sm leading-relaxed text-white/55 sm:text-base"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <TransText
                                en="Selected builds that shipped — hover a case to lock the transmission."
                                fr="Une sélection de projets livrés — survolez un cas pour figer la transmission."
                            />
                        </motion.p>
                    </div>

                    <motion.div
                        className="flex items-baseline gap-4 font-mono tabular-nums"
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs uppercase tracking-[0.3em] text-alpha">
                            <TransText en="Transmission" fr="Transmission" />
                        </span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={current.name}
                                className="text-2xl text-white sm:text-3xl"
                                initial={{ y: 14, opacity: 0, filter: "blur(8px)" }}
                                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                exit={{ y: -14, opacity: 0, filter: "blur(8px)" }}
                                transition={{ duration: 0.3 }}
                            >
                                {current.name}
                            </motion.span>
                        </AnimatePresence>
                        <span className="text-sm text-white/35">
                            {String(active + 1).padStart(2, "0")}
                            <span className="text-white/20">
                                {" "}
                                / {String(featured.length).padStart(2, "0")}
                            </span>
                        </span>
                    </motion.div>
                </div>

                {/* channel index rail */}
                <div className="mt-10 flex flex-wrap gap-2">
                    {featured.map((project, i) => {
                        const on = i === active;
                        return (
                            <button
                                key={project.id}
                                type="button"
                                onClick={() => setActive(i)}
                                className={`relative flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-sm transition-colors duration-300
                                    ${on
                                        ? "border-alpha/50 bg-alpha/10 text-white shadow-[0_0_20px_rgba(0,119,190,0.2)]"
                                        : "border-white/10 bg-[#070b14]/60 text-white/60 hover:border-white/20 hover:text-white"
                                    }`}
                            >
                                <span className="text-[10px] text-alpha">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="max-w-[9rem] truncate">{project.name}</span>
                                {on && (
                                    <motion.span
                                        layoutId="projects-channel-ring"
                                        aria-hidden
                                        className="pointer-events-none absolute inset-[-3px] rounded-full border border-dashed border-alpha/45"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                <div className="mt-10 space-y-6 lg:mt-12 lg:space-y-8">
                    {featured.map((project, ind) => (
                        <div
                            key={project.id}
                            onMouseEnter={() => setActive(ind)}
                            onFocusCapture={() => setActive(ind)}
                        >
                            <ProjectCard
                                project={project}
                                index={ind}
                                type="pro"
                            />
                        </div>
                    ))}
                </div>

                <motion.div
                    className="mt-12 flex justify-center"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Link
                        to="/projects"
                        className="group inline-flex items-center gap-3 border border-alpha/50 bg-alpha/10 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-alpha hover:shadow-[0_0_32px_rgba(0,119,190,0.3)]"
                    >
                        <TransText en="View all projects" fr="Voir tous les projets" />
                        <span className="font-mono text-alpha transition-colors group-hover:text-white">
                            →
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
