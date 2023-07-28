import { getGlobalAxios, getAxios, AllType } from '@dreamjser/request-axios'
import { showLoading, hideLoading } from './loading'
import { Toast } from 'antd-mobile'

const axiosInstance = getGlobalAxios({
  timeout: 30000,
  baseURL: GLOBAL_CONFIG.BASE_URL,
})

const requestHook = (config: any) => {
  !config.slient && showLoading()
}

const responseHook = (reslove: any, reject: any, res: any) => {
  const { config, data } = res
  const { errorCode, errorMsg } = data

  !config.slient && setTimeout(hideLoading, 100)

  if (errorCode !== '0') {
    if (config.publicError) {
      Toast.show({
        icon: 'fail',
        content: errorMsg,
      })
    } else {
      reject({
        errorCode,
        errorMsg,
      })
    }
    return
  }

  reslove(data)
}

const request = (opts: AllType) => {
  opts.requestHook = requestHook
  opts.responseHook = responseHook
  return getAxios(opts, axiosInstance).catch(() => {
    Toast.show({
      icon: 'fail',
      content: '网络请求失败',
    })
  })
}

export default request
