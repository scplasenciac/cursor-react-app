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
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/api/:path*',
      },
    ];
  },
}

module.exports = nextConfig 