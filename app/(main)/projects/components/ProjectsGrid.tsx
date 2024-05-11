import Link from "next/link";
import Tag from "./Tag";
import GradientBorder from "../../components/GradientBorder";
import type { Project as ProjectType } from "@/types";
import Icons from "../../components/icons";

export default ({ projects }: { projects: ProjectType[] }) => {
  return (
    // Use grid with 2 cols until medium, then use 1 col. Additionally, use 1 col if there is a single project
    <div
      className={`grid gap-5 ${
        projects.length === 1
          ? "self-center"
          : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
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
    <div className="card group/main relative flex flex-col gap-2 p-3">
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
                className="font-mono text-sm text-neutral-700 transition-colors dark:text-neutral-400"
                title={`First released ${project.year}.`}
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
              {!project.link && project.githubLink && (
                <Icons.github className="mr-1 inline size-4" />
              )}

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
        <span className="opacity-80 transition-opacity group-hover:opacity-100">
          {project.shortDescription}
        </span>

        {/* Tags */}
        {displayTags && project.tags && (
          <div className="relative z-20 mt-1 flex w-fit flex-wrap gap-1">
            {project.tags
              .sort((a, b) => a.localeCompare(b))
              .map(tag => (
                <Tag key={tag} tag={tag} clickable />
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

export const ProjectSkeleton = () => (
  <GradientBorder rounded="rounded-[6px]" padding="p-[2px]" hoverable>
    <div className="flex h-full rounded bg-white text-start transition-colors dark:bg-kinda-black">
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
