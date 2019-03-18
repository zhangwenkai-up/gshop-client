// 入口js
import Vue from 'vue'
import App from './App'

import router from './router'
import Header from './components/Header/Header'

// 注册全局组件
Vue.component('Header', Header)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 注册组件
  components: {
    App
  },
  template: '<App/>',
  // 去掉 #
  mode: 'history',
  // 配置路由器
  router
})
