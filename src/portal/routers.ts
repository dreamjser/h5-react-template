import React from 'react'
export default [
  {
    name: 'mb_loginloginindex',
    path: '/mb_login/login/index',
    component: React.lazy(() => import('@/modules/mb_login/views/login/index')),
    meta: {
      title: '登录',
      needLogin: true,
      checkCard: false,
      checkTransfer: false,
    },
  },
]
