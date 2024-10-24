import Image from "next/image";
import HeaderLink from "./HeaderLink";
import Icons from "./icons";

export default () => {
  return (
    <div className="select-none min-[510px]:pt-8">
      {/* TOP HEADER */}
      <header className="relative z-50 mb-6 hidden px-6 min-[510px]:block">
        <div className="mx-auto flex h-16 w-full max-w-5xl justify-between rounded-xl border-[1px] border-black/20 bg-foreground-light px-2 dark:border-kinda-white/10 dark:bg-foreground-dark">
          <div className="flex items-center *:px-2">
            <HeaderLink
              content={
                <Image
                  className="rounded-full"
                  src="/assets/images/avatar.png"
                  alt="Leon image"
                  width={40}
                  height={40}
                  priority
                  draggable={false}
                />
              }
              url="/"
            />
            <HeaderLink content="Home" url="/" />
            <HeaderLink content="Projects" url="/projects" />
            <HeaderLink content="Guestbook" url="/guestbook" />
            <HeaderLink content="Music" url="/music" />
            <HeaderLink
              content={
                <>
                  CV <Icons.externallink className="ms-1 size-3" />
                </>
              }
              url="/en/cv"
              newTab
            />
          </div>

          <div className="hidden items-center text-2xl *:px-1 min-[680px]:flex">
            <HeaderLink
              content={<Icons.envelope className="w-8" />}
              url="mailto:leonlarsson8@gmail.com"
              title="Email"
              newTab
            />
            <HeaderLink
              content={<Icons.linkedin className="w-8" />}
              url="https://www.linkedin.com/in/leonlarsson/"
              title="LinkedIn"
              newTab
            />
            <HeaderLink
              content={<Icons.github className="w-8" />}
              url="https://github.com/leonlarsson"
              title="GitHub"
              newTab
            />
            <HeaderLink
              content={<Icons.twitterX className="w-8" />}
              url="https://x.com/MozzyFX"
              title="Twitter"
              newTab
            />
          </div>
        </div>
      </header>

      {/* BOTTOM OVERLAY HEADER */}
      <header className="fixed inset-x-0 bottom-0 z-50 block px-6 pb-6 min-[510px]:hidden">
        <div className="flex h-16 rounded-xl border-[1px] border-black/40 bg-foreground-light/70 text-xl backdrop-blur-md dark:border-kinda-white/10 dark:bg-foreground-dark/80">
          <div className="flex w-full justify-evenly text-2xl *:px-0 min-[275px]:*:px-2">
            <HeaderLink
              content={<Icons.house className="w-8" />}
              url="/"
              title="Home"
            />
            <HeaderLink
              content={<Icons.list className="w-8" />}
              url="/projects"
              title="Projects"
            />
            <HeaderLink
              content={<Icons.book className="w-8" />}
              url="/guestbook"
              title="Guestbook"
            />
            <HeaderLink
              content={<Icons.spotify className="w-8" />}
              url="/music"
              title="Music"
            />
          </div>
        </div>
      </header>
    </div>
  );
};
