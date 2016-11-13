<template>
  <section class="hero is-fullheight is-ligth">

      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-4 is-offset-4">
              <h1 class="title">
                Connexion
              </h1>
              <div class="box">
                <label class="label">Email</label>
                <p class="control">
                  <input class="input" type="text" placeholder="youremail@example.fr">
                </p>
                <label class="label">Mot de passe</label>
                <p class="control">
                  <input class="input" type="password" placeholder="●●●●●●●">
                </p>
                <hr>
                <p class="control columns">
                  <button id="btnLogin" class="button is-primary column is-6 is-offset-3">Se connecter</button>
                </p>
              </div>
              <p class="has-text-centered">
                <router-link :to="{name: 'register'}">Créer un compte</router-link>
                |
                <a href="#">Mot de passe oublié</a>
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
  #btnLogin {
    line-height: 14px;
  }
</style>
