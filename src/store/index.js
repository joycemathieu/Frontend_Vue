import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    valide:false,
  },
  mutations: {
    done(){
      return this.state.valide = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
