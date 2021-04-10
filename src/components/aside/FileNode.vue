<template lang="pug">
  .file-node
    //- font-awesome-icon.fa(icon="folder")
    i(:class="file.iconClass")
    span.label(@click="nodeTrigger") {{ file.label }}
</template>

<style lang="scss" scoped>
@import '~@/assets/scss/_variables';

.file-node {
  font-size: 90%;
  padding: 0 10px;
  border-left: 1px solid $color-black-800;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
import { mapMutations } from 'vuex'

export default {
  name: 'FileNode',
  props: {
    file: {
      required: true,
      type: Object,
    }
  },
  methods: {
    ...mapMutations([
      'addSubTrees',
      'toggleTree',
    ]),
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

      // TODO 현재 파일의 `subTrees` 새로고침 구현
      if (!this.file.subTrees.length) {
        this.addSubTrees({
          fpath: this.file.path,
          subTrees,
        })
      }

      this.toggleTree({
        fpath: this.file.path,
      })
    },
    executeFile() {

    },
  },
  mounted() {
  },
}
</script>
