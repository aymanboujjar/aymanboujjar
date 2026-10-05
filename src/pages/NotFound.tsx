import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import { TransText } from "../components/TransText";

export default function NotFound() {
    return (
        <div className="relative flex min-h-[70vh] items-center overflow-hidden py-16 lg:py-28">
            <Seo
                title="Page not found — Ayman Boujjar"
                description="This page does not exist on aymanboujjar.com. Return home or browse projects and services."
                path="/404"
            />

            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(32deg, #0077BE 0 1px, transparent 1px 18px)",
                    maskImage:
                        "radial-gradient(ellipse at 50% 40%, black 12%, transparent 70%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/3 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-alpha/[0.1] blur-3xl"
            />

            <div className="relative mx-auto w-full max-w-2xl px-4 text-center sm:px-6 lg:px-16">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-alpha">
                    <TransText en="Signal lost" fr="Signal perdu" />
                </p>
                <motion.h1
                    className="mt-4 text-6xl font-bold tracking-tight text-white sm:text-7xl"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    404
                </motion.h1>
                <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                    <TransText
                        en="This page doesn't exist"
                        fr="Cette page n'existe pas"
                    />
                </h2>
                <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/55">
                    <TransText
                        en="It may have been moved, removed, or never existed. Looking for AI discovery info? Try llms.txt."
                        fr="Elle a peut‑être été déplacée, supprimée, ou n'a jamais existé. Pour les infos IA, essayez llms.txt."
                    />
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 border border-alpha bg-alpha px-6 py-3.5 font-semibold text-white transition-shadow hover:shadow-[0_0_32px_rgba(0,119,190,0.35)]"
                    >
                        <TransText en="Back home" fr="Retour à l'accueil" />
                    </Link>
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 border border-white/15 bg-[#070b14]/80 px-6 py-3.5 font-semibold text-white/85 transition-colors hover:border-alpha/40"
                    >
                        <TransText en="View projects" fr="Voir les projets" />
                    </Link>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 border border-transparent px-6 py-3.5 font-semibold text-alpha hover:underline"
                    >
                        <TransText en="Contact" fr="Contact" />
                    </Link>
                </div>

                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
                    <a href="/llms.txt" className="hover:text-alpha">
                        /llms.txt
                    </a>
                    <span className="mx-2 text-white/20">·</span>
                    <a href="/robots.txt" className="hover:text-alpha">
                        /robots.txt
                    </a>
                </p>
            </div>
        </div>
    );
}
