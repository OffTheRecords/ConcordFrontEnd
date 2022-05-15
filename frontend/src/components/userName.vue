<script>
import store from "@/store"

export default {
  data() {
    return {
      username: store.state.username
    }
  }
}
</script>

<template>
  <h1>Welcome, {{ username }} !</h1>
</template>