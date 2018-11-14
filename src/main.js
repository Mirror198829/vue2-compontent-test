// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.css'

import nlComponentLib from './nlComponentLib'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'


Vue.use(ElementUI)
Vue.use(nlComponentLib)
Vue.use(mavonEditor)
Vue.config.productionTip = false
Vue.component('my-component',{
	template:'<div>我是一个全局的componet组件</div>'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
