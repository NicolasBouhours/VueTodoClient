import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(Vuex)

const App = require('./App')

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: require('./components/Accueil'),
    name: 'accueil'
  }, {
    path: '/hello',
    component: resolve => require(['./components/Hello'], resolve),
    name: 'hello'
  }, {
    path: '/todos',
    component: require('./components/Todo/Todos'),
    name: 'todos'
  }, {
    path: '*',
    redirect: '/'
  }]
})

new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
