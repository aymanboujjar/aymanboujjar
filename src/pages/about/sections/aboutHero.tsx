import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { TransText } from "../../../components/TransText";
import profile from "../../../assets/images/bojojojo.jpeg";

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
            whileTap={{ scale: 0.98 }}
            onMouseMove={(e) => {
                const el = ref.current;
                if (!el) return;
                const rect = el.getBoundingClientRect();
                mx.set((e.clientX - (rect.left + rect.width / 2)) * 0.2);
                my.set((e.clientY - (rect.top + rect.height / 2)) * 0.2);
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

export default function AboutHero() {
    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-16 lg:py-28">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.055]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(24deg, #0077BE 0 1px, transparent 1px 18px)",
                    maskImage:
                        "radial-gradient(ellipse at 25% 40%, black 12%, transparent 68%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute left-[15%] top-[40%] h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-alpha/[0.09] blur-3xl"
            />

            <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
                <motion.div
                    className="space-y-6 lg:col-span-7"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-alpha">
                        <TransText en="Identity" fr="Identité" />
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Ayman Boujjar
                    </h1>
                    <h2 className="text-xl font-semibold text-alpha sm:text-2xl lg:text-3xl">
                        <TransText
                            en="Passionate Full Stack Developer"
                            fr="Développeur Full Stack Passionné"
                        />
                    </h2>
                    <p className="max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
                        <TransText
                            en="I'm a dedicated web developer with a passion for creating innovative solutions that make a difference. With expertise in modern web technologies and a collaborative approach, I bring ideas to life through clean, efficient code."
                            fr="Je suis un développeur web dévoué avec une passion pour créer des solutions innovantes qui font la différence. Avec une expertise dans les technologies web modernes et une approche collaborative, je donne vie aux idées grâce à un code propre et efficace."
                        />
                    </p>
                    <p className="max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
                        <TransText
                            en="When I'm not coding, you'll find me exploring new technologies and contributing to open source projects."
                            fr="Quand je ne code pas, vous me trouverez en train d'explorer de nouvelles technologies et de contribuer à des projets open source."
                        />
                    </p>

                    <MagneticCta
                        href="/Ayman_Boujjar_CV.docx"
                        download="Ayman_Boujjar_CV.docx"
                        className="inline-flex items-center gap-3 border border-alpha bg-alpha px-6 py-3.5 font-semibold text-white transition-shadow duration-300 hover:shadow-[0_0_32px_rgba(0,119,190,0.35)]"
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

                <motion.div
                    className="relative flex justify-center lg:col-span-5"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
                >
                    <div className="relative">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -inset-6 rounded-full border border-alpha/20"
                        />
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -inset-3 rounded-full border border-dashed border-white/15"
                        />
                        <motion.span
                            aria-hidden
                            className="pointer-events-none absolute -inset-3 rounded-full border border-dashed border-alpha/40"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="relative overflow-hidden border border-white/12 bg-[#070b14] p-2 shadow-[0_0_48px_rgba(0,119,190,0.15)]">
                            <img
                                src={profile}
                                alt="Ayman Boujjar"
                                className="aspect-[4/5] w-64 object-cover sm:w-72 lg:w-80"
                            />
                            <span
                                aria-hidden
                                className="pointer-events-none absolute inset-4 border border-dashed border-alpha/0 transition-colors duration-500 hover:border-alpha/30"
                            />
                        </div>
                        <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-alpha/80">
                            <TransText en="Profile lock" fr="Profil verrouillé" />
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
