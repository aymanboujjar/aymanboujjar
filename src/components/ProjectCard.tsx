import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TransText } from "./TransText";
import { projectImageAlt } from "../constants/seo";

export default function ProjectCard({
    project,
    index,
    type,
    layout = "row",
}: ProjectCardProps) {
    const stack = layout === "stack";
    const reverse = !stack && index % 2 === 0;
    const pad = String(index + 1).padStart(2, "0");
    const imageAlt = projectImageAlt(project);

    return (
        <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.5,
                delay: Math.min(index * 0.05, 0.35),
                ease: "easeOut",
            }}
            className={`group relative flex flex-col gap-5 overflow-hidden border border-white/10 bg-[#070b14]/80 p-5 backdrop-blur-md
                transition-[border-color,box-shadow] duration-500
                hover:border-alpha/45 hover:shadow-[0_0_40px_rgba(0,119,190,0.12)]
                ${stack ? "h-full" : "lg:flex-row lg:gap-8 lg:p-7"}
                ${reverse ? "lg:flex-row-reverse" : ""}`}
        >
            <span className="pointer-events-none absolute right-4 top-4 z-10 font-mono text-xs tracking-[0.2em] text-alpha/70">
                {pad}
            </span>

            {type === "pro" && (
                <div
                    className={`relative overflow-hidden border border-white/10 ${stack ? "w-full" : "lg:w-1/2"}`}
                >
                    <img
                        className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${stack ? "aspect-[16/10]" : "aspect-[16/10] h-full"}`}
                        src={project.preview}
                        alt={imageAlt}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050810]/50 via-transparent to-transparent opacity-80" />
                    <span
                        aria-hidden
                        className="pointer-events-none absolute inset-2 border border-dashed border-alpha/0 transition-colors duration-500 group-hover:border-alpha/40"
                    />
                </div>
            )}

            <div
                className={`${!stack && type === "pro" ? "lg:w-1/2" : "w-full"} flex flex-1 flex-col justify-center space-y-4`}
            >
                <div>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-alpha">
                        <TransText en="Case" fr="Cas" /> {pad}
                    </p>
                    <h3
                        className={`font-bold text-white transition-colors group-hover:text-alpha ${stack ? "text-xl lg:text-2xl" : "text-2xl lg:text-3xl"}`}
                    >
                        {project.name}
                    </h3>
                    {project.role && (
                        <p className="mt-2 font-mono text-[11px] text-alpha/90">
                            <TransText {...project.role} />
                        </p>
                    )}
                </div>

                <p
                    className={`leading-relaxed text-white/60 ${stack ? "line-clamp-3 text-sm" : "text-sm lg:text-base"}`}
                >
                    <TransText {...project.desc} />
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.techs.slice(0, stack ? 4 : undefined).map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="border border-white/12 bg-white/[0.03] px-3 py-1 font-mono text-[11px] tracking-wide text-white/75"
                        >
                            {tech.name}
                        </span>
                    ))}
                    {stack && project.techs.length > 4 && (
                        <span className="border border-white/10 px-2 py-1 font-mono text-[11px] text-white/40">
                            +{project.techs.length - 4}
                        </span>
                    )}
                </div>

                {!stack && (
                    <div className="flex flex-wrap gap-3 pt-1">
                        {project.website && (
                            <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 border border-white/20 bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:border-alpha hover:bg-alpha hover:text-white"
                            >
                                <TransText en="Live site" fr="Site live" /> →
                            </a>
                        )}
                        {project.appStore && (
                            <a
                                href={project.appStore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 border border-white/15 bg-[#070b14] px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:border-alpha hover:text-alpha"
                            >
                                App Store →
                            </a>
                        )}
                        {project.playStore && (
                            <a
                                href={project.playStore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 border border-[#01875f]/50 bg-[#01875f]/15 px-4 py-2 text-sm font-medium text-[#5ee4b0] transition-colors hover:border-[#01875f]"
                            >
                                Google Play →
                            </a>
                        )}
                    </div>
                )}

                <div className={`flex flex-wrap gap-3 ${stack ? "mt-auto pt-2" : ""}`}>
                    {stack && project.website && (
                        <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 border border-white/15 px-3 py-2 text-xs font-medium text-white/80 transition-colors hover:border-alpha hover:text-alpha"
                        >
                            <TransText en="Live" fr="Live" /> →
                        </a>
                    )}
                    <Link
                        to={`/project/${project.id}`}
                        className={`inline-flex items-center justify-center gap-2 border border-alpha/50 bg-alpha/10 px-4 py-3 text-center font-medium text-white transition-all duration-300 hover:bg-alpha hover:shadow-[0_0_28px_rgba(0,119,190,0.3)] ${stack ? "flex-1" : "w-full"}`}
                    >
                        <TransText
                            en={stack ? "Details" : "View project details"}
                            fr={stack ? "Détails" : "Voir les détails"}
                        />
                        <span aria-hidden className="font-mono text-alpha group-hover:text-white">
                            →
                        </span>
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-alpha via-alpha to-transparent transition-all duration-500 group-hover:w-full" />
        </motion.article>
    );
}
