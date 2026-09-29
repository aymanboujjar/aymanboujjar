import { TransText } from "./TransText";
import { motion } from "framer-motion";

export default function ExperienceCard({
    experience,
    index = 0,
    active = false,
    onActivate,
}: ExperienceCardProps & {
    index?: number;
    active?: boolean;
    onActivate?: () => void;
}) {
    const pad = String(index + 1).padStart(2, "0");

    return (
        <motion.div
            className="relative pl-14"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onMouseEnter={onActivate}
            onFocusCapture={onActivate}
        >
            {/* timeline node */}
            <div
                className={`absolute left-0 top-6 z-10 flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-400
                    ${active
                        ? "border-alpha bg-alpha/20 shadow-[0_0_20px_rgba(0,119,190,0.35)]"
                        : "border-white/20 bg-[#070b14]"
                    }`}
            >
                {active && (
                    <motion.span
                        aria-hidden
                        className="pointer-events-none absolute inset-[-4px] rounded-full border border-dashed border-alpha/55"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                )}
                <span className="font-mono text-[9px] text-alpha">{pad}</span>
            </div>

            <article
                className={`group relative overflow-hidden border p-6 backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-500
                    ${active
                        ? "border-alpha/45 bg-alpha/10 shadow-[0_0_32px_rgba(0,119,190,0.12)]"
                        : "border-white/10 bg-[#070b14]/80 hover:border-alpha/35"
                    }`}
            >
                <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.28em] text-alpha">
                            <TransText en="Mission" fr="Mission" /> {pad}
                        </p>
                        <h3 className="text-xl font-bold text-white sm:text-2xl">
                            <TransText {...experience.role} />
                        </h3>
                    </div>
                    <span className="font-mono text-sm text-white/45 md:shrink-0">
                        {experience.period}
                    </span>
                </div>

                <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 inline-block text-lg text-white/80 underline decoration-alpha/40 underline-offset-4 transition-colors hover:text-alpha"
                >
                    {experience.company}
                </a>

                <ul className="space-y-2.5">
                    {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-white/60 sm:text-base">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-alpha" />
                            <TransText {...achievement} />
                        </li>
                    ))}
                </ul>

                <div
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-alpha to-transparent transition-all duration-500 ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                />
            </article>
        </motion.div>
    );
}
