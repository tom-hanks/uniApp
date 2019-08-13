import Vue from 'vue'
import App from './App'

import MinRequest from './common/js/MinRequest'
Vue.use(MinRequest)

import http from './common/js/http'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	http
})
app.$mount()
