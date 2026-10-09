import { useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import ProjectDetails from "../components/ProjectDetails";
import Seo from "../components/Seo";
import { awardProject, proProjects, persoProjects } from "../constants/projects";
import { TransText } from "../components/TransText";
import { projectPageSeo } from "../constants/seo";

export default function ProjectPage() {
    const { name } = useParams<{ name: string }>();

    if (!name) {
        return <Navigate to="/" replace />;
    }
    
    const project = [awardProject, ...proProjects, ...persoProjects].find(
        (p) =>
            p.name.toLowerCase() === decodeURIComponent(name).toLowerCase() ||
            p.name.toLowerCase().replace(/\s+/g, "-") === name.toLowerCase()
    );

    if (!project) {
        return (
            <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16">
                <Seo
                    title="Project Not Found | Ayman Boujjar"
                    description="The requested project case file was not found on Ayman Boujjar’s portfolio."
                    path={`/project/${name}`}
                    robots="noindex, follow"
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(30deg, #0077BE 0 1px, transparent 1px 18px)",
                        maskImage:
                            "radial-gradient(ellipse at center, black 20%, transparent 70%)",
                    }}
                />
                <div className="relative max-w-md border border-white/10 bg-[#070b14]/90 p-8 text-center backdrop-blur-md">
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.35em] text-alpha">
                        <TransText en="Project not found" fr="Projet introuvable" />
                    </p>
                    <h1 className="mb-4 text-3xl font-bold text-white">
                        <TransText en="Project Not Found" fr="Projet Introuvable" />
                    </h1>
                    <p className="mb-8 text-white/55">
                        <TransText
                            en="This project isn’t in the portfolio. Browse the collection to find another case study."
                            fr="Ce projet ne figure pas dans le portfolio. Parcourez la collection pour découvrir d’autres projets."
                        />
                    </p>
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 border border-alpha bg-alpha px-6 py-3 font-semibold text-white transition-shadow hover:shadow-[0_0_24px_rgba(0,119,190,0.35)]"
                    >
                        ← <TransText en="Back to archive" fr="Retour à l’archive" />
                    </Link>
                </div>
            </div>
        );
    }

    return <ProjectSeoDetails project={project} />;
}

function ProjectSeoDetails({ project }: { project: Project }) {
    const pageSeo = useMemo(() => projectPageSeo(project), [project]);

    return (
        <>
            <Seo {...pageSeo} jsonLd={pageSeo.jsonLd} />
            <ProjectDetails key={project.id} project={project} />
        </>
    );
}
