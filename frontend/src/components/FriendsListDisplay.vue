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
      userInfo: {
          userID: Number,
          statusExists: Boolean,
          statusText: String,
          userName: String,
          status: String,
      }
  },
  computed:{
      retrieveUserInfo(){
          console.log(this.userInfo)
          return "worked"
      }
  },

  methods: {
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
                <span name="Username" style="color:black"> {{ userInfo["username"] }}# {{ userInfo["userID"]}}</span>
                <div v-if="userInfo['statusExists']">{{ userInfo["statusText"]}}</div>
                <div v-else>{{ userInfo["status"]}}</div>
            </div>
        </div>
        <div name="userButtons" class="flex items-center">
            <button>A</button>|
            <button>B</button>
        </div>
    </div>
</template>