import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  * as _http from './api'
import '@/utils/compatible'
import '@/style/reset.scss'
import '@/static/fontIcon/iconfont.css'

Vue.prototype.$http = _http

require('./mock/index.js')
Vue.prototype.productionTip = false
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app")