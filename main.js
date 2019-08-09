import Vue from 'vue'
import App from './App'
import MinRequest from './common/js/MinRequest'
import minRequest from './common/js/api'

Vue.config.productionTip = false
Vue.use(MinRequest)
App.mpType = 'app'
const app = new Vue({
    ...App,
	MinRequest
})
app.$mount()
