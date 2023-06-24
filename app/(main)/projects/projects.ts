export default [
  {
    projectId: 1,
    name: "Battlefield V Menu Playground",
    description: "This was one of my first web projects. It allows you to play around with a copy of the Battlefield V menu.",
    shortDescription: "A Battlefield V menu playground that lets you drag items and change images.",
    tags: ["html", "css", "javascript"],
    link: "https://bfvmenu.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/bfvmenu"
  },
  {
    projectId: 2,
    name: "Battlefield 1 Palette Recreation",
    description: "This is another Battlefield-related project. It's an attempt at recreating an image using Flexbox.",
    shortDescription: "A Flexbox recreation of an image.",
    tags: ["html", "css"],
    link: "https://bf1palette.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/bf1palette"
  },
  {
    projectId: 3,
    name: "You Spin Me Right Round",
    description: "Just a fun COVID quarantine project.",
    shortDescription: "Just a fun COVID quarantine project.",
    tags: ["html", "css", "javascript"],
    link: "https://joy.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/joy-meme"
  },
  {
    projectId: 4,
    name: "This website",
    description: "This is the website you're currently on. It was created using Next.js 13 and was built with Tailwind.",
    shortDescription: "Leon's personal website.",
    tags: ["react", "next.js", "tailwind", "typescript"],
    link: "/",
    githubLink: "https://github.com/leonlarsson/leon-home",
    nextLink: true
  },
  {
    projectId: 5,
    name: "Log Sorter",
    description: "My first actual useful project. It aims to help (Discord) moderators sort through massive amounts of logs in order to combat bot accounts.",
    shortDescription: "Also known as Mozzy's Log Sorter. A log-filtering website for moderators.",
    tags: ["html", "css", "javascript"],
    link: "https://logsorter.net/",
    githubLink: "https://github.com/leonlarsson/logsorter"
  },
  {
    projectId: 6,
    name: "Battlefield 1 Morse Solver",
    description: "Another Battlefield-related project. This has helped hundreds if not thousands of people to solve the 'The Beginning' Battlefield 1 easter egg.",
    shortDescription: "A tool that helps solve the 'The Beginning' Battlefield 1 easter egg.",
    tags: ["html", "css", "javascript"],
    link: "https://bf1morse.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/bf1morse"
  },
  {
    projectId: 7,
    name: "Battlefield Stats Discord Bot",
    description: "My largest and most successful project by far. A Discord bot that provides on demand Battlefield statistics in Discord.\nUsed by thousands of users in thousands of Discord servers. Built in Node.js.\nThe extra links are for the API that I built with Cloudflare Workers.",
    shortDescription: "A bot that provides Battlefield stats right inside your Discord.",
    tags: ["node.js", "discord.js", "cloudflare workers", "api", "react", "next.js"],
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
    projectId: 8,
    name: "Raccoon HTTP API",
    description: "An API that provides HTTP response images, with a twist.\nPowered by Cloudflare Workers.",
    shortDescription: "An API that provides HTTP images with trash pandas.",
    tags: ["cloudflare workers", "api", "typescript"],
    link: "https://api.onlyraccoons.com/",
    githubLink: "https://github.com/leonlarsson/http-raccoons"
  },
  {
    projectId: 9,
    name: "Zeppelin Case Stats",
    description: "A utility website that aims to help Discord moderators gather stats from the moderation bot Zeppelin.",
    shortDescription: "A website used to gather stats from the moderation bot Zeppelin.",
    tags: ["html", "css", "javascript"],
    link: "https://zeppelin-stats.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/zeppelin-case-stats"
  },
  {
    projectId: 10,
    name: "Redirect / Link Service",
    description: "Small project built with Discord workers. Think of it like Linktree, but much worse.",
    shortDescription: "A much worse version of Linktree.",
    tags: ["cloudflare workers", "typescript"],
    link: "https://x.leon.ms/",
    githubLink: "https://github.com/leonlarsson/link-redirector-worker"
  },
  {
    projectId: 11,
    name: "THE FINALS Leaderboard",
    description: "A fun project that creates a better leaderboard for the game THE FINALS from Embark Studios.\nBuilt with React + Vite.",
    shortDescription: "An external leaderboard for the game THE FINALS.",
    tags: ["react", "vite"],
    link: "https://the-finals-leaderboard.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/the-finals-leaderboard"
  },
  {
    projectId: 12,
    name: "React + Ant Design website",
    description: "A dashboard website template built with Vite + React + Ant Design.\nThis is something I originally built for work, but without the secret parts.",
    shortDescription: "A UI/website/dashboard built with React and And Design.",
    tags: ["react", "vite", "ant design"],
    link: "https://react-ant-design-ui.pages.dev/",
    githubLink: "https://github.com/leonlarsson/react-ant-design-ui"
  },
  {
    projectId: 13,
    name: "Bloodhunt ARG",
    description: "A project I built for my role at Sharkmob. It is an ARG that we held for players that hundreds of players interacted with.",
    shortDescription: "The official website for the Bloodhunt ARG, 'The Omnis Challenge'.",
    tags: ["cloudflare workers", "cloudflare pages", "html", "css", "typescript"],
    link: "https://omnis.pages.dev/"
  },
  {
    projectId: 14,
    name: "Guestbook",
    description: "A guestbook for my personal website. It uses Next.js experimental Server Actions and Cloudflare D1.\nIt uses authentication from NextAuth.js.",
    shortDescription: "A guestbook powered by Next.js Server Actions and Cloudflare D1.",
    tags: ["cloudflare workers", "react", "next.js", "tailwind", "typescript", "API"],
    link: "/guestbook",
    githubLink: "https://github.com/leonlarsson/leon-home/tree/main/app/(main)/guestbook",
    nextLink: true,
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
  projectId: number;
  name: string;
  description: string;
  shortDescription: string;
  tags?: string[];
  link: string;
  githubLink?: string;
  nextLink?: boolean;
  extraLinks?: {
    name: string;
    link: string;
    type: "link" | "github";
  }[];
};
