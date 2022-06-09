<template>
  <div class="flex">
    <serverNav></serverNav>
    <convoHub></convoHub>
    <topNav></topNav>
    

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import store from "@/store";
import { mapMutations } from 'vuex'
import axios from "axios"
import userName from "@/components/userName.vue";
import serverNav from "@/components/ServerNav.vue";
import convoHub from "@/components/ConvoHub.vue";
import topNav from "@/components/TopNav.vue";
import { onMounted } from 'vue';
import { retrieveLocalCache } from "@/globalFunctions/retrieveLocalCache";
import router from "@/router";
import ServerNav from '../components/ServerNav.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      profileRequest: {
        request: "",
      }
    }
  },
  components: {
    // userName: userName,
    serverNav: serverNav,   
    convoHub: convoHub,
    topNav: topNav,
},
  methods: {
    //Use map mutations to allow for vuex store editing
    ...mapMutations(["setUsername", "setToken"]),

    requestData: function (){
      axios.defaults.withCredentials = true
      axios.get('https://concord.dafoe.me/user/' + store.state.userid).then((res) =>{
        console.log(res)
        var username = JSON.parse(res.data.msg)["username"]
        console.log(username)
        store.commit("setUsername", username)

        //RETRIEVE DIRECT MESSAGE STATE, SERVER-LIST (ICON, ID, NAME, NOT DETAILED INFO), FRIENDS-LIST W/ STATUS
        //Push all this info to the STATE - retrieve where needed
        //Acting like I got user info from server:

        //Direct Message State
        var directMessageState = [
          {id: '1', username: 'Artanthose', userID: 1001, statusExists: true, status: 'LongLongLongLongLongLongLongLongLongLongLongLongLongLong'},
          {id: '2', username: 'Kanra', userID: 1002, statusExists: true, status: 'Short'  },
          {id: '3', username: 'Alex', userID: 1003, statusExists: false, status: ''  }]
        store.commit("setDirectMessageState", directMessageState)

        //Friends List State
        var friendsList = [
          {id: '1', username: 'Raff', userID: 1000, statusExists: true, statusText: 'Whats going on here', status: "Online"},
          {id: '2', username: 'Kam', userID: 1001, statusExists: true, statusText: 'New phone who dis', status: "Online"},
          {id: '3', username: 'Neyo', userID: 1002, statusExists: true, statusText: 'As above so below', status: "Online"},
          {id: '4', username: 'Wade', userID: 1003, statusExists: true, statusText: 'Im just a kid', status: "Online"},
          {id: '5', username: 'Yale', userID: 1004, statusExists: false, statusText: '', status: "Away"},
        ]
        store.commit("setFriendsListState", friendsList)

        store.commit("setContentType", "contentBoxFriends")


        
      })
      .catch((error) => {
        console.log(error)
        console.log("Failed to submit data with error code: " + error.status)
      }).finally(() =>{
        console.log("Completed")
      });

    },

    changePage: function(){
      router.push('https://127.0.0.1:8080/test')

    }
  },
  created(){
    this.requestData()
  }
}
</script>
