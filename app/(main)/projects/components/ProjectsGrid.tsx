import Link from "next/link";
import Tag from "./Tag";
import GradientBorder from "../../components/GradientBorder";
import type { Project as ProjectType } from "@/types";
import Icons from "../../components/icons";

export default ({ projects }: { projects: ProjectType[] }) => {
  return (
    // Use grid with 2 cols until medium, then use 1 col. Additionally, use 1 col if there is a single project
    <div
      className={`grid gap-3 ${
        projects.length === 1 ? "self-center" : "grid-cols-1 md:grid-cols-2"
      }`}
    >
      {projects.map(project => (
        <Project key={project.slug} project={project} />
      ))}
    </div>
  );
};

export const Project = ({
  project,
  displayTags = true,
}: {
  project: ProjectType;
  displayTags?: boolean;
}) => {
  return (
    <GradientBorder rounded="rounded-[6px]" padding="p-[2px]" hoverable>
      <div className="flex h-full rounded bg-slate-100 text-start transition-colors dark:bg-kinda-black">
        <Link
          href={`/projects/${project.slug}`}
          className="group flex flex-1 flex-col p-3"
          draggable={false}
          title={`See more info on project ${project.name}.`}
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">
              <Icons.arrowRight className="mb-1 me-2 inline h-5 transition-transform group-hover:translate-x-1" />
              {/* Name / Year */}
              <span className="underline-offset-2 group-hover:underline">
                {project.name}
              </span>{" "}
              {project.year && (
                <span
                  className="font-mono text-sm text-neutral-700 transition-colors dark:text-neutral-400"
                  title={`First released ${project.year}.`}
                >
                  ({project.year}
                  {project.endYear && `-${project.endYear}`})
                </span>
              )}
            </span>
            {/* Image icon */}
            {project.images && (
              <Icons.image
                className="h-4 w-4 shrink-0"
                title={`This project has ${
                  project.images.length === 1 ? "an image" : "images"
                }.`}
              />
            )}
          </div>

          {/* Description */}
          <span>{project.shortDescription}</span>

          {/* Tags */}
          {displayTags && project.tags && (
            <div className="mt-1 flex flex-wrap gap-1">
              {project.tags
                .sort((a, b) => a.localeCompare(b))
                .map(tag => (
                  <Tag key={tag} tag={tag} clickable />
                ))}
            </div>
          )}
        </Link>

        {/* Link */}
        {project.link && (
          <>
            <div className="my-3 w-px bg-gray-300" />

            <Link
              className="group flex items-center px-3"
              href={project.link}
              target={!project.link.startsWith("http") ? "_self" : "_blank"}
              draggable={false}
              title={`Go to project ${project.name}.`}
            >
              <Icons.externallink className="mx-1 h-5 transition-transform group-hover:scale-[1.18]" />
            </Link>
          </>
        )}
      </div>
    </GradientBorder>
  );
};

export const ProjectSkeleton = () => (
  <GradientBorder rounded="rounded-[6px]" padding="p-[2px]" hoverable>
    <div className="flex h-full rounded bg-slate-100 text-start transition-colors dark:bg-kinda-black">
      <div className="group flex flex-1 flex-col p-3" draggable={false}>
        <span className="text-lg font-bold">
          <Icons.arrowRight className="mb-1 me-2 inline h-5 transition-transform group-hover:translate-x-1" />
          <span className="underline-offset-2 group-hover:underline">
            Lorem ipsum
          </span>{" "}
        </span>

        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>

        <div className="mt-1 flex flex-wrap gap-1">
          <Tag tag={"Loading"} />
          <Tag tag={"Tags"} />
        </div>
      </div>

      <>
        <div className="my-3 w-px bg-gray-300" />

        <div className="group flex items-center px-3">
          <Icons.externallink className="mx-1 h-5 transition-transform group-hover:scale-[1.18]" />
        </div>
      </>
    </div>
  </GradientBorder>
);
