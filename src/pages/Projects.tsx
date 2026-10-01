import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";
import Seo from "../components/Seo";
import { proProjects } from "../constants/projects";
import { TransText } from "../components/TransText";

export default function Projects() {
    const [active, setActive] = useState(0);
    const [filter, setFilter] = useState<"all" | "web" | "mobile">("all");

    const filtered = useMemo(() => {
        if (filter === "all") return proProjects;
        return proProjects.filter((p) => {
            const techs = p.techs.map((t) => t.name.toLowerCase()).join(" ");
            const isMobile =
                techs.includes("react native") ||
                techs.includes("expo") ||
                p.name.toLowerCase().includes("mobile");
            return filter === "mobile" ? isMobile : !isMobile;
        });
    }, [filter]);

    const current = filtered[Math.min(active, filtered.length - 1)] ?? filtered[0];

    const filters = [
        { id: "all" as const, index: "01", label: { en: "All signals", fr: "Tous les signaux" } },
        { id: "web" as const, index: "02", label: { en: "Web", fr: "Web" } },
        { id: "mobile" as const, index: "03", label: { en: "Mobile", fr: "Mobile" } },
    ];

    return (
        <div className="relative min-h-screen overflow-hidden py-16 lg:py-28">
            <Seo
                title="Projects — Ayman Boujjar | Full-Stack & Mobile Developer"
                description="Explore web and mobile projects by Ayman Boujjar — Laravel, React, React Native, Expo, iOS, Android and API-driven applications for real clients."
                path="/projects"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(12deg, #0077BE 0 1px, transparent 1px 19px)",
                    maskImage:
                        "radial-gradient(ellipse at 50% 20%, black 15%, transparent 70%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute right-[5%] top-[20%] h-[400px] w-[400px] rounded-full bg-alpha/[0.07] blur-3xl"
            />

            <div className="relative px-4 sm:px-6 lg:px-16">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <Title title={<TransText en="My Projects" fr="Mes Projets" />} />
                        <motion.p
                            className="mt-4 max-w-lg text-sm leading-relaxed text-white/55 sm:text-base"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <TransText
                                en="Full archive of shipped work — filter the band, lock a case, open the details."
                                fr="Archive complète des projets livrés — filtrez la bande, verrouillez un cas, ouvrez les détails."
                            />
                        </motion.p>
                    </div>

                    <motion.div
                        className="flex items-baseline gap-4 font-mono tabular-nums"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 }}
                    >
                        <span className="text-xs uppercase tracking-[0.3em] text-alpha">
                            <TransText en="Archive" fr="Archive" />
                        </span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={current?.name ?? "empty"}
                                className="max-w-[10rem] truncate text-2xl text-white sm:max-w-none sm:text-3xl"
                                initial={{ y: 14, opacity: 0, filter: "blur(8px)" }}
                                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                exit={{ y: -14, opacity: 0, filter: "blur(8px)" }}
                                transition={{ duration: 0.3 }}
                            >
                                {current?.name ?? "—"}
                            </motion.span>
                        </AnimatePresence>
                        <span className="text-sm text-white/35">
                            {filtered.length
                                ? String(Math.min(active, filtered.length - 1) + 1).padStart(2, "0")
                                : "00"}
                            <span className="text-white/20">
                                {" "}
                                / {String(filtered.length).padStart(2, "0")}
                            </span>
                        </span>
                    </motion.div>
                </div>

                {/* band filters */}
                <div className="mt-10 flex flex-wrap gap-2">
                    {filters.map((f) => {
                        const on = filter === f.id;
                        return (
                            <button
                                key={f.id}
                                type="button"
                                onClick={() => {
                                    setFilter(f.id);
                                    setActive(0);
                                }}
                                className={`relative flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-sm transition-colors duration-300
                                    ${on
                                        ? "border-alpha/50 bg-alpha/10 text-white shadow-[0_0_20px_rgba(0,119,190,0.2)]"
                                        : "border-white/10 bg-[#070b14]/60 text-white/60 hover:border-white/20 hover:text-white"
                                    }`}
                            >
                                <span className="text-[10px] text-alpha">{f.index}</span>
                                <TransText en={f.label.en} fr={f.label.fr} />
                                {on && (
                                    <motion.span
                                        layoutId="projects-page-filter-ring"
                                        aria-hidden
                                        className="pointer-events-none absolute inset-[-3px] rounded-full border border-dashed border-alpha/45"
                                    />
                                )}
                            </button>
                        );
                    })}
                    <span className="ml-auto self-center font-mono text-xs text-white/35">
                        {filtered.length}{" "}
                        <TransText en="cases" fr="cas" />
                    </span>
                </div>

                {/* quick jump rail */}
                <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                    {filtered.map((project, i) => {
                        const on = i === active;
                        return (
                            <button
                                key={project.id}
                                type="button"
                                onClick={() => {
                                    setActive(i);
                                    document
                                        .getElementById(`case-${project.id}`)
                                        ?.scrollIntoView({ behavior: "smooth", block: "center" });
                                }}
                                className={`shrink-0 rounded-full border px-3 py-1.5 font-mono text-xs transition-colors
                                    ${on
                                        ? "border-alpha/40 bg-alpha/10 text-white"
                                        : "border-white/10 text-white/50 hover:text-white"
                                    }`}
                            >
                                <span className="text-alpha">
                                    {String(i + 1).padStart(2, "0")}
                                </span>{" "}
                                {project.name}
                            </button>
                        );
                    })}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={filter}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35 }}
                        className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
                    >
                        {filtered.map((project, ind) => (
                            <div
                                key={project.id}
                                id={`case-${project.id}`}
                                onMouseEnter={() => setActive(ind)}
                                onFocusCapture={() => setActive(ind)}
                            >
                                <ProjectCard
                                    project={project}
                                    index={ind}
                                    type="pro"
                                    layout="stack"
                                />
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {filtered.length === 0 && (
                    <p className="mt-16 text-center font-mono text-sm text-white/40">
                        <TransText
                            en="No cases on this band."
                            fr="Aucun cas sur cette bande."
                        />
                    </p>
                )}

                <motion.div
                    className="mt-14 flex justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Link
                        to="/#projects"
                        className="group inline-flex items-center gap-3 border border-white/15 px-6 py-3 font-medium text-white/70 transition-colors hover:border-alpha hover:text-alpha"
                    >
                        ← <TransText en="Back to home signal" fr="Retour au signal d’accueil" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
