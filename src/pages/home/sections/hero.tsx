import { useRef } from "react";
import { TransText } from "../../../components/TransText";
import { motion, useMotionValue, useSpring } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: { y: 28, opacity: 0, filter: "blur(6px)" },
    visible: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.65,
            ease: "easeOut",
        },
    },
};

function MagneticCta({
    children,
    href,
    download,
    className,
}: {
    children: React.ReactNode;
    href: string;
    download?: string;
    className: string;
}) {
    const ref = useRef<HTMLAnchorElement>(null);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const x = useSpring(mx, { stiffness: 200, damping: 16 });
    const y = useSpring(my, { stiffness: 200, damping: 16 });

    return (
        <motion.a
            ref={ref}
            href={href}
            download={download}
            className={className}
            style={{ x, y }}
            whileTap={{ scale: 0.97 }}
            onMouseMove={(e) => {
                const el = ref.current;
                if (!el) return;
                const rect = el.getBoundingClientRect();
                mx.set((e.clientX - (rect.left + rect.width / 2)) * 0.22);
                my.set((e.clientY - (rect.top + rect.height / 2)) * 0.22);
            }}
            onMouseLeave={() => {
                mx.set(0);
                my.set(0);
            }}
        >
            {children}
        </motion.a>
    );
}

export default function Hero() {
    return (
        <section
            className="relative flex min-h-[90vh] items-center overflow-hidden"
            id="hero"
        >
            {/* atmosphere — distinct angle from Trusted */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(18deg, #0077BE 0 1px, transparent 1px 20px)",
                    maskImage:
                        "radial-gradient(ellipse at 40% 35%, black 10%, transparent 68%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute left-[30%] top-[30%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-alpha/[0.1] blur-3xl"
            />

            {/* soft radar rings behind brand */}
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[42%] h-[min(70vw,420px)] w-[min(70vw,420px)] -translate-x-1/2 -translate-y-1/2"
            >
                <div className="absolute inset-0 rounded-full border border-alpha/15" />
                <div className="absolute inset-[14%] rounded-full border border-dashed border-white/10" />
                <div className="absolute inset-[28%] rounded-full border border-alpha/20" />
                <div className="hero-radar absolute inset-0 rounded-full" />
            </div>

            <motion.div
                className="relative z-10 flex min-h-[90vh] w-full flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-16 lg:py-24"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="mx-auto w-full max-w-4xl text-center">
                    <motion.p
                        variants={itemVariants}
                        className="font-mono text-[11px] uppercase tracking-[0.35em] text-alpha"
                    >
                        <TransText en="Signal online" fr="Signal actif" />
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl"
                    >
                        Ayman Boujjar
                        <span className="mt-5 block text-xl font-semibold text-alpha sm:text-3xl lg:text-4xl">
                            <TransText
                                en="Full-Stack & Mobile Developer"
                                fr="Développeur Full-Stack & Mobile"
                            />
                        </span>
                    </motion.h1>

                    <motion.div
                        variants={itemVariants}
                        className="mt-5 flex items-center justify-center gap-3"
                    >
                        <span className="hidden h-px w-10 bg-alpha/50 sm:block" aria-hidden />
                        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/50 sm:text-xs">
                            <TransText
                                en="Laravel · React · React Native · Expo"
                                fr="Laravel · React · React Native · Expo"
                            />
                        </span>
                        <motion.span
                            aria-hidden
                            className="h-8 w-[3px] bg-alpha sm:h-10"
                            animate={{ opacity: [1, 0.25, 1] }}
                            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <span className="hidden h-px w-10 bg-alpha/50 sm:block" aria-hidden />
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-white/50 sm:text-xs"
                    >
                        <TransText
                            en="Casablanca, Morocco · Worldwide remote"
                            fr="Casablanca, Maroc · Remote mondial"
                        />
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
                    >
                        <TransText
                            en="Ayman Boujjar is a full-stack and mobile developer based in Casablanca, Morocco, specializing in Laravel, React, React Native and Expo for production web and mobile applications."
                            fr="Ayman Boujjar est un développeur full-stack et mobile basé à Casablanca, Maroc, spécialisé en Laravel, React, React Native et Expo pour des applications web et mobiles en production."
                        />
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
                    >
                        <MagneticCta
                            href="#projects"
                            className="group inline-flex items-center gap-2 border border-alpha bg-alpha px-7 py-3.5 font-semibold text-white transition-shadow duration-300 hover:shadow-[0_0_32px_rgba(0,119,190,0.35)]"
                        >
                            <TransText en="View My Work" fr="Voir Mon Travail" />
                            <svg
                                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </MagneticCta>

                        <MagneticCta
                            href="/services"
                            className="inline-flex items-center gap-2 border border-alpha/60 bg-[#070b14]/70 px-7 py-3.5 font-semibold text-alpha backdrop-blur-md transition-colors hover:border-alpha hover:bg-alpha/10"
                        >
                            <TransText en="What I build" fr="Ce que je construis" />
                        </MagneticCta>

                        <MagneticCta
                            href="#contact"
                            className="inline-flex items-center gap-2 border border-white/15 bg-transparent px-7 py-3.5 font-semibold text-white/80 transition-colors hover:border-alpha hover:text-alpha"
                        >
                            <TransText en="Get In Touch" fr="Contactez-Moi" />
                        </MagneticCta>

                        <MagneticCta
                            href="/Ayman_Boujjar_CV.pdf?v=20260930"
                            download="Ayman_Boujjar_CV.pdf"
                            className="inline-flex items-center gap-2 border border-white/10 bg-transparent px-7 py-3.5 font-semibold text-white/70 transition-colors hover:border-alpha hover:text-alpha"
                        >
                            <TransText en="Download CV" fr="Télécharger le CV" />
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                        </MagneticCta>
                    </motion.div>
                </div>

                {/* signal scroll cue */}
                <motion.a
                    href="#skills"
                    variants={itemVariants}
                    className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-alpha"
                    aria-label="Scroll to skills"
                >
                    <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-alpha/70">
                        <TransText en="Scan" fr="Scan" />
                    </span>
                    <span className="hero-scroll-cue relative flex h-10 w-6 items-start justify-center rounded-full border border-alpha/40 pt-1.5">
                        <span className="hero-scroll-dot h-1.5 w-1.5 rounded-full bg-alpha" />
                    </span>
                </motion.a>
            </motion.div>
        </section>
    );
}
