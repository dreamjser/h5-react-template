const path = require('path')

module.exports = {
  // 别名
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@tmp': path.resolve(__dirname, '.tmp'),
    'antd-mobile': 'antd-mobile/2x'
  },
  // 根目录redirect地址
  rootRedirect: '/mb_home/index/index',
  devPort: '3003',
  modulePrefix: 'mb_',
  proxyTable: {
    '/api': {
      target: 'http://localhost:4002',
      changeOrigin: true
    }
  },
}
