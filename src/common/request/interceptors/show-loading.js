// import loading from '@/common/components/loading'

let count = 0

const showLoading = () => {
  count++
  if (count <= 1) {
    // loading.show()
  }
}

const hideLoading = () => {
  if (count > 0) {
    count--
  }

  if (count <= 0) {
    // loading.hide()
  }
}

export default (instance) => {
  instance.interceptors.request.use(
    (config) => {
      const userInfo = App.vm.$store.state.userInfo || {}
      if (!config.slient) {
        showLoading()
      }
      if (!config.noAuth) {
        if (userInfo.token) {
          config.headers.token = userInfo.token
        } else {
          App.vm.$router.push({
            path: '/mb_login/login/index',
            query: {
              redirectUrl: encodeURIComponent(App.vm.$route.path),
            },
          })
          return Promise.reject()
        }
      }
      return config
    },
    (error) => Promise.reject(error)
  )

  instance.interceptors.response.use(
    (r) => {
      if (!r.config.slient) {
        hideLoading()
      }
      return r
    },
    (error) => {
      hideLoading()
      return Promise.reject(error)
    }
  )
}
