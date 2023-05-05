import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-slate-100 px-4">

      <Image className="rounded-full mb-3 shadow-xl max-[420px]:w-2/5" src="/assets/images/avatar.png" alt="Leon image" width={150} height={150} priority />
      <span className="font-extrabold text-[2rem] leading-none transition-all max-[420px]:text-[1.5rem]">Leon San José Larsson</span>
      <span className="text-lg font-semibold italic transition-all max-[420px]:text-sm">Community & Support Specialist</span>
      <a className="font-extrabold text-[1.8rem] hover:text-[rgb(231,51,49)] transition-all max-[420px]:text-[1.5rem]  hover:underline" href="https://sharkmob.com">Sharkmob</a>

      <div className="flex justify-center flex-wrap gap-x-2 max-[420px]:border-b-4 border-b-slate-900">
        <ProfileLink title="Email" url="mailto:leonlarsson8@gmail.com" />
        <ProfileLink title="LinkedIn" url="https://www.linkedin.com/in/leonlarsson/" />
        <ProfileLink title="Twitter" url="https://twitter.com/MozzyFX" />
        <ProfileLink title="GitHub" url="https://github.com/leonlarsson" />
        <ProfileLink title="Behance" url="https://www.behance.net/leonlarsson" />
        <ProfileLink title="ArtStation" url="https://www.artstation.com/leonlarsson" />
      </div>

      <div className="flex justify-center flex-wrap gap-x-2">
        <Link className="home-link" href="/projects">➡ Projects</Link>
        <ProfileLink title="Resume" url="/cv" newTab={false} />
        <ProfileLink title="Swedish Resume" url="/cv-swe" newTab={false} />
      </div>
    </div>
  );
};

const ProfileLink = ({ title, url, newTab = true }: { title: string, url: string, newTab?: boolean }) => <a className="home-link" href={url} target={newTab ? "_blank" : "_self"}>{title}</a>

