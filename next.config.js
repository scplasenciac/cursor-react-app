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
    // Ensure CSS modules are properly processed
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        },
      ],
    })
    return config
  },
}

module.exports = nextConfig 