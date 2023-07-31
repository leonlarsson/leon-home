import Image from "next/image";
import Link from "next/link";
import HeaderLink from "./HeaderLink";

export default () => {
  return (
    <>
      {/* TOP HEADER */}
      <header className="relative z-50 mb-8 hidden px-4 min-[610px]:block">
        <div className="container mx-auto mt-8 flex h-16 w-full max-w-5xl justify-between rounded-xl border-[1px] border-kinda-black/20 bg-white/50 px-4 backdrop-blur-md dark:border-kinda-white/5 dark:bg-[#1e1e1e]/50">
          <div className="flex items-center gap-6">
            <Link className="self-center" href="/" draggable={false}>
              <Image className="rounded-[100px]" src="/assets/images/avatar.png" alt="Leon image" width={40} height={40} priority draggable={false} />
            </Link>
            <HeaderLink content="Home" url="/" />
            <HeaderLink content="Projects" url="/projects" />
            <HeaderLink content="Guestbook" url="/guestbook" />
            <HeaderLink content="English CV" url="/cv" />
            <HeaderLink content="Swedish CV" url="/cv-swe" />
          </div>

          <div className="hidden items-center gap-6 text-2xl min-[830px]:flex">
            <HeaderLink content={<i className="fa-solid fa-envelope" />} url="mailto:leonlarsson8@gmail.com" title="Email" newTab />
            <HeaderLink content={<i className="fa-brands fa-linkedin" />} url="https://www.linkedin.com/in/leonlarsson/" title="LinkedIn" newTab />
            <HeaderLink content={<i className="fa-brands fa-twitter" />} url="https://x.com/MozzyFX" title="X (Twitter)" newTab />
            <HeaderLink content={<i className="fa-brands fa-instagram" />} url="https://www.instagram.com/leonsjlarsson/" title="Instagram" newTab />
            <HeaderLink content={<i className="fa-brands fa-github" />} url="https://github.com/leonlarsson" title="GitHub" newTab />
          </div>
        </div>
      </header>

      {/* BOTTOM OVERLAY HEADER */}
      <header className="fixed inset-x-0 bottom-0 z-50 block px-4 pb-6 min-[610px]:hidden" style={{ opacity: 1, transform: "none" }}>
        <div className="flex h-16 w-full justify-between rounded-xl border-[1px] border-kinda-black/20 bg-white/30 px-4 text-xl backdrop-blur-md dark:border-kinda-white/5 dark:bg-[#1e1e1e]/30">
          <div className="flex w-full items-center justify-between gap-6 min-[420px]:justify-normal">
            <HeaderLink content={<i className="fa-solid fa-house" />} url="/" title="Home" />
            <HeaderLink content={<i className="fa-solid fa-tools" />} url="/projects" title="Projects" />
            <HeaderLink content={<i className="fa-solid fa-book" />} url="/guestbook" title="Guestbook" />
            <HeaderLink content={<i className="fa-solid fa-file-text" />} url="/cv" title="CV" />
          </div>

          <div className="hidden items-center gap-6 min-[420px]:flex">
            <HeaderLink content={<i className="fa-solid fa-envelope" />} url="mailto:leonlarsson8@gmail.com" title="Email" newTab />
            <HeaderLink content={<i className="fa-brands fa-linkedin" />} url="https://www.linkedin.com/in/leonlarsson/" title="LinkedIn" newTab />
            <HeaderLink content={<i className="fa-brands fa-twitter" />} url="https://x.com/MozzyFX" title="X (Twitter)" newTab />
            <HeaderLink content={<i className="fa-brands fa-instagram" />} url="https://www.instagram.com/leonsjlarsson/" title="Instagram" newTab />
            <HeaderLink content={<i className="fa-brands fa-github" />} url="https://github.com/leonlarsson" title="GitHub" newTab />
          </div>
        </div>
      </header>
    </>
  );
};
