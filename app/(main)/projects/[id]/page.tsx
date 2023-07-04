import Link from "next/link";
import type { Metadata } from "next";
import projects from "../projects";
import Tag from "../_components/Tag";

const getProject = (id: string) => projects.find(project => project.projectId === parseInt(id));

export const generateMetadata = ({ params }: { params: { id: string } }): Metadata => {
  const project = getProject(params.id);

  const pageTitle = `${project?.name ?? "Project #404"} | Leon San José Larsson`;
  const pageDescription = project?.shortDescription ?? "You found Project #404.";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      type: "website",
      url: `https://leonlarsson.com/projects/${params.id}`,
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

export default ({ params }: { params: { id: string } }) => {
  const project = getProject(params.id);
  const canPrevious = parseInt(params.id) > 1;
  const canNext = parseInt(params.id) < projects.length;

  return (
    <div className="page">
      <Link href="/projects" className="group text-[1.3rem] transition-all max-sm:text-base" title="Go back" draggable={false}>
        <i className="fa-solid fa-arrow-left transition-all group-hover:-translate-x-1 group-hover:text-red-400 group-active:-translate-x-2 group-active:text-red-500" /> Back
      </Link>
      {project ? (
        <div className="px-16 max-sm:px-4">
          <span className="text-[2rem] font-extrabold transition-all max-sm:text-2xl">
            {canPrevious && (
              <Link className="group" href={`/projects/${project.projectId - 1}`} title={`Previous project, ${projects[projects.indexOf(project) - 1].name}`} draggable={false}>
                <i className="fa-solid fa-arrow-left me-2 transition-all group-hover:-translate-x-1 group-hover:text-green-600" />
              </Link>
            )}

            {project.name}

            {canNext && (
              <Link className="group" href={`/projects/${project.projectId + 1}`} title={`Next project, ${projects[projects.indexOf(project) + 1].name}`} draggable={false}>
                <i className="fa-solid fa-arrow-right ms-2 transition-all group-hover:translate-x-1 group-hover:text-green-600" />
              </Link>
            )}
          </span>

          <p className="whitespace-pre-line">{project.description}</p>

          {project.tags && (
            <div className="mb-3 mt-1 flex flex-wrap justify-center gap-1">
              {project.year && <Tag tag={project.year} clickable={true} />}
              {project.tags.sort().map(tag => (
                <Tag key={tag} tag={tag} clickable={true} />
              ))}
            </div>
          )}

          {/* Conditionally render project links */}
          {(project.link || project.githubLink || project.extraLinks) && (
            <>
              <span className="text-lg font-bold">Links:</span>
              <div className="flex flex-wrap justify-center gap-2">
                {project.link && (
                  <Link href={project.link} target={!project.link.startsWith("http") ? "_self" : "_blank"} className="button-with-border" draggable={false}>
                    Go to project <i className="fa-solid fa-link" />
                  </Link>
                )}

                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" className="button-with-border" draggable={false}>
                    Go to GitHub <i className="fa-brands fa-github" />
                  </a>
                )}

                {project.extraLinks?.map(extraLink => (
                  <a key={extraLink.link} href={extraLink.link} target="_blank" className="button-with-border" draggable={false}>
                    {extraLink.name} <i className={extraLink.type === "link" ? "fa-solid fa-link" : "fa-brands fa-github"} />
                  </a>
                ))}
              </div>
            </>
          )}

          {/* Only render preview if project.link exists */}
          {project.link && (
            <details className="m-auto my-5 rounded border border-black transition-colors open:bg-black open:text-white hover:bg-black hover:text-white dark:border-kinda-white/50 dark:open:bg-inherit dark:hover:border-kinda-white dark:hover:bg-inherit max-xl:min-w-[70vw] lg:w-[80vw] 2xl:w-[1300px]">
              <summary className="cursor-pointer p-2 text-lg font-semibold">Preview {project.projectId === 4 && "(Inception style)"}</summary>
              <iframe src={project.link} className="h-[500px] w-full rounded bg-white lg:h-[500px] xl:h-[700px]"></iframe>
            </details>
          )}
        </div>
      ) : (
        <span className="text-lg text-red-500 dark:text-red-400">No project found with id {decodeURIComponent(params.id)}</span>
      )}
    </div>
  );
};
