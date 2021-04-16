<template lang="pug">
  .prompt
    .path-info
      span.arr-block.username 👩‍💻 {{ userInfo.username }}
      span.arr-block.current-path {{ currentPath }}
    .command-line
      span.prefix $
      form.command-form(@submit="doCommand")
        legend input command string
        textarea.command(
          ref="command",
          contentEditable="true",
          v-model="command",
          @keydown.enter.prevent="doCommand"
        )
</template>

<script>
import os from 'os'
import { mapState } from 'vuex'
import { spawn } from 'child_process'

export default {
  name: 'Prompt',
  data() {
    return {
      userInfo: os.userInfo(),
      command: '',
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
  methods: {
    doCommand() {
      let command = this.command // eslint-disable-line
      this.command = ''

      let splitted = command.split(' ')

      if (splitted.length) {
        let result = spawn(splitted[0], splitted.slice(1)); // eslint-disable-line

        result.stdout.on('data', (data) => {
          this.$emit('append-pipelines', data.toString())
        })

        result.stderr.on('data', data => {
          console.log(data.toString())
        })

        result.on('exit', data => {
          console.error(data.toString())
        })
      }
    },
  },
}
</script>
