/** @type {import('next').NextConfig} */
const nextConfig = {
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
  experimental: {
    ppr: true,
  },
};

module.exports = nextConfig;
