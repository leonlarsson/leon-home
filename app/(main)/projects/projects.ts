import { StaticImageData } from "next/image";
import battlebotImage1 from "./images/battlebot1.png";
import battlebotImage2 from "./images/battlebot2.png";
import battlefieldStatsImage from "./images/battlefieldstats.png";
import timestamperImage from "./images/timestamper.png";
import bloodhuntBotImage from "./images/bloodhunt.png";

const tags = {
  HTML: "HTML",
  CSS: "CSS",
  JS: "JavaScript",
  TS: "TypeScript",
  REACT: "React",
  NEXT: "Next.js",
  TAILWIND: "Tailwind",
  NODE: "Node.js",
  DISCORDJS: "discord.js",
  VITE: "Vite",
  ANTD: "Ant Design",
  API: "API",
  CLOUDFLARE_WORKERS: "Cloudflare Workers",
  CLOUDFLARE_PAGES: "Cloudflare Pages"
};

export default [
  {
    slug: "bfv-menu-playground",
    name: "Battlefield V Menu Playground",
    description: "This was one of my first web projects. It allows you to play around with a copy of the Battlefield V menu.",
    shortDescription: "A Battlefield V menu playground that lets you drag items and change images.",
    year: "2019",
    tags: [tags.HTML, tags.CSS, tags.JS],
    link: "https://bfvmenu.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/bfvmenu"
  },
  {
    slug: "bf1-palette-recreation",
    name: "Battlefield 1 Palette Recreation",
    description: "This is another Battlefield-related project. It's an attempt at recreating an image using Flexbox.",
    shortDescription: "A Flexbox recreation of an image.",
    year: "2019",
    tags: [tags.HTML, tags.CSS],
    link: "https://bf1palette.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/bf1palette"
  },
  {
    slug: "joy-meme",
    name: "You Spin Me Right Round",
    description: "Just a fun COVID quarantine project.",
    shortDescription: "Just a fun COVID quarantine project.",
    year: "2020",
    tags: [tags.HTML, tags.CSS, tags.JS],
    link: "https://joy.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/joy-meme"
  },
  {
    slug: "log-sorter",
    name: "Log Sorter",
    description: "My first actual useful project. It aims to help (Discord) moderators sort through massive amounts of logs in order to combat bot accounts.",
    shortDescription: "Also known as Mozzy's Log Sorter. A log-filtering website for moderators.",
    year: "2021",
    tags: [tags.HTML, tags.CSS, tags.JS],
    link: "https://logsorter.net/",
    githubLink: "https://github.com/leonlarsson/logsorter"
  },
  {
    slug: "bf1-morse-solver",
    name: "Battlefield 1 Morse Solver",
    description: "Another Battlefield-related project. This has helped hundreds if not thousands of people to solve the 'The Beginning' Battlefield 1 easter egg.",
    shortDescription: "A tool that helps solve the 'The Beginning' Battlefield 1 easter egg.",
    year: "2021",
    tags: [tags.HTML, tags.CSS, tags.JS],
    link: "https://bf1morse.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/bf1morse",
    extraLinks: [
      {
        name: "API",
        link: "https://bf1morse-api.leonlarsson.com",
        type: "link"
      },
      {
        name: "API Source",
        link: "https://github.com/leonlarsson/bf1morse-api",
        type: "github"
      }
    ]
  },
  {
    slug: "battlebot",
    name: "Battlebot",
    description: "This is a bot we use on the Battlefield Discord. It provides moderation utilities for moderators as well as a few fun and helpful features for users.",
    shortDescription: "A bot that provides utility and fun in the Battlefield Discord.",
    year: "2021",
    tags: [tags.NODE, tags.DISCORDJS, tags.JS],
    images: [battlebotImage1, battlebotImage2]
  },
  {
    slug: "battlefield-stats",
    name: "Battlefield Stats Discord Bot",
    description: "My largest and most successful project by far. A Discord bot that provides on demand Battlefield statistics in Discord.\nUsed by thousands of users in thousands of Discord servers. Built in Node.js.\nI have also built a website and an API for this project.",
    shortDescription: "A bot that provides Battlefield stats right inside Discord.",
    year: "2021",
    tags: [tags.NODE, tags.DISCORDJS, tags.CLOUDFLARE_WORKERS, tags.API, tags.REACT, tags.NEXT, tags.JS, tags.TS],
    images: [battlefieldStatsImage],
    link: "https://battlefieldstats.com/",
    githubLink: "https://github.com/leonlarsson/bfstats-web",
    extraLinks: [
      {
        name: "API",
        link: "https://api.battlefieldstats.com/",
        type: "link"
      },
      {
        name: "API Source",
        link: "https://github.com/leonlarsson/bfstats-api",
        type: "github"
      }
    ]
  },
  {
    slug: "raccoon-http-api",
    name: "Raccoon HTTP API",
    description: "An API that provides HTTP response images, with a twist.\nPowered by Cloudflare Workers.",
    shortDescription: "An API that provides HTTP images with trash pandas.",
    year: "2022",
    tags: [tags.CLOUDFLARE_WORKERS, tags.API, tags.TS],
    link: "https://api.onlyraccoons.com/",
    githubLink: "https://github.com/leonlarsson/http-raccoons"
  },
  {
    slug: "zeppelin-case-stats",
    name: "Zeppelin Case Stats",
    description: "A utility website that aims to help Discord moderators gather stats from the moderation bot Zeppelin.",
    shortDescription: "A website used to gather stats from the moderation bot Zeppelin.",
    year: "2022",
    tags: [tags.HTML, tags.CSS, tags.JS],
    link: "https://zeppelin-stats.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/zeppelin-case-stats"
  },
  {
    slug: "timestamper-bot",
    name: "Timestamper Discord Bot",
    description: "An experimental Discord bot that provides utility commands to build and play with Discord timestamps.\nBuilt fully with Cloudflare Workers.",
    shortDescription: "An Discord bot that makes using Discord timestamps easier.",
    year: "2022",
    tags: [tags.CLOUDFLARE_WORKERS, tags.TS],
    images: [timestamperImage],
    link: "https://github.com/leonlarsson/timestamper-bot",
    hidePreview: true
  },
  {
    slug: "redirect-link-service",
    name: "Redirect / Link Service",
    description: "Small project built with Discord workers. Think of it like Linktree, but much worse.",
    shortDescription: "A much worse version of Linktree.",
    year: "2022",
    tags: [tags.CLOUDFLARE_WORKERS, tags.TS],
    link: "https://x.leon.ms/",
    githubLink: "https://github.com/leonlarsson/link-redirector-worker"
  },
  {
    slug: "bloodhunt-stats",
    name: "Bloodhunt Stats Discord Bot",
    description: "A Discord bot that provides on demand Bloodhunt statistics in Discord, built in Node.js.\nIn addition, I built an API that reports some basic usage.\nBuilt on the same foundations I created for the Battlefield Stats Discord bot.\nBuilt as part of my role at Sharkmob.",
    shortDescription: "A bot that provides Bloodhunt stats right inside Discord.",
    year: "2022",
    tags: [tags.NODE, tags.DISCORDJS, tags.CLOUDFLARE_WORKERS, tags.API, tags.JS],
    images: [bloodhuntBotImage],
    link: "https://discord.com/api/oauth2/authorize?client_id=979116430802972732&permissions=0&scope=bot%20applications.commands",
    hidePreview: true,
    extraLinks: [
      {
        name: "API",
        link: "https://bhstats-api.leonlarsson.com/",
        type: "link"
      },
      {
        name: "API Source",
        link: "https://github.com/leonlarsson/bhstats-api",
        type: "github"
      }
    ]
  },
  {
    slug: "embed-worker",
    name: "Embed Worker",
    description: "A tiny test project that lets you create custom Open Graph embeds.\nPowered by Cloudflare Workers.",
    shortDescription: "A tiny test project that lets you create custom Open Graph embeds.",
    year: "2022",
    tags: [tags.CLOUDFLARE_WORKERS, tags.TS],
    link: "https://embed-worker.ragnarok.workers.dev/",
    githubLink: "https://github.com/leonlarsson/embed-worker"
  },
  {
    slug: "react-ant-design-ui",
    name: "React + Ant Design website",
    description: "A dashboard website template built with Vite + React + Ant Design.\nThis is something I originally built for work, but without the secret parts.",
    shortDescription: "A UI/website/dashboard built with React and And Design.",
    year: "2023",
    tags: [tags.REACT, tags.VITE, tags.ANTD],
    link: "https://react-ant-design-ui.pages.dev/",
    githubLink: "https://github.com/leonlarsson/react-ant-design-ui"
  },
  {
    slug: "the-finals-leaderboard",
    name: "THE FINALS Leaderboard",
    description: "A fun project that creates a better leaderboard for the game THE FINALS from Embark Studios.\nBuilt with React + Vite.",
    shortDescription: "An external leaderboard for the game THE FINALS.",
    year: "2023",
    tags: [tags.REACT, tags.VITE],
    link: "https://the-finals-leaderboard.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/the-finals-leaderboard"
  },
  {
    slug: "bloodhunt-arg",
    name: "Bloodhunt ARG",
    description: "A project I built for my role at Sharkmob. It is an ARG that we held for players that hundreds of players interacted with.",
    shortDescription: "The official website for the Bloodhunt ARG, 'The Omnis Challenge'.",
    year: "2023",
    tags: [tags.CLOUDFLARE_WORKERS, tags.CLOUDFLARE_PAGES, tags.HTML, tags.CSS, tags.TS],
    link: "https://omnis.pages.dev/"
  },
  {
    slug: "leon-home",
    name: "This website",
    description: "This is the website you're currently on. It was created using Next.js 13 and was built with Tailwind.",
    shortDescription: "Leon's personal website.",
    year: "2023",
    tags: [tags.REACT, tags.NEXT, tags.TAILWIND, tags.TS],
    link: "/",
    githubLink: "https://github.com/leonlarsson/leon-home"
  },
  {
    slug: "guestbook",
    name: "Guestbook",
    description: "A guestbook for my personal website. It uses Next.js experimental Server Actions and Cloudflare D1.\nIt uses authentication from NextAuth.js.",
    shortDescription: "A guestbook powered by Next.js Server Actions and Cloudflare D1.",
    year: "2023",
    tags: [tags.CLOUDFLARE_WORKERS, tags.REACT, tags.NEXT, tags.TAILWIND, tags.TS, tags.API],
    link: "/guestbook",
    githubLink: "https://github.com/leonlarsson/leon-home/tree/main/app/(main)/guestbook",
    extraLinks: [
      {
        name: "API + DB",
        link: "https://github.com/leonlarsson/leon-guestbook-api",
        type: "github"
      }
    ]
  }
] satisfies Project[];

export type Project = {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  year?: string;
  tags?: string[];
  images?: StaticImageData[];
  link?: string;
  hidePreview?: boolean;
  githubLink?: string;
  extraLinks?: {
    name: string;
    link: string;
    type: "link" | "github";
  }[];
};
