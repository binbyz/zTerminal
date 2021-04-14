<template lang="pug">
  .prompt
    .path-info
      span.arr-block.username 👩‍💻 {{ userInfo.username }}
      span.arr-block.current-path {{ currentPath }}
    .command-line
      span.prefix $
      span.command(contentEditable="true")
</template>

<script>
import os from 'os'
import { mapState } from 'vuex'

export default {
  name: 'Prompt',
  data() {
    return {
      userInfo: os.userInfo(),
    }
  },
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
