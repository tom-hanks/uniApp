import MinRequest from './MinRequest'

const minRequest = new MinRequest()

// 请求拦截器
minRequest.interceptors.request((request) => {
  return request
})

// 响应拦截器
minRequest.interceptors.response((response) => {
  return response.data
})

// 设置默认配置
minRequest.setConfig((config) => {
  config.baseURL = 'https://www.vue-js.com/api/v1'
  return config
})


export default {
  apis: {
    uniapp (data) {
      return minRequest.get('/topics', data)
    }
  }
}