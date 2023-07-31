import type { Metadata } from "next";
import Search from "./components/Search";
import ProjectsGrid from "./components/ProjectsGrid";
import projectsData from "./data";

export const generateMetadata = ({ searchParams }: { searchParams: { search: string } }): Metadata => {
  const search = searchParams.search;
  const pageTitle = `Projects${search ? ` matching "${search}"` : ""} | Leon San José Larsson`;
  const pageDescription = `Leon's projects${search ? ` matching "${search}"` : ""}.`;

  return {
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
};

export default ({ searchParams }: { searchParams: Record<string, string> }) => {
  const searchParam = searchParams.search;
  const projects = searchParam ? projectsData.filter(project => [project.name, project.description, project.shortDescription, project.year, project.link?.replace("https://", ""), ...(project.tags ?? [])].some(item => item?.toLowerCase().includes(searchParam?.toLowerCase()))) : projectsData;

  return (
    <div className="m-auto">
      <div className="flex flex-col space-y-3">
        <div className="text-3xl font-extrabold transition-all max-[450px]:text-2xl">Leon's Projects</div>

        <Search />

        {searchParam && (
          <span className={!projects.length ? "text-red-500 dark:text-red-400" : ""}>
            {projects.length || "No"} {projects.length === 1 ? "project" : "projects"} matching <span className="rounded bg-black p-1 font-semibold text-white dark:bg-kinda-white dark:text-kinda-black">{searchParam}</span>
          </span>
        )}

        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
};
