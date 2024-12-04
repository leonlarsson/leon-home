import Icons from "@/features/icons/icons";
import type { Project as ProjectType } from "@/types";
import { tagSorterFunction } from "@/utils/tagSorterFunction";
import { Link } from "@tanstack/react-router";
import { ProjectTag } from "./ProjectTag";

export const ProjectCard = ({
  project,
  displayTags = true,
}: {
  project: ProjectType;
  displayTags?: boolean;
}) => {
  return (
    <div className="card group/main relative flex flex-col gap-2 p-3 text-start">
      {/* ICON / NAME / URL */}
      <div className="flex items-center gap-1">
        <Icons.circleArrowRight className="mb-1 me-2 inline size-7 flex-shrink-0 transition-transform group-hover/main:-rotate-45" />

        <div className="flex flex-col">
          <span className="font-semibold">
            {/* Name / Year */}
            <Link
              href={`/projects/${project.slug}`}
              draggable={false}
              className="relative z-20 underline-offset-2 hover:underline"
            >
              {project.name}
            </Link>{" "}
            {project.year && (
              <span
                className="font-mono text-xs text-neutral-700 transition-colors dark:text-neutral-400"
                title={`First worked on ${project.year}.`}
              >
                ({project.year}
                {project.endYear && `-${project.endYear}`})
              </span>
            )}
          </span>

          {/* URL */}
          {(project.link || project.githubLink) && (
            <Link
              href={project.link ?? project.githubLink!}
              target="_blank"
              draggable={false}
              className="group/url z-20 w-fit break-all text-sm underline-offset-2 opacity-80 hover:underline dark:opacity-60"
            >
              {!project.link && project.githubLink && <Icons.github className="mr-1 inline size-4" />}

              {(project.link ?? project.githubLink!)
                .replace("https://github.com/", "")
                .replace("https://", "")
                .replace(/\/$/, "")}
              <Icons.externallink className="ml-1 inline size-3 opacity-0 group-hover/url:opacity-50" />
            </Link>
          )}
        </div>
      </div>

      {/* Description and tags */}
      <div>
        {/* Description */}
        <span className="opacity-80 transition-opacity group-hover:opacity-100">{project.shortDescription}</span>

        {/* Tags */}
        {displayTags && project.tags && (
          <div className="relative z-20 mt-1 flex w-fit flex-wrap gap-1">
            {project.tags.sort(tagSorterFunction).map((tag) => (
              <ProjectTag key={tag.name} tag={tag} clickable />
            ))}
          </div>
        )}
      </div>

      {/* Link to /project */}
      <Link
        href={`/projects/${project.slug}`}
        draggable={false}
        className="none absolute inset-0 z-10 block"
        style={{
          textDecoration: "none",
        }}
      />
    </div>
  );
};

export const ProjectCardSkeleton = () => (
  <div className="card group/main relative flex flex-col gap-2 p-3 text-start">
    {/* ICON / NAME / URL */}
    <div className="flex items-center gap-1">
      <Icons.circleArrowRight className="mb-1 me-2 inline size-7 flex-shrink-0 transition-transform group-hover/main:-rotate-45" />

      <div className="flex flex-col">
        <span className="font-semibold">
          {/* Name / Year */}
          <span className="relative z-20 underline-offset-2 hover:underline">Lorem Ipsum</span>{" "}
          <span className="font-mono text-sm text-neutral-700 transition-colors dark:text-neutral-400">(2024)</span>
        </span>

        {/* URL */}
        <span className="group/url z-20 w-fit break-all text-sm underline-offset-2 opacity-80 hover:underline dark:opacity-60">
          example.com
          <Icons.externallink className="ml-1 inline size-3 opacity-0 group-hover/url:opacity-50" />
        </span>
      </div>
    </div>

    {/* Description and tags */}
    <div>
      {/* Description */}
      <span className="opacity-80 transition-opacity group-hover:opacity-100">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </span>

      {/* Tags */}
      <div className="relative z-20 mt-1 flex w-fit flex-wrap gap-1">
        <ProjectTag tag={{ name: "Lorem" }} />
        <ProjectTag tag={{ name: "Ipsum" }} />
      </div>
    </div>
  </div>
);
