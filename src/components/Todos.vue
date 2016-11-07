<template>
<section class="todoapp">
  <header class="header">
    <h1>Todos</h1>
    <input type="text" class="new-todo" placeholder="Add a new todo" v-model="newTodo" @keyup.enter="addTodo()">
  </header>
  <div class="main">
    <input type="checkbox" class="toggle-all" v-model="allDone">
    <ul class="todo-list">
      <li class="todo" v-for="(todo, index) in filteredTodos" :class="{completed: todo.completed, editing: todo === editing}">
        <div class="view">
          <input type="checkbox" class="toggle" v-bind:checked="todo.completed" @change="changeCompletedStatus(todo)">
          <label @dblclick="editTodo(todo)">{{ todo.name }}</label>
          <button type="button" class="destroy" @click.prevent="deleteTodo(todo)"></button>
        </div>
        <input type="text" class="edit" v-model="todoNameEdit" @keyup.enter="doneEdit" @keyup.esc="cancelEdit" v-focus="todo === editing">
      </li>
    </ul>
  </div>
  <footer class="footer" v-show="hasTodo">
    <span class="todo-count">
      <strong>{{ remainingTodosCount }}</strong> tâches à faire
    </span>
    <ul class="filters">
      <li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a></li>
      <li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">A faire</a></li>
      <li><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Faites</a></li>
    </ul>
    <button type="button" class="clear-completed" v-show="completedTodosCount" @click.prevent="deleteCompleted">Supprimer les tâches finies</button>
  </footer>
</section>

</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import store from './TodosStore'

global.v = Vuex

export default {
  store: store,
  data () {
    return {
      todos: [],
      newTodo: '',
      filter: 'all',
      editing: null,
      oldTodo: '',
      todoNameEdit: ''
    }
  },
  computed: {
    ...Vuex.mapGetters([
      'todos',
      'remainingTodosCount',
      'completedTodosCount',
      'completedTodos',
      'remainingTodos'
    ]),
    allDone: {
      get () {
        return this.remaining === 0
      },
      set (value) {
        this.changeStatusForAll(value)
      }
    },
    filteredTodos () {
      if (this.filter === 'todo') {
        return this.remainingTodos
      } else if (this.filter === 'done') {
        return this.completedTodos
      }

      return this.todos
    },
    hasTodo () {
      return this.todos.length > 0
    }
  },
  methods: {
    ...Vuex.mapActions({
      addTodoStore: 'addTodo',
      changeStatus: 'changeStatus',
      changeStatusForAll: 'changeStatusForAll',
      deleteTodo: 'deleteTodo',
      deleteCompleted: 'deleteTodoCompleted',
      changeName: 'changeName',
      getTodos: 'getTodos'
    }),

    addTodo () {
      this.addTodoStore(this.newTodo)
      this.newTodo = ''
    },

    editTodo (todo) {
      this.todoNameEdit = todo.name
      this.editing = todo
      this.oldTodo = todo.name
    },

    doneEdit () {
      this.changeName({todo: this.editing, newName: this.todoNameEdit})
      this.editing = null
      this.todoNameEdit = ''
    },

    changeCompletedStatus (todo) {
      this.changeStatus(todo)
    },

    cancelEdit () {
      this.editing.name = this.oldTodo
      this.doneEdit()
    }
  },
  directives: {
    focus (el, value) {
      if (value) {
        Vue.nextTick(_ => {
          el.focus()
        })
      }
    }
  },
  mounted () {
    this.$todo = this.$resource('todo')
    this.getTodos(this)
  }
}
</script>

<style src="./todos.css"></style>
