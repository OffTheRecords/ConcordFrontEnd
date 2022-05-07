<template>
  <div class="flex items-center justify-center">
    <div class="w-full max-w-md mt-30">
      <form class="text-left bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
        <!-- @csrf -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-normal mb-2" for="email">Email</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="email" v-model="email" required autofocus placeholder="someone@example.com"/>
          </div>

          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-normal mb-2" for="username">Username</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" type="username" v-model="username" required autofocus placeholder="Username"/>
          </div>

          <div class="mb-5">
            <label class="block text-gray-700 text-sm font-normal mb-2" for="password">Password</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" v-model="password" required autofocus placeholder="Password" />
          </div>
          <div class="flex items-center justify-between">
            <button class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-7000" type="button" v-on:click="submitForm(email, username, password)" >Register</button>
          </div>
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
      registrationDetails: {
        email: "",
        username: "",
        password: ""
      }
    }
  },
  components: {
  },
  methods: {
    submitForm: function (email, username, password){
      this.registrationDetails.email = email
      this.registrationDetails.username = username
      this.registrationDetails.password = password

      

      axios.post('http://127.0.0.1:8081/auth/register',this.registrationDetails, {headers: {
        'Content-type': 'application/json',
      }}).then((res) =>{
        console.log("Submitted successfully, success code: " + res.status)
      })
      .catch((error) => {
        console.log(error)
        console.log("Failed to submit data with error code: " + error.status)
      }).finally(() =>{
        console.log("Refresh to try again.")
      });
    }
  }
}
</script>