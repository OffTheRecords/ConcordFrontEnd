<template>
  <div class="flex items-center justify-center">
    <div class="w-full max-w-md">
      <form class="text-left tbg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4 mt-4 mt-40">
        <!-- @csrf -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-normal mb-2" for="email">Email</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="email" v-model="email" required autofocus placeholder="someone@example.com"/>
          </div>

          <div class="mb-5">
            <label class="block text-gray-700 text-sm font-normal mb-2" for="password">Password</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" v-model="password" required autofocus placeholder="Password" />
          </div>
          <div class="flex items-center justify-between">
            <button class="px-4 py-2 rounded text-white inline-block shadow-lg bg-[#facc15] hover:bg-[#eab308] focus:bg-[#a16207]" type="button" v-on:click="submitForm(email, password)">Login</button>
          </div>
      </form>
      <p class="text-center text-gray-500 text-xs">&copy;2022 Concord Corp. All rights reserved. </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import store from "@/store"
import { mapMutations } from 'vuex'
import axios from "axios"

export default {
  name: 'HomeView',
  data() {
    return {
      loginDetails: {
        email: "",
        password: ""
      }
    }
  },
  components: {
  },
  methods: {
    //Use map mutations to allow for vuex store editing
    ...mapMutations(["setUser", "setToken"]),
    submitForm: function (email, password){
      this.loginDetails.email = email
      this.loginDetails.password = password



      axios.post('https://concord.dafoe.me/auth/login',this.loginDetails, {headers: {
        'Content-type': 'application/json',
      }, withCredentials: true}).then((res) =>{
        console.log("Submitted successfully, success code: " + res.status)

        var id = JSON.parse(res.data.msg)["id"]
        //Either read cookiees or use mapmutations to store user and token values to enable login as default state (vuex storage)
        store.commit('setUser', id)
        console.log("Refresh to try again.")
        this.$router.push('https://127.0.0.1:8080/home')
      })
      .catch((error) => {
        console.log(error)
        console.log("Failed to submit data with error code: " + error.status)
      }).finally(() =>{
        
      });
    }
  }
}
</script>
