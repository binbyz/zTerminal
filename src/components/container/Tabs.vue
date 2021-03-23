<template lang="pug">
  ul#tabs
    Tab
    Tab
    Tab
    Tab
    Tab
    Tab
    Tab
    Tab
    Tab
    Tab
    Tab
    Tab
    Tab
</template>

<script>
import Tab from '@/components/container/Tab.vue'

export default {
  name: 'Tabs',
  components: {
    Tab,
  }
}
</script>

<style lang="scss" scoped>
#tabs {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>