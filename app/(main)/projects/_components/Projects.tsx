import Link from "next/link";
import { Project } from "../projects";
import Tag from "./Tag";

export default ({ projects }: { projects: Project[] }) => {
  return (
    // Use grid with 2 cols until medium, then use 1 col. Additionally, use 1 col if there is a single project
    <div className={`grid gap-3 ${projects.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
      {projects.map(project => (
        <Project key={project.slug} project={project} />
      ))}
    </div>
  );
};

const Project = ({ project }: { project: Project }) => {
  return (
    <div className="flex rounded border border-black text-start transition-colors dark:border-kinda-white/50 dark:hover:border-kinda-white">
      <Link href={`/projects/${project.slug}`} className="group flex flex-1 flex-col p-3 transition-colors hover:bg-black hover:text-white dark:hover:bg-transparent" draggable={false} title={`See more info on project ${project.name}.`}>
        <span className="text-lg font-bold">
          <i className="fa-solid fa-arrow-right me-2 transition-transform group-hover:translate-x-1" />
          {project.name}{" "}
          {project.year && (
            <span className="font-mono text-sm text-gray-600 transition-colors group-hover:text-gray-300 dark:text-gray-400 dark:group-hover:text-gray-400" title={`First released ${project.year}.`}>
              ({project.year}
              {project.endYear && `-${project.endYear}`})
            </span>
          )}
        </span>

        <span>{project.shortDescription}</span>

        {project.tags && (
          <div className="mt-1 flex max-w-xl flex-wrap gap-1">
            {project.tags
              .sort((a, b) => a.localeCompare(b))
              .map(tag => (
                <Tag key={tag} tag={tag} clickable />
              ))}
          </div>
        )}
      </Link>

      {project.link && (
        <>
          <div className="my-3 w-px bg-gray-300" />

          <Link className="group flex items-center px-3 transition-colors hover:bg-black hover:text-white dark:hover:bg-transparent" href={project.link} target={!project.link.startsWith("http") ? "_self" : "_blank"} draggable={false} title={`Go to project ${project.name}.`}>
            <i className="fa-solid fa-up-right-from-square fa-lg mx-1 transition-transform group-hover:scale-[1.18]" />
          </Link>
        </>
      )}
    </div>
  );
};
