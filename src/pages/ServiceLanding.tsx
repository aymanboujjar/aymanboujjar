import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import { TransText } from "../components/TransText";
import { getServiceLanding } from "../constants/serviceLandings";
import { getArticlesForService } from "../constants/articles";
import { awardProject, proProjects } from "../constants/projects";
import { serviceLandingPageSeo } from "../constants/seo";

const catalog = [awardProject, ...proProjects];

function projectById(id: number) {
    return catalog.find((p) => p.id === id);
}

export default function ServiceLanding() {
    const { slug } = useParams<{ slug: string }>();
    const service = slug ? getServiceLanding(slug) : undefined;

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const pageSeo = serviceLandingPageSeo(service);
    const related = service.projectIds
        .map(projectById)
        .filter((p): p is Project => Boolean(p));
    const relatedArticles = getArticlesForService(service.slug);

    return (
        <div className="relative min-h-screen overflow-hidden py-16 lg:py-28">
            <Seo {...pageSeo} jsonLd={pageSeo.jsonLd} />

            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(18deg, #0077BE 0 1px, transparent 1px 19px)",
                    maskImage:
                        "radial-gradient(ellipse at 45% 18%, black 14%, transparent 68%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute right-[6%] top-[20%] h-[360px] w-[360px] rounded-full bg-alpha/[0.07] blur-3xl"
            />

            <div className="relative px-4 sm:px-6 lg:px-16">
                <nav
                    aria-label="Breadcrumb"
                    className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40"
                >
                    <ol className="flex flex-wrap items-center gap-2">
                        <li>
                            <Link to="/" className="hover:text-alpha">
                                <TransText en="Home" fr="Accueil" />
                            </Link>
                        </li>
                        <li aria-hidden className="text-white/25">
                            /
                        </li>
                        <li>
                            <Link to="/services" className="hover:text-alpha">
                                <TransText en="Services" fr="Services" />
                            </Link>
                        </li>
                        <li aria-hidden className="text-white/25">
                            /
                        </li>
                        <li className="text-white/70" aria-current="page">
                            <TransText {...service.name} />
                        </li>
                    </ol>
                </nav>

                <div className="max-w-3xl">
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.35em] text-alpha">
                        {service.index} · <TransText {...service.name} />
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        <TransText {...service.h1} />
                    </h1>
                    <motion.p
                        className="mt-6 text-base leading-relaxed text-white/60 sm:text-lg"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <TransText {...service.positioning} />
                    </motion.p>
                    <p className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                        <TransText
                            en="Casablanca, Morocco · Worldwide remote"
                            fr="Casablanca, Maroc · Remote mondial"
                        />
                    </p>
                </div>

                <section className="mt-14 max-w-3xl lg:mt-16">
                    <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                        <TransText en="What I build" fr="Ce que je construis" />
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
                        <TransText {...service.overview} />
                    </p>
                    <ul className="mt-6 space-y-3">
                        {service.capabilities.map((item, i) => (
                            <li
                                key={i}
                                className="border-l border-alpha/40 pl-4 text-sm leading-relaxed text-white/70 sm:text-base"
                            >
                                <TransText {...item} />
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mt-14 max-w-3xl">
                    <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                        <TransText en="Technologies" fr="Technologies" />
                    </h2>
                    <div className="mt-5 flex flex-wrap gap-2">
                        {service.techs.map((tech) => (
                            <span
                                key={tech}
                                className="border border-white/10 px-3 py-1.5 font-mono text-[11px] text-white/75"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="mt-14">
                    <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                        <TransText
                            en="Relevant projects"
                            fr="Projets pertinents"
                        />
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm text-white/50">
                        <TransText
                            en="Case studies from the portfolio. Team deliveries use contribution wording — open a project for role and authorship detail."
                            fr="Études de cas du portfolio. Les livraisons d’équipe utilisent un langage de contribution — ouvrez un projet pour le rôle et l’attribution."
                        />
                    </p>
                    <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {related.map((project) => (
                            <li key={project.id}>
                                <Link
                                    to={`/project/${project.name.replace(/\s+/g, "-")}`}
                                    className="flex h-full flex-col border border-white/10 bg-[#070b14]/80 p-5 transition-colors hover:border-alpha/40"
                                >
                                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-alpha">
                                        <TransText en="Case" fr="Cas" />{" "}
                                        {String(project.id).padStart(2, "0")}
                                    </span>
                                    <span className="mt-2 text-lg font-semibold text-white">
                                        {project.name}
                                    </span>
                                    {project.role && (
                                        <span className="mt-2 font-mono text-[11px] text-alpha/90">
                                            <TransText {...project.role} />
                                        </span>
                                    )}
                                    <span className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/55">
                                        <TransText {...project.desc} />
                                    </span>
                                    <span className="mt-4 font-mono text-sm text-alpha">
                                        <TransText
                                            en="View case"
                                            fr="Voir le cas"
                                        />{" "}
                                        →
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

                {relatedArticles.length > 0 && (
                    <section className="mt-14">
                        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                            <TransText
                                en="Related articles"
                                fr="Articles liés"
                            />
                        </h2>
                        <p className="mt-3 max-w-2xl text-sm text-white/50">
                            <TransText
                                en="Technical notes grounded in the same project evidence."
                                fr="Notes techniques ancrées dans les mêmes preuves projet."
                            />
                        </p>
                        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {relatedArticles.map((article) => (
                                <li key={article.slug}>
                                    <Link
                                        to={`/articles/${article.slug}`}
                                        className="flex h-full flex-col border border-white/10 bg-[#070b14]/80 p-5 transition-colors hover:border-alpha/40"
                                    >
                                        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-alpha">
                                            {article.techs.slice(0, 3).join(" · ")}
                                        </span>
                                        <span className="mt-2 text-lg font-semibold text-white">
                                            {article.headline}
                                        </span>
                                        <span className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/55">
                                            {article.description}
                                        </span>
                                        <span className="mt-4 font-mono text-sm text-alpha">
                                            <TransText
                                                en="Read article"
                                                fr="Lire l’article"
                                            />{" "}
                                            →
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                <section className="mt-14 max-w-3xl">
                    <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                        <TransText
                            en="How I approach the work"
                            fr="Comment j’aborde le travail"
                        />
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
                        <TransText {...service.approach} />
                    </p>
                </section>

                <section className="mt-14 max-w-3xl">
                    <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                        <TransText
                            en="Who this is for"
                            fr="Pour qui c’est"
                        />
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
                        <TransText {...service.audience} />
                    </p>
                </section>

                <motion.div
                    className="mt-14 border border-alpha/35 bg-alpha/10 p-6 text-center sm:p-10"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                        <TransText
                            en="Want to discuss a project?"
                            fr="Envie de parler d’un projet ?"
                        />
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-sm text-white/60 sm:text-base">
                        <TransText
                            en="Share the product goal and stack constraints — worldwide remote from Casablanca, Morocco."
                            fr="Partagez l’objectif produit et les contraintes de stack — remote mondial depuis Casablanca, Maroc."
                        />
                    </p>
                    <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 border border-alpha bg-alpha px-6 py-3.5 font-semibold text-white transition-shadow hover:shadow-[0_0_28px_rgba(0,119,190,0.35)]"
                        >
                            <TransText en="Contact" fr="Contact" /> →
                        </Link>
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 border border-white/15 px-6 py-3.5 font-semibold text-white/80 transition-colors hover:border-alpha hover:text-alpha"
                        >
                            <TransText en="All projects" fr="Tous les projets" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
