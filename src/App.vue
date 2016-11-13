<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Todos from './components/Todo/Todos'
import Navbar from './components/Shared/Navbar'

export default {
  name: 'app',
  components: {
    Todos, Navbar
  },
  methods: {
  }
}
</script>

<style src="../node_modules/bulma/css/bulma.css"></style>
<style>
</style>
