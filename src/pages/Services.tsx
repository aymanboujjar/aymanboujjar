import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import { TransText } from "../components/TransText";
import { services, servicesIntro } from "../constants/services";
import { serviceLandings } from "../constants/serviceLandings";
import { awardProject, proProjects } from "../constants/projects";
import { SERVICES_PAGE_SEO, buildServicesPageJsonLd } from "../constants/seo";

const allProjects = [awardProject, ...proProjects];

function projectById(id: number) {
    return allProjects.find((p) => p.id === id);
}

export default function Services() {
    const jsonLd = buildServicesPageJsonLd();

    return (
        <div className="relative min-h-screen overflow-hidden py-16 lg:py-28">
            <Seo {...SERVICES_PAGE_SEO} jsonLd={jsonLd} />

            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(14deg, #0077BE 0 1px, transparent 1px 19px)",
                    maskImage:
                        "radial-gradient(ellipse at 40% 15%, black 14%, transparent 68%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute right-[8%] top-[18%] h-[380px] w-[380px] rounded-full bg-alpha/[0.07] blur-3xl"
            />

            <div className="relative px-4 sm:px-6 lg:px-16">
                <div className="max-w-3xl">
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.35em] text-alpha">
                        <TransText en="Services" fr="Services" />
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        <TransText
                            en="Freelance Full-Stack & Mobile Development"
                            fr="Développement Full-Stack & Mobile Freelance"
                        />
                    </h1>
                    <motion.p
                        className="mt-6 text-base leading-relaxed text-white/60 sm:text-lg"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <TransText {...servicesIntro} />
                    </motion.p>
                    <motion.p
                        className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-white/40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                    >
                        <TransText
                            en="Casablanca, Morocco · Worldwide remote"
                            fr="Casablanca, Maroc · Remote mondial"
                        />
                    </motion.p>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-16">
                    {serviceLandings.map((landing, i) => (
                        <motion.article
                            key={landing.slug}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: Math.min(i * 0.05, 0.2) }}
                            className="flex flex-col border border-white/10 bg-[#070b14]/80 p-6 backdrop-blur-md transition-colors hover:border-alpha/40"
                        >
                            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-alpha">
                                {landing.index}
                            </p>
                            <h2 className="text-xl font-semibold text-white">
                                <Link
                                    to={`/services/${landing.slug}`}
                                    className="hover:text-alpha"
                                >
                                    <TransText {...landing.name} />
                                </Link>
                            </h2>
                            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                                <TransText {...landing.positioning} />
                            </p>
                            <Link
                                to={`/services/${landing.slug}`}
                                className="mt-5 inline-flex font-mono text-sm text-alpha hover:text-white"
                            >
                                <TransText en="Open page" fr="Ouvrir la page" /> →
                            </Link>
                        </motion.article>
                    ))}
                </div>

                <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                    <TransText
                        en="Also covered on this site"
                        fr="Aussi couvert sur ce site"
                    />
                </p>

                <div className="mt-6 space-y-6">
                    {services.map((service, i) => {
                        const related = service.projectIds
                            .map(projectById)
                            .filter(Boolean);

                        return (
                            <motion.section
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ delay: Math.min(i * 0.04, 0.2) }}
                                className="scroll-mt-28 border border-white/10 bg-[#070b14]/80 p-6 backdrop-blur-md sm:p-8"
                            >
                                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                                    <div className="max-w-2xl">
                                        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-alpha">
                                            {service.index}
                                        </p>
                                        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                                            <TransText {...service.title} />
                                        </h2>
                                        <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
                                            <TransText {...service.description} />
                                        </p>
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {service.techs.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="border border-white/10 px-2.5 py-1 font-mono text-[11px] text-white/70"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {related.length > 0 && (
                                        <div className="lg:w-64 lg:shrink-0">
                                            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-alpha">
                                                <TransText
                                                    en="Related work"
                                                    fr="Travaux liés"
                                                />
                                            </p>
                                            <ul className="space-y-2">
                                                {related.map((project) =>
                                                    project ? (
                                                        <li key={project.id}>
                                                            <Link
                                                                to={`/project/${project.name.replace(/\s+/g, "-")}`}
                                                                className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-alpha"
                                                            >
                                                                <span className="font-mono text-[10px] text-alpha">
                                                                    {String(project.id).padStart(2, "0")}
                                                                </span>
                                                                {project.name}
                                                            </Link>
                                                        </li>
                                                    ) : null
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </motion.section>
                        );
                    })}
                </div>

                <motion.div
                    className="mt-14 border border-alpha/35 bg-alpha/10 p-6 text-center sm:p-10"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                        <TransText
                            en="Need a web or mobile product built?"
                            fr="Besoin d’un produit web ou mobile ?"
                        />
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-sm text-white/60 sm:text-base">
                        <TransText
                                            en="Reach out for freelance or contract work — worldwide remote. Share the product goal and stack constraints."
                                            fr="Contactez-moi pour une mission freelance ou un contrat — remote mondial. Partagez l’objectif produit et les contraintes de stack."
                        />
                    </p>
                    <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 border border-alpha bg-alpha px-6 py-3.5 font-semibold text-white transition-shadow hover:shadow-[0_0_28px_rgba(0,119,190,0.35)]"
                        >
                            <TransText en="Get in touch" fr="Me contacter" /> →
                        </Link>
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 border border-white/15 px-6 py-3.5 font-semibold text-white/80 transition-colors hover:border-alpha hover:text-alpha"
                        >
                            <TransText en="View projects" fr="Voir les projets" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
