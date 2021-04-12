<template lang="pug">
  #container
    .inner
      Searchbar
      Terminal
</template>

<script>
import Tabs from '@/components/container/Tabs.vue'
import Searchbar from '@/components/container/searchbar/Searchbar.vue'
import Explorer from '@/components/container/Explorer.vue'
import Terminal from '@/components/container/terminal/Terminal.vue'

export default {
  name: 'Container',
  components: {
    Tabs,
    Searchbar,
    Explorer,
    Terminal,
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_variables';

#container {
  flex: 4 1;
  background-color: $color-white;

  .inner {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
}
</style>
