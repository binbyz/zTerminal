<template lang="pug">
  aside#workspace
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
  width: 70px;
  background-color: $color-red-200;
  border-right: 1px solid $color-red;
  display: flex;
  flex-flow: column;
  align-items: center;
}
</style>