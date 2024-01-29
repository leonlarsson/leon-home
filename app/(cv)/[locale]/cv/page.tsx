import { Fragment } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Icons from "@/app/(main)/components/icons";
import { pageMetadata, sections } from "@/data/cv";

type Props = {
  params: {
    locale: string;
  };
};

export const generateMetadata = ({ params: { locale } }: Props) => {
  if (locale !== "en" && locale !== "sv") return;

  return {
    title: pageMetadata.title[locale],
    description: pageMetadata.description[locale],
  };
};

export default ({ params: { locale } }: Props) => {
  if (locale !== "en" && locale !== "sv") return redirect("/en/cv");

  return (
    <div className="flex flex-col">
      {/* Language selection */}
      <div className="flex gap-2">
        <Link
          href={"/en/cv"}
          title={"Read the English version"}
          draggable={false}
        >
          {
            <Icons.unitedKingdom
              className="inline size-9"
              data-selected={locale === "en"}
            />
          }
        </Link>
        <Link
          href={"/sv/cv"}
          title={"Read the Swedish version"}
          draggable={false}
        >
          {
            <Icons.sweden
              className="inline size-9"
              data-selected={locale === "sv"}
            />
          }
        </Link>
      </div>

      {/* Render sections based on the sections array in @/data/cv */}
      <div className="flex flex-col gap-6">
        {sections(locale).map((section, i) => (
          <Fragment key={i}>{section}</Fragment>
        ))}
      </div>
    </div>
  );
};
