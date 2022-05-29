<script>
import store from "@/store"
import { mapState } from 'vuex'
import ActiveNowContent from "./ActiveNowContent.vue"
export default {

  data() {
    return {
    }
  },
  computed:{
  },
  components:{
    activeNowContent: ActiveNowContent,
  }

}
</script>

<template>
  <div class="flex-1 bg-green-500 flex min-h-screen justify-between">
    Content Box Friends
    <activeNowContent></activeNowContent>
  </div>
</template>