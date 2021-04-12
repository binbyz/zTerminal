<template lang="pug">
  aside#workspace
    .items
      WorkspaceSlot(
        v-for="(slot, index) in workspaces.slots",
        :workspace="slot",
        :wsIndex="index"
        :key="index"
      )
</template>

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

<script>
import WorkspaceSlot from '@/components/workspace/WorkspaceSlot.vue'
import { mapState, mapMutations } from 'vuex'
import isUndefined from 'lodash/isUndefined'

export default {
  name: 'Workspace',
  components: {
    WorkspaceSlot,
  },
  computed: {
    ...mapState([
      'workspaces',
    ]),
  },
  methods: {
    ...mapMutations([
      'changeWorkspace',
      'createWorkspace',
    ]),
  },
  mounted() {
    if (this.workspaces.slots.length == 0) {
      this.createWorkspace()
    }

    if (isUndefined(this.workspaces.cursor)) {
      this.changeWorkspace({ slot: 0 })
    }
  },
}
</script>
