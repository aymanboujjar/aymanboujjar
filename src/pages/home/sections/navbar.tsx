import { Link, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import Logo from "../../../components/Logo";
import { useScroll, useMotionValue, useSpring, motion, AnimatePresence } from "framer-motion";
import { LinkedInIcon, GitHubIcon, HamburgerIcon, EnglishFlagIcon, FrenchFlagIcon } from "../../../components/icons";
import { useAppContext } from "../../../contexts/AppContext";
import { TransText } from "../../../components/TransText";
import {
    GITHUB_ARIA_LABEL,
    GITHUB_URL,
    LINKEDIN_ARIA_LABEL,
    LINKEDIN_URL,
} from "../../../constants/seo";

function MagneticNode({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const x = useSpring(mx, { stiffness: 220, damping: 18 });
    const y = useSpring(my, { stiffness: 220, damping: 18 });

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{ x, y }}
            onMouseMove={(e) => {
                const el = ref.current;
                if (!el) return;
                const rect = el.getBoundingClientRect();
                mx.set((e.clientX - (rect.left + rect.width / 2)) * 0.35);
                my.set((e.clientY - (rect.top + rect.height / 2)) * 0.35);
            }}
            onMouseLeave={() => {
                mx.set(0);
                my.set(0);
            }}
        >
            {children}
        </motion.div>
    );
}

export default function Navbar() {
    const { scrollYProgress } = useScroll();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { selectedLanguage, toggleLanguage } = useAppContext();
    const { pathname } = useLocation();

    const navLinks = [
        { to: "/", index: "01", label: <TransText en="Home" fr="Accueil" /> },
        { to: "/about", index: "02", label: <TransText en="About Me" fr="À Propos" /> },
        { to: "/services", index: "03", label: <TransText en="Services" fr="Services" /> },
        { to: "/projects", index: "04", label: <TransText en="Projects" fr="Projets" /> },
        // { to: "/articles", index: "05", label: <TransText en="Articles" fr="Articles" /> },
        { to: "/contact", index: "06", label: <TransText en="Contact" fr="Contact" /> },
    ];

    const isActive = (to: string) =>
        to === "/" ? pathname === "/" : pathname.startsWith(to);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div className="border-b border-alpha/20 bg-[#050810]/70 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,119,190,0.15)]">
                <div className="flex items-center justify-between px-4 sm:px-6 lg:px-16 py-3">
                    <MagneticNode>
                        <Link
                            to="/"
                            className="group flex items-center gap-3"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-[#070b14]/80 transition-colors group-hover:border-alpha/50">
                                <Logo size="w-10 h-10" />
                            </span>
                            <div className="hidden sm:block leading-tight">
                                <p className="font-semibold tracking-wide">Ayman Boujjar</p>
                                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-alpha/80">
                                    <TransText en="Signal" fr="Signal" />
                                </p>
                            </div>
                        </Link>
                    </MagneticNode>

                    {/* Desktop */}
                    <div className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => {
                            const active = isActive(link.to);
                            return (
                                <MagneticNode key={link.to}>
                                    <Link
                                        to={link.to}
                                        className={`relative flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-sm transition-colors duration-300
                                            ${active
                                                ? "border-alpha/50 bg-alpha/10 text-white shadow-[0_0_24px_rgba(0,119,190,0.25)]"
                                                : "border-transparent text-white/70 hover:border-white/12 hover:bg-white/[0.03] hover:text-white"
                                            }`}
                                    >
                                        <span className="text-[10px] text-alpha">{link.index}</span>
                                        <span>{link.label}</span>
                                        {active && (
                                            <motion.span
                                                layoutId="nav-active-ring"
                                                aria-hidden
                                                className="pointer-events-none absolute inset-[-3px] rounded-full border border-dashed border-alpha/50"
                                            />
                                        )}
                                    </Link>
                                </MagneticNode>
                            );
                        })}

                        <div className="ml-2 flex items-center gap-2 border-l border-white/10 pl-4">
                            <MagneticNode>
                                <a
                                    href={GITHUB_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={GITHUB_ARIA_LABEL}
                                    title={GITHUB_ARIA_LABEL}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-[#070b14]/80 text-white/80 transition-colors hover:border-alpha hover:text-alpha"
                                >
                                    <GitHubIcon size={18} />
                                </a>
                            </MagneticNode>

                            <MagneticNode>
                                <a
                                    href={LINKEDIN_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={LINKEDIN_ARIA_LABEL}
                                    title={LINKEDIN_ARIA_LABEL}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-[#070b14]/80 text-white/80 transition-colors hover:border-alpha hover:text-alpha"
                                >
                                    <LinkedInIcon size={18} />
                                </a>
                            </MagneticNode>

                            <MagneticNode>
                                <button
                                    type="button"
                                    onClick={toggleLanguage}
                                    aria-label="Toggle language"
                                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/12 bg-[#070b14]/80 transition-colors hover:border-alpha"
                                >
                                    <AnimatePresence mode="wait">
                                        {selectedLanguage !== "en" ? (
                                            <motion.div
                                                key="french"
                                                initial={{ scale: 0.7, opacity: 0, rotate: -12 }}
                                                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                                exit={{ scale: 0.7, opacity: 0, rotate: 12 }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                <FrenchFlagIcon className="text-alpha" size={18} />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="english"
                                                initial={{ scale: 0.7, opacity: 0, rotate: -12 }}
                                                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                                exit={{ scale: 0.7, opacity: 0, rotate: 12 }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                <EnglishFlagIcon className="text-alpha" size={18} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </MagneticNode>
                        </div>
                    </div>

                    {/* Mobile toggle */}
                    <motion.button
                        type="button"
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-[#070b14]/80 hover:border-alpha"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMenuOpen}
                    >
                        <HamburgerIcon isOpen={isMenuOpen} />
                    </motion.button>
                </div>

                {/* Signal progress beam under bar */}
                <motion.div
                    style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
                    className="signal-progress h-[2px] w-full bg-gradient-to-r from-alpha via-alpha to-transparent"
                />
            </div>

            {/* Mobile panel */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="relative md:hidden overflow-hidden border-b border-alpha/20 bg-[#050810]/95 backdrop-blur-xl"
                    >
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 opacity-[0.07]"
                            style={{
                                backgroundImage:
                                    "repeating-linear-gradient(28deg, #0077BE 0 1px, transparent 1px 16px)",
                                maskImage: "linear-gradient(to bottom, black, transparent)",
                            }}
                        />

                        <div className="relative px-4 py-8 space-y-2">
                            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-alpha">
                                <TransText en="Navigate" fr="Navigation" />
                            </p>

                            {navLinks.map((link, index) => {
                                const active = isActive(link.to);
                                return (
                                    <motion.div
                                        key={link.to}
                                        initial={{ opacity: 0, x: -24 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: index * 0.08,
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 18,
                                        }}
                                    >
                                        <Link
                                            to={link.to}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`flex items-center gap-4 border px-4 py-4 transition-colors
                                                ${active
                                                    ? "border-alpha/40 bg-alpha/10 text-white"
                                                    : "border-white/10 bg-white/[0.02] text-white/80 hover:border-alpha/30"
                                                }`}
                                        >
                                            <span className="font-mono text-xs text-alpha">{link.index}</span>
                                            <span className="text-xl font-semibold">{link.label}</span>
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.28 }}
                                className="flex items-center gap-3 pt-6"
                            >
                                <a
                                    href={GITHUB_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={GITHUB_ARIA_LABEL}
                                    title={GITHUB_ARIA_LABEL}
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-[#070b14] text-white/80 hover:border-alpha hover:text-alpha"
                                >
                                    <GitHubIcon size={22} />
                                </a>
                                <a
                                    href={LINKEDIN_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={LINKEDIN_ARIA_LABEL}
                                    title={LINKEDIN_ARIA_LABEL}
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-[#070b14] text-white/80 hover:border-alpha hover:text-alpha"
                                >
                                    <LinkedInIcon size={22} />
                                </a>
                                <button
                                    type="button"
                                    onClick={toggleLanguage}
                                    aria-label="Toggle language"
                                    className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/12 bg-[#070b14] hover:border-alpha"
                                >
                                    <AnimatePresence mode="wait">
                                        {selectedLanguage !== "en" ? (
                                            <motion.div
                                                key="fr-m"
                                                initial={{ scale: 0.7, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0.7, opacity: 0 }}
                                            >
                                                <FrenchFlagIcon className="text-alpha" size={22} />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="en-m"
                                                initial={{ scale: 0.7, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0.7, opacity: 0 }}
                                            >
                                                <EnglishFlagIcon className="text-alpha" size={22} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
