<template lang="pug">
  .terminal.terminal-theme.default
    Pipeline asdfasdf
    Pipeline asdfasdf
    Pipeline asdfasdf
    Pipeline asdfasdf
    Pipeline asdfasdf
    Pipeline asdfasdf
    Pipeline asdfasdf
    Pipeline asdfasdf
    Pipeline asdfasdf
    Pipeline asdfasdf
    Pipeline asdfasdf
    Prompt
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
import { mapState } from 'vuex'

export default {
  name: 'Terminal',
  components: {
    Pipeline,
    Prompt,
  },
  computed: {
    ...mapState([
    ]),
  },
}
</script>
