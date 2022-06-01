<script>
import store from "@/store"
import { mapState } from 'vuex'
import contentBoxFriends from "@/components/ContentBoxFriends.vue";
export default {

  data() {
    return {
        contentType: "contentBoxFriends"
    }
  },
  computed:{
  },
  components:{
      contentBoxFriends: contentBoxFriends,
  }
}
</script>

<template>
  <div class="flex-1 bg-green-900 flex flex-col min-h-screen h-screen">
      <div class="bg-green-700 h-10 text-left px-2">
          <div class="flex flex-row justify-between">
            <div>
                Friends  |
                <button class="mx-6">Online</button>
                <button class="mx-6">All</button>
                <button class="mx-6">Pending</button>
                <button class="mx-6">Blocked</button>
            </div>
            <div>
                Accessory Buttons
            </div>
          </div>
      </div>
        <component :is="contentType"></component>
  </div>
</template>