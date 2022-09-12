<script>
import store from "@/store"
import { mapState } from 'vuex'
import contentBoxFriends from "@/components/ContentBoxFriends.vue";
import contentBoxDM from "@/components/ContentBoxDM.vue";
export default {

  data() {
    return {
    }
  },
  computed:{
    ...mapState(['contentType', 'dmInfo']),
    contentType(){
      return store.state.contentType
    },
    getDMBoxInfo(){
      return store.state.dmInfo
    }
  },
  components:{
      contentBoxFriends: contentBoxFriends,
      contentBoxDM: contentBoxDM,
  }
}
</script>

<template>
  <div class="flex-1 bg-green-900 flex flex-col min-h-screen h-screen">
      <div class="bg-green-700 h-10 text-left px-2">
          <div class="flex flex-row justify-between">
            <div v-if="contentType == 'contentBoxFriends'">
                Friends  |
                <button class="mx-6">Online</button>
                <button class="mx-6">All</button>
                <button class="mx-6">Pending</button>
                <button class="mx-6">Blocked</button>
                <button class="mx-6">Add</button>
            </div>
            <div v-if="contentType == 'contentBoxDM'">
            {{ dmInfo["username"] }}
            </div>
            <div>
                Accessory Buttons
            </div>
          </div>
      </div>
        <component :is="contentType"></component>
  </div>
</template>