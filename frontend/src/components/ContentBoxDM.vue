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
      userID() {
          return store.state.dmID

      }
  },
  components:{
  },

}
</script>

<template>
  <div class="flex-1 bg-blue-500 flex justify-between">
    <div class="flex-1 text-left flex flex-col">
      <div>
          {{ userName }} with ID: {{ userID }}
      </div>
      <div>
      </div>
    </div>
  </div>
</template>