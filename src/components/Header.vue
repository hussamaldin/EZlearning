<template>
<div class="header w-full h-[70px] z-40">
          <img :src="img" class="block absolute left-[40px] top-2 w-[50px] h-[50px] rounded-full bg-transparent"/>
      <div class="absolute inline-block text-right py-2 right-[40px] top-3 h-8 w-full">
          <a href="/" class="inline-block text-lg px-4 text-blue-500">Home</a>
            <div :class="close?'inline-block relative group px-4':'hidden inline-block group px-4'">
              <button>My courses</button>
              <div class="animate__animated animate__fadeIn absolute top-[25px] right-[1px] pl-4 hidden group-hover:block w-[200px] text-left shadow bg-gray-200 text-yellow-400">
                <a href="/courseme" class="block p-2 hover:text-yellow-700 hover:font-bold">Course by me</a>
                <a href="/paid" class="block p-2 hover:text-yellow-700 hover:font-bold">My course I study</a>
                <a href="/mybilling" class="block p-2 hover:text-yellow-700 hover:font-bold">My billing</a>
              </div>
          </div>
          <a href="/profile" :class="close?'inline-block px-4':'hidden inline-block px-4'">Profile</a>
          <a href="/login"  :class="close?'hidden bg-blue-500 rounded-full text-white inline-block hover:bg-blue-700 px-4':'bg-blue-500 hover:bg-blue-700 rounded-full text-white inline-block px-4'">Sign In</a>
          <a href="/" @click.prevent="open" :class="close?'bg-blue-500 rounded-full text-white inline-block px-4':'hidden bg-blue-500 rounded-full text-white inline-block px-4'">Sign Out</a>

      </div>
      </div>

</template>

<script>
export default {
name:'Header',
data(){
    return{
         size:window.innerWidth,
         log:false,
         search:'',
         img:require('../assets/logo.png')
    }
},
computed :{
    close(){
   return this.$store.state.close
    }
},
methods:{
open(){
    this.$store.dispatch('open')
    
}
},

}
</script>

<style scoped>

</style>