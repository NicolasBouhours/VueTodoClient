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
    component: require('./components/Home'),
    name: 'accueil'
  }, {
    path: '/register',
    component: require('./components/Register'),
    name: 'register'
  }, {
    path: '/board',
    component: require('./components/Board'),
    name: 'board'
  }, {
    path: '/login',
    component: require('./components/Login'),
    name: 'login'
  }, {
    path: '/todos',
    component: resolve => require(['./components/Todo/Todos'], resolve),
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
