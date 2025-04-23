/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/cursor-react-app' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cursor-react-app/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/bmi': { page: '/bmi' },
      '/booking': { page: '/booking' },
    }
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
  // Ensure static assets are properly handled
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
      '/sports-hero.jpg': { page: '/sports-hero.jpg' },
    }
  },
}

module.exports = nextConfig 