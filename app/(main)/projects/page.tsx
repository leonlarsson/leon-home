import type { Metadata } from "next";
import generateOGMetadata from "@/app/utils/generateOGMetadata";
import Search from "./components/Search";
import SortCheckbox from "./components/SortCheckbox";
import ProjectsGrid from "./components/ProjectsGrid";
import projectsData from "./data";

export const generateMetadata = ({ searchParams }: { searchParams: { search: string } }): Metadata => {
  const search = searchParams.search;
  const pageTitle = `Projects${search ? ` matching "${search}"` : ""}`;
  const pageDescription = search ? `Leon's projects matching "${search}".` : "Browse all of Leon's projects.";

  return {
    title: pageTitle,
    description: pageDescription,
    ...generateOGMetadata({
      title: pageTitle,
      description: pageDescription,
      url: "https://leonlarsson.com/projects",
      appendNameInOG: true
    })
  };
};

export default ({ searchParams }: { searchParams: Record<string, string> }) => {
  const searchParam = searchParams.search;
  const sortParam = searchParams.sort;

  // Most nauseating code I've ever written
  const projects = searchParam
    ? projectsData.filter(project =>
        [project.slug, ...(project.slugAliases ?? []), project.name, ...(typeof project.description === "string" ? [project.description] : project.description), project.shortDescription, project.year, project.link?.replace("https://", ""), ...(project.tags ?? [])].some(item =>
          item?.toLowerCase().includes(searchParam?.toLowerCase())
        )
      )
    : projectsData;

  return (
    <div className="mx-auto">
      <div className="flex flex-col space-y-3">
        <div className="text-3xl font-extrabold">Projects</div>

        <div className="mx-auto w-full space-y-1 transition-all md:w-80">
          <Search />
          <SortCheckbox />
        </div>

        {searchParam && (
          <span className={!projects.length ? "text-red-500 dark:text-red-400" : ""}>
            {projects.length || "No"} {projects.length === 1 ? "project" : "projects"} matching <span className="rounded bg-black p-1 font-semibold text-white dark:bg-kinda-white dark:text-kinda-black">{searchParam}</span>
          </span>
        )}

        <ProjectsGrid projects={sortParam === "newest" ? [...projects].reverse() : projects} />
      </div>
    </div>
  );
};
