import Vue from 'vue'
import Vuex from 'vuex'
import find from 'lodash/find'

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
    addSubTrees(state, { parentPath, subTrees }) { // eslint-disable-line
      let cursor = state.drives
      let found = undefined

      while (found == undefined) {
        found = find(cursor, o => o.path == parentPath) // Returns the matched element, else undefined.

        console.log(cursor)
        cursor = cursor.subTrees
      }

      // console.log(parentPath)
      // console.log('found', found)
      found.subTrees = subTrees
    },
  },
  // asynchronise function
  actions: {

  }
})
