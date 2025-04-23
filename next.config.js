/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/cursor-react-app' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cursor-react-app/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'build',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
}

module.exports = nextConfig 