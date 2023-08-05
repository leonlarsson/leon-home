import Link from "next/link";
import Tag from "./Tag";
import GradientBorder from "../../components/GradientBorder";
import type { Project as ProjectType } from "@/types";

export default ({ projects }: { projects: ProjectType[] }) => {
  return (
    // Use grid with 2 cols until medium, then use 1 col. Additionally, use 1 col if there is a single project
    <div className={`grid gap-3 ${projects.length === 1 ? "self-center" : "grid-cols-1 md:grid-cols-2"}`}>
      {projects.map(project => (
        <Project key={project.slug} project={project} />
      ))}
    </div>
  );
};

export const Project = ({ project }: { project: ProjectType }) => {
  return (
    <GradientBorder hoverable>
      <div className="flex h-full rounded bg-gradient-to-bl from-white to-slate-200 text-start transition-colors dark:from-kinda-black dark:to-kinda-black">
        <Link href={`/projects/${project.slug}`} className="group flex flex-1 flex-col p-3" draggable={false} title={`See more info on project ${project.name}.`}>
          <span className="text-lg font-bold">
            <i className="fa-solid fa-arrow-right me-2 transition-transform group-hover:translate-x-1" />
            <span className="underline-offset-2 group-hover:underline">{project.name}</span>{" "}
            {project.year && (
              <span className="font-mono text-sm text-gray-600 transition-colors dark:text-gray-400" title={`First released ${project.year}.`}>
                ({project.year}
                {project.endYear && `-${project.endYear}`})
              </span>
            )}
          </span>

          <span>{project.shortDescription}</span>

          {project.tags && (
            <div className="mt-1 flex flex-wrap gap-1">
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

            <Link className="group flex items-center px-3" href={project.link} target={!project.link.startsWith("http") ? "_self" : "_blank"} draggable={false} title={`Go to project ${project.name}.`}>
              <i className="fa-solid fa-up-right-from-square fa-lg mx-1 transition-transform group-hover:scale-[1.18]" />
            </Link>
          </>
        )}
      </div>
    </GradientBorder>
  );
};
