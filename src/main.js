// 入口js
import Vue from 'vue'
import App from './App'

import router from './router'

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
