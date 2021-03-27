<template lang="pug">
  #searchbar
    input#input-global-search(type="text", autofocus, autocomplete="false")
    button(@click="runningJob") 검색
</template>

<script>
import { ipcRenderer } from 'electron'

export default {
  name: 'Searchbar',
  methods: {
    runningJob() {
      console.log('runningJob')
      ipcRenderer.send('assign-task', { method: "drives" })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_variables';

#searchbar {
  margin-bottom: 10px;
  #input-global-search {
    padding: 0 10px;
    border-radius: 5px;
    line-height: 200%;
    font-size: 120%;
    outline: none;
    background-color: $color-black-300;
    border: none;
    min-width: 250px;
  }
}
</style>