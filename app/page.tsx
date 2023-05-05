import Link from "next/link";

export default () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-slate-100 px-4">
      <span className="font-extrabold text-[2rem] leading-none transition-all max-[420px]:text-[1.5rem]">Leon San José Larsson</span>
      <span className="text-lg font-semibold italic transition-all max-[420px]:text-sm">Community & Support Specialist</span>
      <a className="font-extrabold text-[1.8rem] hover:text-[rgb(231,51,49)] transition-all max-[420px]:text-[1.5rem]" href="https://sharkmob.com">Sharkmob</a>

      <div className="flex justify-center flex-wrap space-x-2 max-[420px]:border-b-4 border-b-slate-900">
        <ProfileLink title="Email" url="mailto:leonlarsson8@gmail.com" />
        <ProfileLink title="LinkedIn" url="https://www.linkedin.com/in/leonlarsson/" />
        <ProfileLink title="Twitter" url="https://twitter.com/MozzyFX" />
        <ProfileLink title="GitHub" url="https://github.com/leonlarsson" />
        <ProfileLink title="Behance" url="https://www.behance.net/leonlarsson" />
        <ProfileLink title="ArtStation" url="https://www.artstation.com/leonlarsson" />
      </div>

      <div className="flex justify-center flex-wrap space-x-2">
        <Link className="link" href="./projects">➡ Projects ⬅</Link>
        <ProfileLink title="Resume" url="https://www.linkedin.com/in/leonlarsson/" />
        <ProfileLink title="Swedish Resume" url="https://twitter.com/MozzyFX" />
      </div>
    </div>
  );
};

const ProfileLink = ({ title, url }: { title: string, url: string }) => <a className="link" href={url} target="_blank">{title}</a>

