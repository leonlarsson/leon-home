import { Metadata } from "next";
import Link from "next/link";
import GradientBorder from "../components/GradientBorder";

const pageTitle = "CV / Resume | Leon San José Larsson";
const pageDescription = "Leon's CV / Resume, available in both English and Swedish.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    type: "website",
    url: "https://leonlarsson.com/resume",
    title: pageTitle,
    description: pageDescription
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    creator: "@mozzyfx"
  }
};

export default () => {
  return (
    <div className="mx-auto">
      <div className="text-3xl font-extrabold">CV / Resume</div>
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
          <GradientBorder key={url} padding="p-[2px]" hoverable>
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
