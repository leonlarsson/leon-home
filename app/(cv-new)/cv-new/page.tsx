import Image from "next/image";
import Link from "next/link";
import Icons from "@/app/(main)/components/icons";
import CurrentTime from "./components/CurrentTime";
import { aboutSection, educationSection, employmentSection, profileSection, projectsSection } from "@/data/cv";

export const metadata = {
  title: "CV",
};

export default () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Profile */}
      <div className="flex items-center justify-between gap-10">
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-2xl font-bold">{profileSection.name}</h1>
            <p className="font-geist-mono text-sm text-neutral-600">{profileSection.tagline}</p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-1">
            {profileSection.url && (
              <Link href={profileSection.url.href} target="_blank" className="flex w-fit items-center gap-1 font-geist-mono text-xs text-neutral-600 hover:underline">
                <Icons.link className="size-4" /> {profileSection.url.text}
              </Link>
            )}

            {profileSection.location && (
              <Link href={profileSection.location.href} target="_blank" className="w-fit font-geist-mono text-xs text-neutral-600 hover:underline">
                <span className="flex items-center gap-1">
                  <Icons.globe className="size-4 shrink-0" />
                  <span suppressHydrationWarning>
                    {profileSection.location.text}{" "}
                    {profileSection.location.timezone && (
                      <>
                        (<CurrentTime timeZone={profileSection.location.timezone} />)
                      </>
                    )}
                  </span>
                </span>
              </Link>
            )}
          </div>

          {/* Icon Links */}
          {profileSection.iconLinks?.length && (
            <div className="flex gap-1">
              {profileSection.iconLinks.map(({ icon, href, text }) => {
                let IconComponent: React.ElementType;
                switch (icon) {
                  case "envelope":
                    IconComponent = Icons.envelope;
                    break;
                  case "github":
                    IconComponent = Icons.gitHub;
                    break;
                  case "linkedin":
                    IconComponent = Icons.linkedin;
                    break;
                  default:
                    IconComponent = Icons.globe;
                }

                return (
                  <Link key={href} href={href} title={text} className="group rounded-lg border p-2 transition-colors hover:bg-neutral-100">
                    <IconComponent className="size-4 text-neutral-600 transition-colors group-hover:text-black" />
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        <Image className="hidden rounded-xl sm:block" src="/assets/images/avatar.png" alt="Leon Image" width={100} height={100} />
      </div>

      {/* About */}
      {aboutSection && (
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold underline">{aboutSection.sectionTitle}</h2>
          <div className="flex flex-col gap-2">
            {aboutSection.description.map(text => (
              <p key={text} className="font-geist-mono text-xs text-neutral-600">
                {text}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Work */}
      {employmentSection.history.length > 0 && (
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold underline">{employmentSection.sectionTitle}</h2>
          <div className="flex flex-col gap-2">
            {employmentSection.history.map(({ title, company, companyUrl, description, start, end }) => (
              // Graphic design is my passion: flex flex-col gap-2 rounded-bl border-b-2 border-l-2 border-b-transparent border-l-transparent p-1 transition-all hover:border-black hover:shadow-2xl
              <div key={title} className="flex flex-col gap-2 rounded-lg p-1 hover:bg-neutral-200">
                <div className="flex flex-col">
                  {/* Company and dates */}
                  <div className="flex items-baseline justify-between">
                    <Link href={companyUrl} target="_blank" className="font-semibold hover:underline">
                      {company}
                    </Link>

                    <span className="text-xs text-neutral-600">
                      {start} - {end ?? "Present"}
                    </span>
                  </div>

                  {/* Title */}
                  <span className="font-geist-mono text-sm">{title}</span>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-2">
                  {description.map(text => (
                    <p key={text} className="font-geist-mono text-xs text-neutral-600">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {educationSection.history.length > 0 && (
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold underline">{educationSection.sectionTitle}</h2>
          <div className="flex flex-col gap-2">
            {educationSection.history.map(({ school, schoolUrl, description, start, end }) => (
              <div key={school} className="flex flex-col gap-[2px] rounded-lg p-1 hover:bg-neutral-200">
                <div className="flex flex-col">
                  {/* School and dates */}
                  <div className="flex items-baseline justify-between">
                    <Link href={schoolUrl} target="_blank" className="font-semibold hover:underline">
                      {school}
                    </Link>

                    <span className="text-xs text-neutral-600">
                      {start} - {end ?? "Present"}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-2">
                  {description.map(text => (
                    <p key={text} className="font-geist-mono text-xs text-neutral-600">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projectsSection.projects.length > 0 && (
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold underline">{projectsSection.sectionTitle}</h2>

          <p className="font-geist-mono text-xs text-neutral-600">{projectsSection.sectionDescription}</p>

          <div className="flex flex-col gap-2">
            {projectsSection.projects.map(({ name, shortDescription, slug, tags, year }) => (
              <div key={slug} className="flex flex-col gap-[2px] rounded-lg border border-neutral-200 p-2 transition-colors hover:border-neutral-400">
                <div className="flex items-baseline justify-between">
                  <Link href={`/projects/${slug}`} target="_blank" className="font-semibold hover:underline">
                    {name}
                  </Link>

                  <span className="text-xs text-neutral-600">{year}</span>
                </div>

                <p className="font-geist-mono text-xs text-neutral-600">{shortDescription}</p>

                <div className="flex flex-wrap gap-1">
                  {tags?.map(tag => (
                    <Link key={tag} href={`/projects?search=${tag}`} target="_blank" title={`See other projects tagged with ${tag}.`} className="rounded bg-neutral-200 p-1 font-geist-mono text-xs text-neutral-800 outline-1 hover:outline">
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link href="/projects" target="_blank" className="group font-semibold">
              <Icons.arrowRight className="inline" /> <span className="group-hover:underline">{projectsSection.browseAllText}</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
