import { Fragment } from "react";
import Link from "next/link";
import SectionTitle from "../SectionTitle";
import SectionDescription from "../SectionDescription";
import { CVEmploymentSection, CVLocale } from "@/types";

export const EmploymentSection = ({ data, locale }: { data: CVEmploymentSection; locale: CVLocale }) => {
  if (!data.history.length) return null;

  return (
    <div className="flex flex-col gap-2">
      <SectionTitle title={data.sectionTitle[locale]} url={data.sectionTitleUrl} />
      <SectionDescription description={data.sectionDescription?.[locale]} />

      <div className="flex flex-col gap-3">
        {data.history.map(({ title, company, companyUrl, description, start, end }, i) => (
          <Fragment key={i}>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                {/* Company and dates */}
                <div className="flex items-baseline justify-between">
                  <Link href={companyUrl} target="_blank" className="font-semibold hover:underline">
                    {company}
                  </Link>

                  <span className="text-xs text-neutral-600">
                    {start} - {end ?? "Present"}
                  </span>
                </div>

                {/* Title */}
                <span className="font-geist-mono text-sm">{title}</span>
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
