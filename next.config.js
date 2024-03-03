/** @type {import('next').NextConfig} */
const nextConfig = {
  // Needs to be set to standalone when used with Docker
  // output: "standalone",
  redirects: async () => [
    {
      source: "/resume",
      destination: "/en/cv",
      permanent: true,
    },
    {
      source: "/cv",
      destination: "/en/cv",
      permanent: true,
    },
    {
      source: "/cv-swe",
      destination: "/se/cv",
      permanent: true,
    },
    {
      source: "/se/cv",
      destination: "/sv/cv",
      permanent: true,
    },
  ],
  images: {
    remotePatterns: [
      {
        hostname: "i.scdn.co",
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports = nextConfig;
