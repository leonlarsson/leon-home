import Image from "next/image";
import Link from "next/link";
import projects from "./projects/data";
import TypeAnimation from "./components/TypeAnimation";
import GradientBorder from "./components/GradientBorder";
import smLogo from "/public/assets/images/smlogo_notext.png";
import { Project } from "./projects/components/ProjectsGrid";

export default () => {
  return (
    <div className="mx-auto max-w-3xl pb-10 text-start">
      <div className="mb-6 flex items-center gap-4">
        {/* <GradientBorder rounded="rounded-full" padding="p-1">IMAGE</GradientBorder> */}
        <Image className="h-full select-none rounded-[100px] shadow transition-all hover:rounded-l-[10px] hover:shadow-lg active:translate-x-1 max-md:w-[50px]" src="/assets/images/avatar.png" alt="Leon image" width={130} height={130} priority draggable={false} />

        <div className="flex flex-col gap-1 max-md:gap-0">
          <span className="text-4xl font-extrabold leading-none transition-all max-md:text-xl">Leon San José Larsson</span>
          <Employment title="Community & Support Specialist" companyName="Sharkmob" companyUrl="https://sharkmob.com" />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          👋 <TypeAnimation cursor={false} deletionSpeed={1} sequence={["Hello there!", 2000, "Hello, I am Leon San José Larsson."]} />
        </div>

        {/* WORK */}
        <div>
          I currently work as the Community & Support Specialist at{" "}
          <Link href="https://sharkmob.com" target="_blank" className="inline-flex items-baseline underline-offset-2 hover:underline" draggable={false}>
            <Image src={smLogo} alt="Sharkmob logo" width={16} height={16} className="mx-1 self-center" />
            <span className="font-semibold underline-offset-2 hover:underline">Sharkmob</span>
          </Link>
          , where I manage the player support, Bloodhunt's website, and help the community and marketing teams.
        </div>

        {/* DEV */}
        <div>
          I'm a hobby software developer in self-training. My main interest areas are web development and Discord bots. I also work a lot with creating various APIs and services on platforms such as Cloudflare Workers.{" "}
          <Link href="/projects" className="font-semibold underline-offset-2 hover:underline">
            Browse all my projects!
          </Link>
        </div>

        {/* COMMUNITY */}
        <div>
          One of my interests is also community building and community management. I have been building communities on Discord since 2016, including moderating and then co-owning the biggest{" "}
          <Link href="/projects/battlefield-discord" className="whitespace-nowrap font-semibold underline-offset-2 hover:underline">
            Battlefield Discord
          </Link>
          .
        </div>

        {/* GUESTBOOK */}
        <div>
          <i className="fa-solid fa-pencil fa-lg fa-fw me-1" />
          Feel free to{" "}
          <Link href="/guestbook" className="font-semibold underline-offset-2 hover:underline">
            sign my guestbook!
          </Link>
        </div>

        {/* CONNECT */}
        <div className="flex flex-col gap-1">
          <span className="text-xl font-semibold">Connect with me</span>
          <div className="grid grid-cols-1 gap-2 min-[370px]:grid-cols-2 sm:grid-cols-3">
            {[
              { title: "Email", url: "mailto:leonlarsson8@gmail.com", iconClasses: "fa-solid fa-envelope" },
              { title: "LinkedIn", url: "https://www.linkedin.com/in/leonlarsson/", iconClasses: "fa-brands fa-linkedin" },
              { title: "GitHub", url: "https://github.com/leonlarsson", iconClasses: "fa-brands fa-github" },
              { title: "X / Twitter", url: "https://x.com/MozzyFX", iconClasses: "fa-brands fa-x-twitter" },
              { title: "Bluesky", url: "https://bsky.app/profile/leon.ms", iconClasses: "fa-solid fa-globe" },
              { title: "Instagram", url: "https://www.instagram.com/leonsjlarsson/", iconClasses: "fa-brands fa-instagram" },
              { title: "ArtStation", url: "https://www.artstation.com/leonlarsson", iconClasses: "fa-brands fa-artstation" }
            ].map(({ title, url, iconClasses }) => (
              <GradientBorder key={title} rounded="rounded-[6px]" padding="p-[2px]" hoverable>
                <Link href={url} target="_blank" className="flex items-center justify-between rounded bg-gradient-to-bl from-white to-slate-200 p-2 dark:from-kinda-black dark:to-kinda-black">
                  <div>
                    <i className={`${iconClasses} fa-lg fa-fw me-1`} />
                    <span>{title}</span>
                  </div>
                  <i className="fa-solid fa-external-link dark:text-kinda-white" />
                </Link>
              </GradientBorder>
            ))}
          </div>
        </div>

        {/* RESUME */}
        <div className="flex flex-col gap-1">
          <span className="mt-2 text-xl font-semibold">Want to learn more?</span>
          <GradientBorder rounded="rounded-[6px]" padding="p-[2px]" hoverable>
            <Link href="/resume" className="flex h-full rounded bg-gradient-to-bl from-white to-slate-200 p-2 dark:from-kinda-black dark:to-kinda-black">
              <span>
                <i className="fa-solid fa-file-text fa-lg fa-fw me-1" />
                Read my Resume
              </span>
            </Link>
          </GradientBorder>
        </div>

        {/* FEATURED PROJECTS */}
        <div className="flex flex-col gap-1">
          <span className="mt-2 text-xl font-semibold">
            Featured{" "}
            <Link href="/projects" className="underline-offset-2 hover:underline">
              projects
            </Link>
          </span>
          <div className="flex flex-col gap-2">
            <Project project={projects[17] ?? projects[17]} />
            <Project project={projects[0]} />
            <Project project={projects[7]} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Employment = ({ title, companyName, companyUrl }: { title: string; companyName?: string; companyUrl?: string }) => {
  return (
    <span className="text-xl transition-all max-md:text-sm">
      {title}
      {companyName && (
        <>
          {" "}
          @{" "}
          <a href={companyUrl} target="_blank" className="underline-offset-2 hover:underline" draggable={false}>
            {companyName}
          </a>
        </>
      )}
    </span>
  );
};
