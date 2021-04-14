import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  state1: {
    count:  1
  },
  mutations: {
    mutationsAddCount({count}, n = 0) {
      return (count += n)
    },
    mutationsReduceCount(state, n = 0) {
      return (state.count -= n)
    }
  },
  actions: {
  },
  modules: {
  }
})
