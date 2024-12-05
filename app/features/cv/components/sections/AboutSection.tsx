import type { CVAboutSection, CVLocale } from "@/types";
import { CVSectionDescription } from "../SectionDescription";
import { CVSectionTitle } from "../SectionTitle";

export const AboutSection = ({
  data,
  locale,
}: {
  data: CVAboutSection;
  locale: CVLocale;
}) => {
  if (!data) return null;

  return (
    <div className="flex flex-col gap-2">
      <CVSectionTitle title={data.sectionTitle[locale]} url={data.sectionTitleUrl} />
      <CVSectionDescription description={data.sectionDescription?.[locale]} />
    </div>
  );
};
