import {
  AboutSection,
  EducationSection,
  EmploymentSection,
  ProfileSection,
  ProjectsSection,
} from "../../features/cv/components/sections";
import Icons from "../../features/icons/icons";
import type {
  CVAboutSection,
  CVEducationSection,
  CVEmploymentSection,
  CVLocale,
  CVMetadata,
  CVProfileSection,
  CVProjectsSection,
} from "../../types";
import projects from "../projects";

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
  name: "Leon San José Larsson",
  avatar: "/images/avatar.png",
  tagline: {
    en: "Passionate Software Developer with a background in video games.",
    sv: "Passionerad mjukvaruutvecklare med bakgrund inom datorspel.",
  },
  title: "Software Developer",
  url: {
    href: "https://leonlarsson.com",
    text: "leonlarsson.com",
  },
  location: {
    href: "https://www.google.com/maps/place/Stockholm",
    text: {
      en: "Stockholm, Sweden",
      sv: "Stockholm, Sverige",
    },
    timezone: "Europe/Stockholm",
  },
  iconLinks: [
    {
      icon: <Icons.envelopeThin className="size-4 text-neutral-600 transition-colors group-hover:text-black" />,
      href: "mailto:leonlarsson8@gmail.com",
      text: "Email",
    },
    {
      icon: <Icons.github className="size-4 text-neutral-600 transition-colors group-hover:text-black" />,
      href: "https://github.com/leonlarsson",
      text: "GitHub",
    },
    {
      icon: <Icons.linkedin className="size-4 text-neutral-600 transition-colors group-hover:text-black" />,
      href: "https://www.linkedin.com/in/leonlarsson/",
      text: "LinkedIn",
    },
  ],
  showPrintButton: true,
} satisfies CVProfileSection;

export const aboutSection: CVAboutSection = {
  sectionTitle: {
    en: "About me",
    sv: "Om mig",
  },
  sectionDescription: {
    en: [
      "I'm a Software Developer. My primary areas of interest are web development and Discord bots. I also enjoy creating APIs and services on platforms such as Cloudflare Workers.",
    ],
    sv: [
      "Jag är en mjukvaruutvecklare. Mina primära intresseområden är webbutveckling och Discord-bottar. Jag tycker också om att skapa API:er och tjänster på plattformar som Cloudflare Workers.",
    ],
  },
} satisfies CVAboutSection;

export const employmentSection: CVEmploymentSection = {
  sectionTitle: {
    en: "Work Experience",
    sv: "Arbetslivserfarenhet",
  },
  history: [
    {
      title: "Fullstack Engineer",
      company: "Embark Studios",
      companyUrl: "https://www.embark-studios.com/",
      description: {
        en: [
          "I work as a Fullstack Engineer at Embark Studios, where I develop internal tools and services. My work primarily involves working with tech like TypeScript, React, Next.js, Golang, Python, and Postgres.",
          "I also work on player-facing websites, such as the [ARC Raiders website](https://arcraiders.com/).",
        ],
        sv: [
          "Jag arbetar som Fullstack Engineer på Embark Studios, där jag utvecklar interna verktyg och tjänster. Mitt arbete involverar främst TypeScript, React, Next.js, Golang, Python och Postgres.",
          "Jag arbetar även med utåtriktade projekt, som [ARC Raiders-hemsidan](https://arcraiders.com/).",
        ],
      },
      start: "2025-04-14",
    },
    {
      title: "Software Developer",
      company: "Oksidia",
      companyUrl: "https://oksidia.fi/",
      description: {
        en: [
          "I worked as a Software Developer at Oksidia, where I developed and maintained [Eepos](https://www.eepos.fi/en/), a school management platform. The languages and technologies I used include JavaScript, TypeScript, PHP, Angular, Laravel, and SQL.",
        ],
        sv: [
          "Jag arbetade som mjukvaruutvecklare på Oksidia, där jag utvecklade och underhöll [Eepos](https://www.eepos.fi/en/), en plattform för skolor. De språk och tekniker jag använde inkluderar JavaScript, TypeScript, PHP, Angular, Laravel och SQL.",
        ],
      },
      start: "2024-05-27",
      end: "2025-04-03",
    },
    {
      title: "Community & Support Specialist",
      company: "Sharkmob",
      companyUrl: "https://sharkmob.com",
      description: {
        en: [
          "Managed player support for both [Bloodhunt](https://bloodhunt.com) and [Exoborne](https://exoborne.com) in close collaboration with Tencent, Level Infinite, and developers. Also managed all content on the Bloodhunt website, did community management, Discord, and Twitch Drops.",
          "Additionally, I contributed to website development and provided technical specifications for the [RE_HACK ARG website](https://exoborne.com/rehack).",
        ],
        sv: [
          "Hanterade spelarsupport för både [Bloodhunt](https://bloodhunt.com) och [Exoborne](https://exoborne.com) i nära samarbete med Tencent, Level Infinite och utvecklare. Hanterade även allt innehåll på Bloodhunts hemsida, gjorde community management, Discord och Twitch Drops.",
          "Bidrog även till webbutveckling och gav tekniska specifikationer för [RE_HACK ARG-hemsidan](https://exoborne.com/rehack).",
        ],
      },
      start: "2022-08-10",
      end: "2024-05-26",
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
  sectionTitle: {
    en: "Education",
    sv: "Utbildning",
  },
  history: [
    {
      school: "Sundsgymnasiet",
      schoolUrl: "https://vellinge.se/sundsgymnasiet/",
      description: {
        en: ["Civics, media, communication, marketing, and digital content creation."],
        sv: ["Samhällskunskap, media, kommunikation, marknadsföring och digitalt skapande."],
      },
      start: "2015-08-17",
      end: "2018-06-07",
    },
  ],
} satisfies CVEducationSection;

export const projectsSection: CVProjectsSection = {
  sectionTitle: {
    en: "Projects",
    sv: "Projekt",
  },
  sectionTitleUrl: "https://leonlarsson.com/projects",
  sectionDescription: {
    en: [
      "Software engineering is also a hobby. I love working with technologies such as React, Next.js, Node.js using JavaScript, TypeScript, and Go. I also have some experience with SQLite, MySQL, and PostgreSQL. Below you can read about a few of my projects. Click on a title to read more.",
    ],
    sv: [
      "Mjukvaruutveckling är även en hobby. Jag älskar att arbeta med tekniker som React, Next.js, Node.js med JavaScript, TypeScript och Go. Jag har också viss erfarenhet av SQLite, MySQL och PostgreSQL. Nedan kan du läsa om några av mina projekt. Klicka på en titel för att läsa mer.",
    ],
  },
  browseAllText: {
    en: "Browse all projects",
    sv: "Bläddra bland alla projekt",
  },
  projects: [...projects].reverse().filter((x) => x.displayInCv),
} satisfies CVProjectsSection;

// This defined which sections and in which order they should be displayed in the CV
export const sections = (locale: CVLocale) => [
  <ProfileSection key={locale} data={profileSection} locale={locale} />,
  <AboutSection key={locale} data={aboutSection} locale={locale} />,
  <EmploymentSection key={locale} data={employmentSection} locale={locale} />,
  <EducationSection key={locale} data={educationSection} locale={locale} />,
  <ProjectsSection key={locale} data={projectsSection} locale={locale} />,
];
