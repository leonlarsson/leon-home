import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import generateOGMetadata from "@/app/utils/generateOGMetadata";
import projects from "@/data/projects";
import Tag from "../components/Tag";
import GradientBorder from "../../components/GradientBorder";
import Icons from "../../components/icons";
import ProjectCard from "../components/ProjectCard";
import tagSorterFunction from "@/app/utils/tagSorterFunction";

const getProject = (slug: string) =>
  projects.find(
    project => project.slug === slug || project.slugAliases?.includes(slug),
  );

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const project = getProject(params.slug);

  const pageTitle = `${project?.name ?? "Project #404"}`;
  const pageDescription =
    project?.shortDescription ?? "You found Project #404.";

  return {
    title: pageTitle,
    description: pageDescription,
    ...generateOGMetadata({
      title: pageTitle,
      description: pageDescription,
      url: `https://leonlarsson.com/projects${
        project ? `/${project.slug}` : ""
      }`,
      appendNameInOG: true,
    }),
  };
};

export const generateStaticParams = () => {
  return projects.map(project => ({
    slug: project.slug,
  }));
};

export default ({ params }: { params: { slug: string } }) => {
  const project = getProject(params.slug);
  const previousProject = project && projects[projects.indexOf(project) - 1];
  const nextProject = project && projects[projects.indexOf(project) + 1];

  // If project was found and we are currently on a slug alias, redirect to the main slug
  if (project?.slugAliases?.includes(params.slug))
    redirect(`/projects/${project.slug}`);

  // Projects that match the slug or one of the slug aliases
  // This is used to suggest projects if the slug is not found
  const matchingProjects = projects.filter(
    project =>
      project.slug.includes(params.slug) ||
      project.slugAliases?.some(slug => slug.includes(params.slug)),
  );

  return (
    <div className="pb-10 text-start">
      <div className="mx-auto mb-2 flex max-w-3xl select-none justify-between font-light text-neutral-800 max-[400px]:text-sm dark:text-neutral-300">
        <div className="w-full text-start">
          {previousProject && (
            <Link
              className="flex w-fit items-center underline-offset-2 transition-all hover:font-normal hover:text-black hover:underline dark:hover:text-kinda-white"
              href={`/projects/${previousProject.slug}`}
              title={`Previous project, ${previousProject.name}.`}
              draggable={false}
            >
              <Icons.arrowLeft className="me-1 inline" />
              Previous
            </Link>
          )}
        </div>

        <div className="w-full text-center">
          <Link
            className="w-fit underline-offset-2 transition-all hover:font-normal hover:text-black hover:underline dark:hover:text-kinda-white"
            href="/projects"
            title={"Go back to all projects."}
            draggable={false}
          >
            All projects
          </Link>
        </div>

        <div className="flex w-full justify-end text-end">
          {nextProject && (
            <Link
              className="flex w-fit items-center underline-offset-2 transition-all hover:font-normal hover:text-black hover:underline dark:hover:text-kinda-white"
              href={`/projects/${nextProject.slug}`}
              title={`Next project, ${nextProject.name}.`}
              draggable={false}
            >
              Next
              <Icons.arrowRight className="ms-1" />
            </Link>
          )}
        </div>
      </div>

      {project ? (
        <div>
          {/* Main content (title, description, tags, links) */}
          <div className="mx-auto max-w-3xl">
            {project.year && (
              <span
                className="font-mono text-sm text-neutral-700 transition-colors dark:text-neutral-400"
                title={`First worked on ${project.year}.`}
              >
                {project.year}
                {project.endYear && `-${project.endYear}`}
              </span>
            )}

            <div className="mb-3 text-3xl font-extrabold transition-all max-sm:text-xl">
              {project.name}
            </div>

            {typeof project.description === "string" ? (
              <p>{project.description}</p>
            ) : (
              <div className="flex flex-col gap-3">
                {project.description.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            )}

            {project.tags && (
              <div className="mb-3 mt-2 flex flex-wrap gap-1">
                <Suspense>
                  {project.year && (
                    <Tag tag={{ name: project.year }} clickable />
                  )}
                  {project.tags.sort(tagSorterFunction).map(tag => (
                    <Tag key={tag.name} tag={tag} clickable />
                  ))}
                </Suspense>
              </div>
            )}

            {/* Links and connected projects */}
            <div className="space-y-3">
              {/* Conditionally render project links */}
              {(project.link || project.githubLink || project.extraLinks) && (
                <div>
                  <span className="text-lg font-bold">Links:</span>
                  <div className="flex flex-wrap gap-2">
                    {project.link && (
                      <Link
                        href={project.link}
                        target={
                          !project.link.startsWith("http") ? "_self" : "_blank"
                        }
                        className="card flex items-center gap-2 rounded-md p-2"
                        draggable={false}
                      >
                        <Icons.link className="h-5" />
                        {project.linkName ?? "Go to project"}
                      </Link>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        className="card flex items-center gap-2 rounded-md p-2"
                        draggable={false}
                      >
                        <Icons.github className="h-5" />
                        Go to GitHub
                      </a>
                    )}

                    {project.extraLinks?.map(extraLink => (
                      <Link
                        key={extraLink.link}
                        href={extraLink.link}
                        target={
                          !extraLink.link.startsWith("http")
                            ? "_self"
                            : "_blank"
                        }
                        className="card flex items-center gap-2 rounded-md p-2"
                        draggable={false}
                      >
                        {extraLink.type === "link" ? (
                          <Icons.link className="h-5" />
                        ) : (
                          <Icons.github className="h-5" />
                        )}
                        {extraLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Connected projects */}
              {(() => {
                // Get connected projects by slug or slug alias
                const connectedProjects = project.connectedProjectSlugs
                  ?.map(slug =>
                    projects.find(
                      project =>
                        project.slug === slug ||
                        project.slugAliases?.includes(slug),
                    ),
                  )
                  .filter(p => p !== undefined);

                if (!connectedProjects?.length) return null;

                return (
                  <div>
                    <span className="text-lg font-bold">
                      Connected projects:
                    </span>

                    <div
                      className={`grid gap-3 ${connectedProjects.length > 1 ? "grid-cols-1 md:grid-cols-2" : ""}`}
                    >
                      {connectedProjects.map(connectedProject =>
                        connectedProject ? (
                          <ProjectCard
                            key={connectedProject.slug}
                            project={connectedProject}
                            displayTags={false}
                          />
                        ) : null,
                      )}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Preview */}
          {/* Only render preview if project.link exists */}
          {!project.hidePreview && project.link && (
            <GradientBorder style={{ marginTop: 20 }}>
              <details className="rounded">
                <summary className="cursor-pointer p-2 text-center text-lg font-semibold text-white">
                  Preview {project.slug === "leon-home" && "(Inception style)"}
                </summary>
                <iframe
                  src={project.link}
                  className="h-[500px] w-full rounded bg-white lg:h-[500px] xl:h-[700px]"
                ></iframe>
              </details>
            </GradientBorder>
          )}

          {/* Image display */}
          {/* Only render images if they exist (duh) */}
          {project.images && (
            <GradientBorder
              style={{
                marginTop: 20,
              }}
              from="#f472b6"
              via="#c2410c"
              to="#ca8a04"
            >
              <details className="rounded">
                <summary className="cursor-pointer p-2 text-center text-lg font-semibold text-white">
                  Images
                </summary>
                {/* Style: display as many cols as there are images */}
                <div
                  className={`grid gap-2 rounded bg-kinda-white p-1 dark:bg-kinda-black ${
                    project.images.length === 1 ? "grid-cols-1" : ""
                  } ${project.images.length === 2 ? "grid-cols-2" : ""} ${
                    project.images.length === 3 ? "grid-cols-3" : ""
                  } max-lg:grid-cols-1`}
                >
                  {project.images.map((image, index) => (
                    <div key={index}>
                      {/* Style: Only use w-full if more than 1 image and on lg and up. Lower than lg means 1 col, where we should not stretch images */}
                      <Image
                        src={image}
                        quality={100}
                        alt={`Project image for ${project.name}.`}
                        className={`mx-auto select-none ${
                          project.images!.length > 1 ? "lg:w-full" : ""
                        } rounded`}
                        priority
                        placeholder="blur"
                      />
                    </div>
                  ))}
                </div>
              </details>
            </GradientBorder>
          )}
        </div>
      ) : (
        <div>
          <div className="mb-3 text-center text-red-500 dark:text-red-400">
            Project{" "}
            <span className="rounded bg-black p-1 font-semibold text-white dark:bg-kinda-white dark:text-kinda-black">
              {decodeURIComponent(params.slug)}
            </span>{" "}
            not found
          </div>

          {/* List projects where the slug or one of the slug aliases match the param */}
          {matchingProjects.length > 0 && (
            <div
              className={`mx-auto self-center ${
                matchingProjects.length === 1 ? "max-w-3xl" : ""
              }`}
            >
              <div className="text-center">Maybe you were looking for:</div>

              <div
                className={`grid gap-5 ${
                  matchingProjects.length === 1
                    ? "self-center"
                    : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                }`}
              >
                {matchingProjects.map(project => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
