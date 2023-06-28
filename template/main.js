import '@/common/styles/app.less'
import '@/common/app'
import Vue from 'vue'
import store from '@/common/store'
import Render from './app'

App.vm = new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(Render),
})
