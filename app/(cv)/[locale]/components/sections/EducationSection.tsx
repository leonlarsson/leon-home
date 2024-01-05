import { Fragment } from "react";
import Link from "next/link";
import SectionTitle from "../SectionTitle";
import SectionDescription from "../SectionDescription";
import { CVEducationSection, CVLocale } from "@/types";

export const EducationSection = ({ data, locale }: { data: CVEducationSection; locale: CVLocale }) => {
  if (!data.history.length) return null;

  return (
    <div className="flex flex-col gap-2">
      <SectionTitle title={data.sectionTitle[locale]} url={data.sectionTitleUrl} />
      <SectionDescription description={data.sectionDescription?.[locale]} />

      <div className="flex flex-col gap-3">
        {data.history.map(({ school, schoolUrl, description, start, end }, i) => (
          <Fragment key={i}>
            <div className="flex flex-col gap-[2px]">
              <div className="flex flex-col">
                {/* School and dates */}
                <div className="flex items-baseline justify-between">
                  <Link href={schoolUrl} target="_blank" className="link">
                    {school}
                  </Link>

                  <span className="text-xs text-neutral-600">
                    {start} - {end ?? "Present"}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                {description[locale].map(text => (
                  <SectionDescription key={text} description={[text]} />
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
