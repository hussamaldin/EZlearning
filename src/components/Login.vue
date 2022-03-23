<template>
<div class="h-[700px] w-full flex justify-center items-center relative">
  <div class="relative w-[50%] h-full group">
     <div class="-right-[50px] card bg-blue-400 shadow-lg z-0 w-[100%] h-full rounded-3xl absolute transition duration-500 ease-in-out transform -rotate-6 group-hover:rotate-6"></div>
    <div class="-right-[50px] card bg-red-400 shadow-lg z-0 w-[100%] h-full rounded-3xl absolute transition duration-500 ease-in-out transform rotate-6 group-hover:-rotate-6"></div>
    <div class="flex flex-col w-full h-full z-10">
      <div class="w-full bg-blue-500 flex items-center rounded-tl rounded-tr justify-center z-10 h-[60px] ">
        <p class="text-white text-xl">Sign in with your account</p>
      </div>
      <div class="h-[640px]">
      <form class="w-full h-full flex flex-col items-center relative border rounded-bl rounded-br border-gray-100 z-10 bg-white">
        <div class="relative w-[70%] h-[10%] mt-5">
      <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-white">
                  <i class="fa fa-envelope text-white"></i>
                </div>
                <input type="text" v-model="username" class="text-lg h-full placeholder-white bg-blue-300 focus:bg-blue-100 pl-10 pr-4 rounded w-full border-2 border-indigo-100 focus:outline-none  focus:border-indigo-600" placeholder="Email">
          </div>
          <div class="relative w-[70%] h-[10%] mt-5">
      <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-white">
                  <i class="fa fa-unlock-alt text-white"></i>
                </div>
                <input type="password" v-model="password" class="text-lg h-full placeholder-white pl-10 pr-4 rounded w-full bg-blue-300 focus:bg-blue-100 pl-10 pr-4 rounded w-full border-2 border-indigo-100 focus:outline-none  focus:border-indigo-600" placeholder="Password">
          </div>
          <div class="flex justify-end w-[70%] h-[10%] rounded mt-4"><a class="text-lg cursor-pointer hover:underline text-yellow-300">Forgot Password ?</a></div>
          <div class="h-[10%] w-[70%]  mt-2"><button @click.prevent="send" class="h-[70%] rounded font-bold text-white text-lg w-full bg-blue-500 hover:bg-blue-700">Sign In</button></div>
          <div class="h-[10%] w-[70%] mt-2"><p>OR</p></div>
          <div class="h-[10%] w-[70%] mt-2 rounded w-full text-lg font-bold text-indigo-500 border border-blue-500 hover:bg-blue-500 hover:text-white"><a href="/signup" class="w-full h-full justify-center flex hover:text-white items-center">Create New Account</a></div>
      </form>
      </div>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            username:null,
            password:null,
            img:require('../assets/Swagger.jpg')
        }
    },
methods:{
  send(){
let data = {
username: this.username,
password: this.password
};
        axios.post('https://hmmod2022.pythonanywhere.com/showToken/',data).then((res)=>{
            console.log(res)
                          localStorage.setItem('token',res.data.token);
        setTimeout(() => this.$router.push({path: '/'}), 500);
        }).catch((err)=>{
    console.log(err)
        });

    }
}
}
</script>

<style scoped>

</style>