import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	nav_page: 0,
  },
  mutations: {
  	change_nav_page(state, key) {
    	state.nav_page = key;
    },
  },
  actions: {

  }
})
