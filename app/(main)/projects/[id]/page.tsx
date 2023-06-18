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

export default ({ params, searchParams }: { params: { id: string }; searchParams: Record<string, string> }) => {
  const project = getProject(params.id);
  const useGridLayout = searchParams.grid;

  const canPrevious = parseInt(params.id) > 1;
  const canNext = parseInt(params.id) < projects.length;

  return (
    <div className="page">
      <Link href={{ pathname: "/projects", query: { grid: useGridLayout } }} className="group text-[1.3rem] max-sm:text-base" title="Go back" draggable={false}>
        <i className="fa-solid fa-arrow-left transition-all group-hover:-translate-x-1 group-hover:text-red-400 group-active:-translate-x-2 group-active:text-red-600" /> Back to list
      </Link>
      {project ? (
        <div className="px-16 max-sm:px-4">
          <span className="text-[2rem] font-extrabold max-sm:text-2xl">
            {canPrevious && (
              <Link className="group" href={{ pathname: `/projects/${project.projectId - 1}`, query: { grid: useGridLayout } }} title={`Previous project, ${projects[projects.indexOf(project) - 1].name}`} draggable={false}>
                <i className="fa-solid fa-arrow-left me-2 transition-all group-hover:-translate-x-1 group-hover:text-green-600" />
              </Link>
            )}

            {project.name}

            {canNext && (
              <Link className="group" href={{ pathname: `/projects/${project.projectId + 1}`, query: { grid: useGridLayout } }} title={`Next project, ${projects[projects.indexOf(project) + 1].name}`} draggable={false}>
                <i className="fa-solid fa-arrow-right ms-2 transition-all group-hover:translate-x-1 group-hover:text-green-600" />
              </Link>
            )}
          </span>

          <p className="whitespace-pre-line">{project.description}</p>

          {project.tags && (
            <div className="mb-3 mt-1 flex flex-wrap justify-center gap-1">
              {project.tags.sort().map(tag => (
                <div key={tag} className="tag-pill">
                  {tag}
                </div>
              ))}
            </div>
          )}

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

          <details className="m-auto my-5 rounded border border-black p-2 transition-colors open:bg-black open:text-white hover:bg-black hover:text-white max-xl:min-w-[70vw] lg:w-[80vw] 2xl:w-[1300px]">
            <summary className="cursor-pointer text-lg font-semibold">Try it {project.projectId === 4 && "(Inception style)"}</summary>
            <iframe src={project.link} className="h-[500px] w-full rounded bg-white lg:h-[500px] xl:h-[700px]"></iframe>
          </details>
        </div>
      ) : (
        <span className="text-lg text-red-600">No project found with id {decodeURIComponent(params.id)}</span>
      )}
    </div>
  );
};
