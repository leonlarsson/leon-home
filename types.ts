import { StaticImageData } from "next/image";

export type Project = {
  slug: string;
  slugAliases?: string[];
  name: string;
  description: string | string[];
  shortDescription: string;
  tags?: string[];
  year?: string;
  endYear?: string;
  images?: StaticImageData[];
  link?: string;
  linkName?: string;
  hidePreview?: boolean;
  githubLink?: string;
  extraLinks?: {
    name: string;
    link: string;
    type: "link" | "github";
  }[];
  displayInCv?: boolean;
};

export type Entry = {
  id: number;
  date: string;
  body: string;
  name: string | null;
  email: string | null;
  edited_at: string | null;
  deleted_at: string | null;
};

export type Post = {
  id: number;
  date: string;
  title: string;
  body: string;
};

// CV
export type ProfileSection = {
  name: string;
  avatar?: StaticImageData;
  tagline: string;
  taglineSwedish: string;
  title: string;
  url?: {
    href: string;
    text: string;
  };
  location?: {
    href: string;
    text: string;
    timezone?: `${string}/${string}`;
  };
  iconLinks?: {
    icon: CVIcon;
    href: string;
    text: string;
  }[];
  /** Whether to render a print button last in the iconLinks array. */
  showPrintButton?: boolean;
};

export type CVIcon = "envelope" | "github" | "linkedin";

export type AboutSection = {
  sectionTitle: string;
  sectionTitleSwedish: string;
  description: string[];
  descriptionSwedish: string[];
} | null;

export type EmploymentSection = {
  sectionTitle: string;
  sectionTitleSwedish: string;
  history: {
    title: string;
    company: string;
    companyUrl: string;
    description: string[];
    descriptionSwedish: string[];
    start: string;
    end?: string;
  }[];
};

export type EducationSection = {
  sectionTitle: string;
  sectionTitleSwedish: string;
  history: {
    school: string;
    schoolUrl: string;
    description: string[];
    start: string;
    end?: string;
  }[];
};

export type ProjectsSection = {
  sectionTitle: string;
  sectionTitleSwedish: string;
  sectionDescription?: string;
  sectionDescriptionSwedish?: string;
  browseAllText: string;
  browseAllTextSwedish: string;
  projects: Project[];
};
