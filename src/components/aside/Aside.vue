<template lang="pug">
  aside#aside
    ul#category
      li#location
        .category-title 드라이브
        ul.file-tree
          li
            
</template>

<script>
export default {
  name: 'Aside',
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_variables';

#aside {
  flex: 1 1;
  align-self: stretch;
  background-color: $color-black-1000;
  padding: $default-box-padding;
}

#category {
  li {
    margin-bottom: 10px;
  }
  .category-title {
    font-size: 110%;
  }
}
</style>