<template lang="pug">
  aside#aside
    ul#category
      li#bookmark
        .category-title 즐겨찾기
      li#location
        .category-title 드라이브
      li#tags
        .category-title 태그
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
  background-color: $backcolor-300;
  padding: $default-box-padding;
  border-right: 1px solid #000;
}

#category {
  li {
    margin-bottom: 10px;
  }
  .category-title {
    font-size: 110%;
    color: #fff;
  }
}
</style>