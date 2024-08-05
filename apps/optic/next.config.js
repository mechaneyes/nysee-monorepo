/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/optic',
  async rewrites() {
    return [
      {
        source: '/optic',
        destination: '/',
      },
    ];
  },
};

module.exports = nextConfig;