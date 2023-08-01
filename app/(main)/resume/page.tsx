import Link from "next/link";
import GradientBorder from "../components/GradientBorder";

export default () => {
  return (
    <div className="m-auto">
      <div className="text-3xl font-extrabold transition-all max-[450px]:text-2xl">CV / Resume</div>
      <span className="mb-3">My CV / Resume is available in both English and Swedish.</span>

      <div className="mt-2 flex flex-wrap justify-center gap-2">
        {[
          {
            title: "Open English CV / Resume",
            url: "/cv"
          },
          {
            title: "Open Swedish CV / Resume",
            url: "/cv-swe"
          }
        ].map(({ title, url }) => (
          <GradientBorder padding="p-[2px]" hoverable>
            <Link href={url} target="blank" className="flex h-full rounded bg-gradient-to-bl from-white to-slate-200 p-2 dark:from-kinda-black dark:to-kinda-black">
              <div>
                <i className="fa-solid fa-file-text fa-lg fa-fw me-1" />
                {title}
              </div>
            </Link>
          </GradientBorder>
        ))}
      </div>
    </div>
  );
};
