import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import { TransText } from "../components/TransText";
import { getArticle } from "../constants/articles";
import { awardProject, proProjects } from "../constants/projects";
import { getServiceLanding } from "../constants/serviceLandings";
import { articlePageSeo } from "../constants/seo";

const catalog = [awardProject, ...proProjects];

function projectById(id: number) {
    return catalog.find((p) => p.id === id);
}

export default function ArticlePage() {
    const { slug } = useParams<{ slug: string }>();
    const article = slug ? getArticle(slug) : undefined;

    if (!article) {
        return <Navigate to="/articles" replace />;
    }

    const pageSeo = articlePageSeo(article);
    const relatedProjects = article.projectIds
        .map(projectById)
        .filter((p): p is Project => Boolean(p));
    const relatedServices = article.serviceSlugs
        .map(getServiceLanding)
        .filter((s): s is NonNullable<ReturnType<typeof getServiceLanding>> =>
            Boolean(s)
        );

    return (
        <div className="relative min-h-screen overflow-hidden py-16 lg:py-28">
            <Seo {...pageSeo} jsonLd={pageSeo.jsonLd} />

            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(16deg, #0077BE 0 1px, transparent 1px 19px)",
                    maskImage:
                        "radial-gradient(ellipse at 48% 14%, black 14%, transparent 68%)",
                }}
            />

            <article className="relative px-4 sm:px-6 lg:px-16">
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
                            <Link to="/articles" className="hover:text-alpha">
                                <TransText en="Articles" fr="Articles" />
                            </Link>
                        </li>
                        <li aria-hidden className="text-white/25">
                            /
                        </li>
                        <li
                            className="max-w-[min(100%,28rem)] truncate text-white/70"
                            aria-current="page"
                        >
                            {article.headline}
                        </li>
                    </ol>
                </nav>

                <header className="max-w-3xl">
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.35em] text-alpha">
                        {article.techs.slice(0, 4).join(" · ")}
                    </p>
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        {article.headline}
                    </h1>
                    <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-white/45">
                        <TransText en="Author" fr="Auteur" />: Ayman Boujjar
                    </p>
                    <motion.p
                        className="mt-6 text-base leading-relaxed text-white/65 sm:text-lg"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {article.intro}
                    </motion.p>
                </header>

                <div className="mt-12 max-w-3xl space-y-12">
                    {article.sections.map((section) => (
                        <section key={section.heading}>
                            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                                {section.heading}
                            </h2>
                            {section.paragraphs.map((paragraph, i) => (
                                <p
                                    key={i}
                                    className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </section>
                    ))}
                </div>

                {relatedProjects.length > 0 && (
                    <section className="mt-14 max-w-3xl">
                        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                            <TransText
                                en="Related projects"
                                fr="Projets liés"
                            />
                        </h2>
                        <ul className="mt-5 space-y-3">
                            {relatedProjects.map((project) => (
                                <li key={project.id}>
                                    <Link
                                        to={`/project/${project.name.replace(/\s+/g, "-")}`}
                                        className="inline-flex border border-white/12 bg-[#070b14]/80 px-4 py-2.5 text-sm text-white/80 transition-colors hover:border-alpha/40 hover:text-alpha"
                                    >
                                        {project.name}{" "}
                                        <TransText
                                            en="project"
                                            fr="projet"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {relatedServices.length > 0 && (
                    <section className="mt-10 max-w-3xl">
                        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                            <TransText
                                en="Related services"
                                fr="Services liés"
                            />
                        </h2>
                        <ul className="mt-5 flex flex-wrap gap-3">
                            {relatedServices.map((service) => (
                                <li key={service.slug}>
                                    <Link
                                        to={`/services/${service.slug}`}
                                        className="inline-flex border border-white/12 bg-[#070b14]/80 px-4 py-2.5 text-sm text-white/80 transition-colors hover:border-alpha/40 hover:text-alpha"
                                    >
                                        <TransText {...service.name} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                <footer className="mt-14 flex flex-wrap gap-3">
                    <Link
                        to="/articles"
                        className="border border-alpha/50 bg-alpha/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-alpha"
                    >
                        ← <TransText en="All articles" fr="Tous les articles" />
                    </Link>
                    <Link
                        to="/projects"
                        className="border border-white/15 px-5 py-2.5 text-sm text-white/55 hover:border-alpha hover:text-alpha"
                    >
                        <TransText en="Projects" fr="Projets" />
                    </Link>
                </footer>
            </article>
        </div>
    );
}
