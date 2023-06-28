// import { Toast } from 'vant'

export default (instance) => {
  instance.interceptors.response.use(
    (r) => {
      const {
        data: { errorCode, errorMsg },
      } = r
      if (errorCode !== '0') {
        if (!r.config.hasOwnError) {
          Toast(errorMsg)
          return r
        }
        return Promise.reject(r)
      }

      return r.data
    },
    (error) => {
      // 处理40x, 50x错误
      if (error.response.status >= 400) {
        // Toast('服务器开小差了,请重试')
        return
      }
      Toast(error.message || '请求失败')
      return Promise.reject(error)
    }
  )
}
