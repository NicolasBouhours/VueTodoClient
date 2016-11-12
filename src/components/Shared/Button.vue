<template>
  <button :class="buttonClass" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'c-button',
  props: {
    size: {type: String, default: ''},
    color: {type: String, default: 'default'},
    disabled: {type: Boolean, default: false},
    className: {type: String}
  },
  data () {
    return {
    }
  },
  computed: {
    getSize () {
      let name = ''
      if (this.size.length > 0) {
        name = '-' + this.size
      }
      return 'btn' + name
    },
    getColor () {
      return 'btn-' + this.color
    },
    buttonClass () {
      return 'btn ' + this.className + ' ' + this.getSize + ' ' + this.getColor
    }
  }
}
</script>

<style>

  .btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    line-height: 1.5;
    padding: 4px 15px;
    font-size: 12px;
    border-radius: 3px;
    user-select: none;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform: translate3d(0, 0, 0);
    color: #666;
    background-color: #f7f7f7;
    border-color: #d9d9d9;
  }

  .btn-lg {
    padding: 4px 15px 5px 15px;
    font-size: 14px;
    border-radius: 3px;
  }

  .btn-sm {
    padding: 1px 7px;
    font-size: 12px;
    border-radius: 3px;
  }

  .btn-primary {
    background-color: #369BE9;
    border-color: #369BE9;
    color: white;
  }

  .btn-primary:hover {
    background-color: #5eafed;
    border-color: #369BE9;
  }


  .btn-success {
    background-color: #16C294;
    border-color: #16C294;
    color: white;
  }

  .btn-success:hover {
    background-color: #45cea9;
    border-color: #45cea9;
  }

  .btn-error {
    background-color: #E95471;
    border-color: #E95471;
    color: white;
  }

  .btn-error:hover {
    background-color: #ed768d;
    border-color: #ed768d;
  }

  .btn-warning {
    background-color: #FA9E33;
    border-color: #FA9E33;
    color: white;
  }

  .btn-warning:hover {
    background-color: #fbb15c;
    border-color: #fbb15c;
  }

  .btn-default {
    background-color: transparent;
    border-color: #d9d9d9;
    color: #858585;
  }

  .btn-default:hover {
    background-color: transparent;
    border-color: #5eafed;
    color: #5eafed;
  }

  .btn[disabled] {
    color: #ccc;
    background-color: #f7f7f7;
    border-color: #d9d9d9;
  }

</style>
