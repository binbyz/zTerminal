<template lang="pug">
  li.tab
    button C:\
</template>

<script>
export default {
  name: 'Tab',
}
</script>

<style lang="scss">
@import '~@/assets/scss/_variables';

.tab {
  flex: 0 1 110px;
  button {
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    background-color: transparent;
    text-align: left;
    line-height: 180%;
    border: 1px solid $color-black-800;
  }
}
</style>
