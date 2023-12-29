import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Icons from "@/app/(main)/components/icons";
import CurrentTime from "../components/CurrentTime";
import PrintButton from "../components/PrintButton";
import { aboutSection, educationSection, employmentSection, profileSection, projectsSection } from "@/data/cv";
import { CVIcon } from "@/types";
import { redirect } from "next/navigation";

type Props = {
  params: {
    lang: string;
  };
};

export const generateMetadata = ({ params: { lang } }: Props) => {
  return {
    title: lang === "en" ? "English CV" : "Svenskt CV",
    description: lang === "en" ? "Leon San José Larsson's CV/Resume in English." : "Leon San José Larssons CV/Resume på svenska.",
  };
};

export default ({ params: { lang } }: Props) => {
  if (!["en", "sv"].includes(lang)) redirect("/en/cv");
  const language = lang === "en" ? "en" : "sv";

  return (
    <div className="flex flex-col gap-6">
      {/* Profile */}
      <div className="flex items-center justify-between gap-10">
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-2xl font-bold">{profileSection.name}</h1>
            <p className="font-geist-mono text-sm text-neutral-600">{profileSection.tagline[language]}</p>
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
                        (<CurrentTime locale={lang} timeZone={profileSection.location.timezone} />)
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
              {profileSection.iconLinks.map(({ icon, href, text }, i) => {
                const IconComponent = getIconComponent(icon);

                return (
                  <Fragment key={i}>
                    <Link href={href} target="_blank" title={text} className="group rounded-lg border p-2 transition-colors hover:bg-neutral-100">
                      <IconComponent className="size-4 text-neutral-600 transition-colors group-hover:text-black" />
                    </Link>

                    {/* Show print button if last index and enabled */}
                    {i === profileSection.iconLinks!.length! - 1 && profileSection.showPrintButton && (
                      <PrintButton title="Print this page." className="group rounded-lg border p-2 transition-colors hover:bg-neutral-100 print:hidden">
                        <Icons.print className="size-4 text-neutral-600 transition-colors group-hover:text-black" />
                      </PrintButton>
                    )}
                  </Fragment>
                );
              })}
            </div>
          )}
        </div>

        {profileSection.avatar && <Image className="hidden rounded-xl sm:block" src={profileSection.avatar} alt={profileSection.name} width={100} height={100} />}
      </div>

      {/* About */}
      {aboutSection && (
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold underline decoration-1 underline-offset-2">{aboutSection.sectionTitle[language]}</h2>
          <div className="flex flex-col gap-2">
            {aboutSection.description[language].map(text => (
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
          <h2 className="text-xl font-bold underline decoration-1 underline-offset-2">{employmentSection.sectionTitle[language]}</h2>
          <div className="flex flex-col gap-3">
            {employmentSection.history.map(({ title, company, companyUrl, description, start, end }, i) => (
              <Fragment key={i}>
                {/* Graphic design is my passion: flex flex-col gap-2 rounded-bl border-b-2 border-l-2 border-b-transparent border-l-transparent p-1 transition-all hover:border-black hover:shadow-2xl */}
                <div className="flex flex-col gap-2">
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
                    {description[language].map(text => (
                      <p key={text} className="font-geist-mono text-xs text-neutral-600">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>

                {i !== employmentSection.history.length - 1 && <hr className="maybeborder-dotted" />}
              </Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {educationSection.history.length > 0 && (
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold underline decoration-1 underline-offset-2">{educationSection.sectionTitle[language]}</h2>
          <div className="flex flex-col gap-3">
            {educationSection.history.map(({ school, schoolUrl, description, start, end }, i) => (
              <Fragment key={i}>
                <div className="flex flex-col gap-[2px]">
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
                    {description[language].map(text => (
                      <p key={text} className="font-geist-mono text-xs text-neutral-600">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>

                {i !== educationSection.history.length - 1 && <hr className="maybeborder-dotted" />}
              </Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projectsSection.projects.length > 0 && (
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold underline decoration-1 underline-offset-2">{projectsSection.sectionTitle[language]}</h2>

          <p className="font-geist-mono text-xs text-neutral-600">{projectsSection.sectionDescription[language]}</p>

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
              <Icons.arrowRight className="inline" /> <span className="group-hover:underline">{projectsSection.browseAllText[language]}</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const getIconComponent = (icon: CVIcon) => {
  switch (icon) {
    case "envelope":
      return Icons.envelope;
    case "github":
      return Icons.gitHub;
    case "linkedin":
      return Icons.linkedin;
    default:
      return Icons.globe;
  }
};
