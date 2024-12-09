import type { entries } from "./db/schema";

export type ProjectTag = {
  name: string;
  color?: string;
};

export type Project = {
  slug: string;
  slugAliases: string[];
  name: string;
  description: string | string[];
  shortDescription: string;
  tags: ProjectTag[];
  year: string;
  endYear?: string;
  images?: string[];
  link?: string;
  linkName?: string;
  hidePreview?: boolean;
  githubLink?: string;
  extraLinks?: {
    name: string;
    link: string;
    type: "link" | "github";
  }[];
  featureInHome?: boolean;
  displayInCv?: boolean;
  connectedProjectSlugs?: string[];
};

export type GuestbookEntry = typeof entries.$inferSelect;

// CV

type DateString = `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

export type CVMetadata = {
  title: {
    en: string;
    sv: string;
  };
  description: {
    en: string;
    sv: string;
  };
};

export type CVLocale = "en" | "sv";

export type CVProfileSection = {
  name: string;
  avatar?: string;
  tagline: {
    en: string;
    sv: string;
  };
  title: string;
  url?: {
    href: string;
    text: string;
  };
  location?: {
    href: string;
    text: {
      en: string;
      sv: string;
    };
    timezone?: `${string}/${string}`;
  };
  iconLinks?: {
    icon: JSX.Element;
    href: string;
    text: string;
  }[];
  /** Whether to render a print button last in the iconLinks array. */
  showPrintButton?: boolean;
};

export type CVIcon = "envelope" | "github" | "linkedin";

export type CVAboutSection = {
  sectionTitle: {
    en: string;
    sv: string;
  };
  sectionTitleUrl?: string;
  sectionDescription: {
    en: string[];
    sv: string[];
  };
};

export type CVEmploymentSection = {
  sectionTitle: {
    en: string;
    sv: string;
  };
  sectionTitleUrl?: string;
  sectionDescription?: {
    en: string[];
    sv: string[];
  };
  history: {
    title: string;
    company: string;
    companyUrl: string;
    description: {
      en: string[];
      sv: string[];
    };
    start: DateString;
    end?: DateString;
  }[];
};

export type CVEducationSection = {
  sectionTitle: {
    en: string;
    sv: string;
  };
  sectionTitleUrl?: string;
  sectionDescription?: {
    en: string[];
    sv: string[];
  };
  history: {
    school: string;
    schoolUrl: string;
    description: {
      en: string[];
      sv: string[];
    };
    start: DateString;
    end?: DateString;
  }[];
};

export type CVProjectsSection = {
  sectionTitle: {
    en: string;
    sv: string;
  };
  sectionTitleUrl?: string;
  sectionDescription?: {
    en: string[];
    sv: string[];
  };
  browseAllText: {
    en: string;
    sv: string;
  };
  projects: Project[];
};
