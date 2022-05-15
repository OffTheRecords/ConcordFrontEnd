import { createStore } from 'vuex'

export default createStore({
  state: {
    userid: null,
    username: null,
    token: null,
  },
  getters: {
    isLoggedIn(state){
      //Enter code here to check token validity
      return !!state.token;
    }
  },
  mutations: {
    setUser(state, userid){
      state.userid = userid;
    },
    setUsername(state, username){
      state.username = username;
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
