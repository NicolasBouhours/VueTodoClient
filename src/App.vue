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
  html {
    overflow-y: auto;
  }
  html, body {
    height: 100%;
  }
  body {
    background-color: white;
  }
</style>
