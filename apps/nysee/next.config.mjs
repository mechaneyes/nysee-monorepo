/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '',
    async rewrites() {
      const opticPort = process.env.OPTIC_PORT || 3001; // Default to 3001 if not set
      return [
        {
          source: '/optic/:path*',
          destination: `http://localhost:${opticPort}/:path*`,
        },
      ];
    },
  };
  
  export default nextConfig;