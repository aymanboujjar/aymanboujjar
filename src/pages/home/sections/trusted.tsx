import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import Title from "../../../components/Title";
import { trusted } from "../../../constants/trusted";
import { TransText } from "../../../components/TransText";

function MagneticLogo({
    partner,
    index,
    total,
    active,
    dimmed,
    onActivate,
}: {
    partner: (typeof trusted)[number];
    index: number;
    total: number;
    active: boolean;
    dimmed: boolean;
    onActivate: (i: number) => void;
}) {
    const ref = useRef<HTMLAnchorElement>(null);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const x = useSpring(mx, { stiffness: 200, damping: 18 });
    const y = useSpring(my, { stiffness: 200, damping: 18 });

    const onMove = (e: React.MouseEvent) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        mx.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
        my.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
    };

    return (
        <div
            className="trusted-orbit-item absolute left-1/2 top-1/2"
            style={{
                ["--a" as string]: `${(index / total) * 360}deg`,
                ["--r" as string]: "min(34vw, 220px)",
            }}
        >
            <motion.a
                ref={ref}
                href={partner.website}
                target="_blank"
                rel="noreferrer"
                className="relative z-10 block"
                style={{ x, y }}
                initial={{ opacity: 0, scale: 0.35 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, type: "spring", stiffness: 170, damping: 14 }}
                onMouseEnter={() => onActivate(index)}
                onMouseMove={onMove}
                onMouseLeave={() => {
                    mx.set(0);
                    my.set(0);
                }}
                onFocus={() => onActivate(index)}
                aria-label={partner.name}
            >
                <motion.div
                    className={`relative flex h-[86px] w-[86px] items-center justify-center rounded-full border transition-[border-color,background-color,box-shadow] duration-500
                        sm:h-[102px] sm:w-[102px]
                        ${active
                            ? "border-alpha bg-alpha/15 shadow-[0_0_36px_rgba(0,119,190,0.4)]"
                            : "border-white/12 bg-[#070b14]/85 backdrop-blur-md"
                        }`}
                    animate={{
                        scale: active ? 1.14 : dimmed ? 0.9 : 1,
                        opacity: dimmed ? 0.45 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    whileHover={{ scale: 1.18 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {active && (
                        <motion.span
                            aria-hidden
                            className="pointer-events-none absolute inset-[-7px] rounded-full border border-dashed border-alpha/70"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                        />
                    )}
                    <img
                        src={partner.image}
                        alt={`${partner.name} logo`}
                        className="h-[56%] w-[56%] object-contain select-none"
                        draggable={false}
                    />
                </motion.div>
            </motion.a>
        </div>
    );
}

export default function Trusted() {
    const [active, setActive] = useState(0);
    const [hovered, setHovered] = useState(false);
    const [orbitPaused, setOrbitPaused] = useState(false);

    useEffect(() => {
        if (hovered) return;
        const id = window.setInterval(() => {
            setActive((i) => (i + 1) % trusted.length);
        }, 2800);
        return () => window.clearInterval(id);
    }, [hovered]);

    const current = trusted[active];

    return (
        <section
            id="trusted"
            className="relative overflow-hidden py-16 lg:py-28"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
                setHovered(false);
                setOrbitPaused(false);
            }}
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.055]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(-32deg, #0077BE 0 1px, transparent 1px 18px)",
                    maskImage: "radial-gradient(ellipse at 50% 42%, black 12%, transparent 70%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[44%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-alpha/[0.08] blur-3xl"
            />

            <div className="relative px-4 sm:px-6 lg:px-16">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <Title title={<TransText en="Trusted By" fr="Ils Me Font Confiance" />} />
                        <motion.p
                            className="mt-4 max-w-md text-sm leading-relaxed text-white/55 sm:text-base"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.12 }}
                        >
                            <TransText
                                en="Partners who trusted me to ship real product — hover to pause the orbit, drag a mark closer."
                                fr="Des partenaires qui m’ont confié de vrais produits — survolez pour geler l’orbite, rapprochez une marque."
                            />
                        </motion.p>
                    </div>

                    <motion.div
                        className="flex items-baseline gap-4 font-mono tabular-nums"
                        initial={{ opacity: 0, x: 18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs uppercase tracking-[0.3em] text-alpha">
                            <TransText en="Signal" fr="Signal" />
                        </span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={current.name}
                                className="text-2xl text-white sm:text-3xl"
                                initial={{ y: 16, opacity: 0, filter: "blur(8px)" }}
                                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                exit={{ y: -16, opacity: 0, filter: "blur(8px)" }}
                                transition={{ duration: 0.32 }}
                            >
                                {current.name}
                            </motion.span>
                        </AnimatePresence>
                        <span className="text-sm text-white/35">
                            {String(active + 1).padStart(2, "0")}
                            <span className="text-white/20"> / {String(trusted.length).padStart(2, "0")}</span>
                        </span>
                    </motion.div>
                </div>

                {/* Orbit — md+ */}
                <div
                    className="relative mx-auto mt-12 hidden aspect-square w-full max-w-[560px] md:block"
                    onMouseEnter={() => setOrbitPaused(true)}
                    onMouseLeave={() => setOrbitPaused(false)}
                >
                    <div aria-hidden className="absolute inset-[8%] rounded-full border border-alpha/15" />
                    <div aria-hidden className="absolute inset-[22%] rounded-full border border-dashed border-white/10" />
                    <div aria-hidden className="absolute inset-[38%] rounded-full border border-alpha/20" />

                    <div
                        aria-hidden
                        className={`trusted-radar absolute inset-[8%] rounded-full ${orbitPaused ? "trusted-radar--paused" : ""}`}
                    />

                    <div className={`trusted-orbit absolute inset-0 ${orbitPaused ? "trusted-orbit--paused" : ""}`}>
                        {trusted.map((partner, i) => (
                            <MagneticLogo
                                key={partner.name}
                                partner={partner}
                                index={i}
                                total={trusted.length}
                                active={active === i}
                                dimmed={hovered && active !== i}
                                onActivate={setActive}
                            />
                        ))}
                    </div>

                    {/* fixed center hub (does not spin with logos) */}
                    <div className="absolute left-1/2 top-1/2 z-20 flex w-[44%] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
                        <motion.div
                            className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full border border-alpha/45 bg-[#050810]/92 backdrop-blur-xl sm:h-44 sm:w-44"
                            animate={{
                                boxShadow: [
                                    "0 0 0 0 rgba(0,119,190,0)",
                                    "0 0 52px 6px rgba(0,119,190,0.28)",
                                    "0 0 0 0 rgba(0,119,190,0)",
                                ],
                            }}
                            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <span className="text-[10px] uppercase tracking-[0.35em] text-alpha">
                                <TransText en="Alliance" fr="Alliance" />
                            </span>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={current.name}
                                    src={current.image}
                                    alt={`${current.name} logo`}
                                    className="mt-2 h-14 w-14 object-contain sm:h-16 sm:w-16"
                                    initial={{ opacity: 0, scale: 0.65, rotate: -10 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    exit={{ opacity: 0, scale: 0.65, rotate: 10 }}
                                    transition={{ duration: 0.34 }}
                                />
                            </AnimatePresence>
                            <a
                                href={current.website}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-2 text-[11px] text-white/50 underline-offset-4 transition hover:text-alpha hover:underline"
                            >
                                <TransText en="Visit" fr="Visiter" /> →
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile kinetic strip */}
                <div className="mt-10 md:hidden">
                    <div className="trusted-marquee overflow-hidden py-3">
                        <div className="trusted-marquee-track flex w-max gap-3">
                            {[...trusted, ...trusted].map((partner, i) => {
                                const real = i % trusted.length;
                                return (
                                    <a
                                        key={`${partner.name}-${i}`}
                                        href={partner.website}
                                        target="_blank"
                                        rel="noreferrer"
                                        onFocus={() => setActive(real)}
                                        onTouchStart={() => setActive(real)}
                                        className={`flex h-28 w-36 shrink-0 flex-col items-center justify-center gap-2 border transition-colors
                                            ${active === real ? "border-alpha bg-alpha/10" : "border-white/10 bg-white/[0.03]"}`}
                                    >
                                        <img
                                            src={partner.image}
                                            alt={`${partner.name} logo`}
                                            className="h-12 w-20 object-contain"
                                        />
                                        <span className="text-[11px] tracking-wide text-white/70">{partner.name}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* progress dots */}
                <div className="mt-10 hidden justify-center gap-2 md:flex">
                    {trusted.map((partner, i) => (
                        <button
                            key={partner.name}
                            type="button"
                            onClick={() => setActive(i)}
                            className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-500
                                ${active === i ? "w-12 bg-alpha" : "w-6 bg-white/15 hover:bg-white/30"}`}
                            aria-label={partner.name}
                        >
                            {active === i && !hovered && (
                                <motion.span
                                    className="absolute inset-0 bg-white/35"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
