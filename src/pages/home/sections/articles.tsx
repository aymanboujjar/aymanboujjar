import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Title from "../../../components/Title";
import { TransText } from "../../../components/TransText";
import { articles } from "../../../constants/articles";

/** Compact homepage links to experience-based technical articles (Phase 4). */
export default function HomeArticles() {
    const featured = articles.slice(0, 3);

    return (
        <section id="articles" className="relative overflow-hidden py-16 lg:py-24">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(8deg, #0077BE 0 1px, transparent 1px 20px)",
                    maskImage:
                        "radial-gradient(ellipse at 55% 25%, black 12%, transparent 70%)",
                }}
            />

            <div className="relative px-4 sm:px-6 lg:px-16">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <Title
                            title={
                                <TransText
                                    en="Technical writing"
                                    fr="Écrits techniques"
                                />
                            }
                        />
                        <motion.p
                            className="mt-4 max-w-lg text-sm leading-relaxed text-white/55 sm:text-base"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <TransText
                                en="Notes from production work — Laravel, React, React Native, and interactive stacks tied to real case studies."
                                fr="Notes issues de livraisons en production — Laravel, React, React Native et stacks interactifs liés à de vraies études de cas."
                            />
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/articles"
                            className="group inline-flex items-center gap-3 border border-alpha/50 bg-alpha/10 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-alpha hover:shadow-[0_0_28px_rgba(0,119,190,0.3)]"
                        >
                            <TransText en="All articles" fr="Tous les articles" />
                            <span className="font-mono text-alpha transition-colors group-hover:text-white">
                                →
                            </span>
                        </Link>
                    </motion.div>
                </div>

                <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-12">
                    {featured.map((article, i) => (
                        <motion.li
                            key={article.slug}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: Math.min(i * 0.06, 0.18) }}
                        >
                            <article className="flex h-full flex-col border border-white/10 bg-[#070b14]/80 p-5 transition-colors hover:border-alpha/40">
                                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.28em] text-alpha">
                                    {article.techs.slice(0, 2).join(" · ")}
                                </p>
                                <h3 className="text-lg font-semibold text-white">
                                    <Link
                                        to={`/articles/${article.slug}`}
                                        className="hover:text-alpha"
                                    >
                                        {article.headline}
                                    </Link>
                                </h3>
                                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-white/55">
                                    {article.description}
                                </p>
                                <Link
                                    to={`/articles/${article.slug}`}
                                    className="mt-4 font-mono text-sm text-alpha"
                                >
                                    <TransText en="Read" fr="Lire" /> →
                                </Link>
                            </article>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
