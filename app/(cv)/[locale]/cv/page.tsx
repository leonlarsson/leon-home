import { redirect } from "next/navigation";
import Link from "next/link";
import Icons from "@/app/(main)/components/icons";
import { AboutSection, EducationSection, EmploymentSection, ProfileSection, ProjectsSection } from "../components/sections";
import { pageMetadata, sections } from "@/data/cv";

type Props = {
  params: {
    locale: string;
  };
};

export const generateMetadata = ({ params: { locale } }: Props) => {
  if (locale !== "en" && locale !== "sv") return;

  return {
    title: pageMetadata.title[locale],
    description: pageMetadata.description[locale],
  };
};

export default ({ params: { locale } }: Props) => {
  if (locale !== "en" && locale !== "sv") return redirect("/en/cv");

  return (
    <div className="flex flex-col">
      {/* Language selection */}
      <div className="flex gap-2">
        <Link href={"/en/cv"} title={"Read the English version"} draggable={false}>
          {<Icons.unitedKingdom className="inline size-9" data-selected={locale === "en"} />}
        </Link>
        <Link href={"/sv/cv"} title={"Read the Swedish version"} draggable={false}>
          {<Icons.sweden className="inline size-9" data-selected={locale === "sv"} />}
        </Link>
      </div>

      {/* Render sections based on the sections array in @/data/cv */}
      <div className="flex flex-col gap-6">
        {sections.map(section => {
          switch (section.sectionId) {
            case "profile":
              return <ProfileSection key={section.sectionId} data={section} locale={locale} />;
            case "about":
              return <AboutSection key={section.sectionId} data={section} locale={locale} />;
            case "employment":
              return <EmploymentSection key={section.sectionId} data={section} locale={locale} />;
            case "education":
              return <EducationSection key={section.sectionId} data={section} locale={locale} />;
            case "projects":
              return <ProjectsSection key={section.sectionId} data={section} locale={locale} />;
          }
        })}
      </div>
    </div>
  );
};
