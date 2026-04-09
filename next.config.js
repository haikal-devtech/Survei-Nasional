/** @type {import('next').NextConfig} */
const nextConfig = {
  // Supaya html2canvas bisa capture cross-origin images kalau ada
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;
