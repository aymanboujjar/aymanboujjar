import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../pages/home/sections/navbar";
import Logo from "./Logo";
import { useAppContext } from "../contexts/AppContext";
import SignalCursor from "./SignalCursor";
import { TransText } from "./TransText";

export default function Layout() {
    const { isDark } = useAppContext();
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    const path = useLocation().pathname;
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [path]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) return prev + 4;
                return prev;
            });
        }, 120);

        const timeout = setTimeout(() => {
            setLoading(false);
        }, 3200);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            <svg className="pointer-events-none fixed inset-0 h-full w-full text-alpha/20">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            <SignalCursor />

            {loading ? (
                <div className="relative flex h-[100vh] items-center justify-center overflow-hidden bg-[#050505] text-white">
                    {/* atmosphere */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-[0.07]"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(-28deg, #0077BE 0 1px, transparent 1px 16px)",
                            maskImage:
                                "radial-gradient(ellipse at center, black 25%, transparent 72%)",
                        }}
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-alpha/15 blur-[100px]"
                    />
                    <div
                        aria-hidden
                        className="hero-radar pointer-events-none absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-alpha/25"
                    />
                    <div
                        aria-hidden
                        className="hero-radar pointer-events-none absolute left-1/2 top-1/2 h-[16rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-alpha/15"
                        style={{ animationDirection: "reverse", animationDuration: "18s" }}
                    />

                    {/* frame corners */}
                    <span className="pointer-events-none absolute left-6 top-6 h-3 w-3 border-l border-t border-alpha/70 sm:left-10 sm:top-10" aria-hidden />
                    <span className="pointer-events-none absolute right-6 top-6 h-3 w-3 border-r border-t border-alpha/70 sm:right-10 sm:top-10" aria-hidden />
                    <span className="pointer-events-none absolute bottom-6 left-6 h-3 w-3 border-b border-l border-alpha/70 sm:bottom-10 sm:left-10" aria-hidden />
                    <span className="pointer-events-none absolute bottom-6 right-6 h-3 w-3 border-b border-r border-alpha/70 sm:bottom-10 sm:right-10" aria-hidden />

                    {/* top readout */}
                    <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-10 sm:top-10">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-alpha shadow-[0_0_10px_rgba(0,119,190,0.8)]" />
                        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-alpha">
                            <TransText en="Signal online" fr="Signal en ligne" />
                        </p>
                    </div>
                    <p className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-[0.25em] text-white/35 sm:right-10 sm:top-10">
                        BOOT · {String(progress).padStart(3, "0")}
                    </p>

                    {/* core */}
                    <motion.div
                        className="relative z-10 flex w-full max-w-md flex-col items-center px-6"
                        initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                    >
                        <div className="relative mb-8 flex items-center justify-center">
                            <span
                                aria-hidden
                                className="absolute h-36 w-36 rounded-full border border-dashed border-alpha/40 sm:h-40 sm:w-40"
                            />
                            <span
                                aria-hidden
                                className="absolute h-28 w-28 rounded-full border border-white/10 sm:h-32 sm:w-32"
                            />
                            <Logo size="w-20 h-20 sm:w-24 sm:h-24 relative z-10" />
                        </div>

                        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.32em] text-alpha">
                            <TransText en="Establishing link" fr="Établissement du lien" />
                        </p>
                        <h1 className="mb-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                            Ayman Boujjar
                        </h1>

                        {/* signal beam progress */}
                        <div className="w-full">
                            <div className="mb-2 flex items-end justify-between font-mono text-[11px]">
                                <span className="uppercase tracking-[0.2em] text-white/40">
                                    <TransText en="Sync" fr="Sync" />
                                </span>
                                <span className="text-alpha">
                                    {String(progress).padStart(3, "0")}
                                    <span className="text-white/35">%</span>
                                </span>
                            </div>
                            <div className="relative h-[3px] w-full overflow-hidden bg-white/10">
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-alpha shadow-[0_0_16px_rgba(0,119,190,0.65)]"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.15, ease: "linear" }}
                                />
                                <span
                                    aria-hidden
                                    className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white"
                                    style={{ left: `calc(${progress}% - 4px)` }}
                                />
                            </div>
                            <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-white/25">
                                <span>00</span>
                                <span>
                                    <TransText en="Channel locked" fr="Canal verrouillé" />
                                </span>
                                <span>100</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* bottom cue */}
                    <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 sm:bottom-10">
                        <TransText en="Please stand by" fr="Veuillez patienter" />
                    </p>
                </div>
            ) : (
                <div
                    className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
                        isDark ? "bg-[#050505] text-[#E1E1E1]" : "bg-[#f8f8f8] text-[#0A0A0A]"
                    }`}
                >
                    <Navbar />
                    <div className="overflow-x-hidden pt-20">
                        <Outlet />
                    </div>
                </div>
            )}
        </>
    );
}
