<template>
  <div id="app">
    <router-link :to="{name: 'accueil'}" class="header item">Accueil</router-link>
    <router-link :to="{name: 'register'}" class="item">Register</router-link>
    <router-link :to="{name: 'login'}" class="item">Login</router-link>
    <router-link :to="{name: 'ui'}" class="item">UI Kit</router-link>
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

<style src="../node_modules/bulma/css/bulma.css"></style>
<style>
  .primary {
    background-color: #369BE9;
    border-color: #369BE9;
  }

  .primary:hover {
    background-color: #5eafed;
    border-color: #369BE9;
  }

  .primaryColor {
    color: #369BE9;
  }

  .success {
    background-color: #16C294;
    border-color: #16C294;
  }

  .successHover {
    background-color: #45cea9;
    border-color: #45cea9;
  }

  .successColor {
    color: #16C294;
  }

  .error {
    background-color: #E95471;
    border-color: #E95471;
  }

  .error:hover {
    background-color: #ed768d;
    border-color: #ed768d;
  }

  .errorColor {
    color: #E95471;
  }

  .warning {
    background-color: #FA9E33;
    border-color: #FA9E33;
  }

  .warning:hover {
    background-color: #fbb15c;
    border-color: #fbb15c;
  }

  .warningColor {
    color: #FA9E33;
  }

  .default {
    background-color: transparent;
    border-color: #d9d9d9;
  }

  .default:hover {
    background-color: transparent;
    border-color: #5eafed;
  }

  .defaultColor {
    color: #16C294;
  }

</style>
