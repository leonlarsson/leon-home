import { sections } from "@/data/cv";
import Icons from "@/features/icons/icons";
import { Link, createFileRoute, redirect } from "@tanstack/react-router";
import * as React from "react";

export const Route = createFileRoute("/_cv/$locale/cv")({
  component: RouteComponent,
});

function RouteComponent() {
  const { locale } = Route.useParams();
  if (locale !== "en" && locale !== "sv") return redirect({ to: "/$locale/cv", params: { locale: "en" } });

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
        {sections(locale).map((section, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: it's fine
          <React.Fragment key={i}>{section}</React.Fragment>
        ))}
      </div>
    </div>
  );
}
