<template lang="pug">
  ul.file-tree
    li(v-for="tree in trees")
      FileNode(:file="tree")
      FileTree(v-if="tree.isExpanded", :trees="tree.subTrees")
</template>

<style lang="scss" scoped>
.file-tree {
  margin-left: 15px;
  li {
    line-height: 140%;
  }
}
</style>

<script>
import FileNode from '@/components/aside/FileNode.vue'

export default {
  name: 'FileTree',
  components: {
    FileNode,
  },
  props: {
    trees: {
      required: true,
      type: Array,
    }
  }
}
</script>
