import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 5,

    chatCore: null
  },
  mutations: {
    increment (state) {
      state.count++
    },
    // 實體化chatCore
    createChatCore(state, newChatCore){
      state.chatCore = newChatCore
    }
  }
})

export default store