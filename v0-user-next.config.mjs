/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Increase timeout for large builds
    staticPageGenerationTimeout: 180,
    // These experimental features help with client/server component issues
    serverComponentsExternalPackages: [],
    optimizeCss: true,
    webpackBuildWorker: true,
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production",
    styledComponents: true,
  },
  // Ensure hydration errors are treated as warnings in development
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 5,
  },
  images: {
    domains: ['placeholder.com', 'placehold.co'],
  },
  // Add any additional configuration as needed
};

export default nextConfig;

