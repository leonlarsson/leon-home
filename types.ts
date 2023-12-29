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

export type CVProfileSection = {
  name: string;
  avatar?: StaticImageData;
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
    icon: CVIcon;
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
  description: {
    en: string[];
    sv: string[];
  };
} | null;

export type CVEmploymentSection = {
  sectionTitle: {
    en: string;
    sv: string;
  };
  history: {
    title: string;
    company: string;
    companyUrl: string;
    description: {
      en: string[];
      sv: string[];
    };
    start: string;
    end?: string;
  }[];
};

export type CVEducationSection = {
  sectionTitle: {
    en: string;
    sv: string;
  };
  history: {
    school: string;
    schoolUrl: string;
    description: {
      en: string[];
      sv: string[];
    };
    start: string;
    end?: string;
  }[];
};

export type CVProjectsSection = {
  sectionTitle: {
    en: string;
    sv: string;
  };
  sectionDescription: {
    en: string;
    sv: string;
  };
  browseAllText: {
    en: string;
    sv: string;
  };
  projects: Project[];
};
