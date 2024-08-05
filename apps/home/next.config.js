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
};

module.exports = nextConfig;
