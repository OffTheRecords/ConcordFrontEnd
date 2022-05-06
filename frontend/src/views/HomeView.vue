<template>
  <div class="min-h-580 flex justify-center py-40">
    <div class="bg-rose-600 w-480 py-20 px-32 text-lg rounded border-2 solid text-left">
      <div class="flex flex-col">

          <div class="mb-10">
            <h5>Email</h5>
            <input class="rounded border-2 solid px-1 py-1" type="text" id="Email" placeholder="someone@example.com"/>
          </div>

          <div class="mb-5">
            <h5>Password</h5>
            <input class="rounded border-2 solid px-1 py-1" type="password" id="password" placeholder="" />
          </div>
            <button class="bg-purple-500 text-white active:bg-pink-600 font-bold uppercase 
    text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none 
    focus:outline-none mb-1 ease-linear transition-all duration-150" type="button">Log in</button>
      </div>
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
