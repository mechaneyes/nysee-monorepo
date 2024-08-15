/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/optic",
        destination: `${process.env.NEXT_PUBLIC_OPTIC_DOMAIN}/optic`,
      },
      {
        source: "/optic/:path+",
        destination: `${process.env.NEXT_PUBLIC_OPTIC_DOMAIN}/optic/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
