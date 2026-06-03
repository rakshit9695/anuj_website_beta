/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  eslint: {
    // Lint runs separately; don't fail production builds on lint warnings.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
