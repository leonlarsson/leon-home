import type { Metadata } from "next";
import generateOGMetadata from "@/app/utils/generateOGMetadata";
import Search from "./components/Search";
import SortCheckbox from "./components/SortCheckbox";
import ProjectCard from "./components/ProjectCard";
import projectsData from "@/data/projects";

type Props = {
  searchParams: Promise<{
    search?: string;
    sort?: string;
  }>;
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const searchParams = await props.searchParams;
  const search = searchParams.search;
  const pageTitle = `Projects${search ? ` matching "${search}"` : ""}`;
  const pageDescription = search
    ? `Leon's projects matching "${search}".`
    : "Browse all of Leon's projects.";

  return {
    title: pageTitle,
    description: pageDescription,
    ...generateOGMetadata({
      title: pageTitle,
      description: pageDescription,
      url: "https://leonlarsson.com/projects",
      appendNameInOG: true,
    }),
  };
};

export default async (props: Props) => {
  const searchParams = await props.searchParams;
  const searchParam = searchParams.search;
  const sortParam = searchParams.sort;
  const exactTagSearch = searchParam?.startsWith("tag:");

  const projects = exactTagSearch
    ? projectsData.filter(project =>
        project.tags?.some(
          tag =>
            tag.name.toLowerCase() ===
            searchParam?.replace("tag:", "").toLowerCase(),
        ),
      )
    : searchParam
      ? projectsData.filter(project =>
          [
            project.slug,
            ...(project.slugAliases ?? []),
            project.name,
            ...(typeof project.description === "string"
              ? [project.description]
              : project.description),
            project.shortDescription,
            project.year,
            project.link?.replace("https://", ""),
            ...(project.tags?.map(x => x.name) ?? []),
          ].some(item =>
            item?.toLowerCase().includes(searchParam?.toLowerCase()),
          ),
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
          <Search />
          <SortCheckbox />
        </div>
        {searchParam && (
          <span
            className={!projects.length ? "text-red-500 dark:text-red-400" : ""}
          >
            {projects.length || "No"}{" "}
            {projects.length === 1 ? "project" : "projects"} matching{" "}
            <span className="rounded bg-black p-1 font-semibold text-white dark:bg-kinda-white dark:text-kinda-black">
              {searchParam}
            </span>
          </span>
        )}

        {/* // Use grid with 2 cols until medium, then use 1 col. Additionally, use 1 col if there is a single project */}
        <div
          className={`grid gap-5 ${
            projects.length === 1
              ? "self-center"
              : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          }`}
        >
          {(sortParam === "newest" ? [...projects].reverse() : projects).map(
            project => (
              <ProjectCard key={project.slug} project={project} />
            ),
          )}
        </div>
      </div>
    </div>
  );
};
