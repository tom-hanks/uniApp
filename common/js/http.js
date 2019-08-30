import MinRequest from './MinRequest'

const minRequest = new MinRequest()

// 请求拦截器
// minRequest.interceptors.request((request) => {
// 	console.log('8/14===',request)
//   return request
// })
minRequest.interceptors.request(false)
// 响应拦截器
minRequest.interceptors.response((response) => {
  return response.data
})

// 设置默认配置 一些请求头一些type协议之类的
minRequest.setConfig((config) => {
  config.baseURL = 'https://www.vue-js.com/api/v1';
  return config
})


export default {
  apis: {
    get (url,data) {
      return minRequest.get(url, data)
    },
	post (url,data) {
	  return minRequest.post(url, data)
	}
  }
}