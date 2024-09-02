/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/lowdown",
        destination: `${process.env.LOWDOWN_DOMAIN}/lowdown`,
      },
      {
        source: "/lowdown/:path+",
        destination: `${process.env.LOWDOWN_DOMAIN}/lowdown/:path*`,
      },
      {
        source: "/radar",
        destination: `${process.env.RADAR_DOMAIN}/radar`,
      },
      {
        source: "/radar/:path+",
        destination: `${process.env.RADAR_DOMAIN}/radar/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
