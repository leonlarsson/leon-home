import { Fragment } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Icons from "@/app/(main)/components/icons";
import { pageMetadata, sections } from "@/data/cv";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export const generateMetadata = async (props: Props) => {
  const params = await props.params;
  if (params.locale !== "en" && params.locale !== "sv") {
    return;
  }

  return {
    title: pageMetadata.title[params.locale],
    description: pageMetadata.description[params.locale],
  };
};

export default async (props: Props) => {
  const params = await props.params;

  if (params.locale !== "en" && params.locale !== "sv") {
    return redirect("/en/cv");
  }

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
              data-selected={params.locale === "en"}
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
              data-selected={params.locale === "sv"}
            />
          }
        </Link>
      </div>

      {/* Render sections based on the sections array in @/data/cv */}
      <div className="flex flex-col gap-6">
        {sections(params.locale).map((section, i) => (
          <Fragment key={i}>{section}</Fragment>
        ))}
      </div>
    </div>
  );
};
