import Vue from 'vue'
import Vuex from 'vuex'
import find from 'lodash/find'
import path from 'path'
import { splitPath, getPathSeperator } from '@/api/explorer'

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
      const seperator = getPathSeperator()
      let cursor = state.drives
      let found = undefined
      let paths = splitPath(parentPath)
      const diffMax = paths.length - 1

      if (paths.length == 1) {
        found = find(cursor, r => r.path == paths[0])
      } else {
        for (let p = 0; p < paths.length; p++) {
          let diff = paths.slice(0, (p + 1)).join(seperator)
          diff = path.resolve(diff)

          cursor = find(cursor, r => r.path == diff)

          if (p == diffMax) {
            found = cursor
          } else {
            cursor = cursor.subTrees
          }
        }
      }

      if (found !== undefined) {
        found.subTrees = subTrees
      }
    },
  },
  // asynchronise function
  actions: {

  }
})

