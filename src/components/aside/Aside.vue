<template lang="pug">
  aside#aside(style="width: 500px")
    ul#category
      li#logo
        .category-title.logo zTerminal
      li#location
        .category-title
          strong 드라이브
      FileTree(:trees="drives")
</template>

<style lang="scss" scoped>
@import '~@/assets/scss/_variables';
@import '~@/assets/scss/_mixin';

#aside {
  flex: 1 1;
  min-width: 100px;
  align-self: stretch;
  padding: $default-box-padding;
  background-color: $color-black-1000;
  border-right: 1px solid $color-black-800;
}

#category {
  li {
    margin-bottom: 10px;
    &#logo {
      margin-bottom: 20px;
    }
  }
  .category-title {
    @include title-font;
    font-size: 110%;
    > span.count {
      font-size: 100%;
      color: $color-black-500;
    }
    &.logo {
      font-size: 150%;
      font-weight: 900;
      color: $color-black-300;
    }
  }
}
</style>

<script>
import { mapState } from 'vuex'
import FileTree from '@/components/aside/FileTree.vue'

export default {
  name: 'Aside',
  components: {
    FileTree,
  },
  computed: {
    ...mapState([
      'drives',
    ]),
  },
}
</script>
