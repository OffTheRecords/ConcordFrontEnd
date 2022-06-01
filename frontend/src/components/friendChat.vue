<script>
import store from "@/store"
import { mapState } from 'vuex'
export default {

  data() {
    return {
        userStatusExists: true,
        userStatusText: "LongLongLongLongLongLongLongLongLongLongLongLongLongLong"
    }
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
<!-- The first div here is causing the status text to expand past the parent div, fix this -->
<template>
    <div name="userBox" class="flex-none bg-green-400 flex justify-between mb-2">
        <div name="holdUserDetails" class="bg-green-400 flex">
            <div name="usersImage" class="mr-3">
                <img class="rounded-full border border-gray-100" src="../assets/profile_picture.jpg" height="45" width="45">
            </div>
            <div class="flex flex-col whitespace-nowrap truncate">
                <span name="Username" style="color:black">Artanthose</span>
                <div class="whitespace-nowrap truncate" v-if="userStatus">{{ userStatus }}</div>
            </div>
        </div>
    </div>
</template>