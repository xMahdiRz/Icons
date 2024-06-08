/** @type {import('next').NextConfig} */
// next.config.mjs
const nextConfig = {
  async rewrites() {
    const rewrites = [
      {
        source: "/api/icons",
        destination: "/icons",
      },
    ];
    return rewrites;
  },
};

export default nextConfig;
