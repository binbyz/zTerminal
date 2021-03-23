<template lang="pug">
  #searchbar
    input#input-global-search(type="text", autofocus, autocomplete="false")
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_variables';

#searchbar {
  margin-bottom: 10px;
  #input-global-search {
    padding: 0 10px;
    border-radius: 5px;
    line-height: 200%;
    font-size: 120%;
    outline: none;
    background-color: $backcolor-300;
    border: none;
    color: $default-font-color;
    min-width: 250px;
  }
}
</style>