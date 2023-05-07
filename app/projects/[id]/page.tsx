import Link from "next/link";
import type { Metadata } from "next";
import projects from "../projects";

export const generateMetadata = ({ params }: { params: { id: string } }): Metadata => {

    const project = projects.find(project => project.projectId === parseInt(params.id));

    const pageTitle = `${project?.name ?? "Project #404"} | Leon San José Larsson`;
    const pageDescription = `A page dedicated to Leon's ${project?.name ?? "Project #404"}.`;

    return {
        title: pageTitle,
        description: pageDescription,
        openGraph: {
            type: "website",
            url: `https://leonlarsson.com/projects/${params.id}`,
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
};

export default ({ params }: { params: { id: string } }) => {
    const project = projects.find(project => project.projectId === parseInt(params.id));
    return (
        <>
            <Link href="/projects" className="group text-[1.3rem] max-sm:text-base transition-all duration-300" title="Go back" draggable={false}><i className="fa-solid fa-arrow-left group-hover:text-red-400 group-hover:-translate-x-1 group-active:text-red-600 group-active:-translate-x-2 transition-all" /> Back to list</Link>
            {project ? (
                <div className="px-16 max-sm:px-4">
                    <span className="font-extrabold text-[2rem] max-sm:text-2xl transition-all duration-300">{project.name}</span>
                    <p className="whitespace-pre-line mb-3">{project.description}</p>

                    <span className="font-bold text-lg">Links:</span>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {project.nextLink ? <Link className="project-page-link" href="/" draggable={false}>Go to project <i className="fa-solid fa-link" /></Link> : <a href={project.link} target="_blank" className="project-page-link" draggable={false}>Go to project <i className="fa-solid fa-link" /></a>}
                        {project.githubLink && <a href={project.githubLink} target="_blank" className="project-page-link" draggable={false}>Go to GitHub <i className="fa-brands fa-github" /></a>}
                        {project.extra &&
                            <>
                                <a href={project.extra.link} target="_blank" className="project-page-link" draggable={false}>{project.extra.name} <i className="fa-solid fa-link" /></a>
                                <a href={project.extra.githubLink} target="_blank" className="project-page-link" draggable={false}>{project.extra.name} <i className="fa-brands fa-github" /></a>
                            </>
                        }
                    </div>

                    <div className="mt-5 font-semibold">Try it:</div>
                    <iframe src={project.link} width="100%" height="500px" className="border-2 border-black rounded"></iframe>

                </div>
            ) : (
                <span className="text-red-600 text-lg">No project found with id {params.id}</span>
            )}
        </>
    );
};