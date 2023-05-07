import Link from "next/link";
import type { Metadata } from "next";
import projects from "./projects";
import type { Project } from "./projects";
import "../globals.css";

const pageTitle = "Projects | Leon San José Larsson";
const pageDescription = "Links to projects.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
        type: "website",
        url: "https://leonlarsson.com/projects",
        title: pageTitle,
        description: pageDescription
    },
    twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
        creator: "@mozzyfx"
    }
};

export default () => {
    return (
        <div className=" space-y-1 max-[450px]:space-y-0 pb-3">
            <Link href="/" className="group font-extrabold text-[2rem] max-[450px]:text-[1.5rem] transition-all duration-300" title="Go back" draggable={false}><i className="fa-solid fa-arrow-left group-hover:text-red-400 group-hover:-translate-x-2 group-active:text-red-600 group-active:-translate-x-3 transition-all" /> Leon's Projects</Link>
            {projects.map(project => <Project key={project.projectId} project={project} />)}
        </div>
    );
}

const Project = ({ project }: { project: Project }) => {
    const commonProps = {
        draggable: false
    };

    return (
        <div className="project-link">
            <Link href={`/projects/${project.projectId}`} title={`See more info on project ${project.name}.`}><i className="fa-solid fa-arrow-right fa-lg me-1 hover:translate-x-[3px] transition-transform" /></Link>
            {" "}
            {project.nextLink ? <Link href={project.link} {...commonProps} title={`Go to project ${project.name}.`}>{project.name}</Link> : <a href={project.link} target="_blank" {...commonProps} title={`Go to project ${project.name}.`}>{project.name}</a>} {project.githubLink && <a href={project.githubLink} target="_blank" title={`Go to project's GitHub.`} {...commonProps} className="fa-brands fa-github fa-lg ms-1" />}
            {project.extra && <> (<a href={project.extra.link} target="_blank" title={`Go to project ${project.name} (${project.extra.name}).`} {...commonProps}>{project.extra.name}</a> {project.extra.githubLink && <a href={project.extra.githubLink} target="_blank" title={`Go to project's GitHub.`} {...commonProps} className="fa-brands fa-github fa-lg" />})</>}
        </div>
    );
};