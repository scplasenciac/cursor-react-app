/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/cursor-react-app',
  assetPrefix: '/cursor-react-app/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig 