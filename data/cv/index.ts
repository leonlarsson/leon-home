import avatar from "./images/avatar.png";
import projects from "../projects";
import { AboutSection, EducationSection, EmploymentSection, ProfileSection, ProjectsSection } from "@/types";

export const profileSection: ProfileSection = {
  name: "Leon San José Larsson",
  avatar: avatar,
  tagline: {
    en: "Aspiring Full Stack Engineer working in video games marketing.",
    sv: "Aspirerande Full Stack-utvecklare som arbetar med marknadsföring av datorspel.",
  },
  title: "Community & Support Specialist",
  url: {
    href: "https://leonlarsson.com",
    text: "leonlarsson.com",
  },
  location: {
    href: "https://www.google.com/maps/place/Malm%C3%B6",
    text: {
      en: "Malmö, Sweden, CET",
      sv: "Malmö, Sverige, CET",
    },
    timezone: "Europe/Stockholm",
  },
  iconLinks: [
    {
      icon: "envelope",
      href: "mailto:leonlarsson8@gmail.com",
      text: "Email",
    },
    {
      icon: "github",
      href: "https://github.com/leonlarsson",
      text: "GitHub",
    },
    {
      icon: "linkedin",
      href: "https://www.linkedin.com/in/leonlarsson/",
      text: "LinkedIn",
    },
  ],
  showPrintButton: true,
} satisfies ProfileSection;

export const aboutSection: AboutSection = {
  sectionTitle: {
    en: "About me",
    sv: "Om mig",
  },
  description: {
    en: ["I'm an aspiring Full Stack Engineer in self-training. My primary areas of interest are web development and Discord bots. I also extensively work on creating various APIs and services on platforms such as Cloudflare Workers."],
    sv: ["Jag är en aspirerande Full Stack-utvecklare. Mina primära intresseområden är webbutveckling och Discord-bottar. Jag arbetar också omfattande med att skapa olika API:er och tjänster på plattformar som Cloudflare Workers."],
  },
} satisfies AboutSection;

export const employmentSection: EmploymentSection = {
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
          "Managing player support and content on the Bloodhunt website at Sharkmob involves close collaboration with marketing, player relations, and developers.",
          "Additionally, overseeing community management, Discord, and Twitch Drops. For our newly announced game Exoborne, contributing to website development and providing technical specifications for the RE_HACK ARG website.",
        ],
        sv: [
          "Hantering av spelarsupport och innehåll på Bloodhunt-webbplatsen på Sharkmob innebär nära samarbete med marknadsföring, spelrelationer och utvecklare.",
          "Dessutom övervakning av communityhantering, Discord och Twitch Drops. För vårt nyligen tillkännagivna spel Exoborne bidrar till webbutveckling och tillhandahåller tekniska specifikationer för RE_HACK ARG-webbplatsen.",
        ],
      },
      start: "2022",
    },
    {
      title: "Localization/QA Tester - Swedish",
      company: "Electronic Arts",
      companyUrl: "https://ea.com",
      description: {
        en: ["Reviewed and ensured the quality of EA games, including marketing materials. Also managed candidate tests and contributed to crafting application test materials during peak seasons.", "Worked on 27 DLCs for The Sims 4, as well as FIFA 21 and LOTR: Heroes of Middle-earth."],
        sv: ["Granskade och säkerställde kvaliteten på EA-spel, inklusive marknadsföringsmaterial. Hanterade också kandidattester och bidrog till att utforma testmaterial för ansökningar under högsäsong.", "Arbetade med 27 DLC:er för The Sims 4, samt FIFA 21 och LOTR: Heroes of Middle-earth."],
      },
      start: "2019",
      end: "2022",
    },
  ],
} satisfies EmploymentSection;

export const educationSection: EducationSection = {
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
      start: "2015",
      end: "2018",
    },
  ],
} satisfies EducationSection;

export const projectsSection: ProjectsSection = {
  sectionTitle: {
    en: "Projects",
    sv: "Projekt",
  },
  sectionDescription: {
    en: "I have a strong interest in software engineering and frontend design. I love working with technologies such as React, Next.js, Node.js using JavaScript (and TypeScript). I also have some experience with SQLite and MySQL. Below you can read about a few of my projects.",
    sv: "Jag har ett starkt intresse för mjukvaruutveckling och frontend-design. Jag älskar att arbeta med tekniker som React, Next.js, Node.js med JavaScript (och TypeScript). Jag har också viss erfarenhet av SQLite och MySQL. Nedan kan du läsa om några av mina projekt.",
  },
  browseAllText: {
    en: "Browse all projects",
    sv: "Bläddra bland alla projekt",
  },
  projects: [...projects].reverse().filter(x => x.displayInCv),
} satisfies ProjectsSection;
