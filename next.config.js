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
    remotePatterns: [
      {
        hostname: "i.scdn.co"
      }
    ]
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

module.exports = nextConfig;
