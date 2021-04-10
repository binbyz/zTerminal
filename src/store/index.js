import Vue from 'vue'
import Vuex from 'vuex'
import { cursorTo } from '@/api/explorer'
import isUndefined from 'lodash/isUndefined'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

// https://vuex.vuejs.org/kr/
export default new Vuex.Store({
  strict: debug,
  state: {
    drives: [],
    workspaces: {
      slots: [],
      cursor: undefined,
    },
  },
  mutations: {
    updateDrives(state, drives) {
      state.drives = drives
    },
    addSubTrees(state, { fpath, subTrees }) {
      let found = cursorTo(state.drives, fpath)

      if (found !== undefined) {
        found.subTrees = subTrees
      }
    },
    toggleTree(state, { fpath, show }) {
      let found = cursorTo(state.drives, fpath)
      let tobe = !found.isExpanded

      if (!isUndefined(show)) {
        found.isExpanded = show
      } else {
        found.isExpanded = tobe
      }
    },
  },
  // asynchronise function
  actions: {

  }
})

