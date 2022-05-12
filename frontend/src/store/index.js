import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    token: null,
  },
  getters: {
    isLoggedIn(state){
      //Enter code here to check token validity
      return !!state.token;
    }
  },
  mutations: {
    setUser(state, user){
      state.user = user;
    },
    setToken(state,token){
      state.token = token;
    },
  },
  actions: {
  },
  modules: {
  }
})
