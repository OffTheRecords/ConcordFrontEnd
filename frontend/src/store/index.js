import { createStore } from 'vuex'

export default createStore({
  state: {
    userid: null,
    username: null,
    tokenTTL: null,
  },
  getters: {
    isLoggedIn(state){
      //Enter code here to check token validity
      if (Math.round(Date.now() / 1000) > parseInt(localStorage.getItem("JwtTokenTTL"))){
        return false
      } 
      else{
        return true
      }
    }
  },
  mutations: {
    setUser(state, userid){
      state.userid = userid;
    },
    setUsername(state, username){
      state.username = username;
    },
    setJwtTokenTTL(state,token){
      state.token = token;
    },
  },
  actions: {
  },
  modules: {
  }
})
