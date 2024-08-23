if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables NEXT_PUBLIC_WORDPRESS_API_URL.
  `);
}

try {
  new URL(process.env.NEXT_PUBLIC_WORDPRESS_API_URL);
} catch (err) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    The provided URL is invalid: ${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}
  `);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/radar",
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
  async rewrites() {
    return [
      {
        source: "/optic",
        destination: `${process.env.OPTIC_DOMAIN}/optic`,
      },
      {
        source: "/optic/:path+",
        destination: `${process.env.OPTIC_DOMAIN}/optic/:path*`,
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
