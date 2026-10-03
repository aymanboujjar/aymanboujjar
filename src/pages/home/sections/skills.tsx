import { useEffect, useRef, useState } from "react";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "framer-motion";
import Title from "../../../components/Title";
import { languages, frameworks, others } from "../../../constants/skills";
import { TransText } from "../../../components/TransText";

type SkillItem = (typeof languages)[number];

const categories = [
    {
        id: "languages",
        index: "01",
        title: { en: "Languages", fr: "Langages" },
        skills: languages,
    },
    {
        id: "frameworks",
        index: "02",
        title: { en: "Frameworks", fr: "Frameworks" },
        skills: frameworks,
    },
    {
        id: "others",
        index: "03",
        title: { en: "Others", fr: "Autres" },
        skills: others,
    },
] as const;

function MagneticSkill({
    skill,
    active,
    dimmed,
    onActivate,
}: {
    skill: SkillItem;
    active: boolean;
    dimmed: boolean;
    onActivate: () => void;
}) {
    const ref = useRef<HTMLButtonElement>(null);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const x = useSpring(mx, { stiffness: 200, damping: 18 });
    const y = useSpring(my, { stiffness: 200, damping: 18 });

    return (
        <motion.button
            type="button"
            ref={ref}
            style={{ x, y }}
            onClick={onActivate}
            onMouseEnter={onActivate}
            onFocus={onActivate}
            onMouseMove={(e) => {
                const el = ref.current;
                if (!el) return;
                const rect = el.getBoundingClientRect();
                mx.set((e.clientX - (rect.left + rect.width / 2)) * 0.28);
                my.set((e.clientY - (rect.top + rect.height / 2)) * 0.28);
            }}
            onMouseLeave={() => {
                mx.set(0);
                my.set(0);
            }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
                opacity: dimmed ? 0.4 : 1,
                scale: active ? 1.08 : 1,
            }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className={`relative flex h-[88px] w-[88px] items-center justify-center rounded-full border sm:h-[100px] sm:w-[100px]
                transition-[border-color,background-color,box-shadow] duration-400
                ${active
                    ? "border-alpha bg-alpha/15 shadow-[0_0_32px_rgba(0,119,190,0.35)]"
                    : "border-white/12 bg-[#070b14]/85 backdrop-blur-md"
                }`}
            aria-label={skill.name}
            aria-pressed={active}
        >
            {active && (
                <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-[-6px] rounded-full border border-dashed border-alpha/60"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
            )}
            <div
                className="flex h-[48%] w-[48%] items-center justify-center text-alpha [&_svg]:h-full [&_svg]:w-full"
                dangerouslySetInnerHTML={{ __html: skill.svg }}
            />
        </motion.button>
    );
}

export default function Skills() {
    const [catIndex, setCatIndex] = useState(0);
    const [skillIndex, setSkillIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const category = categories[catIndex];
    const skills = category.skills;
    const activeSkill = skills[Math.min(skillIndex, skills.length - 1)];

    // Auto-scan through skills, then advance category
    useEffect(() => {
        if (paused) return;
        const id = window.setInterval(() => {
            setSkillIndex((i) => {
                if (i + 1 >= categories[catIndex].skills.length) {
                    setCatIndex((c) => (c + 1) % categories.length);
                    return 0;
                }
                return i + 1;
            });
        }, 2200);
        return () => window.clearInterval(id);
    }, [paused, catIndex]);

    // Reset skill index when category changes via click
    const selectCategory = (i: number) => {
        setCatIndex(i);
        setSkillIndex(0);
    };

    return (
        <section
            id="skills"
            className="relative overflow-hidden py-16 lg:py-28"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.055]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(42deg, #0077BE 0 1px, transparent 1px 17px)",
                    maskImage:
                        "radial-gradient(ellipse at 60% 40%, black 12%, transparent 70%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute right-[10%] top-[35%] h-[380px] w-[380px] rounded-full bg-alpha/[0.08] blur-3xl"
            />

            <div className="relative px-4 sm:px-6 lg:px-16">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <Title
                            title={
                                <TransText
                                    en="Techno-Stack"
                                    fr="Stack Technologique"
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
                                en="Tools I ship with — hover a node to lock the scan, switch channels to filter the stack."
                                fr="Mes outils au quotidien — survolez un nœud pour figer le scan, changez de canal pour filtrer."
                            />
                        </motion.p>
                        <motion.ul
                            className="mt-4 max-w-lg space-y-1 text-sm leading-relaxed text-white/45 sm:text-base"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <li>
                                <TransText
                                    en="Frontend: React, TypeScript, Tailwind, Inertia"
                                    fr="Frontend : React, TypeScript, Tailwind, Inertia"
                                />
                            </li>
                            <li>
                                <TransText
                                    en="Backend: Laravel, PHP, REST APIs, MySQL"
                                    fr="Backend : Laravel, PHP, APIs REST, MySQL"
                                />
                            </li>
                            <li>
                                <TransText
                                    en="Mobile: React Native, Expo — iOS and Android"
                                    fr="Mobile : React Native, Expo — iOS et Android"
                                />
                            </li>
                        </motion.ul>
                    </div>

                    <motion.div
                        className="flex items-baseline gap-4 font-mono tabular-nums"
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs uppercase tracking-[0.3em] text-alpha">
                            <TransText en="Active" fr="Actif" />
                        </span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={`${category.id}-${activeSkill.name}`}
                                className="text-2xl text-white sm:text-3xl"
                                initial={{ y: 14, opacity: 0, filter: "blur(8px)" }}
                                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                exit={{ y: -14, opacity: 0, filter: "blur(8px)" }}
                                transition={{ duration: 0.3 }}
                            >
                                {activeSkill.name}
                            </motion.span>
                        </AnimatePresence>
                        <span className="text-sm text-white/35">
                            {String(skillIndex + 1).padStart(2, "0")}
                            <span className="text-white/20">
                                {" "}
                                / {String(skills.length).padStart(2, "0")}
                            </span>
                        </span>
                    </motion.div>
                </div>

                {/* Channel selectors */}
                <div className="mt-10 flex flex-wrap gap-2">
                    {categories.map((cat, i) => {
                        const on = i === catIndex;
                        return (
                            <button
                                key={cat.id}
                                type="button"
                                onClick={() => selectCategory(i)}
                                className={`relative flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-sm transition-colors duration-300
                                    ${on
                                        ? "border-alpha/50 bg-alpha/10 text-white shadow-[0_0_20px_rgba(0,119,190,0.2)]"
                                        : "border-white/10 bg-[#070b14]/60 text-white/60 hover:border-white/20 hover:text-white"
                                    }`}
                            >
                                <span className="text-[10px] text-alpha">{cat.index}</span>
                                <TransText en={cat.title.en} fr={cat.title.fr} />
                                {on && (
                                    <motion.span
                                        layoutId="skills-channel-ring"
                                        aria-hidden
                                        className="pointer-events-none absolute inset-[-3px] rounded-full border border-dashed border-alpha/45"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Skill matrix */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35 }}
                        className="mt-10 grid grid-cols-3 place-items-center gap-4 sm:grid-cols-4 sm:gap-5 md:grid-cols-5 lg:grid-cols-6 lg:gap-6"
                    >
                        {skills.map((skill, i) => (
                            <MagneticSkill
                                key={skill.name}
                                skill={skill}
                                active={i === skillIndex}
                                dimmed={paused && i !== skillIndex}
                                onActivate={() => setSkillIndex(i)}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Scan progress */}
                <div className="mt-10 flex justify-center gap-2">
                    {skills.map((skill, i) => (
                        <button
                            key={skill.name}
                            type="button"
                            onClick={() => setSkillIndex(i)}
                            className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-500
                                ${i === skillIndex ? "w-10 bg-alpha" : "w-5 bg-white/15 hover:bg-white/30"}`}
                            aria-label={skill.name}
                        >
                            {i === skillIndex && !paused && (
                                <motion.span
                                    className="absolute inset-0 bg-white/35"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{
                                        duration: 2.2,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
