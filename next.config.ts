/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export for GitHub Pages
  images: {
    unoptimized: true, // Fixes image loading on GitHub Pages
  },
  trailingSlash: true, // Ensures all pages have a trailing slash
};

module.exports = nextConfig;
