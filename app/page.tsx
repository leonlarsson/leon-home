import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-slate-100 px-4">

      <Image className="rounded-full mb-3 shadow-xl max-[420px]:w-2/5" src="/assets/images/avatar.png" alt="Leon image" width={150} height={150} priority />
      <span className="font-extrabold text-[2rem] leading-none max-[420px]:text-[1.5rem]">Leon San José Larsson</span>
      <TitleAndCompany title="Community & Support Specialist" company="Sharkmob" companyUrl="https://sharkmob.com" companyThemeColor="rgb(231,51,49)" />

      <div className="flex justify-center flex-wrap gap-x-1 mt-2 max-[521px]:border-b-4 border-b-slate-900">
        <ProfileLink title="Email" url="mailto:leonlarsson8@gmail.com" icon={<i className="fa-solid fa-envelope" />} />
        <ProfileLink title="LinkedIn" url="https://www.linkedin.com/in/leonlarsson/" icon={<i className="fa-brands fa-linkedin" />} />
        <ProfileLink title="Twitter" url="https://twitter.com/MozzyFX" icon={<i className="fa-brands fa-twitter" />} />
        <ProfileLink title="GitHub" url="https://github.com/leonlarsson" icon={<i className="fa-brands fa-github" />} />
        <ProfileLink title="ArtStation" url="https://www.artstation.com/leonlarsson" icon={<i className="fa-brands fa-artstation" />} />
      </div>

      <div className="flex justify-center flex-wrap gap-x-2">
        <Link className="home-link" href="/projects">➡ Projects</Link>
        <ProfileLink title="Resume" url="/cv" newTab={false} />
        <ProfileLink title="Swedish Resume" url="/cv-swe" newTab={false} />
      </div>
    </div>
  );
};

const TitleAndCompany = ({ title, company, companyUrl, companyThemeColor }: { title: string, company?: string, companyUrl?: string, companyThemeColor?: string }) => {
  return <span className="text-lg font-semibold italic max-[420px]:text-sm">{title} {company && <>@ <a href={companyUrl} target="_blank" className={`hover:text-[${companyThemeColor}] transition-colors duration-300`}>Sharkmob</a></>}</span>
};

const ProfileLink = ({ title, url, icon, newTab = true }: { title: string, url: string, icon?: React.ReactNode, newTab?: boolean }) => <a className="home-link" href={url} target={newTab ? "_blank" : "_self"}>{icon} {title}</a>;