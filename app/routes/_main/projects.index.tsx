import projectsData from "@/data/projects";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { ProjectSearch } from "@/features/projects/components/ProjectSearch";
import { ProjectSortCheckbox } from "@/features/projects/components/SortCheckbox";
import { generateMetadata } from "@/utils/seo";
import { createFileRoute } from "@tanstack/react-router";
import cn from "classnames";
import { z } from "zod";

const projectPageSearchParams = z.object({
  search: z.string().optional(),
  sort: z.literal("newest").optional(),
});

export const Route = createFileRoute("/_main/projects/")({
  component: RouteComponent,
  validateSearch: (search) => projectPageSearchParams.parse(search),
  head: ({ match }) => {
    const { search } = match.search;
    const title = `Projects${search ? ` matching "${search}"` : ""}`;
    const description = search ? `Leon's projects matching "${search}".` : "Browse all of Leon's projects.";

    return {
      meta: generateMetadata({
        title,
        description,
        url: "https://leonlarsson.com/projects",
        useTitleAsPrefix: true,
      }),
    };
  },
});

function RouteComponent() {
  const { search, sort } = Route.useSearch();
  const exactTagSearch = search?.startsWith("tag:");

  const projects = exactTagSearch
    ? projectsData.filter((project) =>
        project.tags?.some((tag) => tag.name.toLowerCase() === search?.replace("tag:", "").toLowerCase()),
      )
    : search
      ? projectsData.filter((project) =>
          [
            project.slug,
            ...(project.slugAliases ?? []),
            project.name,
            ...(typeof project.description === "string" ? [project.description] : project.description),
            project.shortDescription,
            project.year,
            project.link?.replace("https://", ""),
            ...(project.tags?.map((x) => x.name) ?? []),
          ].some((item) => item?.toLowerCase().includes(search?.toLowerCase())),
        )
      : projectsData;

  return (
    <div className="mx-auto">
      <div className="flex flex-col space-y-3">
        <div>
          <div className="text-3xl font-extrabold">Projects</div>
          <div className="mb-3">A directory of all my projects.</div>
        </div>
        <div className="mx-auto w-full space-y-1 transition-all md:w-80">
          <ProjectSearch />
          <ProjectSortCheckbox />
        </div>
        {search && (
          <span className={cn(!projects.length && "text-red-500 dark:text-red-400")}>
            {projects.length || "No"} {projects.length === 1 ? "project" : "projects"} matching{" "}
            <span className="rounded bg-black p-1 font-semibold text-white dark:bg-kinda-white dark:text-kinda-black">
              {search}
            </span>
          </span>
        )}

        {/* // Use grid with 2 cols until medium, then use 1 col. Additionally, use 1 col if there is a single project */}
        <div
          className={cn(
            "grid gap-5",
            projects.length === 1 ? "self-center" : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
          )}
        >
          {(sort === "newest" ? [...projects].reverse() : projects).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
