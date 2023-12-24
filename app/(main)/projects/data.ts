import bfd1 from "./images/bfd1.png";
import bfd2 from "./images/bfd2.png";
import battlebotImage1 from "./images/battlebot1.png";
import battlebotImage2 from "./images/battlebot2.png";
import battlefieldStatsImage1 from "./images/battlefieldstats1.png";
import battlefieldStatsImage2 from "./images/battlefieldstats2.png";
import raccoonHttpImage1 from "./images/raccoonhttp1.png";
import raccoonHttpImage2 from "./images/raccoonhttp2.png";
import timestamperImage1 from "./images/timestamper1.png";
import timestamperImage2 from "./images/timestamper2.png";
import bloodhuntStatsImage1 from "./images/bloodhuntstats1.png";
import embedWorkerImage1 from "./images/embedworker1.png";
import musicShowcaseImage1 from "./images/music1.png";
import musicShowcaseImage2 from "./images/music2.png";
import friendlyTime1 from "./images/friendlytime1.png";
import friendlyTime2 from "./images/friendlytime2.png";
import csCaseUI1 from "./images/cscaseui1.png";
import { Project } from "@/types";

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
  SHADCNUI: "shadcn/ui",
  API: "API",
  DATABASE: "Database",
  CLOUDFLARE_WORKERS: "Cloudflare Workers",
  COMMUNITY: "Community",
  MODERATION: "Moderation"
};

export default [
  {
    slug: "battlefield-discord",
    slugAliases: ["bfd", "bf-discord"],
    name: "The Battlefield Discord",
    description: [
      "The Battlefield Discord is a community Discord server for the Battlefield franchise. I have been helping build this community since 2016, and I am currently one of the owners.",
      "From 2018 to 2022, it was the official Discord server for the Battlefield franchise. I have seen it go from a couple thousand members to over 170,000 members. We've always worked closely with EA/DICE."
    ],
    shortDescription: "The biggest and most successful Battlefield Discord server.",
    year: "2016",
    tags: [tags.COMMUNITY, tags.MODERATION],
    images: [bfd1, bfd2],
    link: "https://discord.gg/battlefield",
    linkName: "Go to Discord",
    hidePreview: true
  },
  {
    slug: "bfv-menu-playground",
    slugAliases: ["bfvmenu"],
    name: "Battlefield V Menu Playground",
    description: ["One of my first web projects. It allows you to play around with a copy of the Battlefield V menu.", "I did a menu recreation in Photoshop and then exported it to HTML and CSS. I also added some JavaScript for interactivity."],
    shortDescription: "A Battlefield V menu playground that lets you drag items and change images.",
    year: "2019",
    tags: [tags.HTML, tags.CSS, tags.JS],
    link: "https://bfvmenu.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/bfvmenu",
    extraLinks: [
      {
        name: "Photoshop Recreation",
        link: "https://www.youtube.com/watch?v=P3zMuMp6aGc",
        type: "link"
      }
    ]
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
    githubLink: "https://github.com/leonlarsson/bf1palette"
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
    githubLink: "https://github.com/leonlarsson/joy-meme"
  },
  {
    slug: "logsorter",
    slugAliases: ["log-sorter"],
    name: "Log Sorter",
    description: ["My first actual useful project. It aims to help (Discord) moderators sort through massive amounts of logs in order to combat bot accounts.", "It has proven to be very useful and has helped a lot of moderators since I launched it."],
    shortDescription: "Also known as Mozzy's Log Sorter. A log-filtering website for moderators.",
    year: "2021",
    tags: [tags.HTML, tags.CSS, tags.JS],
    link: "https://logsorter.com/",
    githubLink: "https://github.com/leonlarsson/logsorter"
  },
  {
    slug: "bf1-morse-solver",
    slugAliases: ["bf1morse"],
    name: "Battlefield 1 Morse Solver",
    description: ["Another Battlefield-related project. This has helped hundreds if not thousands of people to solve the 'The Beginning' Battlefield 1 easter egg.", "This project is still being used daily by people to help solve this easter egg."],
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
    description: ["This is a bot we use on the Battlefield Discord. It provides moderation utilities for moderators as well as a few fun and helpful features for users.", "Command cooldowns are handled with Cloudflare Workers using KV."],
    shortDescription: "A bot that provides utility and fun in the Battlefield Discord.",
    year: "2021",
    tags: [tags.NODE, tags.DISCORDJS, tags.JS, tags.TS, tags.API, tags.CLOUDFLARE_WORKERS],
    images: [battlebotImage1, battlebotImage2],
    extraLinks: [
      {
        name: "Cooldowns API",
        link: "https://github.com/leonlarsson/battlebot-api",
        type: "github"
      }
    ]
  },
  {
    slug: "battlefield-stats",
    slugAliases: ["bfstats"],
    name: "Battlefield Stats Discord Bot",
    description: [
      "My largest and most successful project by far. Battlefield Stats is a Discord bot that provides on-demand Battlefield statistics in Discord. I have also built a website and an API for this project.",
      "Used by thousands of users in thousands of Discord servers, the bot is built with Node.js and the website with Next.js and shadcn/ui."
    ],
    shortDescription: "A bot that provides Battlefield stats right inside Discord.",
    year: "2021",
    tags: [tags.NODE, tags.DISCORDJS, tags.CLOUDFLARE_WORKERS, tags.API, tags.REACT, tags.NEXT, tags.JS, tags.TS, tags.DATABASE, tags.SHADCNUI],
    images: [battlefieldStatsImage1, battlefieldStatsImage2],
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
    slugAliases: ["trashttpanda"],
    name: "Raccoon HTTP API",
    description: "A raccoon-themed API that provides HTTP response images. Powered by Cloudflare Workers.",
    shortDescription: "An API that provides HTTP images with trash pandas.",
    year: "2022",
    tags: [tags.CLOUDFLARE_WORKERS, tags.API, tags.TS],
    link: "https://httpraccoons.com/",
    images: [raccoonHttpImage1, raccoonHttpImage2],
    githubLink: "https://github.com/leonlarsson/http-raccoons"
  },
  {
    slug: "zeppelin-case-stats",
    slugAliases: ["zeppelin-stats", "zeppelinstats"],
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
    slugAliases: ["timestamper"],
    name: "Timestamper Discord Bot",
    description: "An experimental Discord bot that provides utility commands to build and play with Discord timestamps. Built fully with Cloudflare Workers.",
    shortDescription: "An Discord bot that makes using Discord timestamps easier.",
    year: "2022",
    tags: [tags.CLOUDFLARE_WORKERS, tags.TS],
    images: [timestamperImage1, timestamperImage2],
    link: "https://github.com/leonlarsson/timestamper-bot",
    hidePreview: true
  },
  {
    slug: "redirect-link-service",
    slugAliases: ["redirector"],
    name: "Redirect / Link Service",
    description: "A small link-shortener and redirector project built on Cloudflare Workers.",
    shortDescription: "Link-shortener/redirector built on Cloudflare Workers.",
    year: "2022",
    tags: [tags.CLOUDFLARE_WORKERS, tags.TS],
    link: "https://github.com/leonlarsson/link-redirector-worker",
    hidePreview: true
  },
  {
    slug: "bloodhunt-stats",
    name: "Bloodhunt Stats Discord Bot",
    description: ["A Discord bot that provides on demand Bloodhunt statistics in Discord, built in Node.js. In addition, I built an API that reports some basic usage.", "Built on the same foundations I created for the Battlefield Stats Discord bot and built as part of my role at Sharkmob."],
    shortDescription: "A bot that provides Bloodhunt stats right inside Discord.",
    year: "2022",
    tags: [tags.NODE, tags.DISCORDJS, tags.CLOUDFLARE_WORKERS, tags.API, tags.JS],
    images: [bloodhuntStatsImage1],
    link: "https://discord.com/api/oauth2/authorize?client_id=979116430802972732&permissions=0&scope=bot%20applications.commands",
    linkName: "Add to Discord",
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
    description: "A tiny test project that lets you create custom Open Graph embeds. Powered by Cloudflare Workers.",
    shortDescription: "A tiny test project that lets you create custom Open Graph embeds.",
    year: "2022",
    tags: [tags.CLOUDFLARE_WORKERS, tags.TS],
    images: [embedWorkerImage1],
    link: "https://embed-worker.ragnarok.workers.dev/",
    githubLink: "https://github.com/leonlarsson/embed-worker"
  },
  {
    slug: "react-ant-design-ui",
    name: "React + Ant Design website",
    description: "A dashboard website template built with Vite + React + Ant Design. This is something I originally built for work, but without the secret parts.",
    shortDescription: "A UI/website/dashboard built with React and And Design.",
    year: "2023",
    tags: [tags.REACT, tags.VITE, tags.ANTD],
    link: "https://react-ant-design-ui.pages.dev/",
    githubLink: "https://github.com/leonlarsson/react-ant-design-ui"
  },
  {
    slug: "the-finals-leaderboard",
    name: "THE FINALS Leaderboard",
    description: "A fun project that creates a better leaderboard for the game THE FINALS from Embark Studios. Built with React + Vite.",
    shortDescription: "An external leaderboard for the game THE FINALS.",
    year: "2023",
    tags: [tags.REACT, tags.VITE, tags.SHADCNUI],
    link: "https://the-finals-leaderboard.com/",
    githubLink: "https://github.com/leonlarsson/the-finals-leaderboard"
  },
  {
    slug: "bloodhunt-arg",
    slugAliases: ["omnis-arg", "omnis-challenge", "the-omnis-challenge"],
    name: "Bloodhunt ARG",
    description: [
      "A project I built for my role at Sharkmob. It was an ARG that we created for the game Bloodhunt.",
      "Over 500 unique users from 50 different countries participated in the ARG. It was a massive success, garnering satisfaction and engagement from the community.",
      "I have also created an implemtation of the website in Next.js, which uses server actions."
    ],
    shortDescription: "The official website for the Bloodhunt ARG, 'The Omnis Challenge'.",
    year: "2023",
    tags: [tags.CLOUDFLARE_WORKERS, tags.HTML, tags.CSS, tags.TS, tags.API, tags.NEXT, tags.TAILWIND, tags.REACT],
    link: "https://omnis.pages.dev/",
    githubLink: "https://github.com/leonlarsson/omnis-arg-public",
    extraLinks: [
      {
        name: "Next.js Implementation",
        link: "https://omnis-arg-next.vercel.app/",
        type: "link"
      },
      {
        name: "Next.js Source",
        link: "https://github.com/leonlarsson/omnis-arg-next",
        type: "github"
      }
    ]
  },
  {
    slug: "home",
    slugAliases: ["leon-home"],
    name: "This website",
    description: "This is the website you're currently on. It is powered by Next.js 13 on Vercel and is styled with Tailwind.",
    shortDescription: "Leon's personal website. You are currently on it.",
    year: "2023",
    tags: [tags.REACT, tags.NEXT, tags.TAILWIND, tags.TS],
    link: "/",
    githubLink: "https://github.com/leonlarsson/leon-home"
  },
  {
    slug: "guestbook",
    name: "Guestbook",
    description: "A guestbook for my personal website. It uses Next.js experimental Server Actions and PlanetScale. It uses authentication from NextAuth.js.",
    shortDescription: "A guestbook powered by Next.js Server Actions and PlanetScale.",
    year: "2023",
    tags: [tags.REACT, tags.NEXT, tags.TAILWIND, tags.TS, tags.API, tags.DATABASE],
    link: "/guestbook",
    githubLink: "https://github.com/leonlarsson/leon-home/tree/main/app/(main)/guestbook"
  },
  {
    slug: "phisherman",
    name: "Phisherman",
    description: ["Phisherman is a centralised database of phishing and scam links. It is designed for use with Discord bots.", "I am contributing to the Phisherman API, docs, and bot as a maintainer."],
    shortDescription: "A centralised database of phishing and scam links.",
    year: "2023",
    tags: [tags.CLOUDFLARE_WORKERS, tags.TS, tags.JS, tags.API, tags.DATABASE, tags.NODE, tags.DISCORDJS],
    link: "https://phisherman.gg/",
    hidePreview: true,
    githubLink: "https://github.com/PhishermanGG"
  },
  {
    slug: "music-showcase",
    slugAliases: ["spotify-showcase", "music-page"],
    name: "Music Showcase",
    description: "A music showcase that displays my current Spotify status and my top tracks and artists. It uses the Spotify API.",
    shortDescription: "A music showcase that displays my Spotify status and favorites.",
    year: "2023",
    tags: [tags.REACT, tags.NEXT, tags.TAILWIND, tags.TS, tags.API],
    images: [musicShowcaseImage1, musicShowcaseImage2],
    link: "/music",
    githubLink: "https://github.com/leonlarsson/leon-home/tree/main/app/(main)/music"
  },
  {
    slug: "friendly-time",
    name: "Friendly Time",
    description: "A UI that helps convert natural language to various time formats. It is built with Next.js (React) and styled with Tailwind.",
    shortDescription: "A UI that converts natural language to various time formats.",
    year: "2023",
    tags: [tags.REACT, tags.NEXT, tags.TAILWIND, tags.TS],
    images: [friendlyTime1, friendlyTime2],
    link: "https://friendly-time.com",
    githubLink: "https://github.com/leonlarsson/friendly-time",
    extraLinks: [
      {
        name: "Date Parser",
        link: "https://github.com/wanasit/chrono",
        type: "github"
      }
    ]
  },
  {
    slug: "case-sim",
    slugAliases: ["cs-case-ui", "csgo-case-ui", "cs2-case-ui", "cs-case-sim"],
    name: "Counter-Strike Case Simulator",
    description: ["This is my attempt at recreating the case opening UI from Counter-Strike 2. It is built with Next.js (React) and styled with Tailwind.", "I have also implemented the ability to open every case that exists in the game, along with real odds and a stats and history page."],
    shortDescription: "The case opening UI from Counter-Strike 2 recreated in React.",
    year: "2023",
    tags: [tags.REACT, tags.NEXT, tags.TAILWIND, tags.TS, tags.DATABASE],
    images: [csCaseUI1],
    link: "https://case-sim.com",
    githubLink: "https://github.com/leonlarsson/cs-case-sim"
  }
] satisfies Project[] as Project[];
