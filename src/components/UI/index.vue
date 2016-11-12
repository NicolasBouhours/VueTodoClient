<template>
  <div id="container">
    <h1>UI KIT</h2>
    <h2>Button</h2>
    <c-button color="primary">Coucou</c-button>
    <c-button color="success">Coucou</c-button>
    <c-button color="error">Coucou</c-button>
    <c-button color="warning">Coucou</c-button>
    <c-button color="default">Coucou</c-button> <br> <br>
    <c-button color="primary" size="lg">Coucou</c-button>
    <c-button color="primary">Coucou</c-button>
    <c-button color="primary" size="sm">Coucou</c-button>
    <c-button color="primary" :disabled=true>Coucou</c-button>

    <h2>Icon</h2>
    <icon name="account"></icon>
    <icon name="account" :size=70></icon>
    <icon name="account" :size=160></icon>

  </div>
</template>

<script>
import CButton from '../Shared/Button'
import Icon from '../Shared/Icon'

export default {
  components: { CButton, Icon }
}
</script>

<style>
</style>
