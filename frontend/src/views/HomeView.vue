<template>
  <div class="flex items-center justify-center">
    <div class="w-full max-w-md">
        <userName :key="username"/>
        <button class="px-4 py-2 rounded text-white inline-block shadow-lg bg-[#facc15] hover:bg-[#eab308]" type="button" v-on:click="changePage()">Test Page</button>
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
import { onMounted } from 'vue';
import { retrieveLocalCache } from "@/globalFunctions/retrieveLocalCache";
import router from "@/router";

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
