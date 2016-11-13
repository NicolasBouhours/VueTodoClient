<template>
  <section class="hero is-fullheight is-ligth">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-8 is-offset-2">
            <h1 class="title">
              Créer un compte
            </h1>
            <div class="box">
              <div class="columns is-vcentered">
                <div class="column is-6">
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
                </div>
                <div class="column is-6">
                  <label class="label">Téléphone</label>
                  <p class="control">
                    <input class="input" type="text">
                  </p>
                  <label class="label">Adresse</label>
                  <p class="control">
                    <input class="input" type="text">
                  </p>
                  <div class="columns is-vcentered">
                    <div class="column is-8">
                      <label class="label">Ville</label>
                      <p class="control">
                        <input class="input" type="text">
                      </p>
                    </div>
                    <div class="column is-4">
                      <label class="label">Code postal</label>
                      <p class="control">
                        <input class="input" type="text">
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
              <p class="control columns">
                <button id="btnRegister" class="button is-primary column is-6 is-offset-3">Créer le compte</button>
              </p>
            </div>
            <p class="has-text-centered">
              Vous possèdez déja un compte ? <router-link :to="{name: 'login'}">Se connecter</router-link>
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
  #btnRegister {
    line-height: 14px;
  }
</style>
