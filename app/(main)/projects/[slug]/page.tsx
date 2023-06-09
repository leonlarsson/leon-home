import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import projects from "../data";
import Projects from "../_components/Projects";
import Tag from "../_components/Tag";

const getProject = (slug: string) => projects.find(project => project.slug === slug);

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  const project = getProject(params.slug);

  const pageTitle = `${project?.name ?? "Project #404"} | Leon San José Larsson`;
  const pageDescription = project?.shortDescription ?? "You found Project #404.";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      type: "website",
      url: `https://leonlarsson.com/projects/${params.slug}`,
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

export default ({ params }: { params: { slug: string } }) => {
  const project = getProject(params.slug);
  const previousProject = project && projects[projects.indexOf(project) - 1];
  const nextProject = project && projects[projects.indexOf(project) + 1];

  return (
    <div className="page">
      <Link href="/projects" className="group text-[1.3rem] transition-all max-sm:text-base" title={project ? "Go back." : "See all projects."} draggable={false}>
        <i className="fa-solid fa-arrow-left transition-all group-hover:-translate-x-1 group-hover:text-red-400" /> {project ? "Back" : "See all projects"}
      </Link>
      {project ? (
        <div className="px-16 max-sm:px-4">
          <span className="text-[2rem] font-extrabold transition-all max-sm:text-2xl">
            {previousProject && (
              <Link className="group" href={`/projects/${previousProject.slug}`} title={`Previous project, ${previousProject.name}`} draggable={false}>
                <i className="fa-solid fa-arrow-left me-2 transition-all group-hover:-translate-x-1 group-hover:text-green-600" />
              </Link>
            )}

            {project.name}

            {nextProject && (
              <Link className="group" href={`/projects/${nextProject.slug}`} title={`Next project, ${nextProject.name}`} draggable={false}>
                <i className="fa-solid fa-arrow-right ms-2 transition-all group-hover:translate-x-1 group-hover:text-green-600" />
              </Link>
            )}
          </span>

          <p className="whitespace-pre-line">{project.description}</p>

          {project.tags && (
            <div className="mb-3 mt-1 flex flex-wrap justify-center gap-1">
              {project.year && <Tag tag={project.year} clickable />}
              {project.tags
                .sort((a, b) => a.localeCompare(b))
                .map(tag => (
                  <Tag key={tag} tag={tag} clickable />
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
                    {project.linkName ?? "Go to project"} <i className="fa-solid fa-link" />
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
          {!project.hidePreview && project.link && (
            <details className="m-auto mt-5 rounded border border-black transition-colors open:bg-black open:text-white hover:bg-black hover:text-white dark:border-kinda-white/50 dark:open:bg-transparent dark:hover:border-kinda-white dark:hover:bg-transparent max-xl:min-w-[70vw] lg:w-[80vw] 2xl:w-[1300px]">
              <summary className="cursor-pointer p-2 text-lg font-semibold">Preview {project.slug === "leon-home" && "(Inception style)"}</summary>
              <iframe src={project.link} className="h-[500px] w-full rounded bg-white lg:h-[500px] xl:h-[700px]"></iframe>
            </details>
          )}

          {/* Only render images if the exist */}
          {project.images && (
            <div className="mt-5">
              <span className="text-lg font-bold">Image{project.images.length > 1 && "s"}:</span>
              {/* Style: display as many cols as there are images */}
              <div className={`container mx-auto grid gap-2 ${project.images.length === 1 ? "grid-cols-1" : ""} ${project.images.length === 2 ? "grid-cols-2" : ""} ${project.images.length === 3 ? "grid-cols-3" : ""} max-lg:grid-cols-1`}>
                {project.images.map((image, index) => (
                  <div key={index} className="w-full rounded">
                    {/* Style: Only use w-full if more than 1 image and on lg and up. Lower than lg means 1 col, where we should not stretch images */}
                    <Image src={image} quality={100} alt={`Project image for ${project.name}.`} className={`m-auto ${project.images!.length > 1 ? "lg:w-full" : ""} rounded-lg border border-kinda-black dark:border-kinda-white/50`} priority placeholder="blur" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-1">
          <span className="text-red-500 dark:text-red-400">
            Project <span className="rounded bg-black p-1 font-semibold text-white dark:bg-kinda-white dark:text-kinda-black">{decodeURIComponent(params.slug)}</span> not found
          </span>

          {projects.filter(project => project.slug.includes(params.slug)).length > 0 && (
            <>
              <br />
              <span>Maybe you were looking for:</span>
              <Projects projects={projects.filter(project => project.slug.includes(params.slug))} />
            </>
          )}
        </div>
      )}
    </div>
  );
};
