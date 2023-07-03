import { getGlobalAxios, getAxios, AllType } from '@dreamjser/request-axios'

const axiosInstance = getGlobalAxios({
  timeout: 30000,
  baseURL: 'http://localhost:4002/api/',
})

const request = (opts: AllType) => {
  return getAxios(opts, axiosInstance)
}

export default request
