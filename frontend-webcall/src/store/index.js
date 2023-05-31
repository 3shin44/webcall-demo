import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    chatCore: null
  },
  mutations: {
    // 實體化chatCore
    createChatCore(state, newChatCore){
      state.chatCore = newChatCore
    }
  }
})

export default store