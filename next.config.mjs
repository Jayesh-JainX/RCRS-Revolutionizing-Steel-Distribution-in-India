/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React strict mode for improved error handling
  swcMinify: true, // Enable SWC minification for improved performance
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
  // Add an empty Turbopack config to silence Next.js 16 warning
  // when a webpack config (from a plugin) is present.
  turbopack: {},
};

export default nextConfig;
