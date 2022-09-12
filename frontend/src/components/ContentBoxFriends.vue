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
    friendsListFiltered(){
      if (this.SearchOption != ""){
        console.log(this.friendsList)
        var list = this.friendsList
        var keyword = this.SearchOption
        var filtered = list.filter(function(users){
          return users.username.toLowerCase().includes(keyword.toLowerCase())
        })
        return filtered
      }
      else{
        console.log(this.friendsList)
        return this.friendsList
      }

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
  },
  methods: {
    filterCheck: function(){

    }
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
      <div v-if="SearchOption.length == 0">
        <friends v-for="user in friendsList" :key="user.id" :userInfo="user"></friends>
      </div>
      <div v-else>
        <friends v-for="user in friendsListFiltered" :key="user.id" :userInfo="user"></friends>
      </div>
    </div>
    <activeNowContent></activeNowContent>
  </div>
</template>