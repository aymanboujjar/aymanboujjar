import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import { TransText } from "../components/TransText";
import { articles } from "../constants/articles";
import { ARTICLES_PAGE_SEO, buildArticlesPageJsonLd } from "../constants/seo";

export default function Articles() {
    const jsonLd = buildArticlesPageJsonLd();

    return (
        <div className="relative min-h-screen overflow-hidden py-16 lg:py-28">
            <Seo {...ARTICLES_PAGE_SEO} jsonLd={jsonLd} />

            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(10deg, #0077BE 0 1px, transparent 1px 19px)",
                    maskImage:
                        "radial-gradient(ellipse at 42% 16%, black 14%, transparent 68%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute right-[8%] top-[18%] h-[360px] w-[360px] rounded-full bg-alpha/[0.07] blur-3xl"
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
                        <li className="text-white/70" aria-current="page">
                            <TransText en="Articles" fr="Articles" />
                        </li>
                    </ol>
                </nav>

                <div className="max-w-3xl">
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.35em] text-alpha">
                        <TransText en="Technical writing" fr="Écrits techniques" />
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        <TransText
                            en="Articles from real project work"
                            fr="Articles issus de projets réels"
                        />
                    </h1>
                    <motion.p
                        className="mt-6 text-base leading-relaxed text-white/60 sm:text-lg"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <TransText
                            en="Experience-based notes on Laravel, React, React Native, Expo, and interactive stacks — each tied to a portfolio case study and Ayman Boujjar’s documented role."
                            fr="Notes basées sur l’expérience autour de Laravel, React, React Native, Expo et stacks interactifs — chacune liée à une étude de cas et au rôle documenté d’Ayman Boujjar."
                        />
                    </motion.p>
                </div>

                <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-16">
                    {articles.map((article, i) => (
                        <motion.li
                            key={article.slug}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: Math.min(i * 0.05, 0.25) }}
                        >
                            <article className="flex h-full flex-col border border-white/10 bg-[#070b14]/80 p-6 backdrop-blur-md transition-colors hover:border-alpha/40">
                                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-alpha">
                                    {String(i + 1).padStart(2, "0")} ·{" "}
                                    {article.techs.slice(0, 3).join(" · ")}
                                </p>
                                <h2 className="text-xl font-semibold text-white">
                                    <Link
                                        to={`/articles/${article.slug}`}
                                        className="hover:text-alpha"
                                    >
                                        {article.headline}
                                    </Link>
                                </h2>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                                    {article.description}
                                </p>
                                <Link
                                    to={`/articles/${article.slug}`}
                                    className="mt-5 inline-flex font-mono text-sm text-alpha hover:text-white"
                                >
                                    <TransText en="Read article" fr="Lire l’article" />{" "}
                                    →
                                </Link>
                            </article>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
