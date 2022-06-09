<script>
import store from "@/store"
import { mapState } from 'vuex'
import directMessageBox from "@/components/directMessageBox"
export default {
  data() {
    return {
    }
  },
  computed:{
      getDirectMsgState(){
          return (store.state.directMessageState)
      }
  },
  components: {
      directMessageBox: directMessageBox,
  },
  methods: {
      changeContentType(content){
          store.state.contentType = content
      }
  }
}
</script>

<template>
    <div class="bg-blue-500 w-56 flex-none flex flex-col min-h-screen h-screen px-2 py-2">
        <div class="mb-2">
            <input placeholder="Search" v-model="SearchOption">
        </div>
        <div class="flex-1 bg-blue-300 justify-between text-left">
            <div class="text-left mb-10 flex flex-none flex-col">
                <button class="text-left mb-2" @click="changeContentType('contentBoxFriends')">Friends</button>
                <button class="text-left">Upgrade</button>
            </div>
            <div>
                Direct Messages
                <directMessageBox v-for="convo in getDirectMsgState" :key="convo.id" :userStatusExists="convo.statusExists" :userStatusText="convo.status" :userName="convo.username" :userID="convo.userID"></directMessageBox>
            </div>
        </div>
        <div>
            <div class="bg-blue-200">
                Voice Connected Box
            </div>
            <div class="bg-blue-100">
                User Box
            </div>
        </div>
    </div>
</template>