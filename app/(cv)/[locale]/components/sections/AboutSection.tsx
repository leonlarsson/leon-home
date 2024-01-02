import SectionTitle from "../SectionTitle";
import SectionDescription from "../SectionDescription";
import { CVAboutSection, CVLocale } from "@/types";

export const AboutSection = ({ data, locale }: { data: CVAboutSection; locale: CVLocale }) => {
  if (!data) return null;

  return (
    <div className="flex flex-col gap-2">
      <SectionTitle title={data.sectionTitle[locale]} url={data.sectionTitleUrl} />
      <SectionDescription description={data.sectionDescription?.[locale]} />
    </div>
  );
};
