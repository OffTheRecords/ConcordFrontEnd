import { createStore, Store, storeKey } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    userid: null,
    username: null,
    jwtTTL: null,
    contentType: "contentBoxFriends",
    dmID: null,
  },
  getters: {
    isLoggedIn(state){
      //Enter code here to check token validity
      if (localStorage.getItem("jwtTTL") === null){
        return false
      }
      if (Math.round(Date.now() / 1000) > parseInt(localStorage.getItem("jwtTTL"))){

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
      localStorage.setItem("userid", userid)
    },
    setUsername(state, username){
      state.username = username;
      localStorage.setItem("username", username)
    },
    setJwtTokenTTL(state,ttl){
      state.jwtTTL = ttl;
      localStorage.setItem("jwtTTL", (ttl).toString())
    },
    setContentType(state, {content, id}){
      console.log("Changing data into : " + content + " and " + id)
      state.contentType = content
      if (id != null){
        state.dmID = id
      }
    }
  },
  actions: {
    async refreshToken (context){
      console.log(context.state.jwtTTL)
      console.log(Math.round(Date.now() / 1000) - 30)
      console.log(context.state.jwtTTL >= Math.round(Date.now() / 1000) + 30)
      if (context.state.jwtTTL >= Math.round(Date.now() / 1000) + 30){
       await axios.get('https://concord.dafoe.me/auth/refresh', {headers: {
          'Content-type': 'application/json',
        }, withCredentials: true}).then((res) =>{
          console.log("Submitted refresh request, success code: " + res.status)
          console.log(res)
          if (res.data.status == 200){
            var jwtTTL = JSON.parse(res.data.msg)["jwtttl"]
            var newTTL = jwtTTL + Math.round(Date.now() / 1000)
            context.commit("setJwtTokenTTL", newTTL)
          }
        })
        .catch((error) => {
          console.log(error)
          console.log("Failed to submit data with error code: " + error.status)
        }).finally(() =>{
          
        });
      }
    }
  },
  modules: {
  }
})
