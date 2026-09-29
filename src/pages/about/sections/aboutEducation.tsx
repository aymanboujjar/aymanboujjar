import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../../../components/Title";
import { education } from "../../../constants/aboutInfo";
import { TransText } from "../../../components/TransText";
import EducationCard from "../../../components/EducationCard";

export default function AboutEducation() {
    const [active, setActive] = useState(0);
    const current = education[active] ?? education[0];

    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-16 lg:py-28">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(-28deg, #0077BE 0 1px, transparent 1px 18px)",
                    maskImage:
                        "radial-gradient(ellipse at 70% 40%, black 10%, transparent 68%)",
                }}
            />

            <div className="relative w-full">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <Title
                            title={
                                <TransText
                                    en="Education & Certifications"
                                    fr="Formation & Certifications"
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
                                en="Formation path that shaped the stack — hover a node to lock the record."
                                fr="Le parcours qui a façonné la stack — survolez un nœud pour figer l’enregistrement."
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
                            <TransText en="Record" fr="Dossier" />
                        </span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={current.institution + current.year}
                                className="max-w-[12rem] truncate text-xl text-white sm:max-w-none sm:text-2xl"
                                initial={{ y: 12, opacity: 0, filter: "blur(6px)" }}
                                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                exit={{ y: -12, opacity: 0, filter: "blur(6px)" }}
                                transition={{ duration: 0.28 }}
                            >
                                {current.institution}
                            </motion.span>
                        </AnimatePresence>
                        <span className="text-sm text-white/35">
                            {String(active + 1).padStart(2, "0")}
                            <span className="text-white/20">
                                {" "}
                                / {String(education.length).padStart(2, "0")}
                            </span>
                        </span>
                    </motion.div>
                </div>

                <div className="mx-auto mt-12 max-w-4xl space-y-4">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setActive(index)}
                            onFocusCapture={() => setActive(index)}
                        >
                            <EducationCard education={edu} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
