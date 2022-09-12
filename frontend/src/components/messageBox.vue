<script>
import store from "@/store"
import { mapState } from 'vuex'
import ActiveNowContent from "./ActiveNowContent.vue"
import FriendsListDisplay from './FriendsListDisplay.vue'
export default {

  data() {
    return {
        userName: "Artanthose"
    }
  },
  computed:{
      getDMInfo() {
          return store.state.dmInfo
      }
  },
  components:{
  },

}
</script>

<template>
  <div id= "messageBox" class="flex-1 bg-blue-500 flex flex-none py-2">
    <div id="profilePicture" class="flex bg-green-300 pr-1">
        <img class="rounded-full border border-gray-100" src="../assets/profile_picture.jpg" height="45" width="45">
    </div>
    <div id="userContent" class="flex-1 bg-red-300 flex flex-col">
        <span name="Username" style="color:black"> {{ getDMInfo["username"] }}</span>
    </div>

  </div>
</template>