// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routerMap from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueAsyncData from 'vue-async-data'
import filter from './filter'
import directive from './directive'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueAsyncData)

Object.keys(filter).forEach(function (k) {
  Vue.filter(k, filter[k])
})

Object.keys(directive).forEach(function (k) {
  Vue.directive(k, directive[k])
})

var router = new VueRouter()
routerMap(router)
router.start(App, 'app')
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
