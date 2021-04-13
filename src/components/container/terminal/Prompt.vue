<template lang="pug">
  .prompt
    span.current-path user:kingz {{ currentPath }}
    span.command-line CommandLine
</template>

<style lang="scss">
.prompt {
  .current-path, .command-line {
    display: block;
  }
}
</style>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Prompt',
  computed: {
    ...mapState({
      cursor: state => state.workspaces.cursor,
    }),
    currentPath() {
      return this.cursor?.pathInfo?.path
    },
  },
}
</script>
