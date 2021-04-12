<template lang="pug">
  .prompt
    span.current-path user:kingz /Users/home/Documents/
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
export default {
  name: 'Prompt',
}
</script>
