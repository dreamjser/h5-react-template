const path = require('path')

module.exports = {
  // 别名
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@tmp': path.resolve(__dirname, '.tmp'),
  },
  modulePrefix: 'mb_',
  proxyTable: {
    '/api': {
      target: 'http://localhost:4000',
      changeOrigin: true
    }
  },
}
