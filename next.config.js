/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.icons8.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
        port: '',
      },
    ],
  },
  output: 'export'
}

module.exports = nextConfig
