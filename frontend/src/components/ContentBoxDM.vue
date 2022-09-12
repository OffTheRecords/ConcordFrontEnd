<script>
import store from "@/store"
import { mapState } from 'vuex'
import ActiveNowContent from "./ActiveNowContent.vue"
import FriendsListDisplay from './FriendsListDisplay.vue'
import messageBox from './messageBox.vue'
import axios from 'axios'
export default {

  data() {
    return {
        userName: "Artanthose"
    }
  },
  computed:{
      getDMInfo() {
          return store.state.dmInfo
      },
      inputPlaceHolder(){
        var ph = "Message @" + this.getDMInfo["username"]
        console.log(ph)
        return ph
      }
  },
  components:{
    messageBox: messageBox,
  },
  onBeforeMount: function(){
    console.log("mounted")
    // axios.defaults.withCredentials = true
    // axios.get('https://concord.dafoe.me/' + conversationID).then((res) =>{
    //   //get Messages
    // })
    
    //get 50 messages
    var Messages = [
      {conversationID: '1', msgID: '1', content: "Message 1", senderID: '1000', creationDate: "" },
    ]
  }

}
</script>

<template>
  <div class="flex-1 bg-blue-500 flex justify-between pr-3">
    <div class="flex-1 text-left flex flex-col justify-between">
      <div>
        <messageBox v-for="index in 10" :key="index"></messageBox>
      </div>
      <div class="flex bg-red-600 border mb-2">
        <input type="file" ref="file" style="display: none">
        <button @click="$refs.file.click()" class="border pr-2">AA</button>
        <input class="bg-red-600 w-full line leading-nornal py-2" :placeholder="inputPlaceHolder">
      </div>
    </div>
  </div>
</template>