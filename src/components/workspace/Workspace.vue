<template lang="pug">
  aside#workspace
    .items
      WorkspaceSlot
      WorkspaceSlot
      WorkspaceSlot
      WorkspaceSlot
      WorkspaceSlot
</template>

<script>
import WorkspaceSlot from '@/components/workspace/WorkspaceSlot.vue'

export default {
  name: 'Workspace',
  components: {
    WorkspaceSlot,
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_variables';

#workspace {
  flex: 0 1 70px;
  min-width: 70px;
  max-width: 70px;
  background-color: $color-red-200;
  border-right: 1px solid $color-red;
  .items {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
}
</style>
