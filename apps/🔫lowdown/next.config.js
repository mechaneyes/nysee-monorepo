/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/lowdown",
  async rewrites() {
    return [
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
  async redirects() {
    return [
      {
        source: "/",
        destination: "/lowdown",
        basePath: false,
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "0.gravatar.com",
        pathname: "/avatar/**",
      },
      {
        protocol: "http",
        hostname: "0.gravatar.com",
        pathname: "/avatar/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        pathname: "/avatar/**",
      },
      {
        protocol: "https",
        hostname: "wordpress-1313045-4791931.cloudwaysapps.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
