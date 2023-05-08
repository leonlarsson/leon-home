export default [
  {
    projectId: 1,
    name: "Battlefield V Menu Playground",
    description: "This was one of my first web projects. It allows you to play around with a copy of the Battlefield V menu.",
    shortDescription: "A Battlefield V menu playground that lets you drag items and change images.",
    link: "https://bfvmenu.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/bfvmenu"
  },
  {
    projectId: 2,
    name: "Battlefield 1 Palette Recreation",
    description: "This is another Battlefield-related project. It's an attempt at recreating an image using Flexbox.",
    shortDescription: "A Flexbox recreation of an image.",
    link: "https://bf1palette.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/bf1palette"
  },
  {
    projectId: 3,
    name: "You Spin Me Right Round",
    description: "Just a fun COVID quarantine project.",
    shortDescription: "Just a fun COVID quarantine project.",
    link: "https://joy.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/joy-meme"
  },
  {
    projectId: 4,
    name: "This website",
    description: "This is the website you're currently on. It was created using Next.js 13 and was built with Tailwind.",
    shortDescription: "Leon's personal website.",
    link: "/",
    githubLink: "https://github.com/leonlarsson/leon-home",
    nextLink: true
  },
  {
    projectId: 5,
    name: "Log Sorter",
    description: "My first actual useful project. It aims to help (Discord) moderators sort through massive amounts of logs in order to combat bot accounts.",
    shortDescription: "Also known as Mozzy's Log Sorter. A log-filtering website for moderators.",
    link: "https://logsorter.net/",
    githubLink: "https://github.com/leonlarsson/logsorter"
  },
  {
    projectId: 6,
    name: "Battlefield 1 Morse Solver",
    description: "Another Battlefield-related project. This has helped hundreds if not thousands of people to solve the 'The Beginning' Battlefield 1 easter egg.",
    shortDescription: "A website that automatically solves all stages of the 'The Beginning' Battlefield 1 easter egg.",
    link: "https://bf1morse.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/bf1morse"
  },
  {
    projectId: 7,
    name: "Battlefield Stats Discord Bot",
    description: "My largest and most successful project by far. A Discord bot that provides on demand Battlefield statistics in Discord.\nUsed by thousands of users in thousands of Discord servers. Built in Node.js.\nThe extra links are for the API that I built with Cloudflare Workers.",
    shortDescription: "The Battlefield Stats Discord bot. Provides Battlefield stats right inside your Discord.",
    link: "https://battlefieldstats.com/",
    githubLink: "https://github.com/leonlarsson/bfstats-web",
    extra: {
      name: "API",
      link: "https://api.battlefieldstats.com/",
      githubLink: "https://github.com/leonlarsson/bfstats-api"
    }
  },
  {
    projectId: 8,
    name: "Raccoon HTTP API",
    description: "An API that provides HTTP response images, with a twist.\nPowered by Cloudflare Workers.",
    shortDescription: "An API that provides HTTP images with trash pandas.",
    link: "https://api.onlyraccoons.com/",
    githubLink: "https://github.com/leonlarsson/http-raccoons"
  },
  {
    projectId: 9,
    name: "Zeppelin Case Stats",
    description: "A utility website that aims to help Discord moderators gather stats from the moderation bot Zeppelin.",
    shortDescription: "A website used to gather stats from the moderation bot Zeppelin.",
    link: "https://zeppelin-stats.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/zeppelin-case-stats"
  },
  {
    projectId: 10,
    name: "Redirect / Link Service",
    description: "Small project built with Discord workers. Think of it like Linktree, but much worse.",
    shortDescription: "A much worse version of Linktree.",
    link: "https://x.leon.ms/",
    githubLink: "https://github.com/leonlarsson/link-redirector-worker"
  },
  {
    projectId: 11,
    name: "THE FINALS Leaderboard",
    description: "A fun project that creates a better leaderboard for the game THE FINALS from Embark Studios.\nBuilt with React + Vite.",
    shortDescription: "An external leaderboard for the game THE FINALS.",
    link: "https://the-finals-leaderboard.leonlarsson.com/",
    githubLink: "https://github.com/leonlarsson/the-finals-leaderboard"
  },
  {
    projectId: 12,
    name: "React + Ant Design website",
    description: "A dashboard website template built with Vite + React + Ant Design.\nThis is something I originally built for work, but without the secret parts.",
    shortDescription: "A UI/website/dashboard built with React and And Design.",
    link: "https://react-ant-design-ui.pages.dev/",
    githubLink: "https://github.com/leonlarsson/react-ant-design-ui"
  },
  {
    projectId: 13,
    name: "Bloodhunt ARG",
    description: "A project I built for my role at Sharkmob. It is an ARG that we held for players that hundreds of players interacted with.",
    shortDescription: "The official website for the Bloodhunt ARG, 'The Omnis Challenge'.",
    link: "https://omnis.pages.dev/"
  }
] satisfies Project[];

export type Project = {
  projectId: number;
  name: string;
  description: string;
  shortDescription: string;
  link: string;
  githubLink?: string;
  nextLink?: boolean;
  extra?: {
    name: string;
    link: string;
    githubLink?: string;
  };
};
