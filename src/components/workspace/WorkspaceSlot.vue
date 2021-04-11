<template lang="pug">
  button.workspace-slot(@click="changeWorkspace({ slot: wsIndex })") {{ workspace.slotName }}
</template>

<style lang="scss" scoped>
@import '~@/assets/scss/_variables';

button.workspace-slot {
  width: 80%;
  height: 50px;
  outline: none;
  border-radius: 10px;
  border: none;
  margin-top: 10px;
  background-color: $color-red;
  color: $color-white;
  cursor: pointer;
}
</style>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'WorkspaceSlot',
  props: {
    workspace: {
      required: true,
      type: Object,
    },
    wsIndex: {
      required: true,
      type: Number,
    }
  },
  methods: {
    ...mapMutations([
      'changeWorkspace',
    ]),
  },
}
</script>
