import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const userStr = sessionStorage.getItem('__userInfo')
const userInfo = userStr ? JSON.parse(userStr) : null

const store = {
  state: {
    userInfo,
  },
  mutations: {
    setUserInfo(state, info) {
      state.userInfo = info
    },
  },
  actions: {
    setUserInfo(context, info) {
      sessionStorage.setItem('__userInfo', JSON.stringify(info))
      context.commit('setUserInfo', info)
    },
  },
}

export default new Vuex.Store(store)
