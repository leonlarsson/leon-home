import { Link, createFileRoute, redirect } from "@tanstack/react-router";
import * as React from "react";
import { pageMetadata, sections } from "../../data/cv";
import Icons from "../../features/icons/icons";
import type { CVLocale } from "../../types";
import { generateMetadata } from "../../utils/seo";

export const Route = createFileRoute("/_cv/$locale/cv")({
  component: RouteComponent,
  beforeLoad: ({ params }) => {
    const isValidLocale = params.locale === "en" || params.locale === "sv";
    if (!isValidLocale) {
      throw redirect({ to: "/$locale/cv", params: { locale: "en" } });
    }
  },
  head: ({ params }) => {
    const isValidLocale = params.locale === "en" || params.locale === "sv";
    return {
      meta: generateMetadata({
        title: pageMetadata.title[isValidLocale ? (params.locale as CVLocale) : "en"],
        description: pageMetadata.description[isValidLocale ? (params.locale as CVLocale) : "en"],
        url: isValidLocale ? `https://leonlarsson.com/${params.locale}/cv` : "https://leonlarsson.com/en/cv",
        useTitleAsPrefix: true,
      }),
    };
  },
});

function RouteComponent() {
  const { locale } = Route.useParams();

  return (
    <div className="flex flex-col">
      {/* Language selection */}
      <div className="flex gap-2">
        <Link to="/$locale/cv" params={{ locale: "en" }} title={"Read the English version"} draggable={false}>
          {<Icons.unitedKingdom className="inline size-9" data-selected={locale === "en"} />}
        </Link>
        <Link to="/$locale/cv" params={{ locale: "sv" }} title={"Read the Swedish version"} draggable={false}>
          {<Icons.sweden className="inline size-9" data-selected={locale === "sv"} />}
        </Link>
      </div>

      {/* Render sections based on the sections array in @/data/cv */}
      <div className="flex flex-col gap-6">
        {sections(locale as CVLocale).map((section, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: it's fine
          <React.Fragment key={i}>{section}</React.Fragment>
        ))}
      </div>
    </div>
  );
}
