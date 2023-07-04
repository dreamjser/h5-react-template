import { getGlobalAxios, getAxios, AllType } from '@dreamjser/request-axios'
import { Toast } from 'antd-mobile'

let loadingCount = 0

const showLoading = () => {
  loadingCount++
  Toast.show({
    duration: 0,
    icon: 'loading',
    content: '加载中…',
  })
}

const hideLoading = () => {
  loadingCount--
  if (loadingCount <= 0) {
    Toast.clear()
  }
}

const axiosInstance = getGlobalAxios({
  timeout: 30000,
  baseURL: 'http://localhost:4002/api/',
})

const requestHook = (config: any) => {
  !config.slient && showLoading()
}

const responseHook = (data: any) => {
  const { config } = data

  !config.slint && setTimeout(hideLoading, 100)
  console.log(data, '99')

  return true
}

const request = (opts: AllType) => {
  opts.requestHook = requestHook
  opts.responseHook = responseHook
  return getAxios(opts, axiosInstance)
}

export default request
