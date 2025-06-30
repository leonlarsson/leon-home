import { Link, createFileRoute, redirect } from "@tanstack/react-router";
import projects from "../../data/projects";
import { GradientBorder } from "../../features/common/GradientBorder";
import Icons from "../../features/icons/icons";
import { ProjectCard } from "../../features/projects/components/ProjectCard";
import { ProjectTag } from "../../features/projects/components/ProjectTag";
import { cn } from "../../utils/cn";
import { findProjectBySlugOrAliases, getProjectsBySearch } from "../../utils/projects";
import { generateMetadata } from "../../utils/seo";
import { tagSorterFunction } from "../../utils/tagSorterFunction";

export const Route = createFileRoute("/_main/projects/$projectSlug")({
  beforeLoad: ({ params }) => {
    const project = findProjectBySlugOrAliases(params.projectSlug);

    // If project was found and we are currently on a slug alias, redirect to the main slug
    if (project?.slugAliases.includes(params.projectSlug)) {
      throw redirect({ to: "/projects/$projectSlug", params: { projectSlug: project.slug } });
    }
  },
  component: RouteComponent,
  head: ({ params }) => {
    const project = findProjectBySlugOrAliases(params.projectSlug);

    const title = `${project?.name ?? "Project #404"}`;
    const description = project?.shortDescription ?? "You found Project #404.";

    return {
      meta: generateMetadata({
        title,
        description,
        url: `https://leonlarsson.com/projects${project ? `/${project.slug}` : ""}`,
        // ogImageUrl: `https://leonlarsson.com/api/og/projects${project ? `/${project.slug}` : ""}`,
        useTitleAsPrefix: true,
      }),
    };
  },
});

function RouteComponent() {
  const { projectSlug } = Route.useParams();
  const project = findProjectBySlugOrAliases(projectSlug);
  const previousProject = project && projects[projects.indexOf(project) - 1];
  const nextProject = project && projects[projects.indexOf(project) + 1];

  // Projects that match the search string
  // This is used to suggest projects if the slug is not found
  const matchingProjects = getProjectsBySearch(projectSlug);

  return (
    <div className="pb-10 text-start">
      <div className="mx-auto mb-2 flex max-w-3xl select-none justify-between font-light text-neutral-800 max-[400px]:text-sm dark:text-neutral-300">
        <div className="w-full text-start">
          {previousProject && (
            <Link
              to="/projects/$projectSlug"
              params={{ projectSlug: previousProject.slug }}
              className="flex w-fit items-center underline-offset-2 transition-all hover:font-normal hover:text-black hover:underline dark:hover:text-kinda-white"
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
            to="/projects"
            className="w-fit underline-offset-2 transition-all hover:font-normal hover:text-black hover:underline dark:hover:text-kinda-white"
            title={"Go back to all projects."}
            draggable={false}
          >
            All projects
          </Link>
        </div>

        <div className="flex w-full justify-end text-end">
          {nextProject && (
            <Link
              to={"/projects/$projectSlug"}
              params={{ projectSlug: nextProject.slug }}
              className="flex w-fit items-center underline-offset-2 transition-all hover:font-normal hover:text-black hover:underline dark:hover:text-kinda-white"
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

            <div className="mb-3 text-3xl font-extrabold transition-all max-sm:text-xl">{project.name}</div>

            {typeof project.description === "string" ? (
              <p>{project.description}</p>
            ) : (
              <div className="flex flex-col gap-3">
                {project.description.map((text, i) => (
                  <p key={`${i}-${text.slice(0, 10)}`}>{text}</p>
                ))}
              </div>
            )}

            {project.tags && (
              <div className="mb-3 mt-2 flex flex-wrap gap-1">
                {project.year && <ProjectTag tag={{ name: project.year }} clickable />}
                {project.tags.sort(tagSorterFunction).map((tag) => (
                  <ProjectTag key={tag.name} tag={tag} clickable />
                ))}
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
                      <a
                        href={project.link}
                        target={!project.link.startsWith("http") ? "_self" : "_blank"}
                        className="card flex items-center gap-2 rounded-md p-2"
                        draggable={false}
                      >
                        <Icons.link className="h-5" />
                        {project.linkName ?? "Go to project"}
                      </a>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="card flex items-center gap-2 rounded-md p-2"
                        draggable={false}
                      >
                        <Icons.github className="h-5" />
                        Go to GitHub
                      </a>
                    )}

                    {project.extraLinks?.map((extraLink) => (
                      <a
                        key={extraLink.link}
                        href={extraLink.link}
                        target={!extraLink.link.startsWith("http") ? "_self" : "_blank"}
                        className="card flex items-center gap-2 rounded-md p-2"
                        draggable={false}
                      >
                        {extraLink.type === "link" ? <Icons.link className="h-5" /> : <Icons.github className="h-5" />}
                        {extraLink.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Connected projects */}
              {(() => {
                // Get connected projects by slug or slug alias
                const connectedProjects = project.connectedProjectSlugs
                  ?.map((connectedProjectSlug) =>
                    projects.find(
                      (project) =>
                        project.slug === connectedProjectSlug || project.slugAliases.includes(connectedProjectSlug),
                    ),
                  )
                  .filter((p) => p !== undefined);

                if (!connectedProjects?.length) return null;

                return (
                  <div>
                    <span className="text-lg font-bold">Connected projects:</span>

                    <div className={cn("grid gap-3", connectedProjects.length > 1 && "grid-cols-1 md:grid-cols-2")}>
                      {connectedProjects.map((connectedProject) =>
                        connectedProject ? (
                          <ProjectCard key={connectedProject.slug} project={connectedProject} displayTags={false} />
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
                  title="Project preview"
                  className="h-[500px] w-full rounded bg-white lg:h-[500px] xl:h-[700px]"
                />
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
                <summary className="cursor-pointer p-2 text-center text-lg font-semibold text-white">Images</summary>
                {/* Style: display as many cols as there are images */}
                <div
                  className={cn(
                    "grid gap-2 rounded bg-kinda-white p-1 dark:bg-kinda-black max-lg:grid-cols-1",
                    project.images.length === 1 && "grid-cols-1",
                    project.images.length === 2 && "grid-cols-2",
                    project.images.length === 3 && "grid-cols-3",
                  )}
                >
                  {project.images.map((image) => (
                    <div key={image}>
                      {/* Style: Only use w-full if more than 1 image and on lg and up. Lower than lg means 1 col, where we should not stretch images */}
                      <img
                        src={image}
                        alt={`Project ${project.name}.`}
                        className={cn("mx-auto select-none rounded", project.images!.length > 1 && "lg:w-full")}
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
              {decodeURIComponent(projectSlug)}
            </span>{" "}
            not found
          </div>

          {/* List projects where the slug or one of the slug aliases match the param */}
          {matchingProjects.length > 0 && (
            <div className={cn("mx-auto self-center", matchingProjects.length === 1 && "max-w-3xl")}>
              <div className="text-center">Maybe you were looking for:</div>

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
                {matchingProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
