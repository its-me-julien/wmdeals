/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export (only needed for GitHub Pages)
  images: {
    unoptimized: true, // Disables Next.js Image Optimization (needed for GitHub Pages)
  },
};

module.exports = nextConfig;
