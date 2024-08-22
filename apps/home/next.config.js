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
      {
        source: "/radar",
        destination: `${process.env.NEXT_PUBLIC_RADAR_DOMAIN}/radar`,
      },
      {
        source: "/radar/:path+",
        destination: `${process.env.NEXT_PUBLIC_RADAR_DOMAIN}/radar/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
