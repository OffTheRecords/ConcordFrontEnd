<script>
import store from "@/store"
import { mapState } from 'vuex'

export default {
  data() {
    return {
    }
  },
  computed:{
    ...mapState(['username']),
    loggedInUser(){
      return localStorage.getItem("username")
    }
  }
}
</script>

<template>
  <h1>Welcome, {{ loggedInUser }}!</h1>
</template>