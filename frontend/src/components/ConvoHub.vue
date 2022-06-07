<script>
import store from "@/store"
import { mapState } from 'vuex'
import directMessageBox from "@/components/directMessageBox"
export default {
  data() {
    return {
        directMessageState: [
            {id: '1', username: 'Artanthose', userID: 1001, statusExists: true, status: 'LongLongLongLongLongLongLongLongLongLongLongLongLongLong'},
            {id: '2', username: 'Kanra', userID: 1002, statusExists: true, status: 'Short'  },
            {id: '3', username: 'Alex', userID: 1003, statusExists: false, status: ''  },
        ]
    }
  },
  computed:{
  },
  components: {
      directMessageBox: directMessageBox,
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
                <button class="text-left mb-2">Friends</button>
                <button class="text-left">Upgrade</button>
            </div>
            <div>
                Direct Messages
                <directMessageBox v-for="convo in directMessageState" :key="convo.id" :userStatusExists="convo.statusExists" :userStatusText="convo.status" :userName="convo.username" :userID="convo.userID"></directMessageBox>
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