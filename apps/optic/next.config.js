if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ],
  },
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
