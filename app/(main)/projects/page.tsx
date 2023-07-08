import Link from "next/link";
import type { Metadata } from "next";
import Search from "./_components/Search";
import Projects from "./_components/Projects";
import projectsData from "./projects";

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
    <div className="page">
      <div className="flex flex-col space-y-3">
        <div className="text-3xl transition-all max-[450px]:text-2xl">
          <Link href="/" className="group font-extrabold" title="Go back" draggable={false}>
            <i className="fa-solid fa-arrow-left transition-all group-hover:-translate-x-2 group-hover:text-red-400" /> Leon's Projects
          </Link>
        </div>

        <Search />

        {searchParam && (
          <span className={!projects.length ? "text-red-500 dark:text-red-400" : ""}>
            {projects.length || "No"} {projects.length === 1 ? "project" : "projects"} matching <span className="rounded bg-black p-1 font-semibold text-white dark:bg-kinda-white dark:text-kinda-black">{searchParam}</span>
          </span>
        )}

        <Projects projects={projects} />
      </div>
    </div>
  );
};
