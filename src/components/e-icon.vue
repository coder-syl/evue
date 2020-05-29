<template>
    <svg  @click="clickHandler"
         class="e-icon" aria-hidden="true" :style="{color}">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>
<script>
import '../../static/icon/iconfont'
export default {
  name: 'e-icon',
  props: ['name', 'color', 'hoverColor'],
  methods: {
    clickHandler () {
      this.$emit('click')
    }
  }
}
</script>
<style lang="scss" scoped>
    .e-icon {
        width: 1.5em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    @keyframes spin {
      0% {transform: rotate(0deg)}
      100% {transform: rotate(360deg)}
    }
    .loading{
      animation: spin 1s infinite linear
    }

</style>
