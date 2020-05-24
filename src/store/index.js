import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
    isshow:false,
    addisshow:false
  },
  mutations: {
    //
    addshow(state,boolean){
      state.isshow=boolean
    },
    addnewshow(state,boolean){
      state.addisshow=boolean
    }

  },
  actions: {
    //
  },
  modules: {
    user,
    app
  }
})
