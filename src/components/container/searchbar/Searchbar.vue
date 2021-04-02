<template lang="pug">
  #searchbar
    form
      input#input-global-search(type="text", autofocus, autocomplete="false")
      button#global-search-submit(type="submit")
        font-awesome-icon.fa(icon="search")
</template>

<script>
export default {
  name: 'Searchbar',
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_variables';

#searchbar {
  width: 575px;
  padding: $default-box-padding;
  form {
    width: 100%;
    position: relative;
  }
  #input-global-search {
    padding: 0 20px;
    line-height: 200%;
    font-size: 100%;
    width: 100%;
    outline: none;
    border: none;
    background-color: $color-white;
    border-radius: 30px;
    border: 1px solid $color-black-800;
    box-sizing: border-box;
    &:hover {
      box-shadow: 1px 1px 8px 1px $color-black-800;
    }
    &:focus-within {
      box-shadow: 1px 1px 8px 1px $color-black-800;
      outline: none;
    }
  }
  #global-search-submit {
    position: absolute;
    top: 7px;
    right: 7px;
    border: none;
    background-color: transparent;
    > .fa {
      color: $color-black-300;
    }
  }
}
</style>
