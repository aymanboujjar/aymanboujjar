import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../../../components/Title";
import { experience } from "../../../constants/aboutInfo";
import { TransText } from "../../../components/TransText";
import ExperienceCard from "../../../components/ExperienceCard";

export default function AboutExperience() {
    const [active, setActive] = useState(0);
    const current = experience[active] ?? experience[0];

    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-16 lg:py-28">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(48deg, #0077BE 0 1px, transparent 1px 17px)",
                    maskImage:
                        "radial-gradient(ellipse at 30% 50%, black 12%, transparent 70%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute right-[8%] top-1/3 h-[360px] w-[360px] rounded-full bg-alpha/[0.07] blur-3xl"
            />

            <div className="relative w-full">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <Title
                            title={
                                <TransText
                                    en="Professional Experience"
                                    fr="Expérience Professionnelle"
                                />
                            }
                        />
                        <motion.p
                            className="mt-4 max-w-md text-sm leading-relaxed text-white/55 sm:text-base"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <TransText
                                en="Missions on the timeline — hover a node to lock the transmission."
                                fr="Missions sur la timeline — survolez un nœud pour figer la transmission."
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
                                key={current.company}
                                className="max-w-[14rem] truncate text-xl text-white sm:max-w-xs sm:text-2xl"
                                initial={{ y: 12, opacity: 0, filter: "blur(6px)" }}
                                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                exit={{ y: -12, opacity: 0, filter: "blur(6px)" }}
                                transition={{ duration: 0.28 }}
                            >
                                {current.company}
                            </motion.span>
                        </AnimatePresence>
                        <span className="text-sm text-white/35">
                            {String(active + 1).padStart(2, "0")}
                            <span className="text-white/20">
                                {" "}
                                / {String(experience.length).padStart(2, "0")}
                            </span>
                        </span>
                    </motion.div>
                </div>

                {/* channel pills */}
                <div className="mt-10 flex flex-wrap gap-2">
                    {experience.map((exp, i) => {
                        const on = i === active;
                        return (
                            <button
                                key={exp.company + exp.period}
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
                                <span className="max-w-[10rem] truncate">{exp.company}</span>
                                {on && (
                                    <motion.span
                                        layoutId="about-exp-channel-ring"
                                        aria-hidden
                                        className="pointer-events-none absolute inset-[-3px] rounded-full border border-dashed border-alpha/45"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                <div className="mx-auto mt-12 max-w-4xl">
                    <div className="relative">
                        <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-alpha via-alpha/40 to-transparent" />
                        <div className="space-y-8">
                            {experience.map((exp, index) => (
                                <ExperienceCard
                                    key={exp.company + exp.period}
                                    experience={exp}
                                    index={index}
                                    active={active === index}
                                    onActivate={() => setActive(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
