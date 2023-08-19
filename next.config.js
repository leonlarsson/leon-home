/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/resume",
      destination: "/cv",
      permanent: true
    }
  ],
  images: {
    domains: ["i.scdn.co"]
  },
  experimental: {
    serverActions: true
  }
};

module.exports = nextConfig;
