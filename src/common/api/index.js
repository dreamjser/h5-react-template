import request from '@/common/request'
import urlMpas from './maps'

const apiObject = {}

const createFormData = (params) => {
  const formData = new FormData()
  Object.keys(params).forEach((k) => {
    formData.append(k, params[k])
  })
  return formData
}

// 获取url
const getConfigUrl = (config) => {
  const { url, baseURL } = config

  if (baseURL) {
    return baseURL + url
  }

  return GLOBAL_CONFIG.BASE_URL + url
}

// 获取method
const getConfigMethod = (config) => {
  let m = 'post'

  if (config.method) {
    const { method } = config
    m = method
  }

  return m
}

// 生成请求方法
const createRequestFunction =
  (o) =>
  (
    opts = {
      data: {},
      config: {},
    }
  ) => {
    let { data, config } = opts
    config = {
      ...o,
      ...config,
    }

    if (config.isUpload) {
      data = createFormData(data)
    }

    config.url = getConfigUrl(config)
    config.method = getConfigMethod(config)

    if (config.method === 'get') {
      config.params = data
    } else {
      config.data = data
    }

    return new Promise((reslove, reject) => {
      request(config)
        .then((r) => {
          if (r.errorCode === '0') {
            reslove(r.data)
          }
        })
        .catch(reject)
    })
  }

// 组装请求方法
const fillRequestMethods = (api, urls) => {
  const apiObj = api
  Object.keys(urls).forEach((k) => {
    let o = urls[k]
    if (typeof o === 'string') {
      o = {
        url: urls[k],
      }
    }
    if (o.url) {
      apiObj[k] = createRequestFunction(o)
    } else {
      apiObj[k] = {}
      fillRequestMethods(apiObj[k], o)
    }
  })
}

fillRequestMethods(apiObject, urlMpas)

apiObject.install = (Vue) => {
  const vueClass = Vue
  vueClass.prototype.$api = apiObject
}

export default apiObject
