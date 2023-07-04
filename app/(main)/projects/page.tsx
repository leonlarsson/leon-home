import Link from "next/link";
import type { Metadata } from "next";
import Search from "./_components/Search";
import Tag from "./_components/Tag";
import projectsData from "./projects";
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
  const searchParam = searchParams.search;
  const projects = searchParam ? projectsData.filter(project => [project.name, project.description, project.shortDescription, project.year, project.link?.replace("https://", ""), ...(project.tags ?? [])].some(item => item?.toLowerCase().includes(searchParam?.toLowerCase()))) : projectsData;

  return (
    <div className="page">
      <div className="flex flex-col space-y-3">
        <div className="text-3xl transition-all max-[450px]:text-2xl">
          <Link href="/" className="group font-extrabold" title="Go back" draggable={false}>
            <i className="fa-solid fa-arrow-left transition-all group-hover:-translate-x-2 group-hover:text-red-400" /> Leon's Projects
          </Link>
        </div>

        <Search />

        {searchParam && (
          <span className={!projects.length ? "text-red-500 dark:text-red-400" : ""}>
            {projects.length || "No"} {projects.length === 1 ? "project" : "projects"} matching <span className="rounded bg-black p-1 font-semibold text-white dark:bg-kinda-white dark:text-kinda-black">{searchParam}</span>
          </span>
        )}

        <Projects projects={projects} />
      </div>
    </div>
  );
};

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    // Use grid with 2 cols until medium, then use 1 col. Additionally, use 1 col if there is a single project
    <div className={`grid gap-3 ${projects.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
      {projects.map(project => (
        <Project key={project.projectId} project={project} />
      ))}
    </div>
  );
};

const Project = ({ project }: { project: Project }) => {
  return (
    <div className="flex rounded border border-black text-start transition-colors dark:border-kinda-white/50 dark:hover:border-kinda-white">
      <Link href={`/projects/${project.projectId}`} className="group flex flex-1 flex-col p-3 transition-colors hover:bg-black hover:text-white dark:hover:bg-inherit" draggable={false} title={`See more info on project ${project.name}.`}>
        <span className="text-lg font-bold">
          <i className="fa-solid fa-arrow-right me-2 transition-transform group-hover:translate-x-1" />
          {project.name}{" "}
          {project.year && (
            <span className="font-mono text-sm text-gray-600 transition-colors group-hover:text-gray-300 dark:text-gray-400 dark:group-hover:text-gray-400" title={`First released ${project.year}.`}>
              ({project.year})
            </span>
          )}
        </span>

        <span>{project.shortDescription}</span>

        {project.tags && (
          <div className="mt-1 flex flex-wrap gap-1">
            {project.tags
              .sort((a, b) => a.localeCompare(b))
              .map(tag => (
                <Tag key={tag} tag={tag} />
              ))}
          </div>
        )}
      </Link>

      {project.link && (
        <>
          <div className="my-3 w-px bg-gray-300" />

          <Link className="group flex items-center px-3 transition-colors hover:bg-black hover:text-white dark:hover:bg-inherit" href={project.link} target={!project.link.startsWith("http") ? "_self" : "_blank"} draggable={false} title={`Go to project ${project.name}.`}>
            <i className="fa-solid fa-up-right-from-square fa-lg mx-1 transition-transform group-hover:scale-[1.18]" />
          </Link>
        </>
      )}
    </div>
  );
};
