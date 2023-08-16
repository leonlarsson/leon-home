/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.scdn.co"]
  },
  experimental: {
    serverActions: true
  }
};

module.exports = nextConfig;
