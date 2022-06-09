<script>
import store from "@/store"
import { mapState } from 'vuex'
import ActiveNowContent from "./ActiveNowContent.vue"
import FriendsListDisplay from './FriendsListDisplay.vue'
export default {

  data() {
    return {
      SearchOption: "",

    }
  },
  computed:{
    friendsList(){
      return store.state.friendsList
    },
  },
  watch: {
    onlineCount(newVal) {
      console.log(newVal)
    }
  },
  components:{
    activeNowContent: ActiveNowContent,
    friends: FriendsListDisplay,
  }

}
</script>

<template>
  <div class="flex-1 bg-green-500 flex justify-between">
    <div class="flex-1 text-left flex flex-col">
      <input placeholder="Search" v-model="SearchOption">
      <div>
        ONLINE - 1
      </div>
      <div>
        <friends v-for="user in friendsList" :key="user.id" :userInfo="user"></friends>
      </div>
    </div>
    <activeNowContent></activeNowContent>
  </div>
</template>