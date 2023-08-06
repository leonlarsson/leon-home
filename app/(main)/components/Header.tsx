import Image from "next/image";
import Link from "next/link";
import HeaderLink from "./HeaderLink";

export default () => {
  return (
    <div className="select-none">
      {/* TOP HEADER */}
      <header className="relative z-50 mb-6 hidden px-6 min-[490px]:block">
        {/* <GradientBorder rounded="rounded-xl" extraClasses="max-w-5xl mx-auto mt-8" hoverable>
          <div className="container mx-auto flex h-16 w-full max-w-5xl items-center justify-between rounded-xl bg-white/50 px-2 backdrop-blur-md dark:bg-[#1e1e1e]/50">REST HERE</div>
        </GradientBorder> */}
        <div className="container mx-auto mt-8 flex h-16 w-full max-w-5xl items-center justify-between rounded-xl border-[1px] border-black/20 bg-white/50 px-2 dark:border-kinda-white/10 dark:bg-[#1e1e1e]/50">
          <div className="flex gap-1">
            <Link className="self-center px-2" href="/" draggable={false}>
              <Image className="rounded-full" src="/assets/images/avatar.png" alt="Leon image" width={40} height={40} priority draggable={false} />
            </Link>
            <HeaderLink content="Home" url="/" />
            <HeaderLink content="Projects" url="/projects" />
            <HeaderLink content="Guestbook" url="/guestbook" />
            <HeaderLink content="Resume" url="/resume" />
          </div>

          <div className="hidden gap-1 text-2xl min-[670px]:flex">
            <HeaderLink content={<i className="fa-solid fa-envelope" />} url="mailto:leonlarsson8@gmail.com" title="Email" newTab />
            <HeaderLink content={<i className="fa-brands fa-linkedin" />} url="https://www.linkedin.com/in/leonlarsson/" title="LinkedIn" newTab />
            <HeaderLink content={<i className="fa-brands fa-x-twitter" />} url="https://x.com/MozzyFX" title="X / Twitter" newTab />
            <HeaderLink content={<i className="fa-brands fa-github" />} url="https://github.com/leonlarsson" title="GitHub" newTab />
          </div>
        </div>
      </header>

      {/* BOTTOM OVERLAY HEADER */}
      <header className="fixed inset-x-0 bottom-0 z-50 block px-6 pb-6 min-[490px]:hidden" style={{ opacity: 1, transform: "none" }}>
        <div className="flex h-16 items-center justify-between rounded-xl border-[1px] border-black/40 bg-white/50 px-4 text-xl backdrop-blur-md dark:border-kinda-white/10 dark:bg-[#1e1e1e]/50">
          {/* Below classes were removed / added after removing the social media icons */}
          {/* Removed below: min-[410px]:justify-normal */}
          {/* Added below: text-2xl (can still increase size after we remove social media icons, if they were to be re-added) */}
          <div className="flex w-full justify-around gap-5 text-2xl">
            <HeaderLink content={<i className="fa-solid fa-house" />} url="/" title="Home" />
            <HeaderLink content={<i className="fa-solid fa-tools" />} url="/projects" title="Projects" />
            <HeaderLink content={<i className="fa-solid fa-pencil" />} url="/guestbook" title="Guestbook" />
            <HeaderLink content={<i className="fa-solid fa-file-text" />} url="/resume" title="CV/Resume" />
          </div>

          {/* <div className="hidden gap-5 min-[410px]:flex">
            <HeaderLink content={<i className="fa-solid fa-envelope" />} url="mailto:leonlarsson8@gmail.com" title="Email" newTab />
            <HeaderLink content={<i className="fa-brands fa-linkedin" />} url="https://www.linkedin.com/in/leonlarsson/" title="LinkedIn" newTab />
            <HeaderLink content={<i className="fa-brands fa-x-twitter" />} url="https://x.com/MozzyFX" title="X / Twitter" newTab />
            <HeaderLink content={<i className="fa-brands fa-github" />} url="https://github.com/leonlarsson" title="GitHub" newTab />
          </div> */}
        </div>
      </header>
    </div>
  );
};

const XLogo = (
  <svg fill="currentColor" height="22" viewBox="0 0 22 20">
    <path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z"></path>
  </svg>
);
