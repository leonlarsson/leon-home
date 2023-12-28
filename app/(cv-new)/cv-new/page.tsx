import Icons from "@/app/(main)/components/icons";
import projects from "@/app/(main)/projects/data";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "CV",
};

export default () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Top */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Leon San José Larsson</h1>
          <p className="text-balance font-mono text-sm opacity-75">Work in progress redesign.</p>
          <Link href="https://www.google.com/maps/place/Malm%C3%B6" target="_blank" className="font-mono text-xs opacity-75 hover:underline">
            Malmö, Sweden, CET
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
        <h2 className="text-xl font-bold">About</h2>
        <p className="font-mono text-sm opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      {/* Work */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Work Experience</h2>
        <div className="flex flex-col gap-2">
          {[
            {
              title: "Community & Support Specialist",
              company: "Sharkmob",
              companyUrl: "https://sharkmob.com",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              start: "2022",
            },
            {
              title: "Localization/QA Tester - Swedish",
              company: "Electronic Arts",
              companyUrl: "https://ea.com",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              start: "2019",
              end: "2022",
            },
          ].map(({ title, company, companyUrl, description, start, end }) => (
            <div key={title} className="flex flex-col gap-2">
              <div className="flex flex-col">
                {/* Company and dates */}
                <div className="flex items-center justify-between">
                  <Link href={companyUrl} target="_blank" className="font-semibold hover:underline">
                    {company}
                  </Link>

                  <span className="text-xs opacity-75">
                    {start} - {end ?? "Present"}
                  </span>
                </div>

                {/* Title */}
                <span className="font-mono text-sm">{title}</span>
              </div>

              {/* Description */}
              <p className="font-mono text-sm opacity-75">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 grid-rows-[masonry] gap-2 sm:grid-cols-2 md:grid-cols-3">
          {projects
            .filter(x => x.displayInCv)
            .map(({ name, shortDescription, slug, tags }) => (
              <Link key={slug} href={`/projects/${slug}`} className="flex flex-col justify-between gap-2 rounded-xl border border-neutral-200 p-2 transition-colors hover:border-neutral-400">
                <div>
                  <h3 className="font-semibold">{name}</h3>

                  <p className="font-mono text-sm opacity-75">{shortDescription}</p>
                </div>

                {/* Project tags (might be killed) */}
                <div className="flex flex-wrap gap-1">
                  {tags?.map(tag => (
                    <span key={tag} className="rounded bg-neutral-200 p-1 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
