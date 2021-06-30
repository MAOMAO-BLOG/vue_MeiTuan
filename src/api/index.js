import axios from 'axios'
import baseURLS from './URLs.js'
import Store from '../store'
const instance = axios.create({
  baseURL: baseURLS.baseURL
})
// 添加请求拦截器
instance.interceptors.request.use(config => {
  if (config.url.includes('passport')) {
    return config
  } else {
    return {
      ...config,
      params: {
        ...config.params,
        appkey: Store.state.user.appkey
      }
    }
  }
}, error => {
  return Promise.reject(error)
})
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  if (response.data.status === 'fail') {
    return response
  } else {
    return response.data
  }
}, function (error) {
  return Promise.reject(error)
})
const requestHot = () => instance.get(baseURLS.hotSearchList)
const requestSearch = () => instance.get(baseURLS.searchList)
const curPosition = () => instance.get(baseURLS.curPosition)
const classify = () => instance.get(baseURLS.classify)
const leftNav = () => instance.get(baseURLS.leftNav)
const isStyle = () => instance.get(baseURLS.isStyle)
const cityList = () => instance.get(baseURLS.cityList)
const province = () => instance.get(baseURLS.province)
const hotCity = () => instance.get(baseURLS.hotCity)
const recentSearch = () => instance.get(baseURLS.recentSearch)
const goodsList = () => instance.get(baseURLS.goodsList)
const login = (data) => instance.get(baseURLS.login, { params: data })
const register = (data) => instance.get(baseURLS.register, { params: data })
export default {
  requestHot,
  requestSearch,
  curPosition,
  classify,
  leftNav,
  isStyle,
  cityList,
  province,
  hotCity,
  recentSearch,
  goodsList,
  login,
  register
}
