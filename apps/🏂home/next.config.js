/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.bsky.app"],
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "relay.nysee.nyc",
          },
        ],
        destination: "https://nysee.nyc/relay",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "relay.nysee.nyc",
          },
        ],
        destination: "https://nysee.nyc/relay/:path*",
        permanent: true,
      },
    ];
  },
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
