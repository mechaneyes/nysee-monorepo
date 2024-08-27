/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/radar",
  async rewrites() {
    return [
      {
        source: "/lowdown",
        destination: `${process.env.LOWDOWN_DOMAIN}/lowdown`,
        // basePath: false,
      },
      {
        source: "/lowdown/:path+",
        destination: `${process.env.LOWDOWN_DOMAIN}/lowdown/:path*`,
        // basePath: false,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/radar",
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
        hostname: "wordpressmu-1313045-4824823.cloudwaysapps.com",
        pathname: "/**",
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
