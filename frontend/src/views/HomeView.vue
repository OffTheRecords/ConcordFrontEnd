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
