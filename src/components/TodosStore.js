import Vuex from 'vuex'

import api from '../api/resources'

const state = {
  todos: [{
    name: 'Notre première tache',
    completed: true
  }]
}

const mutations = {
  ADD_TODO: (state, name) => {
    state.todos.push({
      name: name, completed: false
    })
  },
  CHANGE_STATUS: (state, todo) => {
    const index = state.todos.indexOf(todo)
    state.todos[index].completed = !state.todos[index].completed
  },
  CHANGE_STATUS_FOR_ALL: (state, value) => {
    state.todos.forEach((todo) => {
      todo.completed = value
    })
  },
  CHANGE_NAME: (state, payload) => {
    const index = state.todos.indexOf(payload.todo)
    state.todos[index].name = payload.newName
  },
  DELETE_TODO: (state, todo) => {
    state.todos = state.todos.filter(i => i !== todo)
  },
  DELETE_TODO_COMPLETED: (state) => {
    state.todos = state.todos.filter(i => i.completed === false)
  },
  GET_TODOS: (state, todos) => {
    state.todos = todos
  }
}

const actions = {
  addTodo: (store, name) => {
    api.createTodo(name).then((response) => {
      console.log(response)
      store.commit('ADD_TODO', name)
    }, (response) => {
      console.log(response)
    })
  },
  changeStatus: (store, todo) => {
    api.updateTodo(todo).then((response) => {
      store.commit('CHANGE_STATUS', todo)
    }, (response) => {
      console.log(response)
    })
  },
  changeStatusForAll: (store, value) => {
    store.commit('CHANGE_STATUS_FOR_ALL', value)
  },
  changeName: (store, payload) => {
    api.updateTodo(payload.todo, payload.newName).then((response) => {
      store.commit('CHANGE_NAME', payload)
    }, (response) => {
      console.log(response)
    })
  },
  deleteTodo: (store, todo) => {
    api.deleteTodo(todo).then((response) => {
      console.log(response)
      store.commit('DELETE_TODO', todo)
    }, (response) => {
      console.log(response)
    })
  },
  deleteTodoCompleted: (store) => {
    store.commit('DELETE_TODO_COMPLETED')
  },
  getTodos: (store, context) => {
    api.getTodos().then((response) => {
      store.commit('GET_TODOS', response.body)
    })
  }
}

const getters = {
  todos: state => state.todos,
  completedTodos: state => state.todos.filter(todo => todo.completed),
  remainingTodos: state => state.todos.filter(todo => !todo.completed),
  completedTodosCount: state => getters.completedTodos(state).length,
  remainingTodosCount: state => getters.remainingTodos(state).length
}

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  strict: true
})

global.store = store

export default store
