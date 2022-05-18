<template>
  <div class="flex items-center justify-center">
    <div class="w-full max-w-md">
        <userName :key="username"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import store from "@/store";
import { mapMutations } from 'vuex'
import axios from "axios"
import userName from "@/components/userName.vue";
import { onBeforeMount } from '@vue/runtime-core';

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
    userName: userName,
},
  methods: {
    //Use map mutations to allow for vuex store editing
    ...mapMutations(["setUsername", "setToken"]),

    requestData: function (){
      axios.defaults.withCredentials = true
      axios.get('https://concord.dafoe.me/user/' + store.state.userid).then((res) =>{
        console.log(res)
        var username = JSON.parse(res.data.msg)["username"]
        localStorage.setItem("username", username)
                
      })
      .catch((error) => {
        console.log(error)
        console.log("Failed to submit data with error code: " + error.status)
      }).finally(() =>{
        console.log("Completed")
      });

    }
  },
  mounted(){
    this.requestData()
  }
}
</script>
