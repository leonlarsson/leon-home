import { Fragment } from "react";
import type { CVEducationSection, CVLocale } from "../../../../types";
import { CVDateRange } from "../DateRange";
import { CVSectionDescription } from "../SectionDescription";
import { CVSectionTitle } from "../SectionTitle";

export const EducationSection = ({
  data,
  locale,
}: {
  data: CVEducationSection;
  locale: CVLocale;
}) => {
  if (!data.history.length) return null;

  return (
    <div className="flex flex-col gap-2">
      <CVSectionTitle title={data.sectionTitle[locale]} url={data.sectionTitleUrl} />
      <CVSectionDescription description={data.sectionDescription?.[locale]} />

      <div className="flex flex-col gap-3">
        {data.history.map(({ school, schoolUrl, description, start, end }, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: it's fine
          <Fragment key={i}>
            <div className="flex flex-col gap-[2px]">
              <div className="flex flex-col">
                {/* School and dates */}
                <div className="flex items-baseline justify-between">
                  <a href={schoolUrl} target="_blank" rel="noreferrer" className="link">
                    {school}
                  </a>

                  <CVDateRange locale={locale} start={start} end={end} />
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                {description[locale].map((text) => (
                  <CVSectionDescription key={text} description={[text]} />
                ))}
              </div>
            </div>

            {i !== data.history.length - 1 && <hr />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
