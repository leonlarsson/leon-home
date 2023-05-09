import Link from "next/link";
import type { Metadata } from "next";
import projects from "./projects";
import type { Project } from "./projects";

const pageTitle = "Projects | Leon San José Larsson";
const pageDescription = "Links to projects.";

export const metadata: Metadata = {
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

export default () => {
  return (
    <div className="page">
      <div className="space-y-1 max-[450px]:space-y-0">
        <Link href="/" className="group text-[2rem] font-extrabold transition-all duration-300 max-[450px]:text-[1.5rem]" title="Go back" draggable={false}>
          <i className="fa-solid fa-arrow-left transition-all group-hover:-translate-x-2 group-hover:text-red-400 group-active:-translate-x-3 group-active:text-red-600" /> Leon's Projects
        </Link>
        {projects.map(project => (
          <Project key={project.projectId} project={project} />
        ))}
      </div>
    </div>
  );
};

const Project = ({ project }: { project: Project }) => {
  return (
    <div className="project-link px-[1px] py-[2px]">
      <Link className="group" href={`/projects/${project.projectId}`} draggable={false} title={`See more info on project ${project.name}.`}>
        <i className="fa-solid fa-arrow-right fa-lg me-1 transition-transform group-hover:translate-x-[3px] group-active:translate-x-[6px]" /> {project.name}
      </Link>{" "}
      {project.nextLink ? (
        <Link href={project.link} draggable={false} title={`Go to project ${project.name}.`}>
          <LinkIcon />
        </Link>
      ) : (
        <a href={project.link} target="_blank" draggable={false} title={`Go to project website for ${project.name}.`}>
          <LinkIcon />
        </a>
      )}
    </div>
  );
};

const LinkIcon = () => <i className="fa-solid fa-up-right-from-square fa-lg mx-1 transition-transform hover:scale-[1.18]" />;
