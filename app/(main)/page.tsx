import Image from "next/image";
import Link from "next/link";

export default () => {
  return (
    <div className="page">
      <Image className="mb-2 self-center rounded-[100px] shadow-xl transition-all hover:rounded-b-xl hover:shadow-2xl active:-translate-y-1 max-[430px]:w-2/5" src="/assets/images/avatar.png" alt="Leon image" width={150} height={150} priority draggable={false} />

      <span className="text-[2rem] font-extrabold leading-none max-[430px]:text-[1.5rem]">Leon San José Larsson</span>
      <Employment title="Community & Support Specialist" companyName="Sharkmob" companyUrl="https://sharkmob.com" />

      <div className="mb-1 mt-2 flex flex-wrap justify-center gap-x-1 border-b-slate-900 dark:border-kinda-white max-[651px]:border-b-4">
        <ProfileLink title="Email" url="mailto:leonlarsson8@gmail.com" icon={<i className="fa-solid fa-envelope" />} newTab />
        <ProfileLink title="LinkedIn" url="https://www.linkedin.com/in/leonlarsson/" icon={<i className="fa-brands fa-linkedin" />} newTab />
        <ProfileLink title="Twitter" url="https://twitter.com/MozzyFX" icon={<i className="fa-brands fa-twitter" />} newTab />
        <ProfileLink title="Instagram" url="https://www.instagram.com/leonsjlarsson/" icon={<i className="fa-brands fa-instagram" />} newTab />
        <ProfileLink title="GitHub" url="https://github.com/leonlarsson" icon={<i className="fa-brands fa-github" />} newTab />
        <ProfileLink title="ArtStation" url="https://www.artstation.com/leonlarsson" icon={<i className="fa-brands fa-artstation" />} newTab />
      </div>

      {/* Used for creating embed images for 900x600 */}
      {/* <div className="absolute left-[15px] top-[565px] text-lg">leonlarsson.com</div> */}

      <div className="flex flex-wrap justify-center gap-x-1">
        <ProfileLink title="Projects" url="/projects" icon={<i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-[3px]" />} />
        <ProfileLink title="Guestbook" url="/guestbook" icon={<i className="fa-solid fa-book transition-transform group-hover:-rotate-12" />} />
        <ProfileLink title="English CV" url="/cv" icon={<i className="fa-solid fa-file-text" />} />
        <ProfileLink title="Swedish CV" url="/cv-swe" icon={<i className="fa-solid fa-file-text" />} />
      </div>
    </div>
  );
};

const Employment = ({ title, companyName, companyUrl }: { title: string; companyName?: string; companyUrl?: string }) => {
  return (
    <span className="text-lg max-[430px]:text-sm">
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

const ProfileLink = ({ title, url, icon, newTab }: { title: string; url: string; icon?: React.ReactNode; newTab?: boolean }) => (
  <Link className="rounded p-1 text-lg font-semibold transition-all hover:bg-black hover:text-white dark:hover:bg-gray-300/10 dark:hover:text-kinda-white group" href={url} target={newTab ? "_blank" : "_self"} draggable={false}>
    {icon} {title}
  </Link>
);
