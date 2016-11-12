<template>
  <div id="container">
    <h2>UI KIT</h2>
    <c-button color="primary">Coucou</c-button>
    <c-button color="success">Coucou</c-button>
    <c-button color="error">Coucou</c-button>
    <c-button color="warning">Coucou</c-button>
    <c-button color="default">Coucou</c-button> <br> <br>
    <c-button color="primary" size="lg">Coucou</c-button>
    <c-button color="primary">Coucou</c-button>
    <c-button color="primary" size="sm">Coucou</c-button>
    <c-button color="primary" disabled="true">Coucou</c-button>


  </div>
</template>

<script>
import CButton from '../Shared/Button.vue'

export default {
  components: { CButton }
}
</script>

<style>
</style>
