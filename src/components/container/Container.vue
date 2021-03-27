<template lang="pug">
  #container
    .inner
      Searchbar
      Tabs
      Explorer
</template>

<script>
import Tabs from '@/components/container/Tabs.vue'
import Explorer from '@/components/container/Explorer.vue'
import Searchbar from '@/components/container/searchbar/Searchbar.vue'

export default {
  name: 'Container',
  components: {
    Tabs,
    Explorer,
    Searchbar,
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_variables';

#container {
  flex: 4 1;
  background-color: $color-white;
  padding: $default-box-padding;

  .inner {
    display: flex;
    flex-direction: column;
  }
}
</style>