/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['img.lojasrenner.com.br'],
  },
}

module.exports = nextConfig
