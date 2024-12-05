import type { CVEmploymentSection, CVLocale } from "@/types";
import { Fragment } from "react";
import { CVDateRange } from "../DateRange";
import { CVSectionDescription } from "../SectionDescription";
import { CVSectionTitle } from "../SectionTitle";

export const EmploymentSection = ({
  data,
  locale,
}: {
  data: CVEmploymentSection;
  locale: CVLocale;
}) => {
  if (!data.history.length) return null;

  return (
    <div className="flex flex-col gap-2">
      <CVSectionTitle title={data.sectionTitle[locale]} url={data.sectionTitleUrl} />
      <CVSectionDescription description={data.sectionDescription?.[locale]} />

      <div className="flex flex-col gap-3">
        {data.history.map(({ title, company, companyUrl, description, start, end }, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: it's fine
          <Fragment key={i}>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                {/* Company and dates */}
                <div className="flex items-baseline justify-between">
                  <a href={companyUrl} target="_blank" rel="noreferrer" className="link">
                    {company}
                  </a>

                  <CVDateRange locale={locale} start={start} end={end} />
                </div>

                {/* Title */}
                <span className="font-mono text-sm">{title}</span>
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
