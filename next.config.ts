/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export for GitHub Pages
  images: {
    unoptimized: true, // Disables Next.js Image Optimization (GitHub Pages doesn't support it)
  },
  basePath: "/wmdeals", // Ensures correct asset paths for GitHub Pages
  assetPrefix: "/wmdeals/", // Prevents broken CSS, JS, and images
};

module.exports = nextConfig;
