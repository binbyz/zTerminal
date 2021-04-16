<template lang="pug">
  .terminal.terminal-theme.default
    Pipeline(v-for="pipeline in pipelines") {{ pipeline }}
    Prompt(@append-pipelines="appendPipelines")
</template>

<style lang="scss">
@import '~@/assets/scss/terminal/themes/default.scss';

.terminal {
  flex: 4 1;
  overflow-y: scroll;
}
</style>

<script>
import Pipeline from '@/components/container/terminal/Pipeline.vue'
import Prompt from '@/components/container/terminal/Prompt.vue'

export default {
  name: 'Terminal',
  components: {
    Pipeline,
    Prompt,
  },
  data() {
    return {
      pipelines: [],
    }
  },
  methods: {
    appendPipelines(result) {
      this.pipelines = this.pipelines.concat(
        result.split(/[\r\n]/g)
      )

      console.log(this.pipelines)
    }
  }
}
</script>
