<script>
import store from "@/store"
import { mapState } from 'vuex'
import ActiveNowContent from "./ActiveNowContent.vue"
import FriendsListDisplay from './FriendsListDisplay.vue'
export default {

  data() {
    return {
      SearchOption: "",
       ids_list: [{id: '1001'}, {id: '1002'}, {id: '1003'}, {id: '1004'}, {id: '1005'}, {id: '1006'}],

    }
  },
  computed:{
    onlineCount(){
      //Retrieve List of Friends to display
      return Object.keys(this.ids_list).length
    }
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
        ONLINE - {{ onlineCount }}
      </div>
      <div>
        <friends v-for="user in ids_list" :key="user.id" :userID="user.id"></friends>
      </div>
    </div>
    <activeNowContent></activeNowContent>
  </div>
</template>