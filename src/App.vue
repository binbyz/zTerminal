<template lang="pug">
  #app
    Workspace
    Aside
    Container
</template>

<script>
import Workspace from '@/components/workspace/Workspace.vue'
import Aside from '@/components/aside/Aside.vue'
import Container from '@/components/container/Container.vue'

export default {
  name: 'App',
  components: {
    Workspace,
    Aside,
    Container,
  }
}
</script>

<style lang="scss">
@import '~@/assets/scss/common';

#app {
  min-height: 100%;
  background-color: $backcolor;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
}
</style>
