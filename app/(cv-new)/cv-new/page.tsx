import Image from "next/image";
import Link from "next/link";
import Icons from "@/app/(main)/components/icons";
import projects from "@/app/(main)/projects/data";
import CurrentTime from "./components/CurrentTime";

export const metadata = {
  title: "CV",
};

export default () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Top */}
      <div className="flex items-center justify-between gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Leon San José Larsson</h1>
          <p className="font-geist-mono text-sm text-neutral-600">Aspiring Full Stack Engineer working in vidoe games marketing.</p>

          <Link href="https://leonlarsson.com" target="_blank" className="flex w-fit items-center gap-1 font-geist-mono text-xs text-neutral-600 hover:underline">
            <Icons.link className="size-4" /> leonlarsson.com
          </Link>

          <Link href="https://www.google.com/maps/place/Malm%C3%B6" target="_blank" className="flex w-fit items-center gap-1 font-geist-mono text-xs text-neutral-600 hover:underline">
            <Icons.globe className="size-4" /> Malmö, Sweden, CET
            <span suppressHydrationWarning className="print:hidden">
              (<CurrentTime timeZone="Europe/Stockholm" />)
            </span>
          </Link>

          {/* Links */}
          <div className="flex gap-2">
            {[
              {
                icon: <Icons.envelope className="size-4 text-neutral-600 transition-colors group-hover:text-black" />,
                href: "mailto:leonlarsson8@gmail.com",
              },
              {
                icon: <Icons.gitHub className="size-4 text-neutral-600 transition-colors group-hover:text-black" />,
                href: "https://github.com/leonlarsson",
              },
              {
                icon: <Icons.linkedin className="size-4 text-neutral-600 transition-colors group-hover:text-black" />,
                href: "https://www.linkedin.com/in/leonlarsson/",
              },
            ].map(({ icon, href }) => (
              <Link key={href} href={href} className="group rounded-lg border p-2 transition-colors hover:bg-neutral-100">
                {icon}
              </Link>
            ))}
          </div>
        </div>

        <Image className="rounded-xl" src="/assets/images/avatar.png" alt="Leon Image" width={100} height={100} />
      </div>

      {/* About */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold underline">About</h2>
        <p className="font-geist-mono text-xs text-neutral-600">I'm an aspiring Full Stack Engineer in self-training. My primary areas of interest are web development and Discord bots. I also extensively work on creating various APIs and services on platforms such as Cloudflare Workers.</p>
      </div>

      {/* Work */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold underline">Work Experience</h2>
        <div className="flex flex-col gap-2">
          {[
            {
              title: "Community & Support Specialist",
              company: "Sharkmob",
              companyUrl: "https://sharkmob.com",
              description: [
                "Managing player support and content on the Bloodhunt website at Sharkmob involves close collaboration with marketing, player relations, and developers.",
                "Additionally, overseeing community management, Discord, and Twitch Drops. For our newly announced game Exoborne, contributing to website development and providing technical specifications for the RE_HACK ARG website.",
              ],
              start: "2022",
            },
            {
              title: "Localization/QA Tester - Swedish",
              company: "Electronic Arts",
              companyUrl: "https://ea.com",
              description: ["Reviewed and ensured the quality of EA games, including marketing materials. Also managed candidate tests and contributed to crafting application test materials during peak seasons.", "Worked on 27 DLCs for The Sims 4, as well as FIFA 21, LOTR: Heroes of Middle-earth."],
              start: "2019",
              end: "2022",
            },
          ].map(({ title, company, companyUrl, description, start, end }) => (
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

      {/* Education */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold underline">Education</h2>
        <div className="flex flex-col gap-2">
          {[
            {
              school: "Sundsgymnasiet",
              schoolUrl: "https://vellinge.se/sundsgymnasiet/",
              description: ["Civics, media, communication, marketing, and content creation."],
              start: "2015",
              end: "2018",
            },
          ].map(({ school, schoolUrl, description, start, end }) => (
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

      {/* Projects */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold underline">Projects</h2>

        <p className="font-geist-mono text-xs text-neutral-600">
          I have a strong interest in software engineering and frontend design. I love working with technologies such as React, Next.js, Node.js using JavaScript (and TypeScript). I also have some experience with SQLite and MySQL. Below you can read about a few of my projects.
        </p>

        <div className="flex flex-col gap-2">
          {[...projects]
            .reverse()
            .filter(x => x.displayInCv)
            .map(({ name, shortDescription, slug, tags, year }) => (
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
            <Icons.arrowRight className="inline" /> <span className="group-hover:underline">Browse all projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
