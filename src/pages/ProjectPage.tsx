import { useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import ProjectDetails from "../components/ProjectDetails";
import Seo from "../components/Seo";
import { awardProject, proProjects, persoProjects } from "../constants/projects";
import { TransText } from "../components/TransText";
import {
    buildProjectJsonLd,
    projectPageTitle,
} from "../constants/seo";

export default function ProjectPage() {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <Navigate to="/" replace />;
    }

    const projectId = parseInt(id, 10);
    if (isNaN(projectId)) {
        return <Navigate to="/" replace />;
    }

    const project = [awardProject, ...proProjects, ...persoProjects].find((p) => p.id === projectId);

    if (!project) {
        return (
            <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16">
                <Seo
                    title="Project Not Found | Ayman Boujjar"
                    description="The requested project case file was not found on Ayman Boujjar’s portfolio."
                    path={`/project/${id}`}
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
                        <TransText en="Signal lost" fr="Signal perdu" />
                    </p>
                    <h1 className="mb-4 text-3xl font-bold text-white">
                        <TransText en="Project Not Found" fr="Projet Introuvable" />
                    </h1>
                    <p className="mb-8 text-white/55">
                        <TransText
                            en="The case file you're looking for doesn't exist on this band."
                            fr="Le dossier que vous recherchez n’existe pas sur cette bande."
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
    const jsonLd = useMemo(() => buildProjectJsonLd(project), [project]);
    const description = useMemo(() => {
        const role = project.role?.en ? ` ${project.role.en}.` : "";
        const techs = project.techs.map((t) => t.name).slice(0, 5).join(", ");
        const techHint = techs ? ` Technologies: ${techs}.` : "";
        return `${project.desc.en}${role}${techHint}`.slice(0, 300);
    }, [project]);

    return (
        <>
            <Seo
                title={projectPageTitle(project)}
                description={description}
                path={`/project/${project.id}`}
                jsonLd={jsonLd}
            />
            <ProjectDetails project={project} />
        </>
    );
}
