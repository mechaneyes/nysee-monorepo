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
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

module.exports = nextConfig;