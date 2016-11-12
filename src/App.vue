<template>
  <div id="app">
    <router-link :to="{name: 'accueil'}" class="header item">Accueil</router-link>
    <router-link :to="{name: 'hello'}" class="item">Hello</router-link>
    <router-link :to="{name: 'todos'}" class="item">Todos</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Todos from './components/Todo/Todos'

export default {
  name: 'app',
  components: {
    Todos
  },
  methods: {
  }
}
</script>
