<template lang="pug">
  .file-node
    //- font-awesome-icon.fa(icon="folder")
    span.label(@click="nodeTrigger") {{ file.label }}
</template>

<style lang="scss" scoped>
@import '~@/assets/scss/_variables';

.file-node {
  font-size: 110%;
  padding: 0 10px;
  border-left: 1px solid $color-black-800;
  cursor: pointer;
  &:hover {
    background-color: $color-black-900;
  }
  > .fa {
    color: $color-yellow;
    font-size: 85%;
  }
  > .label {
    padding-left: 5px;
    color: $color-black;
    &:hover {
      color: $color-blue;
    }
  }
}
</style>

<script>
import { getSubTrees, getPathInfos } from '@/api/explorer'

export default {
  name: 'FileNode',
  props: {
    file: {
      required: true,
      type: Object,
    }
  },
  methods: {
    nodeTrigger() {
      if (this.file.isDirectory) {
        this.expandTree()
      } else {
        this.executeFile()
      }
    },
    expandTree() {
      let subTrees = getSubTrees(this.file.path)
      subTrees = getPathInfos(subTrees)

      console.log(subTrees)
    },
    executeFile() {

    }
  }
}
</script>
