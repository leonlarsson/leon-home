import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects";
import TypeAnimation from "./components/TypeAnimation";
import GradientBorder from "./components/GradientBorder";
import smLogo from "/public/assets/images/smlogo_notext.png";
import { Project } from "./projects/components/ProjectsGrid";
import Icons from "./components/icons";

export default () => {
  return (
    <div className="mx-auto max-w-3xl pb-10 text-start">
      <div className="mb-6 flex items-center gap-4">
        {/* <GradientBorder rounded="rounded-full" padding="p-1">IMAGE</GradientBorder> */}
        <Image className="h-full select-none rounded-[100px] shadow transition-all hover:rounded-l-[10px] hover:shadow-lg active:translate-x-1 max-md:w-[50px]" src="/assets/images/avatar.png" alt="Leon image" width={130} height={130} priority draggable={false} />

        <div className="flex flex-col gap-1 max-md:gap-0">
          <span className="text-4xl font-extrabold leading-none transition-all max-md:text-xl">Leon San José Larsson</span>
          <span className="text-xl transition-all max-md:text-sm">
            Community & Support Specialist @{" "}
            <a href="https://sharkmob.com" target="_blank" className="link font-normal" draggable={false}>
              Sharkmob
            </a>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          👋 <TypeAnimation cursor={false} deletionSpeed={1} sequence={["Hello there!", 2000, "Hello, I am Leon San José Larsson."]} />
        </div>

        {/* WORK */}
        <div>
          I currently work as the Community & Support Specialist at{" "}
          <Link href="https://sharkmob.com" target="_blank" className="link inline-flex items-baseline" draggable={false}>
            <Image src={smLogo} alt="Sharkmob logo" width={16} height={16} className="mx-1 self-center" />
            <span>Sharkmob</span>
          </Link>
          , where I manage player support, Bloodhunt's website, and assist the player relations and marketing teams.
        </div>

        {/* DEV */}
        <div>
          I'm an aspiring Full Stack Engineer in self-training. My primary areas of interest are web development and Discord bots. I also extensively work on creating various APIs and services on platforms such as Cloudflare Workers. Feel free to{" "}
          <Link href="/projects" className="link">
            browse all my projects!
          </Link>
        </div>

        {/* COMMUNITY */}
        <div>
          Some of my other interests include community building and community management. I've been building communities on Discord since 2016, including moderating and eventually co-owning the biggest{" "}
          <Link href="/projects/battlefield-discord" className="link whitespace-nowrap">
            Battlefield Discord
          </Link>
          .
        </div>

        {/* MUSIC - DISABLED */}
        {/* <div>
          <Link href="/music" className="link">
            I am currently listening to:
          </Link>

          <Suspense fallback={<CurrentTrackSkeleton compact />}>
            <SpotifyCurrentTrack compact alwaysRender reloadOnEnd />
          </Suspense>
        </div> */}

        {/* GUESTBOOK */}
        <div>
          <Icons.pencil className="mr-2 inline size-5" />
          Feel free to{" "}
          <Link href="/guestbook" className="link">
            sign my guestbook!
          </Link>
        </div>

        {/* CONNECT */}
        <div className="flex flex-col gap-1">
          <span className="text-xl font-semibold">Connect with me</span>
          <div className="grid grid-cols-1 gap-2 min-[370px]:grid-cols-2 sm:grid-cols-3">
            {[
              { title: "Email", url: "mailto:leonlarsson8@gmail.com", icon: <Icons.envelope className="me-2 inline size-5" /> },
              { title: "LinkedIn", url: "https://www.linkedin.com/in/leonlarsson/", icon: <Icons.linkedin className="me-2 inline size-5" /> },
              { title: "GitHub", url: "https://github.com/leonlarsson", icon: <Icons.github className="me-2 inline size-5" /> },
              { title: "X / Twitter", url: "https://x.com/MozzyFX", icon: <Icons.twitterX className="me-2 inline size-5" /> },
              { title: "Twitter 2", url: "https://bsky.app/profile/leon.ms", icon: <Icons.bluesky className="me-2 inline size-5" /> },
              { title: "Twitter 3", url: "https://www.threads.net/@leonsjlarsson", icon: <Icons.threads className="me-2 inline size-5" /> },
              { title: "Instagram", url: "https://www.instagram.com/leonsjlarsson/", icon: <Icons.instagram className="me-2 inline size-5" /> },
              { title: "ArtStation", url: "https://www.artstation.com/leonlarsson", icon: <Icons.artstation className="me-2 inline size-5" /> },
            ].map(({ title, url, icon }) => (
              <GradientBorder key={title} rounded="rounded-[6px]" padding="p-[2px]" hoverable>
                <Link href={url} target="_blank" className="flex items-center justify-between rounded bg-slate-100 p-2 dark:bg-kinda-black">
                  <div className="flex items-center">
                    {icon}
                    <span>{title}</span>
                  </div>
                  <Icons.externallink />
                </Link>
              </GradientBorder>
            ))}
          </div>
        </div>

        {/* CV */}
        <div className="flex flex-col gap-1">
          <span className="mt-2 text-xl font-semibold">Want to learn more?</span>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {[
              { title: "Open English CV", url: "/en/cv" },
              { title: "Öppna svenskt CV", url: "/sv/cv" },
            ].map(({ title, url }) => (
              <GradientBorder key={title} rounded="rounded-[6px]" padding="p-[2px]" hoverable>
                <Link href={url} target="_blank" className="flex items-center justify-between rounded bg-slate-100 p-2 dark:bg-kinda-black">
                  <div className="flex items-center">
                    <Icons.file className="me-2 inline size-5" />
                    <span>{title}</span>
                  </div>
                  <Icons.externallink />
                </Link>
              </GradientBorder>
            ))}
          </div>
        </div>

        {/* FEATURED PROJECTS */}
        <div className="flex flex-col gap-1">
          <span className="mt-2 text-xl font-semibold">
            Featured{" "}
            <Link href="/projects" className="link font-semibold">
              projects
            </Link>
          </span>
          <div className="flex flex-col gap-2">
            <Project project={projects[17]} displayTags={false} />
            <Project project={projects[7]} displayTags={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
