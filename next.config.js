// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tells Next.js that the source directory for the App Router is 'src'
  experimental: {
    appDir: true,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'], 
  outputFileTracingRoot: __dirname, 
};

module.exports = nextConfig;