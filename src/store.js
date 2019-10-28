import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    enterpriseId: "",
    exType: []
  },
  mutations: {
    setEnterpriseId(state, id) {
      state.enterpriseId = id;
    },
    setExType(state, arr) {
      state.exType = arr;
    }
  },
  actions: {

  }
})
