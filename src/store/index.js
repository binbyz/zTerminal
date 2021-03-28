import Vue from 'vue'
import Vuex from 'vuex'
import explorer from '../api/explorer'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

// https://vuex.vuejs.org/kr/
export default new Vuex.Store({
  strict: debug,
  state: {
    drives: [
      explorer.buildFile({
        label: "Root",
        path: "/",
        isDirectory: true,
        subTrees: [
          explorer.buildFile({ label: "test", path: "/test", isDirectory: true, }),
          explorer.buildFile({ label: "test2", path: "/test", isDirectory: true, }),
          explorer.buildFile({ label: "test3", path: "/test", isDirectory: true, }),
          explorer.buildFile({ label: "test4", path: "/test", isDirectory: true, }),
          explorer.buildFile({ label: "test5", path: "/test", isDirectory: true, }),
          explorer.buildFile({ 
            label: "/test6", 
            path: "/test", 
            isDirectory: true,
            subTrees: [
              explorer.buildFile({ label: "tt", path: "/test", isDirectory: true, }),
              explorer.buildFile({ label: "tt2", path: "/test", isDirectory: true, }),
              explorer.buildFile({ label: "tt3", path: "/test", isDirectory: true, }),
              explorer.buildFile({ label: "tt4", path: "/test", isDirectory: true, }),
              explorer.buildFile({ label: "tt5", path: "/test", isDirectory: true, }),
              explorer.buildFile({ label: "tt6", path: "/test", isDirectory: true, }),
            ]
          }),
        ]
      }),
    ]
  },
  mutations: {

  },
  // asynchronise function
  actions: {

  }
})