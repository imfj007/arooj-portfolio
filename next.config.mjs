/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  output: 'export',
  basePath: '/arooj-portfolio',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
