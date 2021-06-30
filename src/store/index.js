import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    position: null,
    user: {
      appkey: 'qrj__1590512877666',
      info: {
        userName: '',
        password: ''
      }
    }
  },
  mutations: {
    setPosition (state, payload) {
      state.position = payload
    },
    setUserInfo (state, payload) {
      state.user.info = payload
    }
  },
  actions: {
    changePosition ({ commit }, value) {
      commit('setPosition', value)
    }
  }
})
