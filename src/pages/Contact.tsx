import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { TransText } from "../components/TransText";
import {
    buildContactPageJsonLd,
    CONTACT_PAGE_SEO,
    GITHUB_URL,
    LINKEDIN_URL,
} from "../constants/seo";
import { submitContactForm } from "../lib/contactApi";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClass =
    "w-full border border-white/12 bg-[#070b14]/80 px-4 py-3 text-white placeholder:text-white/35 outline-none transition-colors focus:border-alpha/50 focus:ring-1 focus:ring-alpha/30";

export default function Contact() {
    const jsonLd = buildContactPageJsonLd();
    const [formState, setFormState] = useState<FormState>("idle");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (formState === "submitting") return;

        setFormState("submitting");
        setErrorMessage(null);

        const form = e.currentTarget;
        const data = new FormData(form);

        const result = await submitContactForm({
            name: String(data.get("name") ?? ""),
            email: String(data.get("email") ?? ""),
            subject: String(data.get("subject") ?? ""),
            message: String(data.get("message") ?? ""),
            company: String(data.get("company") ?? ""),
        });

        if (result.ok) {
            setFormState("success");
            form.reset();
            return;
        }

        setFormState("error");
        setErrorMessage(result.error);
    }

    return (
        <div className="relative min-h-screen overflow-hidden py-16 lg:py-28">
            <Seo {...CONTACT_PAGE_SEO} jsonLd={jsonLd} />

            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(-18deg, #0077BE 0 1px, transparent 1px 19px)",
                    maskImage:
                        "radial-gradient(ellipse at 60% 20%, black 14%, transparent 68%)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute left-[10%] top-[22%] h-[360px] w-[360px] rounded-full bg-alpha/[0.07] blur-3xl"
            />

            <div className="relative px-4 sm:px-6 lg:px-16">
                <div className="max-w-3xl">
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.35em] text-alpha">
                        <TransText en="Contact" fr="Contact" />
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        <TransText
                            en="Contact Ayman Boujjar — Freelance Developer"
                            fr="Contacter Ayman Boujjar — Développeur Freelance"
                        />
                    </h1>
                    <motion.p
                        className="mt-6 text-base leading-relaxed text-white/60 sm:text-lg"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <TransText
                            en="Tell me about your project, timeline, and budget. I reply by email — usually within 1–2 business days."
                            fr="Parlez-moi de votre projet, délais et budget. Je réponds par email — en général sous 1 à 2 jours ouvrés."
                        />
                    </motion.p>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-14">
                    <motion.form
                        className="space-y-5 lg:col-span-7"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        onSubmit={onSubmit}
                        noValidate
                    >
                        <div
                            className="absolute -left-[9999px] h-px w-px overflow-hidden"
                            aria-hidden
                        >
                            <label htmlFor="company">Company</label>
                            <input
                                id="company"
                                name="company"
                                type="text"
                                tabIndex={-1}
                                autoComplete="off"
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-white/45"
                                >
                                    <TransText en="Name" fr="Nom" />
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    autoComplete="name"
                                    maxLength={120}
                                    className={inputClass}
                                    disabled={formState === "submitting"}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-white/45"
                                >
                                    <TransText en="Email" fr="Email" />
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    maxLength={254}
                                    className={inputClass}
                                    disabled={formState === "submitting"}
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="subject"
                                className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-white/45"
                            >
                                <TransText en="Subject" fr="Sujet" />
                            </label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                required
                                maxLength={200}
                                className={inputClass}
                                disabled={formState === "submitting"}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-white/45"
                            >
                                <TransText en="Message" fr="Message" />
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                maxLength={5000}
                                className={`${inputClass} resize-y min-h-[160px]`}
                                disabled={formState === "submitting"}
                            />
                        </div>

                        {formState === "success" && (
                            <p
                                className="border border-alpha/40 bg-alpha/10 px-4 py-3 text-sm text-white"
                                role="status"
                            >
                                <TransText
                                    en="Message sent. Thank you — I'll get back to you soon."
                                    fr="Message envoyé. Merci — je vous réponds bientôt."
                                />
                            </p>
                        )}

                        {formState === "error" && errorMessage && (
                            <p
                                className="border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-100"
                                role="alert"
                            >
                                {errorMessage}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={formState === "submitting"}
                            className="inline-flex cursor-pointer items-center gap-2 border border-alpha bg-alpha px-6 py-3.5 font-semibold text-white transition-shadow hover:shadow-[0_0_32px_rgba(0,119,190,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {formState === "submitting" ? (
                                <TransText en="Sending…" fr="Envoi…" />
                            ) : (
                                <TransText en="Send message" fr="Envoyer" />
                            )}
                        </button>
                    </motion.form>

                    <motion.aside
                        className="space-y-6 lg:col-span-5"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="border border-white/10 bg-[#070b14]/60 p-6">
                            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-alpha">
                                <TransText en="Elsewhere" fr="Ailleurs" />
                            </p>
                            <ul className="mt-4 space-y-3 text-sm text-white/70">
                                <li>
                                    <a
                                        href={GITHUB_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-alpha hover:underline"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={LINKEDIN_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-alpha hover:underline"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <p className="text-sm text-white/45">
                            <TransText
                                en="Prefer the homepage contact section?"
                                fr="Vous préférez la section contact de l'accueil ?"
                            />{" "}
                            <Link to="/#contact" className="text-alpha hover:underline">
                                <TransText en="Go there" fr="Y aller" />
                            </Link>
                        </p>
                    </motion.aside>
                </div>
            </div>
        </div>
    );
}
