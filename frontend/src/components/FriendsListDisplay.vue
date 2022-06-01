<script>
import store from "@/store"
import { mapState } from 'vuex'
export default {

  data() {
    return {
        userStatusExists: true,
        userStatusText: "Long is the way and hard, that out of hell leads up to the light."
    }
  },
  props:{
      userID: Number,
  },
  computed:{
      userPhoto(){
          //Retrieve user Photo
          return null
      },
      userName(){
          //Retrieve user name
          return null
      },
      userStatus(){
          if (this.userStatusExists == true){
              return this.userStatusText
          }
          else{
              return false
          }
          //Retrieve user status
      },
  }
}
</script>

<template>
    <div name="userBox" class="flex-none bg-green-400 flex justify-between flex-1 mb-2">
        <div name="holdUserDetails" class="bg-green-400 flex">
            <div name="usersImage" class="mr-3">
                <img class="rounded-full border border-gray-100" src="../assets/profile_picture.jpg" height="45" width="45">
            </div>
            <div class="flex flex-col">
                <span name="Username" style="color:black">Artanthose: {{ userID }}</span>
                <div v-if="userStatus">{{ userStatus }}</div>
                <div v-else>Online</div>
            </div>
        </div>
        <div name="userButtons" class="flex items-center">
            <button>A</button>|
            <button>B</button>
        </div>
    </div>
</template>