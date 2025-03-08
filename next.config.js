const redirects = require('./content/redirects');

const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      // Object.assign(config.resolve.alias, {
      //   react: 'preact/compat',
      //   'react-dom/test-utils': 'preact/test-utils',
      //   'react-dom': 'preact/compat'
      // })
    }
    
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  },
  async redirects() {
    return redirects
  },
}

module.exports = nextConfig
