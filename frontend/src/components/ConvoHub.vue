<script>
import store from "@/store"
import { mapState } from 'vuex'
import friendChat from "@/components/friendChat"
export default {
  data() {
    return {
    }
  },
  computed:{
  },
  components: {
      friendChat: friendChat,
  }
}
</script>

<template>
    <div class="bg-blue-500 w-44 flex-none flex flex-col min-h-screen h-screen px-2 py-2">
        <div class="mb-2">
            <input placeholder="Search" v-model="SearchOption">
        </div>
        <div class="flex-1 bg-blue-300 justify-between text-left">
            <div class="text-left mb-10 flex flex-none flex-col">
                <button class="text-left mb-2">Friends</button>
                <button class="text-left">Upgrade</button>
            </div>
            <div>
                Direct Messages
                <ul>
                    <friendChat></friendChat>
                </ul>
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