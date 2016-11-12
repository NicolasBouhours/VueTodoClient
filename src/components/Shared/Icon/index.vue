<template lang="html">
  <div class="iconContainer">
    <span :class="spanClass" :style="styleObject"></span>
  </div>
</template>

<script>
export default {
  name: 'icon',
  props: {
    name: {type: String, required: true},
    size: {type: Number, default: 30}
  },
  computed: {
    getName () {
      return 'icon-' + this.name
    },
    spanClass () {
      return 'cicon ' + this.getName
    },
    styleObject () {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        backgroundSize: this.size + 'px'
      }
    }
  }
}
</script>

<style lang="css">
  .iconContainer {
    margin: 5px;
  }

  .cicon {
    display: block;
  }

  .icon-account {
    background-image: url('png/account.png');
  }
</style>
