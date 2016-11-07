import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const API_ROOT = 'http://localhost:8000/api/'

// HTTP
Vue.http.options.crossOrigin = true

export const TodoResource = Vue.resource(API_ROOT + 'todo{/id}')

export const getTodos = function () {
  return TodoResource.get()
}
export const createTodo = function (name) {
  return TodoResource.save({name: name})
}
export const updateTodo = function (todo, name) {
  return TodoResource.update({id: todo._id}, {name: todo.name, completed: todo.completed, newName: name})
}
export const deleteTodo = function (todo) {
  return TodoResource.delete({id: todo._id})
}
