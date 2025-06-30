import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod";
import projectsData from "../../data/projects";
import { ProjectCard } from "../../features/projects/components/ProjectCard";
import { ProjectSearch } from "../../features/projects/components/ProjectSearch";
import { ProjectSortCheckbox } from "../../features/projects/components/SortCheckbox";
import { cn } from "../../utils/cn";
import { getProjectsBySearch } from "../../utils/projects";
import { generateMetadata } from "../../utils/seo";

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
        // ogImageUrl: "https://leonlarsson.com/api/og/projects",
        useTitleAsPrefix: true,
      }),
    };
  },
});

function RouteComponent() {
  const { search, sort } = Route.useSearch();

  const projects = search ? getProjectsBySearch(search) : projectsData;

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

        {/* Use 1, 2 or 3 columns depending on the amount of projects */}
        <div
          className={cn(
            "grid gap-5",
            projects.length === 1
              ? "self-center"
              : projects.length === 2
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
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
