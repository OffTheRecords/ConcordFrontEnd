<template>
  <div class="flex items-center justify-center">
    <div class="w-full max-w-md">
        <h1>Server response:</h1>
        <h1> {{ messageChain }} </h1>
    </div>
    <!-- <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" type="text" v-model="userMessage"> 
    <button class="px-4 py-2 rounded text-white inline-block shadow-lg bg-[#facc15]" type="submit" @click="sendMessage(userMessage)">Send</button> -->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'HomeView',
  data() {
    return {
        connection: null,
        messageChain: "",
        userMessage: null
    }
  },
  computed:{
    
  },
  components: {
},
  methods: {
      sendMessage: function(message){
          this.messageChain = this.messageChain + "User: " + message
          this.connection.send(message)
      }

  },
  created: function(){
      console.log("Opening websocket")
      this.connection = new WebSocket("wss://concord.dafoe.me/chat/ws")
      let self = this
      this.connection.onmessage = function(event){
          console.log(event);
          self.messageChain = event.data
      }
      this.connection.onopen = function(event){
          console.log(event)
          console.log("Successfully opened socket")
      }
  }
}
</script>
