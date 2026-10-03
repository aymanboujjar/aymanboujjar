import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TransText } from "./TransText";
import { projectImageAlt } from "../constants/seo";

interface ProjectDetailsProps {
    project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
    const [galleryIndex, setGalleryIndex] = useState(0);
    const imageAlt = projectImageAlt(project);

    const gallery = useMemo(() => {
        const extras = project.additionalImages ?? [];
        return [project.preview, ...extras];
    }, [project]);

    useEffect(() => {
        if (gallery.length < 2) return;
        const id = window.setInterval(() => {
            setGalleryIndex((i) => (i + 1) % gallery.length);
        }, 5000);
        return () => window.clearInterval(id);
    }, [gallery.length]);

    return (
        <article className="relative mx-auto w-full max-w-[1600px] overflow-x-hidden px-4 pb-20 text-left sm:px-6 lg:px-10 xl:px-14">
            {/* ===== SPLIT HERO — text left, media right ===== */}
            <header className="relative grid overflow-hidden border border-white/10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
                <span className="signal-corner signal-corner--tl" aria-hidden />
                <span className="signal-corner signal-corner--tr hidden lg:block" aria-hidden />
                <span className="signal-corner signal-corner--bl" aria-hidden />
                <span className="signal-corner signal-corner--br" aria-hidden />

                <div className="relative flex flex-col justify-between px-4 py-8 sm:px-5 sm:py-10 lg:px-8 lg:py-12">
                    {/* vertical spice on hero split */}
                    <span
                        aria-hidden
                        className="pointer-events-none absolute inset-y-6 right-0 hidden w-px bg-gradient-to-b from-transparent via-alpha/50 to-transparent lg:block"
                    />
                    <span
                        aria-hidden
                        className="pointer-events-none absolute right-0 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-alpha shadow-[0_0_10px_rgba(0,119,190,0.8)] lg:block"
                    />

                    <div>
                        <div className="mb-8 flex items-center justify-between gap-3 lg:justify-start lg:gap-6">
                            <Link
                                to="/projects"
                                className="font-mono text-xs uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-alpha"
                            >
                                ← <TransText en="Archive" fr="Archive" />
                            </Link>
                            <span
                                aria-hidden
                                className="hidden h-px flex-1 bg-gradient-to-r from-alpha/40 via-white/10 to-transparent lg:block"
                            />
                            <span className="font-mono text-xs text-white/40">
                                <span className="text-alpha">
                                    <TransText en="Case" fr="Cas" />
                                </span>{" "}
                                {String(project.id).padStart(2, "0")}
                            </span>
                        </div>

                        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.32em] text-alpha">
                            <TransText en="Deep dive" fr="Immersion" />
                        </p>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            {project.name}
                        </h1>
                        {project.role && (
                            <p className="mt-3 font-mono text-sm text-alpha sm:text-base">
                                <span className="uppercase tracking-[0.2em] text-alpha/70">
                                    <TransText en="My role" fr="Mon rôle" />
                                    {": "}
                                </span>
                                <TransText {...project.role} />
                            </p>
                        )}
                        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg sm:leading-8">
                            <TransText {...project.desc} />
                        </p>
                        {project.teamContext && (
                            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/45">
                                <TransText {...project.teamContext} />
                            </p>
                        )}

                        <div className="mt-7 flex flex-wrap gap-2.5">
                            {project.website && (
                                <a
                                    href={project.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-alpha bg-alpha px-5 py-2.5 text-sm font-semibold text-white hover:bg-alpha/90"
                                >
                                    <TransText en="Open live" fr="Ouvrir le live" /> →
                                </a>
                            )}
                            {project.appStore && (
                                <a
                                    href={project.appStore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-white/20 px-5 py-2.5 text-sm text-white/85 hover:border-alpha"
                                >
                                    App Store
                                </a>
                            )}
                            {project.playStore && (
                                <a
                                    href={project.playStore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-[#01875f]/45 px-5 py-2.5 text-sm text-[#5ee4b0]"
                                >
                                    Google Play
                                </a>
                            )}
                        </div>
                    </div>

                    {(project.timeline || project.client) && (
                        <div className="relative mt-10 pt-6 lg:mt-14">
                            <SignalRule node={false} />
                            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
                                {project.timeline && (
                                    <div>
                                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-alpha">
                                            <TransText en="Timeline" fr="Chronologie" />
                                        </p>
                                        <p className="mt-1.5 text-base text-white/75">
                                            <TransText {...project.timeline} />
                                        </p>
                                    </div>
                                )}
                                {project.client && (
                                    <div>
                                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-alpha">
                                            <TransText en="Client" fr="Client" />
                                        </p>
                                        <p className="mt-1.5 text-base text-white/75">
                                            {project.clientWebsite ? (
                                                <a
                                                    href={project.clientWebsite}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-alpha"
                                                >
                                                    {project.client} →
                                                </a>
                                            ) : (
                                                project.client
                                            )}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* media pane — flush right, no centering */}
                <div className="relative min-h-[280px] border-t border-white/10 lg:min-h-full lg:border-l lg:border-t-0">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={gallery[galleryIndex]}
                            src={gallery[galleryIndex]}
                            alt={imageAlt}
                            className="absolute inset-0 h-full w-full object-cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-[#050505]/25" />

                    {gallery.length > 1 && (
                        <div className="no-scrollbar absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto">
                            {gallery.map((src, i) => (
                                <button
                                    key={src + i}
                                    type="button"
                                    onClick={() => setGalleryIndex(i)}
                                    className={`h-11 w-[4.25rem] shrink-0 overflow-hidden border ${
                                        i === galleryIndex
                                            ? "border-alpha shadow-[0_0_12px_rgba(0,119,190,0.35)]"
                                            : "border-white/25 opacity-70 hover:opacity-100"
                                    }`}
                                >
                                    <img src={src} alt="" className="h-full w-full object-cover" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </header>

            <SignalRule node={false} />

            {/* ===== BANDS — full bleed, left label / right body ===== */}
            <Band
                id="overview"
                n="01"
                title={<TransText en="About the Project" fr="À propos du projet" />}
            >
                <p className="max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg sm:leading-8">
                    <TransText {...project.detailedDesc} />
                </p>
            </Band>

            {!!project.contributions?.length && (
                <Band
                    id="contributions"
                    n="02"
                    title={
                        <TransText
                            en="Selected Contributions"
                            fr="Contributions sélectionnées"
                        />
                    }
                    flush
                >
                    <ul className="divide-y divide-white/10">
                        {project.contributions.map((item, i) => (
                            <li
                                key={i}
                                className="group relative grid gap-3 px-4 py-6 sm:grid-cols-[3rem_1fr] sm:px-6 sm:py-7 lg:px-12"
                            >
                                <span
                                    aria-hidden
                                    className="absolute left-0 top-1/2 hidden h-px w-3 -translate-y-1/2 bg-alpha/50 sm:block"
                                />
                                <span className="font-mono text-sm text-alpha">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <p className="text-base leading-relaxed text-white/70 sm:text-lg sm:leading-8">
                                    <TransText {...item} />
                                </p>
                            </li>
                        ))}
                    </ul>
                </Band>
            )}

            <Band
                id="stack"
                n={project.contributions?.length ? "03" : "02"}
                title={<TransText en="Technologies" fr="Technologies" />}
            >
                <div className="flex flex-wrap gap-2.5">
                    {project.techs.map((tech) => (
                        <Link
                            key={tech.name}
                            to={`/projects?tech=${encodeURIComponent(tech.name)}`}
                            className="border border-white/15 px-4 py-2 font-mono text-sm text-white/80 transition-colors hover:border-alpha/50 hover:text-alpha"
                        >
                            {tech.name}
                        </Link>
                    ))}
                </div>
                <p className="mt-4 text-xs text-white/35">
                    <TransText
                        en="Browse other projects using the same technology."
                        fr="Parcourir d’autres projets utilisant la même technologie."
                    />
                </p>
            </Band>

            {!!project.keyFeatures?.length && (
                <Band
                    id="features"
                    n={project.contributions?.length ? "04" : "03"}
                    title={<TransText en="Features" fr="Fonctions" />}
                    flush
                >
                    <ul className="divide-y divide-white/10">
                        {project.keyFeatures.map((feature, i) => (
                            <li
                                key={i}
                                className="group relative grid gap-3 px-4 py-6 sm:grid-cols-[3rem_1fr] sm:px-6 sm:py-7 lg:px-12"
                            >
                                <span
                                    aria-hidden
                                    className="absolute left-0 top-1/2 hidden h-px w-3 -translate-y-1/2 bg-alpha/50 sm:block"
                                />
                                <span className="font-mono text-sm text-alpha">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <p className="text-base leading-relaxed text-white/70 sm:text-lg sm:leading-8">
                                    <TransText {...feature} />
                                </p>
                            </li>
                        ))}
                    </ul>
                </Band>
            )}

            {(!!project.challenges?.length || !!project.solutions?.length) && (
                <Band
                    id="process"
                    n={project.contributions?.length ? "05" : "04"}
                    title={<TransText en="Process" fr="Processus" />}
                    flush
                >
                    <div className="grid sm:grid-cols-2">
                        {!!project.challenges?.length && (
                            <div className="relative border-b border-white/10 px-4 py-10 sm:border-b-0 sm:border-r sm:px-6 lg:px-12 lg:py-14">
                                <span
                                    aria-hidden
                                    className="pointer-events-none absolute inset-y-8 right-0 hidden w-px bg-gradient-to-b from-transparent via-alpha/40 to-transparent sm:block"
                                />
                                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
                                    <TransText en="Challenges" fr="Défis" />
                                </p>
                                <ul className="space-y-6">
                                    {project.challenges.map((c, i) => (
                                        <li
                                            key={i}
                                            className="text-base leading-relaxed text-white/65 sm:text-lg sm:leading-8"
                                        >
                                            <TransText {...c} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {!!project.solutions?.length && (
                            <div className="px-4 py-10 sm:px-6 lg:px-12 lg:py-14">
                                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
                                    <TransText en="Solutions" fr="Solutions" />
                                </p>
                                <ul className="space-y-6">
                                    {project.solutions.map((s, i) => (
                                        <li
                                            key={i}
                                            className="text-base leading-relaxed text-white/70 sm:text-lg sm:leading-8"
                                        >
                                            <TransText {...s} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </Band>
            )}

            {!!project.lessonsLearned?.length && (
                <Band
                    id="lessons"
                    n={project.contributions?.length ? "06" : "05"}
                    title={<TransText en="Lessons" fr="Leçons" />}
                    flush
                >
                    <ol className="divide-y divide-white/10">
                        {project.lessonsLearned.map((lesson, i) => (
                            <li
                                key={i}
                                className="relative grid gap-3 px-4 py-6 sm:grid-cols-[3rem_1fr] sm:px-6 sm:py-7 lg:px-12"
                            >
                                <span
                                    aria-hidden
                                    className="absolute left-0 top-1/2 hidden h-px w-3 -translate-y-1/2 bg-alpha/40 sm:block"
                                />
                                <span className="font-mono text-sm text-alpha/70">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <p className="text-base leading-relaxed text-white/70 sm:text-lg sm:leading-8">
                                    <TransText {...lesson} />
                                </p>
                            </li>
                        ))}
                    </ol>
                </Band>
            )}

            {!!project.futureImprovements?.length && (
                <Band
                    id="future"
                    n={project.contributions?.length ? "07" : "06"}
                    title={<TransText en="Future" fr="Suite" />}
                >
                    <ul className="space-y-5">
                        {project.futureImprovements.map((item, i) => (
                            <li
                                key={i}
                                className="flex gap-3 text-base leading-relaxed text-white/65 sm:text-lg sm:leading-8"
                            >
                                <span className="mt-1 text-alpha">→</span>
                                <TransText {...item} />
                            </li>
                        ))}
                    </ul>
                </Band>
            )}

            {gallery.length > 1 && (
                <section id="gallery" className="scroll-mt-24 overflow-hidden border-x border-white/10">
                    <div className="relative flex items-baseline justify-between gap-4 px-4 py-8 sm:px-5 lg:px-8">
                        <div className="flex items-baseline gap-3">
                            <span className="font-mono text-sm text-alpha">
                                {project.contributions?.length ? "08" : "07"}
                            </span>
                            <h2 className="text-xl font-bold text-white sm:text-2xl">
                                <TransText en="Gallery" fr="Galerie" />
                            </h2>
                        </div>
                        <span
                            aria-hidden
                            className="mx-4 hidden h-px min-w-0 flex-1 bg-gradient-to-r from-alpha/35 via-white/10 to-transparent sm:block"
                        />
                        <span className="shrink-0 font-mono text-xs text-white/35">
                            {String(gallery.length).padStart(2, "0")}{" "}
                            <TransText en="frames" fr="vues" />
                        </span>
                    </div>
                    <SignalRule />
                    <div className="relative grid grid-cols-2 gap-px overflow-hidden bg-white/10 md:grid-cols-3 lg:grid-cols-4">
                        <span className="signal-corner signal-corner--tl" aria-hidden />
                        <span className="signal-corner signal-corner--tr" aria-hidden />
                        <span className="signal-corner signal-corner--bl" aria-hidden />
                        <span className="signal-corner signal-corner--br" aria-hidden />
                        {gallery.map((src, i) => (
                            <button
                                key={src + i}
                                type="button"
                                onClick={() => setGalleryIndex(i)}
                                className="group relative aspect-[16/10] overflow-hidden bg-[#050505]"
                            >
                                <img
                                    src={src}
                                            alt={`${imageAlt} — view ${i + 1}`}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                                />
                                <span className="absolute left-2 top-2 font-mono text-[10px] text-white/70 opacity-0 transition group-hover:opacity-100">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                            </button>
                        ))}
                    </div>
                </section>
            )}

            <footer className="relative mt-2 flex flex-wrap items-center gap-3 overflow-hidden border border-t-0 border-white/10 px-4 py-10 sm:px-5 lg:px-8">
                <SignalRule className="absolute inset-x-0 top-0" node={false} />
                <Link
                    to="/projects"
                    className="border border-alpha/50 bg-alpha/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-alpha"
                >
                    ← <TransText en="All projects" fr="Tous les projets" />
                </Link>
                <Link
                    to="/"
                    className="border border-white/15 px-5 py-2.5 text-sm text-white/55 hover:border-alpha hover:text-alpha"
                >
                    <TransText en="Home" fr="Accueil" />
                </Link>
            </footer>
        </article>
    );
}

function SignalRule({
    className = "",
    node = true,
}: {
    className?: string;
    node?: boolean;
}) {
    return (
        <div className={`signal-rule ${className}`} aria-hidden>
            {node && <span className="signal-rule__dot" />}
        </div>
    );
}

function Band({
    id,
    n,
    title,
    children,
    flush = false,
}: {
    id: string;
    n: string;
    title: React.ReactNode;
    children: React.ReactNode;
    flush?: boolean;
}) {
    return (
        <section
            id={id}
            className="scroll-mt-24 overflow-hidden border-x border-white/10 lg:grid lg:grid-cols-[14rem_1fr]"
        >
            <BandLabel n={n} title={title} />
            <div className={flush ? "" : "px-4 py-10 sm:px-6 lg:px-12 lg:py-14"}>
                {children}
            </div>
            <div className="col-span-full">
                <SignalRule />
            </div>
        </section>
    );
}

function BandLabel({ n, title }: { n: string; title: React.ReactNode }) {
    return (
        <div className="signal-rail relative flex items-start gap-3 border-b border-white/10 px-4 py-6 sm:px-6 lg:sticky lg:top-24 lg:h-fit lg:border-b-0 lg:px-8 lg:py-14">
            <span
                aria-hidden
                className="absolute left-3 top-5 h-1.5 w-1.5 rounded-full bg-alpha/80 shadow-[0_0_8px_rgba(0,119,190,0.7)] lg:left-5 lg:top-14"
            />
            <span className="pl-3 font-mono text-sm text-alpha lg:pl-2">{n}</span>
            <h2 className="text-lg font-bold text-white sm:text-xl">{title}</h2>
        </div>
    );
}
