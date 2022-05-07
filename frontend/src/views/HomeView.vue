<template>
  <div class="flex items-center justify-center">
    <div class="w-full max-w-md">
      <form class="text-left tbg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4 mt-4">
        <!-- @csrf -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-normal mb-2" for="email">Email</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="email" v-model="email" required autofocus placeholder="someone@example.com"/>
          </div>

          <div class="mb-5">
            <label class="block text-gray-700 text-sm font-normal mb-2" for="password">Password</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" v-model="password" required autofocus placeholder="Password" />
          </div>
          <div class="flex items-center justify-between">
            <button class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-7000" type="button">Login</button>
          </div>
      </form>
      <p class="text-center text-gray-500 text-xs">&copy;2022 Concord Corp. All rights reserved. </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
