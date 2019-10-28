import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from './api/index'

import formatDate from './lib/format-date'

import HeyUI from 'heyui'
import "heyui/themes/index.less"
Vue.use(HeyUI);

import VCharts from 'v-charts'
import 'v-charts/lib/style.css'
Vue.use(VCharts)

import BaiduMap from 'vue-baidu-map'
import api from './api/index'
Vue.use(BaiduMap, {
  ak: '0lPULNZ5PmrFVg76kFuRjezF'
})

Vue.prototype.$api = api
Vue.prototype.$md5 = require('md5')
Vue.prototype.$formatDate = formatDate


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
