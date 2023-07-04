/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  }
  // redirects: () => {
  //   return projects.map(project => ({
  //     source: `/projects/${project.slug}/go`,
  //     destination: project.link
  //   }));
  // }
};

module.exports = nextConfig;
