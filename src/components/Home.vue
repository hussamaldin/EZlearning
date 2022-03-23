<template>
      <div class="w-[100%] h-full">
              <div class="w-full text-center flex flex-col">

              <div class="pb-4 relative mx-auto w-[90%] h-[40px]">
             <span class="absolute w-[40px] h-[40px] rounded-md hover:bg-blue-600 bg-blue-400 text-white right-0 flex items-center pl-[12px]">
             <i class="fa fa-search"></i>
      </span>
      <input v-model="search"  type="search" name="q" class="py-2 text-sm w-full h-[40px] text-gray-400 bg-white-400 rounded-md pl-10 border-2 focus:border-blue-500 outline-none" placeholder="Search your favorite course..." autocomplete="off">
          </div>
          <!---->
          <div class="w-full py-4 h-[500px]">
          <img :src="img" class="w-full object-cover bg-center h-full">
          </div>
          <!---->
<div>
<h1 class="text-left">Recomended Course</h1>
<div class="flex flex-row justify-center flex-wrap">
<div v-for="ns in rec" :key="ns.id" class="w-[350px] transition ease-in-out transform scale-90 hover:scale-100 hover:shadow-lg h-[400px] box-border break-words rounded-lg m-4 border border-gray-500">
<img :src="img" class="w-full h-[60%]">
<div class="flex flex-col h-[40%]">
<div class="flex flex-row my-2 p-2">
<p class="w-[49%]">{{ns.title}}</p>
<p class="w-[49%] bg-green-100 text-green-400 rounded-md">{{ns.Duration}}</p>
</div>
<div class="mt-2"><p>{{ns.Description}}</p></div>
<div class="mt-2"><p class="text-right text-blue-400">{{ns.views}} Views</p></div>
</div>

</div>
</div>
</div>
<!--May you like-->
<div class="bg-gray-100">
<h1 class="text-left my-4 p-2">Courses You May Like</h1>
<div class="flex flex-row flex-wrap justify-center">
<div v-for="ns in myjson" :key="ns.id" class="w-[400px] bg-white transition ease-in-out transform scale-90 hover:scale-100 hover:shadow-lg h-[390px] rounded-lg m-4 border border-gray-500">
<img :src="img" class="w-full h-[60%]">
<div class="flex flex-col h-[40%]">
<div class="flex flex-row my-2 p-2">
<p class="w-[49%] text-gray-500">{{ns.title}}</p>
<p class="w-[49%] bg-green-100 text-green-400 rounded-md">{{ns.Duration}}</p>
</div>
<div class="mt-3"><p>{{ns.Description}}</p></div>
<div class="mt-3"><p class="text-right text-blue-500">{{ns.views}} Views</p></div>
</div>

</div>
</div>
</div>
<!--Footer-->
<div class="flex justify-between flex-row h-[350px] mt-2">
<div class=" relative w-[45%] flex items-center justify-center group">
<div class="w-[150px] h-[150px] bg-blue-600 absolute blur-sm opacity-90 group-hover:top-[200px] top-[5px] rounded-full left-[60px] "></div>
<div class="w-[150px] h-[150px] bg-blue-600 absolute blur-sm opacity-90 rounded-full group-hover:bottom-[200px] bottom-[10px] right-[55px] "></div>
<img :src="img" class="w-[380px] h-[280px] z-10">
</div>
<div class="w-[45%] m-auto">
<h1 class="text-center text-blue-500">Why To Choose Us ?</h1>
<p>nejcnejncjencjencjnejkcnekjnjkenc</p>
<p>nejcnejncjencjencjnejkcnekjnjkenc</p>
</div>
</div>

              </div>
      </div>
</template>

<script>
import axios from 'axios'
import json from '../Json/course.json'
import Rec from '../Json/recomended.json'
export default {
name:'Customer',
data(){
    return{
        myjson:json,
        rec:Rec,
        img:require('../assets/Swagger.jpg'),
        video:require('../assets/type.mp4')
    }
},
watch:{
    
    
},
methods:{

},
mounted(){
axios.get('http://127.0.0.1:8000/api/list').then((res)=>{
    console.log(res.data)
            this.all= res.data
        }).catch((err)=>{
    console.log(err)
        });

},
computed:{
    
}
}
</script>

<style scoped>
</style>