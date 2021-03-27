<template lang="pug">
  button.workspace-slot SLOT
</template>

<script>
export default {
  name: 'WorkspaceSlot',
}
</script>

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