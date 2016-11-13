<template>
  <section class="hero is-fullheight is-ligth">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-4 is-offset-4">
            <h1 class="title">
              Créer un compte
            </h1>
            <div class="box">
              <label class="label">Prénom</label>
              <p class="control">
                <input class="input" type="text">
              </p>
              <label class="label">Nom</label>
              <p class="control">
                <input class="input" type="text">
              </p>
              <label class="label">Email</label>
              <p class="control">
                <input class="input" type="text">
              </p>
              <hr>
              <label class="label">Mot de passe</label>
              <p class="control">
                <input class="input" type="password" placeholder="●●●●●●●">
              </p>
              <label class="label">Confirmer le mot de passe</label>
              <p class="control">
                <input class="input" type="password" placeholder="●●●●●●●">
              </p>
              <hr>
              <p class="control">
                <button class="button is-primary">S'enregister</button>
              </p>
            </div>
            <p class="has-text-centered">
              <router-link :to="{name: 'login'}">Déja un compte ? Se connecter</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style>
</style>
