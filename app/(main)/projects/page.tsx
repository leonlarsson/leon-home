import Link from "next/link";
import type { Metadata } from "next";
import projects from "./projects";
import type { Project } from "./projects";

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

export default ({ searchParams }: { searchParams: Record<string, string> }) => {
  const useGridLayout = ["1", "true", "yes"].includes(searchParams.grid);
  const filter = searchParams.filter;

  return (
    <div className="page">
      <div className="flex flex-col space-y-2">
        <div>
          <Link href="/" className="group text-[2rem] font-extrabold max-[450px]:text-[1.5rem]" title="Go back" draggable={false}>
            <i className="fa-solid fa-arrow-left transition-all group-hover:-translate-x-2 group-hover:text-red-400 group-active:-translate-x-3 group-active:text-red-600" /> Leon's Projects
          </Link>
          <Link className="ms-3 text-2xl" title={`Use ${useGridLayout ? "list" : "grid"} view.`} href={{ query: { grid: !useGridLayout } }}>
            <i className={`fa-solid animate-[spin_.7s_ease-in-out_1] ${useGridLayout ? "fa-list" : "fa-table-cells-large"} transition-transform hover:scale-125`} />
          </Link>
        </div>

        {filter && (
          <span>
            Projects matching <span className="rounded bg-black p-1 text-white">{filter}</span>
          </span>
        )}

        <ProjectsList projects={filter ? projects.filter(project => [project.name, project.description, project.shortDescription, ...project.tags].some(item => item.toLowerCase().includes(filter.toLowerCase()))) : projects} useGridLayout={useGridLayout} />
      </div>
    </div>
  );
};

const ProjectsList = ({ projects, useGridLayout }: { projects: Project[]; useGridLayout: boolean }) => {
  return (
    <div className={useGridLayout ? "grid grid-cols-1 gap-3 md:grid-cols-2" : ""}>
      {projects.map(project => (
        <Project key={project.projectId} project={project} useGridLayout={useGridLayout} />
      ))}
    </div>
  );
};

const Project = ({ project, useGridLayout }: { project: Project; useGridLayout: boolean }) => {
  if (useGridLayout)
    return (
      <div className="flex rounded border border-black text-start transition-transform active:translate-y-1">
        <Link href={`/projects/${project.projectId}?grid=true`} className="group flex flex-1 flex-col p-3 transition-colors hover:bg-black hover:text-white" draggable={false} title={`See more info on project ${project.name}.`}>
          <span className="text-lg font-bold">
            <i className="fa-solid fa-arrow-right me-2 transition-transform group-hover:translate-x-1" />
            {project.name}
          </span>

          <span>{project.shortDescription}</span>

          {project.tags && (
            <div className="mt-1 flex flex-wrap gap-1">
              {project.tags.sort().map(tag => (
                <div key={tag} className="tag-pill">
                  {tag}
                </div>
              ))}
            </div>
          )}
        </Link>

        <div className="my-3 w-px bg-gray-300" />

        <Link className="group flex items-center px-3 transition-colors hover:bg-black hover:text-white" href={project.link} target={project.nextLink ? "_self" : "_blank"} draggable={false} title={`Go to project ${project.name}.`}>
          <i className="fa-solid fa-up-right-from-square fa-lg mx-1 transition-transform group-hover:scale-[1.18]" />
        </Link>
      </div>
    );

  return (
    <div className="project-link px-[1px] py-[2px]">
      <Link className="group" href={`/projects/${project.projectId}`} draggable={false} title={`See more info on project ${project.name}.`}>
        <i className="fa-solid fa-arrow-right fa-lg me-1 transition-transform group-hover:translate-x-[3px] group-active:translate-x-[6px]" /> {project.name}
      </Link>{" "}
      <Link href={project.link} target={project.nextLink ? "_self" : "_blank"} draggable={false} title={`Go to project ${project.name}.`}>
        <LinkIcon />
      </Link>
    </div>
  );
};

const LinkIcon = () => <i className="fa-solid fa-up-right-from-square fa-lg mx-1 transition-transform hover:scale-[1.18]" />;
