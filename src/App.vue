<template>

<div class="h-fit w-[100%] bg-slate-100 overflow-hidden">
<Header :key="$route.fullPath"></Header>
<br><br>
   <div class="w-[90%] mx-auto pt-[100px] m-12 h-full bg-white-600">
    <router-view  class="animate__animated animate__fadeIn"></router-view><br><br><br><br><br><br><br><br><br>
  </div>
  <div class="w-full bg-blue-500 flex items-center justify-center h-[100px]">
      <p class="text-white text-2xl">EZteam @2021</p>
    </div>
  

</div>
</template>
<script>
import Header from './components/Header.vue'

export default {
   components: {Header},
  data(){
    return{
    
    }
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
