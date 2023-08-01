import Image from "next/image";
import Link from "next/link";
import projects from "./projects/data";
import smLogo from "/public/assets/images/smlogo_notext.png";
import { Project } from "./projects/components/ProjectsGrid";

export default () => {
  return (
    <div className="mx-auto max-w-3xl pb-10 text-start">
      <div className="mb-6 flex items-center gap-4">
        {/* <div className="rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 hover:from-red-500 hover:via-lime-600 hover:to-blue-400 max-md:p-px">IMAGE</div> */}
        <Image className="h-full rounded-full shadow-xl transition-all hover:rounded-l-xl hover:shadow-2xl active:-translate-y-1 max-md:w-[50px]" src="/assets/images/avatar.png" alt="Leon image" width={130} height={130} priority draggable={false} />

        <div className="flex flex-col gap-1 max-md:gap-0">
          <span className="text-4xl font-extrabold leading-none transition-all max-md:text-xl">Leon San José Larsson</span>
          <Employment title="Community & Support Specialist" companyName="Sharkmob" companyUrl="https://sharkmob.com" />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          Hello, I am <span className="font-bold">Leon San José Larsson.</span>
        </div>
        {/* INTRO */}
        <div>
          I'm a hobby web developer in self-training.
          <div>
            I currently work as the <b>Community & Support Specialist</b> at{" "}
            <Link href="https://sharkmob.com" target="_blank" className="inline-flex items-baseline underline-offset-2 hover:underline" draggable={false}>
              <Image src={smLogo} alt="Sharkmob logo" width={16} height={16} className="mx-1 self-center" />
              <span>Sharkmob</span>
            </Link>
            , where I manage the player support, Bloodhunt's website, and help the community team.
          </div>
        </div>

        {/* GUESTBOOK */}
        <div>
          <i className="fa-solid fa-pencil me-1" />
          Feel free to{" "}
          <span className="font-semibold">
            <Link href="/guestbook" className="underline-offset-2 hover:underline">
              sign my guestbook
            </Link>
            !
          </span>
        </div>

        {/* CONNECT */}
        <div className="flex flex-col gap-1">
          <span className="text-xl font-semibold">Connect with me</span>
          <div className="grid grid-cols-1 gap-2 min-[370px]:grid-cols-2 sm:grid-cols-3">
            {[
              { title: "Email", url: "mailto:leonlarsson8@gmail.com", iconClasses: "fa-solid fa-envelope" },
              { title: "LinkedIn", url: "https://www.linkedin.com/in/leonlarsson/", iconClasses: "fa-brands fa-linkedin" },
              { title: "X / Twitter", url: "https://x.com/MozzyFX", iconClasses: "fa-brands fa-twitter" },
              { title: "Instagram", url: "https://www.instagram.com/leonsjlarsson/", iconClasses: "fa-brands fa-instagram" },
              { title: "GitHub", url: "https://github.com/leonlarsson", iconClasses: "fa-brands fa-github" },
              { title: "ArtStation", url: "https://www.artstation.com/leonlarsson", iconClasses: "fa-brands fa-artstation" }
            ].map(({ title, url, iconClasses }) => (
              <div className="rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:from-red-500 hover:via-lime-600 hover:to-blue-400">
                <Link href={url} target="_blank" className="flex items-center justify-between rounded bg-gradient-to-bl from-white to-slate-200 p-2 dark:from-kinda-black dark:to-kinda-black">
                  <div>
                    <i className={`${iconClasses} fa-lg fa-fw me-1`} />
                    <span>{title}</span>
                  </div>
                  <i className="fa-solid fa-external-link dark:text-kinda-white" />
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* RESUME */}
        <div className="flex flex-col gap-1">
          <span className="mt-2 text-xl font-semibold">Want to learn more?</span>
          <div className="rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:from-red-500 hover:via-lime-600 hover:to-blue-400">
            <Link href="/resume" className="flex h-full rounded bg-gradient-to-bl from-white to-slate-200 p-2 dark:from-kinda-black dark:to-kinda-black">
              <span>
                <i className="fa-solid fa-file-text fa-fw me-1" />
                Read my Resume
              </span>
            </Link>
          </div>
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
