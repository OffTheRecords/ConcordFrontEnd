<template>
  <div class="flex items-center justify-center">
    <div class="w-full max-w-md">
      <form class="text-left tbg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4 mt-4 mt-40">
        <!-- @csrf -->
        <h1>Welcome</h1>
      </form>
      <p class="text-center text-gray-500 text-xs">&copy;2022 Concord Corp. All rights reserved. </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
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
   // ...mapMutations(["setUser", "setToken"]),
    submitForm: function (email, password){
      this.loginDetails.email = email
      this.loginDetails.password = password



      axios.post('https://concord.dafoe.me/auth/login',this.loginDetails, {headers: {
        'Content-type': 'application/json',
      }, withCredentials: true}).then((res) =>{
        console.log("Submitted successfully, success code: " + res.status)
        console.log(res)
        
      })
      .catch((error) => {
        console.log(error)
        console.log("Failed to submit data with error code: " + error.status)
      }).finally(() =>{
        //Either read cookiees or use mapmutations to store user and token values to enable login as default state (vuex storage)
        console.log("Refresh to try again.")
        this.$router.push('https://127.0.0.1:8080/homepage')
      });
    }
  }
}
</script>
