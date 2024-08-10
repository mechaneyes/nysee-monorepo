/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const OPTIC_DOMAIN = process.env.OPTIC_DOMAIN || "default_domain"; // Ensure OPTIC_DOMAIN is defined
    return [
      {
        source: "/optic",
        destination: `${OPTIC_DOMAIN}/optic`,
      },
      {
        source: "/optic/:path+",
        destination: `${OPTIC_DOMAIN}/optic/:path*`,
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