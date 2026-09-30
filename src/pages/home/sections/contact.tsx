import { useRef, useState } from "react";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "framer-motion";
import Title from "../../../components/Title";
import { socials } from "../../../constants/socials";
import { TransText } from "../../../components/TransText";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const itemVariants = {
    hidden: { y: 24, opacity: 0, filter: "blur(6px)" },
    show: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.55, ease: "easeOut" },
    },
};

function MagneticLink({
    children,
    href,
    download,
    className,
    onActivate,
}: {
    children: React.ReactNode;
    href: string;
    download?: string;
    className: string;
    onActivate?: () => void;
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
            target={download || href.startsWith("mailto:") ? undefined : "_blank"}
            rel={download || href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className={className}
            style={{ x, y }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={onActivate}
            onFocus={onActivate}
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

export default function Contact() {
    const [active, setActive] = useState(0);
    const current = socials[active] ?? socials[0];

    return (
        <motion.section
            id="contact"
            className="relative overflow-hidden py-16 lg:py-28"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.055]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(56deg, #0077BE 0 1px, transparent 1px 18px)",
                    maskImage:
                        "radial-gradient(ellipse at 70% 55%, black 12%, transparent 70%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-alpha/[0.1] blur-3xl"
            />

            <div className="relative px-4 sm:px-6 lg:px-16">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <Title
                            title={
                                <TransText en="Get In Touch" fr="Contactez-Moi" />
                            }
                        />
                        <motion.p
                            className="mt-4 max-w-md text-sm leading-relaxed text-white/55 sm:text-base"
                            variants={itemVariants}
                        >
                            <TransText
                                en="Open channel — pick a line, lock the signal, say hello."
                                fr="Canal ouvert — choisissez une ligne, verrouillez le signal, dites bonjour."
                            />
                        </motion.p>
                    </div>

                    <motion.div
                        className="flex items-baseline gap-4 font-mono tabular-nums"
                        variants={itemVariants}
                    >
                        <span className="text-xs uppercase tracking-[0.3em] text-alpha">
                            <TransText en="Channel" fr="Canal" />
                        </span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={current.name}
                                className="text-2xl text-white sm:text-3xl"
                                initial={{ y: 14, opacity: 0, filter: "blur(8px)" }}
                                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                exit={{ y: -14, opacity: 0, filter: "blur(8px)" }}
                                transition={{ duration: 0.3 }}
                            >
                                {current.name}
                            </motion.span>
                        </AnimatePresence>
                        <span className="text-sm text-white/35">
                            {String(active + 1).padStart(2, "0")}
                            <span className="text-white/20">
                                {" "}
                                / {String(socials.length).padStart(2, "0")}
                            </span>
                        </span>
                    </motion.div>
                </div>

                <div className="mt-12 grid grid-cols-1 items-stretch gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-14">
                    {/* left copy + CTAs */}
                    <motion.div
                        className="flex flex-col justify-between space-y-8 lg:col-span-5"
                        variants={itemVariants}
                    >
                        <div className="space-y-5">
                            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-alpha">
                                <TransText
                                    en="Signal online"
                                    fr="Signal actif"
                                />
                            </p>
                            <h3 className="text-3xl font-bold leading-tight lg:text-5xl">
                                <TransText
                                    en="Let's build something solid."
                                    fr="Construisons quelque chose de solide."
                                />
                            </h3>
                            <p className="max-w-md text-base leading-relaxed text-white/60 lg:text-lg">
                                <TransText
                                    en="Open to new opportunities and interesting projects. Questions, collabs, or a quick hello — reach out anytime."
                                    fr="Ouvert aux nouvelles opportunités et aux projets intéressants. Questions, collabs, ou un simple bonjour — écrivez-moi."
                                />
                            </p>
                        </div>

                        <MagneticLink
                            href="/Ayman_Boujjar_CV.pdf?v=20260930"
                            download="Ayman_Boujjar_CV.pdf"
                            className="inline-flex w-fit items-center gap-3 border border-alpha bg-alpha px-6 py-3.5 font-semibold text-white transition-shadow duration-300 hover:shadow-[0_0_32px_rgba(0,119,190,0.35)]"
                        >
                            <TransText en="Download CV" fr="Télécharger le CV" />
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                        </MagneticLink>
                    </motion.div>

                    {/* contact channels */}
                    <motion.div
                        className="space-y-3 lg:col-span-7"
                        variants={itemVariants}
                    >
                        {socials.map((soc, i) => {
                            const on = i === active;
                            const pad = String(i + 1).padStart(2, "0");
                            return (
                                <MagneticLink
                                    key={soc.name}
                                    href={soc.link}
                                    onActivate={() => setActive(i)}
                                    className={`group relative flex items-center gap-5 overflow-hidden border px-5 py-5 transition-[border-color,background-color,box-shadow] duration-400
                                        ${on
                                            ? "border-alpha/50 bg-alpha/10 shadow-[0_0_28px_rgba(0,119,190,0.15)]"
                                            : "border-white/10 bg-[#070b14]/80 hover:border-alpha/35"
                                        }`}
                                >
                                    <span className="font-mono text-[10px] text-alpha">
                                        {pad}
                                    </span>
                                    <div
                                        className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-colors
                                            ${on
                                                ? "border-alpha/50 bg-alpha/15"
                                                : "border-white/12 bg-[#050810]"
                                            }`}
                                    >
                                        {on && (
                                            <motion.span
                                                aria-hidden
                                                className="pointer-events-none absolute inset-[-4px] rounded-full border border-dashed border-alpha/55"
                                                animate={{ rotate: 360 }}
                                                transition={{
                                                    duration: 10,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                }}
                                            />
                                        )}
                                        <span className="scale-90">{soc.icon}</span>
                                    </div>
                                    <div className="min-w-0 flex-1 text-left">
                                        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                                            {soc.name}
                                        </p>
                                        <p
                                            className={`truncate text-lg transition-colors lg:text-xl ${on ? "text-alpha" : "text-white group-hover:text-alpha"}`}
                                        >
                                            {soc.label}
                                        </p>
                                    </div>
                                    <svg
                                        className={`h-5 w-5 shrink-0 transition-all duration-300 ${on ? "translate-x-1 text-alpha" : "text-white/30 group-hover:translate-x-1 group-hover:text-alpha"}`}
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
                                    <div
                                        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-alpha to-transparent transition-all duration-500 ${on ? "w-full" : "w-0 group-hover:w-full"}`}
                                    />
                                </MagneticLink>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
