import Link from "next/link";
import type { Metadata } from "next";
import projects from "../projects";

const getProject = (id: string) => projects.find(project => project.projectId === parseInt(id));

export const generateMetadata = ({ params }: { params: { id: string } }): Metadata => {
  const project = getProject(params.id);

  const pageTitle = `${project?.name ?? "Project #404"} | Leon San José Larsson`;
  const pageDescription = project ? project.shortDescription : "You found Project #404.";

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
  const project = getProject(params.id);

  return (
    <>
      <Link href="/projects" className="group text-[1.3rem] transition-all duration-300 max-sm:text-base" title="Go back" draggable={false}>
        <i className="fa-solid fa-arrow-left transition-all group-hover:-translate-x-1 group-hover:text-red-400 group-active:-translate-x-2 group-active:text-red-600" /> Back to list
      </Link>
      {project ? (
        <div className="px-16 max-sm:px-4">
          <span className="text-[2rem] font-extrabold transition-all duration-300 max-sm:text-2xl">{project.name}</span>
          <p className="mb-3 whitespace-pre-line">{project.description}</p>

          <span className="text-lg font-bold">Links:</span>
          <div className="flex flex-wrap justify-center gap-2">
            {project.nextLink ? (
              <Link className="project-page-link" href="/" draggable={false}>
                Go to project <i className="fa-solid fa-link" />
              </Link>
            ) : (
              <a href={project.link} target="_blank" className="project-page-link" draggable={false}>
                Go to project <i className="fa-solid fa-link" />
              </a>
            )}

            {project.githubLink && (
              <a href={project.githubLink} target="_blank" className="project-page-link" draggable={false}>
                Go to GitHub <i className="fa-brands fa-github" />
              </a>
            )}

            {project.extra && (
              <>
                <a href={project.extra.link} target="_blank" className="project-page-link" draggable={false}>
                  {project.extra.name} <i className="fa-solid fa-link" />
                </a>
                <a href={project.extra.githubLink} target="_blank" className="project-page-link" draggable={false}>
                  {project.extra.name} <i className="fa-brands fa-github" />
                </a>
              </>
            )}
          </div>

          <details className="mt-5 rounded border border-black p-2 transition-colors open:bg-black open:text-white hover:bg-black hover:text-white">
            <summary className="cursor-pointer text-lg font-semibold">Try it</summary>
            <iframe src={project.link} width="100%" height="500px" className="rounded"></iframe>
          </details>
        </div>
      ) : (
        <span className="text-lg text-red-600">No project found with id {decodeURIComponent(params.id)}</span>
      )}
    </>
  );
};
