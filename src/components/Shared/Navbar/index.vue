<template lang="html">
  <nav class="nav">
    <div class="nav-left">
      <a class="nav-item is-brand" href="#">
        <span class="title is-bold">Kit</span>
      </a>
    </div>

    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <div class="nav-right nav-menu">

      <router-link :to="{name: 'accueil'}" class="nav-item">Accueil</router-link>
      <router-link :to="{name: 'board'}" class="nav-item">Board</router-link>
      <router-link :to="{name: 'todos'}" class="nav-item">Todos</router-link>

      <span class="nav-item">
        <router-link :to="{name: 'register'}" class="button">S'inscrire</router-link>
        <router-link :to="{name: 'login'}" class="button is-primary">Connexion</router-link>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="css">
  .nav {
    border-bottom: 1px solid #dbdbdb;
  }
</style>
