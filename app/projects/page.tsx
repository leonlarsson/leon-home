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

    return (
        <div className="project-link px-[1px] py-[2px]">

            <Link className="group" href={`/projects/${project.projectId}`} draggable={false} title={`See more info on project ${project.name}.`}>
                <i className="fa-solid fa-arrow-right fa-lg me-1 group-hover:translate-x-[3px] group-active:translate-x-[6px] transition-transform" /> {project.name}
            </Link>

            {" "}

            {project.nextLink ?
                <Link href={project.link} draggable={false} title={`Go to project ${project.name}.`}><LinkIcon /></Link> :
                <a href={project.link} target="_blank" draggable={false} title={`Go to project website for ${project.name}.`}><LinkIcon /></a>
            }
        </div>
    );
};

const LinkIcon = () => <i className="fa-solid fa-up-right-from-square fa-lg mx-1 hover:scale-[1.18] transition-transform" />;