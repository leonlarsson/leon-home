import { Link } from "@tanstack/react-router";
import type { CVLocale, CVProjectsSection } from "../../../../types";
import { tagSorterFunction } from "../../../../utils/tagSorterFunction";
import Icons from "../../../icons/icons";
import { TagColorBadge } from "../../../projects/components/ProjectTag";
import { CVSectionDescription } from "../SectionDescription";
import { CVSectionTitle } from "../SectionTitle";

export const ProjectsSection = ({
  data,
  locale,
}: {
  data: CVProjectsSection;
  locale: CVLocale;
}) => {
  if (!data.projects.length) return null;

  return (
    <div className="flex flex-col gap-2">
      <CVSectionTitle title={data.sectionTitle[locale]} url={data.sectionTitleUrl} />
      <CVSectionDescription description={data.sectionDescription?.[locale]} />

      <div className="flex flex-col gap-2">
        {data.projects.map(({ name, shortDescription, slug, tags, year, endYear }) => (
          <div
            key={slug}
            className="flex flex-col gap-[2px] rounded-lg border border-neutral-200 p-2 transition-colors hover:border-neutral-400"
          >
            <div className="flex items-baseline justify-between">
              <Link
                to="/projects/$projectSlug"
                aria-label={`Read more about ${name}`}
                params={{ projectSlug: slug }}
                target="_blank"
                className="link font-semibold"
              >
                {name}
              </Link>

              <span className="text-xs text-neutral-600">
                {year} {endYear && <> - {endYear}</>}
              </span>
            </div>

            <p className="font-mono text-xs text-neutral-600">{shortDescription}</p>

            <div className="flex flex-wrap gap-1">
              {tags.sort(tagSorterFunction).map((tag) => (
                <Link
                  key={tag.name}
                  to="/projects"
                  title={`See other projects tagged with ${tag.name}.`}
                  search={(prev) => ({ ...prev, search: /\d{4}/.test(tag.name) ? tag.name : `tag:${tag.name}` })}
                  target="_blank"
                  className="flex items-center gap-1 rounded bg-neutral-200 p-1 font-mono text-xs text-neutral-800 outline-1 hover:outline"
                >
                  {tag.color && <TagColorBadge color={tag.color} size={10} useBlackBorder />}
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <Link to="/projects" target="_blank" className="group font-semibold">
          <Icons.arrowRight className="inline" />{" "}
          <span className="group-hover:underline">{data.browseAllText[locale]}</span>
        </Link>
      </div>
    </div>
  );
};
