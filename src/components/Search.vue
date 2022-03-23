<template>
    <div class="w-[100%] h-full">
        <div class="flex flex-row mb-4 items-center"><span class="w-[35px] hover:bg-blue-700 bg-blue-500 text-white flex items-center justify-center h-[35px] rounded-full"><i class="fa fa-arrow-left text-lg"></i></span> <span class="pl-2">Back</span></div>
        <div class="w-full text-center flex flex-col mb-4">
            <div class="pb-4 relative mx-auto w-[90%] h-[40px]">
             <span class="absolute w-[40px] h-[40px] rounded-md hover:bg-blue-600 bg-blue-400 text-white right-0 flex items-center pl-[12px]">
             <i class="fa fa-search"></i>
      </span>
      <input v-model="search"  type="search" name="q" class="py-2 text-sm w-full h-[40px] text-gray-400 bg-white-400 rounded-md pl-10 border-2 focus:border-blue-500 outline-none" placeholder="Search your favorite course..." autocomplete="off">
            </div>
        </div>
        <div class="flex mb-4 w-[90%] mx-auto flex-row justify-between">
<div><h1 class="text-left text-blue-500 text-xl">Search results for</h1></div>
<div>
    <select class="bg-blue-300 w-[200px] p-2 text-white text-lg">
        <option class="bg-gray-200 text-white">Category</option>
        <option class="bg-gray-200 text-white">Name</option>
        <option class="bg-gray-200 text-white">Title</option>
        <option class="bg-gray-200 text-white">Description</option>
        
    </select>
</div>
</div>
<div>
<div class="flex flex-row flex-wrap justify-center">
<div v-for="ns in courses" :key="ns.id" @click="show(ns.id)" class="w-[400px] bg-white transition ease-in-out transform scale-90 hover:scale-100 hover:shadow-lg h-auto rounded-lg m-4 border border-gray-500">
<img :src="img" class="w-full h-[250px] border-b border-gray-200">
<div class="flex flex-col h-auto">
<div class="flex text-left flex-row my-2 p-2">
<p class="w-[49%] p-2 text-lg font-bold text-gray-500">{{ns.title}}</p>
<p class="w-[49%] p-2 flex text-lg font-bold rounded-full justify-center bg-green-100 text-green-600">{{ns.date}}</p>
</div>
<div class="mt-3 text-left text-lg font-bold p-2"><p>{{ns.description}}</p></div>
<div class="text-left p-2"><i class="fa fa-star text-2xl text-yellow-500 p-2"></i><i class="fa fa-star text-2xl text-yellow-500 p-2"></i><i class="fa fa-star text-2xl text-yellow-500 p-2"></i><i class="fa fa-star text-2xl text-yellow-500 p-2"></i><i class="fa fa-star text-2xl text-yellow-500 p-2"></i></div>
<div class="mt-3 pb-4 px-2"><p class="text-right font-bold text-lg text-blue-500">{{ns.price}} Views</p></div>
</div>

</div>
</div>
</div>
    </div>
</template>
<script>
import axios from 'axios'
import json from '../Json/course.json'
export default {
    data(){
        return{
          myjson:json,
          courses:null,
          img:require('../assets/java.png')
        }
    },
    mounted(){

const token =localStorage.getItem("token");
    const config = {
        headers: {
            "Content-type": "application/json",
              "Authorization": `Token ${localStorage.getItem("token")}`,
        },
    };

console.log(token)
        axios.get('https://hmmod2022.pythonanywhere.com/course/', config).then((res)=>{
            console.log(res)
                         this.courses=res.data

        }).catch((err)=>{
    console.log(err)
        });

    },
    methods:{
        show(v){
        this.$router.push({path:`/paid/${v}`})

        }
    }
    
}
</script>