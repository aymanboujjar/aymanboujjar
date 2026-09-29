import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

type CursorMode = "default" | "hover";

type TrailDot = { id: number; x: number; y: number };
type Ripple = { id: number; x: number; y: number };

export default function SignalCursor() {
    const [mounted, setMounted] = useState(false);
    const [enabled, setEnabled] = useState(false);
    const [ready, setReady] = useState(false);
    const [mode, setMode] = useState<CursorMode>("default");
    const [label, setLabel] = useState("");
    const [trail, setTrail] = useState<TrailDot[]>([]);
    const [ripples, setRipples] = useState<Ripple[]>([]);
    const [reduceMotion, setReduceMotion] = useState(false);

    const trailId = useRef(0);
    const rippleId = useRef(0);
    const lastTrail = useRef(0);

    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const x = useSpring(rawX, { stiffness: 500, damping: 35, mass: 0.35 });
    const y = useSpring(rawY, { stiffness: 500, damping: 35, mass: 0.35 });
    const ringX = useSpring(rawX, { stiffness: 200, damping: 24, mass: 0.5 });
    const ringY = useSpring(rawY, { stiffness: 200, damping: 24, mass: 0.5 });
    const glowX = useSpring(rawX, { stiffness: 120, damping: 20, mass: 0.7 });
    const glowY = useSpring(rawY, { stiffness: 120, damping: 20, mass: 0.7 });

    useEffect(() => {
        setMounted(true);

        const fine = window.matchMedia("(pointer: fine)").matches;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        setReduceMotion(reduce);

        // Only require a fine pointer — still show cursor if reduced-motion
        if (!fine) {
            setEnabled(false);
            return;
        }

        setEnabled(true);

        const onMove = (e: MouseEvent) => {
            rawX.set(e.clientX);
            rawY.set(e.clientY);
            setReady((was) => {
                if (!was) document.documentElement.classList.add("signal-cursor-on");
                return true;
            });

            if (reduce) return;

            const now = performance.now();
            const speed = Math.hypot(e.movementX, e.movementY);
            if (now - lastTrail.current > (speed > 12 ? 24 : 48) && speed > 2) {
                lastTrail.current = now;
                const id = ++trailId.current;
                setTrail((prev) => [...prev, { id, x: e.clientX, y: e.clientY }].slice(-12));
                window.setTimeout(() => {
                    setTrail((prev) => prev.filter((t) => t.id !== id));
                }, 380);
            }
        };

        const interactive =
            "a, button, [role='button'], input, textarea, select, label, summary, .cursor-pointer";

        const onOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            if (!target) return;
            const el = target.closest(interactive) as HTMLElement | null;
            if (el) {
                setMode("hover");
                const text =
                    el.getAttribute("data-cursor") ||
                    el.getAttribute("aria-label") ||
                    "";
                setLabel(text.length > 18 ? "" : text);
            } else {
                setMode("default");
                setLabel("");
            }
        };

        const onDown = (e: MouseEvent) => {
            if (reduce) return;
            const id = ++rippleId.current;
            setRipples((prev) => [...prev.slice(-3), { id, x: e.clientX, y: e.clientY }]);
            window.setTimeout(() => {
                setRipples((prev) => prev.filter((r) => r.id !== id));
            }, 650);
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        window.addEventListener("mousedown", onDown);
        document.addEventListener("mouseover", onOver);

        return () => {
            document.documentElement.classList.remove("signal-cursor-on");
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mousedown", onDown);
            document.removeEventListener("mouseover", onOver);
        };
    }, [rawX, rawY]);

    if (!mounted || !enabled || !ready) return null;

    const hovering = mode === "hover";

    return createPortal(
        <div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[2147483646]"
            style={{ isolation: "isolate" }}
        >
            {/* trail */}
            {!reduceMotion && (
                <AnimatePresence>
                    {trail.map((t) => (
                        <motion.span
                            key={t.id}
                            className="absolute h-2 w-2 rounded-full bg-[#0077BE]"
                            style={{ left: t.x, top: t.y, marginLeft: -4, marginTop: -4 }}
                            initial={{ opacity: 0.8, scale: 1 }}
                            animate={{ opacity: 0, scale: 0.2 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                        />
                    ))}
                </AnimatePresence>
            )}

            {/* click ripples */}
            {!reduceMotion && (
                <AnimatePresence>
                    {ripples.map((r) => (
                        <span
                            key={r.id}
                            className="absolute"
                            style={{ left: r.x, top: r.y }}
                        >
                            <motion.span
                                className="absolute rounded-full border-2 border-[#0077BE]"
                                style={{ marginLeft: 0, marginTop: 0 }}
                                initial={{ width: 12, height: 12, opacity: 0.9, x: "-50%", y: "-50%" }}
                                animate={{ width: 100, height: 100, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                            <motion.span
                                className="absolute rounded-full border border-dashed border-[#0077BE]/70"
                                initial={{ width: 8, height: 8, opacity: 0.75, x: "-50%", y: "-50%", rotate: 0 }}
                                animate={{ width: 130, height: 130, opacity: 0, rotate: 80 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            />
                        </span>
                    ))}
                </AnimatePresence>
            )}

            {/* bloom */}
            <motion.div
                className="absolute"
                style={{ left: glowX, top: glowY }}
            >
                <div
                    className="rounded-full bg-[#0077BE]/40 blur-2xl transition-all duration-300"
                    style={{
                        width: hovering ? 96 : 56,
                        height: hovering ? 96 : 56,
                        marginLeft: hovering ? -48 : -28,
                        marginTop: hovering ? -48 : -28,
                    }}
                />
            </motion.div>

            {/* ring */}
            <motion.div className="absolute" style={{ left: ringX, top: ringY }}>
                <motion.div
                    className="rounded-full border-2 border-dashed border-[#0077BE] transition-all duration-300"
                    style={{
                        width: hovering ? 64 : 36,
                        height: hovering ? 64 : 36,
                        marginLeft: hovering ? -32 : -18,
                        marginTop: hovering ? -32 : -18,
                        boxShadow: hovering
                            ? "0 0 28px rgba(0,119,190,0.55)"
                            : "0 0 12px rgba(0,119,190,0.35)",
                    }}
                    animate={!reduceMotion && hovering ? { rotate: 360 } : { rotate: 0 }}
                    transition={
                        !reduceMotion && hovering
                            ? { duration: 5, repeat: Infinity, ease: "linear" }
                            : { duration: 0.3 }
                    }
                />
            </motion.div>

            {/* core */}
            <motion.div className="absolute" style={{ left: x, top: y }}>
                {!reduceMotion && (
                    <motion.div
                        className="absolute rounded-full border border-[#0077BE]/60"
                        style={{
                            width: hovering ? 28 : 20,
                            height: hovering ? 28 : 20,
                            marginLeft: hovering ? -14 : -10,
                            marginTop: hovering ? -14 : -10,
                        }}
                        animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0.15, 0.7] }}
                        transition={{
                            duration: hovering ? 1 : 1.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                )}
                <div
                    className="rounded-full bg-[#0077BE] transition-transform duration-200"
                    style={{
                        width: hovering ? 14 : 10,
                        height: hovering ? 14 : 10,
                        marginLeft: hovering ? -7 : -5,
                        marginTop: hovering ? -7 : -5,
                        boxShadow: "0 0 18px rgba(0,119,190,1), 0 0 4px #fff",
                        transform: hovering ? "scale(1.15)" : "scale(1)",
                    }}
                />
                {hovering && label && (
                    <span
                        className="absolute whitespace-nowrap border border-[#0077BE]/50 bg-[#050810]/95 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#0077BE]"
                        style={{ left: 18, top: -8 }}
                    >
                        {label}
                    </span>
                )}
            </motion.div>
        </div>,
        document.body
    );
}
