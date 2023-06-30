/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true
  }
  // redirects: () => {
  //   return projects.map(project => ({
  //     source: `/projects/${project.projectId}/go`,
  //     destination: project.link
  //   }));
  // }
};

module.exports = nextConfig;
