import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const API_ROOT = 'http://localhost:8000/api/'

// HTTP
Vue.http.options.crossOrigin = true

export const TodoResource = Vue.resource(API_ROOT + 'todo{/id}')
