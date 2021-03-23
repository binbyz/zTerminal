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
  flex: 1 1 $default-tab-width;
  button {
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: $hcolor-yellow;
    text-align: left;
    line-height: 180%;
  }
}
</style>