import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

// https://vuex.vuejs.org/kr/
export default new Vuex.Store({
  strict: debug,
  state: {
    drives: [],
  },
  mutations: {
    updateDrives(state, drives) {
      state.drives = drives
    },
  },
  // asynchronise function
  actions: {

  }
})
