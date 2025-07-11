import type { Project, ProjectTag } from "../../types";
const battlebotImage1 = "/images/projects/battlebot1.png";
const battlebotImage2 = "/images/projects/battlebot2.png";
const battlefieldStatsImage1 = "/images/projects/battlefieldstats1.png";
const battlefieldStatsImage2 = "/images/projects/battlefieldstats2.png";
const bfdImage1 = "/images/projects/bfd1.png";
const bfdImage2 = "/images/projects/bfd2.png";
const bloodhuntStatsImage1 = "/images/projects/bloodhuntstats1.png";
const caseSimImage1 = "/images/projects/cscaseui1.png";
const embedWorkerImage1 = "/images/projects/embedworker1.png";
const friendlyTimeImage1 = "/images/projects/friendlytime1.png";
const friendlyTimeImage2 = "/images/projects/friendlytime2.png";
const musicShowcaseImage1 = "/images/projects/music1.png";
const musicShowcaseImage2 = "/images/projects/music2.png";
const raccoonHttpImage1 = "/images/projects/raccoonhttp1.png";
const raccoonHttpImage2 = "/images/projects/raccoonhttp2.png";
const timestamperImage1 = "/images/projects/timestamper1.png";
const timestamperImage2 = "/images/projects/timestamper2.png";
const timezoneRacerImage1 = "/images/projects/timezoneracer1.png";

const tags = {
  GO: { name: "Go", color: "#00add8" },
  JS: { name: "JavaScript", color: "#f1e05a" },
  TS: { name: "TypeScript", color: "#3178c6" },
  HTML: { name: "HTML", color: "#e34c26" },
  CSS: { name: "CSS", color: "#563d7c" },
  REACT: { name: "React" },
  VUE: { name: "Vue" },
  NEXT: { name: "Next.js" },
  TANSTACK_START: { name: "TanStack Start" },
  TANSTACK_ROUTER: { name: "TanStack Router" },
  TANSTACK_QUERY: { name: "TanStack Query" },
  TAILWIND: { name: "Tailwind" },
  NODE: { name: "Node.js" },
  BUN: { name: "Bun" },
  DISCORDJS: { name: "discord.js" },
  DISGO: { name: "DisGo" },
  VITE: { name: "Vite" },
  ANTD: { name: "Ant Design" },
  SHADCNUI: { name: "shadcn/ui" },
  API: { name: "API" },
  POSTGRESQL: { name: "PostgreSQL" },
  SQLITE: { name: "SQLite" },
  CLOUDFLARE_WORKERS: { name: "Cloudflare Workers" },
  COMMUNITY: { name: "Community" },
  MODERATION: { name: "Moderation" },
} satisfies Record<string, ProjectTag>;

export default [
  {
    slug: "battlefield-discord",
    slugAliases: ["bfd", "bf-discord", "bfdiscord"],
    name: "The Battlefield Discord",
    description: [
      "The Battlefield Discord is a community Discord server for the Battlefield franchise. I have been helping build this community since 2016, and I was one of the owners.",
      "From 2018 to 2022, it was the official Discord server for the Battlefield franchise. I have seen it go from a couple thousand members to over 170,000 members. We've always worked closely with EA/DICE.",
      "In September 2024, after discussions with EA, we decided to hand over responsibilities to EA's Battlefield Community Team, and the server is now run by them. I spent 8 years building this community, and I will always be thankful for the experiences, opportunities, and friends I've made through it. o7",
    ],
    shortDescription: "The biggest and most successful Battlefield Discord server.",
    year: "2016",
    endYear: "2024",
    tags: [tags.COMMUNITY, tags.MODERATION],
    images: [bfdImage1, bfdImage2],
    link: "https://discord.gg/battlefield",
    linkName: "Go to Discord",
    hidePreview: true,
    displayInCv: true,
    connectedProjectSlugs: ["battlebot"],
  },
  {
    slug: "bfv-menu-playground",
    slugAliases: ["bfvmenu"],
    name: "Battlefield V Menu Playground",
    description: [
      "One of my first web projects. It allows you to play around with a copy of the Battlefield V menu.",
      "I did a menu recreation in Photoshop and then exported it to HTML and CSS. I also added some JavaScript for interactivity.",
    ],
    shortDescription: "A Battlefield V menu playground that lets you drag items and change images.",
    year: "2019",
    tags: [tags.HTML, tags.CSS, tags.JS],
    link: "https://bfvmenu.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/bfvmenu",
    extraLinks: [
      {
        name: "Photoshop Recreation",
        link: "https://www.youtube.com/watch?v=P3zMuMp6aGc",
        type: "link",
      },
    ],
  },
  {
    slug: "bf1-palette-recreation",
    slugAliases: ["bf1palette"],
    name: "Battlefield 1 Palette Recreation",
    description: "This is another Battlefield-related project. It's an attempt at recreating an image using Flexbox.",
    shortDescription: "A Flexbox recreation of an image.",
    year: "2019",
    tags: [tags.HTML, tags.CSS],
    link: "https://bf1palette.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/bf1palette",
  },
  {
    slug: "joy-meme",
    slugAliases: ["joy"],
    name: "You Spin Me Right Round",
    description: "Just a fun COVID quarantine project.",
    shortDescription: "Just a fun COVID quarantine project.",
    year: "2020",
    tags: [tags.HTML, tags.CSS, tags.JS],
    link: "https://joy.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/joy-meme",
  },
  {
    slug: "logsorter",
    slugAliases: ["log-sorter"],
    name: "Log Sorter",
    description: [
      "My first actual useful project. It aims to help (Discord) moderators sort through massive amounts of logs in order to combat bot accounts.",
      "It has proven to be very useful and has helped a lot of moderators since I launched it.",
    ],
    shortDescription: "Also known as Mozzy's Log Sorter. A log-filtering website for moderators.",
    year: "2021",
    tags: [tags.HTML, tags.CSS, tags.JS],
    link: "https://logsorter.com/",
    githubLink: "https://github.com/leonlarsson/logsorter",
    displayInCv: true,
  },
  {
    slug: "bf1-morse-solver",
    slugAliases: ["bf1morse"],
    name: "Battlefield 1 Morse Solver",
    description: [
      "Another Battlefield-related project. This has helped thousands of people to solve the 'The Beginning' Battlefield 1 easter egg.",
      "This project is still being used daily by people to help solve this easter egg.",
    ],
    shortDescription: "A tool that helps solve the 'The Beginning' Battlefield 1 easter egg.",
    year: "2021",
    tags: [tags.HTML, tags.CSS, tags.JS],
    link: "https://bf1morse.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/bf1morse",
    extraLinks: [
      {
        name: "API",
        link: "https://bf1morse-api.leonlarsson.com",
        type: "link",
      },
      {
        name: "API Source",
        link: "https://github.com/leonlarsson/bf1morse-api",
        type: "github",
      },
    ],
    displayInCv: true,
  },
  {
    slug: "battlebot",
    slugAliases: [],
    name: "Battlebot",
    description: [
      "This is a bot we use on the Battlefield Discord. It provides moderation utilities for moderators as well as a few fun and helpful features for users.",
      "Command cooldowns are handled with Cloudflare Workers using KV.",
      "In February 2024, I rewrote the bot, going from JavaScript to TypeScript and from Node.js to Bun (later back to Node), as well as open-sourcing the bot.",
      "In September 2024, the bot was shut down after the responsibilities of the Battlefield Discord were handed over to EA.",
    ],
    shortDescription: "A bot that provided utility and fun in the Battlefield Discord.",
    year: "2021",
    endYear: "2024",
    tags: [tags.BUN, tags.NODE, tags.DISCORDJS, tags.JS, tags.TS, tags.API, tags.CLOUDFLARE_WORKERS],
    images: [battlebotImage1, battlebotImage2],
    githubLink: "https://github.com/leonlarsson/Battlebot",
    extraLinks: [
      {
        name: "Cooldowns API",
        link: "https://github.com/leonlarsson/battlebot-api",
        type: "github",
      },
    ],
    connectedProjectSlugs: ["battlefield-discord"],
  },
  {
    slug: "battlefield-stats",
    slugAliases: ["bfstats"],
    name: "Battlefield Stats Discord Bot",
    description: [
      "My largest and most successful project by far. Battlefield Stats is a Discord bot that provides on-demand Battlefield statistics in Discord. I have also built a website and an API for this project, which uses Cloudflare D1 (SQLite) as the database.",
      "Used by thousands of users in over 4,500 Discord servers and installed on over 2,100 accounts, the bot is built with discord.js and the website with TanStack Router and shadcn/ui.",
      "In February 2024, I rewrote the bot, going from JavaScript to TypeScript and from Node.js to Bun (and later back again).",
    ],
    shortDescription: "A bot that provides Battlefield stats from inside Discord.",
    year: "2021",
    tags: [
      tags.NODE,
      tags.DISCORDJS,
      tags.CLOUDFLARE_WORKERS,
      tags.API,
      tags.REACT,
      tags.TANSTACK_ROUTER,
      tags.TANSTACK_QUERY,
      tags.JS,
      tags.TS,
      tags.SQLITE,
      tags.SHADCNUI,
    ],
    images: [battlefieldStatsImage1, battlefieldStatsImage2],
    link: "https://battlefieldstats.com/",
    githubLink: "https://github.com/leonlarsson/bfstats-web",
    extraLinks: [
      {
        name: "API",
        link: "https://api.battlefieldstats.com/",
        type: "link",
      },
      {
        name: "API Source",
        link: "https://github.com/leonlarsson/bfstats-api",
        type: "github",
      },
    ],
    featureInHome: true,
    displayInCv: true,
  },
  {
    slug: "httpraccoons",
    slugAliases: ["trashttpanda", "raccoon-http-api"],
    name: "Raccoon HTTP API",
    description: "A raccoon-themed API that provides HTTP response images. Powered by Cloudflare Workers.",
    shortDescription: "An API that provides HTTP images with trash pandas.",
    year: "2022",
    tags: [tags.CLOUDFLARE_WORKERS, tags.API, tags.TS],
    link: "https://httpraccoons.com/",
    images: [raccoonHttpImage1, raccoonHttpImage2],
    githubLink: "https://github.com/leonlarsson/http-raccoons",
    displayInCv: true,
  },
  {
    slug: "zeppelin-case-stats",
    slugAliases: ["zeppelin-stats", "zeppelinstats"],
    name: "Zeppelin Case Stats",
    description:
      "A utility website that aims to help Discord moderators gather stats from the moderation bot Zeppelin.",
    shortDescription: "A website used to gather stats from the moderation bot Zeppelin.",
    year: "2022",
    tags: [tags.HTML, tags.CSS, tags.JS],
    link: "https://zeppelin-stats.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/zeppelin-case-stats",
  },
  {
    slug: "timestamper-bot",
    slugAliases: ["timestamper"],
    name: "Timestamper Discord Bot",
    description:
      "An experimental Discord bot that provides utility commands to build and play with Discord timestamps. Built fully with Cloudflare Workers.",
    shortDescription: "A Discord bot that makes using Discord timestamps easier.",
    year: "2022",
    tags: [tags.CLOUDFLARE_WORKERS, tags.TS],
    images: [timestamperImage1, timestamperImage2],
    githubLink: "https://github.com/leonlarsson/timestamper-bot",
  },
  {
    slug: "redirect-link-service",
    slugAliases: ["redirector"],
    name: "Redirect / Link Service",
    description: "A small link-shortener and redirector project built on Cloudflare Workers.",
    shortDescription: "Link-shortener/redirector built on Cloudflare Workers.",
    year: "2022",
    tags: [tags.CLOUDFLARE_WORKERS, tags.TS],
    githubLink: "https://github.com/leonlarsson/link-redirector",
  },
  {
    slug: "bloodhunt-stats",
    slugAliases: ["bhstats"],
    name: "Bloodhunt Stats Discord Bot",
    description: [
      "A Discord bot that provides on demand Bloodhunt statistics in Discord, built in Node.js. In addition, I built an API that reports some basic usage.",
      "Built on the same foundations I created for the Battlefield Stats Discord bot and built as part of my role at Sharkmob.",
    ],
    shortDescription: "A bot that provides Bloodhunt stats from inside Discord.",
    year: "2022",
    tags: [tags.NODE, tags.DISCORDJS, tags.CLOUDFLARE_WORKERS, tags.API, tags.JS],
    images: [bloodhuntStatsImage1],
    extraLinks: [
      {
        name: "Add Bot",
        link: "https://discord.com/api/oauth2/authorize?client_id=979116430802972732&permissions=0&scope=bot%20applications.commands",
        type: "link",
      },
      {
        name: "API",
        link: "https://bhstats-api.leonlarsson.com/",
        type: "link",
      },
      {
        name: "API Source",
        link: "https://github.com/leonlarsson/bhstats-api",
        type: "github",
      },
    ],
  },
  {
    slug: "embed-worker",
    slugAliases: [],
    name: "Embed Worker",
    description: "A tiny test project that lets you create custom Open Graph embeds. Powered by Cloudflare Workers.",
    shortDescription: "A tiny test project that lets you create custom Open Graph embeds.",
    year: "2022",
    tags: [tags.CLOUDFLARE_WORKERS, tags.TS],
    images: [embedWorkerImage1],
    link: "https://embed-worker.ragnarok.workers.dev/",
    githubLink: "https://github.com/leonlarsson/embed-worker",
  },
  {
    slug: "react-ant-design-ui",
    slugAliases: [],
    name: "React + Ant Design website",
    description:
      "A dashboard website template built with Vite + React + Ant Design. This is something I originally built for work, but without the secret parts.",
    shortDescription: "A UI/website/dashboard built with React and Ant Design.",
    year: "2023",
    tags: [tags.REACT, tags.VITE, tags.ANTD, tags.JS],
    link: "https://react-ant-design-ui.pages.dev/",
    githubLink: "https://github.com/leonlarsson/react-ant-design-ui",
  },
  {
    slug: "the-finals-leaderboard",
    slugAliases: ["tfl"],
    name: "THE FINALS Leaderboard",
    description:
      "An enhanced leaderboard for the game THE FINALS from Embark Studios, complete with additional features, stats, and all historical leaderboards. Built with TanStack Router/Query on React + Vite.",
    shortDescription: "An enhanced leaderboard for the game THE FINALS.",
    year: "2023",
    tags: [tags.REACT, tags.VITE, tags.SHADCNUI, tags.TS, tags.TANSTACK_ROUTER, tags.TANSTACK_QUERY],
    link: "https://the-finals-leaderboard.com/",
    githubLink: "https://github.com/leonlarsson/the-finals-leaderboard",
    featureInHome: true,
    displayInCv: true,
    connectedProjectSlugs: ["the-finals-api"],
  },
  {
    slug: "bloodhunt-arg",
    slugAliases: ["omnis-arg", "omnis-challenge", "the-omnis-challenge"],
    name: "Bloodhunt ARG",
    description: [
      "A project I built for my role at Sharkmob. It was an ARG that we created for the game Bloodhunt.",
      "Over 500 unique users from 50 different countries participated in the ARG. It was a massive success, garnering satisfaction and engagement from the community.",
      "I have also created an implementation of the website in Next.js, which uses server actions.",
    ],
    shortDescription: "The official website for the Bloodhunt ARG, 'The Omnis Challenge'.",
    year: "2023",
    tags: [tags.CLOUDFLARE_WORKERS, tags.HTML, tags.CSS, tags.TS, tags.API, tags.NEXT, tags.TAILWIND, tags.REACT],
    link: "https://omnis.pages.dev/",
    githubLink: "https://github.com/leonlarsson/omnis-arg",
    extraLinks: [
      {
        name: "Next.js Implementation",
        link: "https://github.com/leonlarsson/omnis-arg-next",
        type: "github",
      },
    ],
    displayInCv: true,
  },
  {
    slug: "home",
    slugAliases: ["leon-home"],
    name: "This website",
    description: [
      "This is the website you're currently on. It is powered by TanStack Start, Router, and Query and is styled with Tailwind. It was previously built with Next.js.",
    ],
    shortDescription: "Leon's personal website. You are currently on it.",
    year: "2023",
    tags: [tags.REACT, tags.TANSTACK_START, tags.TANSTACK_ROUTER, tags.TANSTACK_QUERY, tags.TAILWIND, tags.TS],
    link: "https://leonlarsson.com",
    githubLink: "https://github.com/leonlarsson/leon-home",
    displayInCv: true,
    connectedProjectSlugs: ["guestbook", "music-showcase"],
  },
  {
    slug: "guestbook",
    slugAliases: [],
    name: "Guestbook",
    description:
      "A guestbook for my personal website. It uses TanStack Start's Server Functions with TanStack Query and SQLite on D1 as the database.",
    shortDescription: "A guestbook powered by TanStack Start's Server Functions and SQLite.",
    year: "2023",
    tags: [tags.REACT, tags.TANSTACK_START, tags.TANSTACK_QUERY, tags.TAILWIND, tags.TS, tags.API, tags.SQLITE],
    link: "https://leonlarsson.com/guestbook",
    githubLink: "https://github.com/leonlarsson/leon-home/tree/main/app/(main)/guestbook",
    connectedProjectSlugs: ["home"],
  },
  {
    slug: "music-showcase",
    slugAliases: ["spotify-showcase", "music-page"],
    name: "Music Showcase",
    description:
      "A music showcase that displays my current Spotify status and my top tracks and artists. It uses the Spotify API.",
    shortDescription: "A music showcase that displays my Spotify status and favorites.",
    year: "2023",
    tags: [tags.REACT, tags.TANSTACK_START, tags.TANSTACK_QUERY, tags.TAILWIND, tags.TS, tags.API],
    images: [musicShowcaseImage1, musicShowcaseImage2],
    link: "https://leonlarsson.com/music",
    githubLink: "https://github.com/leonlarsson/leon-home/tree/main/app/(main)/music",
    connectedProjectSlugs: ["home"],
  },
  {
    slug: "friendly-time",
    slugAliases: [],
    name: "Friendly Time",
    description:
      "A UI that helps convert natural language to various time formats. It is built with Next.js (React) and styled with Tailwind.",
    shortDescription: "A UI that converts natural language to various time formats.",
    year: "2023",
    tags: [tags.REACT, tags.NEXT, tags.TAILWIND, tags.TS],
    images: [friendlyTimeImage1, friendlyTimeImage2],
    link: "https://friendly-time.com",
    githubLink: "https://github.com/leonlarsson/friendly-time",
    extraLinks: [
      {
        name: "Date Parser",
        link: "https://github.com/wanasit/chrono",
        type: "github",
      },
    ],
    displayInCv: true,
  },
  {
    slug: "case-sim",
    slugAliases: ["cs-case-ui", "csgo-case-ui", "cs2-case-ui", "cs-case-sim"],
    name: "Counter-Strike Case Simulator",
    description: [
      "This is my attempt at recreating the case opening UI from Counter-Strike. It is built with Next.js (React) and styled with Tailwind.",
      "Every case from the game is able to be opened, with real odds. I have also built a Global Unbox History page, that shows some stats and recently opened cases, powered by a self-hosted PostgreSQL database.",
      "To date, 30 million cases have been opened on the website.",
    ],
    shortDescription: "The case opening UI from Counter-Strike recreated in React, powered by PostgreSQL.",
    year: "2023",
    tags: [tags.REACT, tags.NEXT, tags.TAILWIND, tags.TS, tags.POSTGRESQL],
    images: [caseSimImage1],
    link: "https://case-sim.com",
    githubLink: "https://github.com/leonlarsson/cs-case-sim",
    featureInHome: true,
    displayInCv: true,
  },
  {
    slug: "timezone-racer",
    slugAliases: ["new-years-countdown"],
    name: "Timezone Racer",
    description: [
      "This is my first experience with Vue. It is a website that shows the progress towards the new year in multiple timezones.",
      "It is built with Vue and styled with Tailwind.",
    ],
    shortDescription: "A website that tracks multiple timezones' progress towards the new year.",
    year: "2024",
    tags: [tags.VUE, tags.VITE, tags.TAILWIND, tags.TS],
    images: [timezoneRacerImage1],
    link: "https://timezone-racer.pages.dev/",
    githubLink: "https://github.com/leonlarsson/timezone-racer",
  },
  {
    slug: "the-finals-api",
    slugAliases: [],
    name: "THE FINALS API",
    description: [
      "The API that powers my THE FINALS leaderboard and several other community projects. It is built on Cloudflare Workers with Hono and Zod.",
    ],
    shortDescription: "The API that powers my THE FINALS leaderboard.",
    year: "2024",
    tags: [tags.CLOUDFLARE_WORKERS, tags.API, tags.TS],
    githubLink: "https://github.com/leonlarsson/the-finals-api",
    connectedProjectSlugs: ["the-finals-leaderboard"],
  },
  {
    slug: "battlefield-stats-go",
    slugAliases: ["bfstats-go"],
    name: "Battlefield Stats Go",
    description: [
      "A Go implementation of the Battlefield Stats Discord bot. It is built with the DisGo library.",
      "This is my first ever project with Go. This is mostly for learning Go.",
    ],
    shortDescription: "A Go implementation of the Battlefield Stats Discord bot.",
    year: "2024",
    tags: [tags.GO, tags.API, tags.DISGO],
    githubLink: "https://github.com/leonlarsson/bfstats-go",
    displayInCv: true,
  },
] satisfies Project[] as Project[];
