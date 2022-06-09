<script>
import store from "@/store"
import { mapState } from 'vuex'
export default {

  data() {
    return {
    }
  },
  computed:{
      userPhoto(){
          //Retrieve user Photo
          return null
      },
      DMBoxInfo(){
          return {id: this.userID, username: this.userName, display_pic: this.display_pic}
      }

  },
  props: {
        userStatusExists: {
            default: false,
            type: Boolean,
            required: true
        },
        userStatusText: String,
        userName: String,
        userID: {
            type: Number,
            default: null,
        }
  },
  methods: {
      loadDirectMessages: function(){

          console.log('clicked DM Box');
          console.log(this.contentInfo)
          store.commit('setContentType', 'contentBoxDM')
          store.commit('setDMBoxInfo', this.DMBoxInfo)
      }
  }
}
</script>
<!-- The first div here is causing the status text to expand past the parent div, fix this -->
<template>
    <div name="userBox" class="bg-green-400 flex justify-between mb-2">
        <div role='button' name="holdUserDetails" class="bg-green-400 flex flex-1 overflow-auto mx-1" @click="loadDirectMessages()">
            <div name="usersImage" class="mr-3">
                <img class="rounded-full border border-gray-100" src="../assets/profile_picture.jpg" height="45" width="45">
            </div>
            <div class="flex-1 flex-col whitespace-nowrap truncate leading-snug items-center my-1">
                <span name="Username" style="color:black">{{ userName }}</span>
                <div class="whitespace-nowrap truncate" v-if="userStatusExists">{{ userStatusText }}</div>
            </div>
        </div>
    </div>
</template>