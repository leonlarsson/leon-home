import projects from "@/data/projects";
import Icons from "@/features/icons/icons";
import { SpotifyCurrentlyPlayingTrack } from "@/features/music/components/SpotifyCurrentlyPlayingTrack";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { Link, createFileRoute } from "@tanstack/react-router";
import { TypeAnimation } from "react-type-animation";

export const Route = createFileRoute("/_main/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto max-w-3xl pb-10 text-start">
      <div className="mb-6 flex items-center gap-4">
        <img
          className="h-full select-none rounded-[100px] shadow transition-all max-md:size-[100px] max-[510px]:size-[60px] hover:rounded-[30px] hover:shadow-lg"
          src="https://leonlarsson.com/cdn-cgi/image/width=200/images/avatar.png"
          alt="Leon"
          width={130}
          height={130}
          draggable={false}
        />

        <div className="flex flex-col gap-1 max-md:gap-0">
          <span className="text-3xl font-extrabold leading-none transition-all max-md:text-xl">
            Leon San José Larsson
          </span>
          <span className="text-xl transition-all max-md:text-sm">
            Fullstack Engineer @{" "}
            <a
              href="https://www.embark-studios.com/"
              target="_blank"
              rel="noreferrer"
              className="link font-normal"
              draggable={false}
            >
              Embark Studios
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
            sequence={["Hello there!", 2000, "Hello, I am Leon San José Larsson."]}
          />
        </div>

        {/* WORK */}
        <div>
          I work as a Fullstack Engineer at{" "}
          <a
            href="https://www.embark-studios.com/"
            target="_blank"
            rel="noreferrer"
            className="link inline-flex items-baseline"
            draggable={false}
          >
            <img
              src="https://leonlarsson.com/cdn-cgi/image/width=40/images/embarklogo.png"
              alt="Embark Studios logo"
              width={20}
              height={20}
              className="mx-1 self-center"
            />
            Embark Studios
          </a>
          . My{" "}
          <Link to="/cv" target="_blank" className="link whitespace-nowrap">
            past experiences
          </Link>{" "}
          include companies like Sharkmob and Electronic Arts. As a software person, I love building things in my free
          time.
          <br />
          Take a look at{" "}
          <Link to="/projects" className="link whitespace-nowrap">
            my projects
          </Link>{" "}
          to see more.
        </div>

        {/* COMMUNITY */}
        <div>
          I also ran the biggest{" "}
          <Link
            to="/projects/$projectSlug"
            params={{ projectSlug: "battlefield-discord" }}
            className="link whitespace-nowrap"
          >
            Battlefield Discord
          </Link>{" "}
          server for 8 years, until September 2024.
        </div>

        {/* MUSIC */}
        <div>
          <Link to="/music" className="link">
            I am currently listening to:
          </Link>

          <SpotifyCurrentlyPlayingTrack barType="bar" compact alwaysRender refreshOnEnd />
        </div>

        {/* GUESTBOOK */}
        <div>
          <Icons.book className="mr-2 inline size-5" />
          Feel free to{" "}
          <Link to="/guestbook" className="link">
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
                title: "Twitter",
                url: "https://x.com/MozzyFX",
                icon: <Icons.twitterX className="me-2 inline size-5" />,
              },
              {
                title: "Bluesky",
                url: "https://bsky.app/profile/leon.ms",
                icon: <Icons.bluesky className="me-2 inline size-5" />,
              },
              {
                title: "Instagram",
                url: "https://www.instagram.com/leonsjlarsson/",
                icon: <Icons.instagram className="me-2 inline size-5" />,
              },
            ].map(({ title, url, icon }) => (
              <a
                key={title}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="card flex items-center justify-between p-2"
              >
                <div className="flex items-center">
                  {icon}
                  <span>{title}</span>
                </div>
                <Icons.externallink />
              </a>
            ))}
          </div>
        </div>

        {/* CV */}
        <div className="flex flex-col gap-1">
          <span className="mt-2 text-xl font-semibold">Want to learn more?</span>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {[
              { title: "Open English CV", locale: "en" },
              { title: "Öppna svenskt CV", locale: "sv" },
            ].map(({ title, locale }) => (
              <Link
                key={title}
                to={"/$locale/cv"}
                params={{ locale }}
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
            <Link to="/projects" className="link font-semibold">
              projects
            </Link>
          </span>
          <div className="flex flex-col gap-2">
            {projects
              .filter((x) => x.featureInHome)
              .toSorted((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year))
              .map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
          </div>
        </div>

        {/* Coolify link */}
        <a href="https://coolify.leonlarsson.com" title="Go to Coolify" className="card w-fit p-2">
          <Icons.code className="size-5" />
        </a>
      </div>
    </div>
  );
}
