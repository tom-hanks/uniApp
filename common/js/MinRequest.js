const config = Symbol('config')
const isCompleteURL = Symbol('isCompleteURL')
const requestBefore = Symbol('requestBefore')
const requestAfter = Symbol('requestAfter')

class MinRequest {
  [config] = {
    baseURL: '',
    header: {
      'content-type': 'application/json'
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text'
  }

  // 实例化过后调用的 请求拦截 和 响应拦截器
  interceptors = {
    request: (func) => {
      if (func) {
		  // 在http.js里面的处理够的数据返回来，下面执行请求的时候需要用
        MinRequest[requestBefore] = func
      } else {
        // MinRequest[requestBefore] = (request) => request
		MinRequest[requestBefore] = function (request) {
			console.log('胡阿尤====',request)
		  return request;
		};
		/*相当于
		MinRequest[requestBefore] = function (request) {
		  return request;
		};
		*/
      }
      
    },
    response: (func) => {
      if (func) {
        MinRequest[requestAfter] = func
      } else {
        MinRequest[requestAfter] = (response) => response
      }
    }
  }

  static [requestBefore] (config) {
    return config
  }

  static [requestAfter] (response) {
    return response
  }

  static [isCompleteURL] (url) {
    return /(http|https):\/\/([\w.]+\/?)\S*/.test(url)
  }
  //设置默认配置 
  setConfig (func) {
	  // 传进来的是一个匿名自执行函数把 this[config] 传进去让外部修改默认值
    this[config] = func(this[config])
  }

  request (options = {}) {
	  console.log('options:',options)
    options.baseURL = options.baseURL || this[config].baseURL
    options.dataType = options.dataType || this[config].dataType
    options.url = MinRequest[isCompleteURL](options.url) ? options.url : (options.baseURL + options.url)
    options.data = options.data
    options.header = {...options.header, ...this[config].header}
    options.method = options.method || this[config].method

    options = {...options, ...MinRequest[requestBefore](options)}
    return new Promise((resolve, reject) => {
		// uni.request请求成功触发
      options.success = function (res) {
        resolve(MinRequest[requestAfter](res))
      }
	  // uni.request请求失败触发
      options.fail= function (err) {
        reject(MinRequest[requestAfter](err))
      }
	  console.log('shishis====',options)
	  // uniapp自己的请求方法
      uni.request(options)
    })
  }

  get (url, data, options = {}) {
    options.url = url
    options.data = data
    options.method = 'GET'
	console.log("什么鬼====: " ,this);
    return this.request(options)
  }

  post (url, data, options = {}) {
    options.url = url
    options.data = data
    options.method = 'POST'
    return this.request(options)
  }
}

MinRequest.install = function (Vue) {
	console.log('csw===',Vue)
  Vue.mixin({
    beforeCreate: function () {
		console.log("$options:" +this.$options.http)
			if (this.$options.http) {
				Vue._http = this.$options.http
			}
    }
  })
  Object.defineProperty(Vue.prototype, '$minApi', {
    get: function () {
			console.log("Vueget: " + Vue._http);
			return Vue._http.apis
		},
	post: function () {
			console.log("Vuepost: " + Vue._http);
			return Vue._http.apis
		}
  })
}

export default MinRequest