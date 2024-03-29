import avatar from "./images/avatar.png";
import Icons from "@/app/(main)/components/icons";
import projects from "../projects";
import {
  CVAboutSection,
  CVEducationSection,
  CVEmploymentSection,
  CVLocale,
  CVMetadata,
  CVProfileSection,
  CVProjectsSection,
} from "@/types";
import {
  AboutSection,
  EducationSection,
  EmploymentSection,
  ProfileSection,
  ProjectsSection,
} from "@/app/(cv)/[locale]/components/sections";

export const pageMetadata: CVMetadata = {
  title: {
    en: "English CV",
    sv: "Svenskt CV",
  },
  description: {
    en: "Leon San José Larsson's CV/Resume in English.",
    sv: "Leon San José Larssons CV/Resume på svenska.",
  },
} satisfies CVMetadata;

export const profileSection: CVProfileSection = {
  sectionId: "profile",
  name: "Leon San José Larsson",
  avatar: avatar,
  tagline: {
    en: "Aspiring Full Stack Engineer working in video games marketing.",
    sv: "Aspirerande Full Stack-utvecklare som arbetar med marknadsföring.",
  },
  title: "Community & Support Specialist",
  url: {
    href: "https://leonlarsson.com",
    text: "leonlarsson.com",
  },
  location: {
    href: "https://www.google.com/maps/place/Malm%C3%B6",
    text: {
      en: "Malmö, Sweden",
      sv: "Malmö, Sverige",
    },
    timezone: "Europe/Stockholm",
  },
  iconLinks: [
    {
      icon: (
        <Icons.envelopeThin className="size-4 text-neutral-600 transition-colors group-hover:text-black" />
      ),
      href: "mailto:leonlarsson8@gmail.com",
      text: "Email",
    },
    {
      icon: (
        <Icons.github className="size-4 text-neutral-600 transition-colors group-hover:text-black" />
      ),
      href: "https://github.com/leonlarsson",
      text: "GitHub",
    },
    {
      icon: (
        <Icons.linkedin className="size-4 text-neutral-600 transition-colors group-hover:text-black" />
      ),
      href: "https://www.linkedin.com/in/leonlarsson/",
      text: "LinkedIn",
    },
  ],
  showPrintButton: true,
} satisfies CVProfileSection;

export const aboutSection: CVAboutSection = {
  sectionId: "about",
  sectionTitle: {
    en: "About me",
    sv: "Om mig",
  },
  sectionDescription: {
    en: [
      "I'm an aspiring Full Stack Engineer in self-training. My primary areas of interest are web development and Discord bots. I also extensively work on creating various APIs and services on platforms such as Cloudflare Workers. My old CV can be found [here](https://leonlarsson.com/cv-old).",
    ],
    sv: [
      "Jag är en aspirerande Full Stack-utvecklare. Mina primära intresseområden är webbutveckling och Discord-bottar. Jag arbetar också omfattande med att skapa olika API:er och tjänster på plattformar som Cloudflare Workers. Mitt gamla CV finns [här](https://leonlarsson.com/cv-old-swe).",
    ],
  },
} satisfies CVAboutSection;

export const employmentSection: CVEmploymentSection = {
  sectionId: "employment",
  sectionTitle: {
    en: "Work Experience",
    sv: "Arbetslivserfarenhet",
  },
  history: [
    {
      title: "Community & Support Specialist",
      company: "Sharkmob",
      companyUrl: "https://sharkmob.com",
      description: {
        en: [
          "Managing player support and content on the [Bloodhunt website](https://bloodhunt.com), which involves close collaboration with marketing, player relations, and developers.",
          "Additionally, community management, Discord, and Twitch Drops. For our newly announced game [Exoborne](https://exoborne.com), contributing to website development and providing technical specifications for the [RE_HACK ARG website](https://exoborne.com/rehack).",
        ],
        sv: [
          "Hanterar spelarsupport och innehåll på [Bloodhunt-hemsidan](https://bloodhunt.com), vilket innebär nära samarbete med marketing, player relations och utvecklare.",
          "Utför även hantering av community, Discord och Twitch Drops med mera. För vårt nyligen uppvisade spel [Exoborne](https://exoborne.com) bidrar jag även till webbutveckling och hjälper med tekniska specifikationer för [RE_HACK ARG-hemsidan](https://exoborne.com/rehack).",
        ],
      },
      start: "2022-08-10",
    },
    {
      title: "Localization/QA Tester - Swedish",
      company: "Electronic Arts",
      companyUrl: "https://ea.com",
      description: {
        en: [
          "Reviewed and ensured the quality of EA games, including marketing materials. Also managed candidate tests and contributed to crafting application test materials during peak seasons.",
          "Worked on 27 DLCs for The Sims 4, as well as FIFA 21, LOTR: Heroes of Middle-earth, and PvZ 3.",
        ],
        sv: [
          "Granskade och säkerställde kvaliteten på EA-spel, inklusive marknadsföringsmaterial. Hanterade också kandidattester och bidrog till att utforma testmaterial för ansökningar under högsäsong.",
          "Arbetade med 27 DLC:er för The Sims 4, samt FIFA 21, LOTR: Heroes of Middle-earth och PvZ 3.",
        ],
      },
      start: "2019-11-11",
      end: "2022-07-29",
    },
  ],
} satisfies CVEmploymentSection;

export const educationSection: CVEducationSection = {
  sectionId: "education",
  sectionTitle: {
    en: "Education",
    sv: "Utbildning",
  },
  history: [
    {
      school: "Sundsgymnasiet",
      schoolUrl: "https://vellinge.se/sundsgymnasiet/",
      description: {
        en: [
          "Civics, media, communication, marketing, and digital content creation.",
        ],
        sv: [
          "Samhällskunskap, media, kommunikation, marknadsföring och digitalt skapande.",
        ],
      },
      start: "2015-08-17",
      end: "2018-06-07",
    },
  ],
} satisfies CVEducationSection;

export const projectsSection: CVProjectsSection = {
  sectionId: "projects",
  sectionTitle: {
    en: "Projects",
    sv: "Projekt",
  },
  sectionTitleUrl: "https://leonlarsson.com/projects",
  sectionDescription: {
    en: [
      "I have a strong interest in software engineering and frontend design. I love working with technologies such as React, Next.js, Node.js using JavaScript and TypeScript. I also have some experience with SQLite and MySQL. Below you can read about a few of my projects. Click on a title to read more.",
    ],
    sv: [
      "Jag har ett starkt intresse för mjukvaruutveckling och frontend-design. Jag älskar att arbeta med tekniker som React, Next.js, Node.js med JavaScript och TypeScript. Jag har också viss erfarenhet av SQLite och MySQL. Nedan kan du läsa om några av mina projekt. Klicka på en titel för att läsa mer.",
    ],
  },
  browseAllText: {
    en: "Browse all projects",
    sv: "Bläddra bland alla projekt",
  },
  projects: [...projects].reverse().filter(x => x.displayInCv),
} satisfies CVProjectsSection;

// This defined which sections and in which order they should be displayed in the CV
export const sections = (locale: CVLocale) => [
  <ProfileSection data={profileSection} locale={locale} />,
  <AboutSection data={aboutSection} locale={locale} />,
  <EmploymentSection data={employmentSection} locale={locale} />,
  <EducationSection data={educationSection} locale={locale} />,
  <ProjectsSection data={projectsSection} locale={locale} />,
];
