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
          username: String,
          status: String,
      }
  },
  computed:{
      DMBoxInfo(){
         return {id: this.userInfo.userID, username: this.userInfo.username, display_pic: this.display_pic}
      }

  },
  methods: {
      loadDirectMessages: function(){

          console.log('clicked DM Box');
          console.log(this.DMBoxInfo)
          store.commit('setContentType', 'contentBoxDM')
          store.commit('setDMBoxInfo', this.DMBoxInfo)
      }
  }
}
</script>

<template>
    <div name="userBox" class="flex-none bg-green-400 flex justify-between flex-1 mb-2" @click="loadDirectMessages()">
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