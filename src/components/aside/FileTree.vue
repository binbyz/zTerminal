<template lang="pug">
  ul.file-tree
    li(v-for="tree in trees")
      FileNode(:file="tree")
      FileTree(v-if="tree.subTrees.length > 0", :trees="tree.subTrees")
</template>

<script>
import FileNode from '@/components/aside/FileNode.vue'

export default {
  name: 'FileTree',
  props: {
    trees: {
      required: true,
      type: Array,
    }
  },
  components: {
    FileNode,
  }
}
</script>

<style lang="scss" scoped>
.file-tree {
  margin-left: 15px;
  li {
    line-height: 140%;
  }
}
</style>