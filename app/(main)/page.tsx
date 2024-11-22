import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects";
import oksidiaLogo from "/public/assets/images/oksidialogo_notext.png";
import TypeAnimation from "./components/TypeAnimation";
import ProjectCard from "./projects/components/ProjectCard";
import Icons from "./components/icons";

export default () => {
  return (
    <div className="mx-auto max-w-3xl pb-10 text-start">
      <div className="mb-6 flex items-center gap-4">
        <Image
          className="h-full select-none rounded-[100px] shadow transition-all hover:rounded-[30px] hover:shadow-lg"
          src="/assets/images/avatar.png"
          alt="Leon"
          width={130}
          height={130}
          priority
          draggable={false}
        />

        <div className="flex flex-col gap-1 max-md:gap-0">
          <span className="text-3xl font-extrabold leading-none transition-all max-md:text-xl">
            Leon San José Larsson
          </span>
          <span className="text-xl transition-all max-md:text-sm">
            Software Developer @{" "}
            <a
              href="https://oksidia.fi"
              target="_blank"
              className="link font-normal"
              draggable={false}
            >
              Oksidia
            </a>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          👋{" "}
          <TypeAnimation
            cursor={false}
            deletionSpeed={1}
            sequence={[
              "Hello there!",
              2000,
              "Hello, I am Leon San José Larsson.",
            ]}
          />
        </div>

        {/* WORK */}
        <div>
          I work as a Software Developer at{" "}
          <Link
            href="https://oksidia.fi"
            target="_blank"
            className="link inline-flex items-baseline"
            draggable={false}
          >
            <Image
              src={oksidiaLogo}
              alt="Oksidia logo"
              width={16}
              height={16}
              className="mx-1 self-center"
            />
            <span>Oksidia</span>
          </Link>
          , where I work with JavaScript/TypeScript/PHP with Angular, React, and
          Laravel.{" "}
          <Link href={"/cv"} target="_blank" className="link whitespace-nowrap">
            Past experiences
          </Link>{" "}
          include companies like Sharkmob and Electronic Arts.
        </div>

        {/* DEV */}
        <div>
          As a Software Developer, my primary areas of interest are web
          development and Discord bots. I also enjoy creating APIs and services
          on platforms such as Cloudflare Workers. Feel free to{" "}
          <Link href="/projects" className="link">
            browse all my projects!
          </Link>
        </div>

        {/* COMMUNITY */}
        <div>
          I also ran the biggest{" "}
          <Link
            href="/projects/battlefield-discord"
            className="link whitespace-nowrap"
          >
            Battlefield Discord
          </Link>{" "}
          server for 8 years, until September 2024.
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
          <Icons.book className="mr-2 inline size-5" />
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
              {
                title: "Email",
                url: "mailto:leonlarsson8@gmail.com",
                icon: <Icons.envelope className="me-2 inline size-5" />,
              },
              {
                title: "LinkedIn",
                url: "https://www.linkedin.com/in/leonlarsson/",
                icon: <Icons.linkedin className="me-2 inline size-5" />,
              },
              {
                title: "GitHub",
                url: "https://github.com/leonlarsson",
                icon: <Icons.github className="me-2 inline size-5" />,
              },
              {
                title: "Bluesky",
                url: "https://bsky.app/profile/leon.ms",
                icon: <Icons.bluesky className="me-2 inline size-5" />,
              },
              {
                title: "Twitter",
                url: "https://x.com/MozzyFX",
                icon: <Icons.twitterX className="me-2 inline size-5" />,
              },
              // {
              //   title: "Twitter 3",
              //   url: "https://www.threads.net/@leonsjlarsson",
              //   icon: <Icons.threads className="me-2 inline size-5" />,
              // },
              // {
              //   title: "Instagram",
              //   url: "https://www.instagram.com/leonsjlarsson/",
              //   icon: <Icons.instagram className="me-2 inline size-5" />,
              // },
              // {
              //   title: "ArtStation",
              //   url: "https://www.artstation.com/leonlarsson",
              //   icon: <Icons.artstation className="me-2 inline size-5" />,
              // },
            ].map(({ title, url, icon }) => (
              <Link
                key={title}
                href={url}
                target="_blank"
                className="card flex items-center justify-between p-2"
              >
                <div className="flex items-center">
                  {icon}
                  <span>{title}</span>
                </div>
                <Icons.externallink />
              </Link>
            ))}
          </div>
        </div>

        {/* CV */}
        <div className="flex flex-col gap-1">
          <span className="mt-2 text-xl font-semibold">
            Want to learn more?
          </span>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {[
              { title: "Open English CV", url: "/en/cv" },
              { title: "Öppna svenskt CV", url: "/sv/cv" },
            ].map(({ title, url }) => (
              <Link
                key={title}
                href={url}
                target="_blank"
                className="card flex items-center justify-between p-2"
              >
                <div className="flex items-center">
                  <Icons.file className="me-2 inline size-5" />
                  <span>{title}</span>
                </div>
                <Icons.externallink />
              </Link>
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
            {projects
              .filter(x => x.featureInHome)
              .toSorted(
                (a, b) => Number.parseInt(b.year) - Number.parseInt(a.year),
              )
              .map(project => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  displayTags={false}
                />
              ))}
          </div>
        </div>

        {/* Coolify link */}
        <a href="https://coolify.leonlarsson.com" className="card w-fit p-2">
          <Icons.code className="size-5" />
        </a>
      </div>
    </div>
  );
};
