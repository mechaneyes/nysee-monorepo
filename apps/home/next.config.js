/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const NEXT_PUBLIC_OPTIC_DOMAIN = process.env.NEXT_PUBLIC_OPTIC_DOMAIN || "default_domain"; // Ensure NEXT_PUBLIC_OPTIC_DOMAIN is defined
    return [
      {
        source: "/optic",
        destination: `${NEXT_PUBLIC_OPTIC_DOMAIN}/optic`,
      },
      {
        source: "/optic/:path+",
        destination: `${NEXT_PUBLIC_OPTIC_DOMAIN}/optic/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
