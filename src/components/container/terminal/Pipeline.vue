<template lang="pug">
  span.pipeline
    slot
</template>

<style lang="scss">
.terminal {
  .pipeline {
    display: block;
  }
}
</style>

<script>
export default {
  name: 'Pipieline',
}
</script>
