<template>
<div class="w-[60%] mx-auto h-auto flex flex-col justify-end rounded ">
      <div class="h-[60px] mb-4 w-[100%] mx-auto bg-blue-500 flex justify-center items-center">
          <p class="text-3xl text-white">Create New Course</p>
      </div>
      <div class="h-[600px] p-1 flex bg-gray-50 border-2 border-gray-100 w-[100%] mx-auto justify-center">
      <form class="w-full h-full flex flex-col items-center relative border rounded-bl rounded-br border-gray-100 z-10 bg-white">
        <div class="relative w-[70%] h-[10%] mt-5">
      <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-white">
                  <i class="fa fa-envelope text-white"></i>
                </div>
                <input type="text" v-model="title" class="text-lg h-full placeholder-white bg-blue-300 focus:bg-blue-100 pl-10 pr-4 rounded w-full border-2 border-indigo-100 focus:outline-none  focus:border-indigo-600" placeholder="title">
          </div>
          <div class="relative w-[70%] h-[10%] mt-5">
      <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-white">
                  <i class="fa fa-unlock-alt text-white"></i>
                </div>
                <input type="text" v-model="description" class="text-lg h-full placeholder-white pl-10 pr-4 rounded w-full bg-blue-300 focus:bg-blue-100 pl-10 pr-4 rounded w-full border-2 border-indigo-100 focus:outline-none  focus:border-indigo-600" placeholder="desc">
          </div>
                  <div class="relative w-[70%] h-[10%] mt-5">
      <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-white">
                  <i class="fa fa-envelope text-white"></i>
                </div>
                <input type="text" v-model="descriptionOfRequerment" class="text-lg h-full placeholder-white bg-blue-300 focus:bg-blue-100 pl-10 pr-4 rounded w-full border-2 border-indigo-100 focus:outline-none  focus:border-indigo-600" placeholder="descreq">
          </div>
          <div class="relative w-[70%] h-[10%] mt-5">
      <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-white">
                  <i class="fa fa-unlock-alt text-white"></i>
                </div>
                <input type="text" v-model="price" class="text-lg h-full placeholder-white pl-10 pr-4 rounded w-full bg-blue-300 focus:bg-blue-100 pl-10 pr-4 rounded w-full border-2 border-indigo-100 focus:outline-none  focus:border-indigo-600" placeholder="price">
          </div>
                    <div class="relative w-[70%] h-[10%] mt-5">
      <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-white">
                  <i class="fa fa-unlock-alt text-white"></i>
                </div>
                <input type="text" v-model="afterThisCourse" class="text-lg h-full placeholder-white pl-10 pr-4 rounded w-full bg-blue-300 focus:bg-blue-100 pl-10 pr-4 rounded w-full border-2 border-indigo-100 focus:outline-none  focus:border-indigo-600" placeholder="after">
          </div>
                              <div class="relative w-[70%] h-[10%] mt-5">
      <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-white">
                  <i class="fa fa-unlock-alt text-white"></i>
                </div>
                <input type="text" v-model="categorie" class="text-lg h-full placeholder-white pl-10 pr-4 rounded w-full bg-blue-300 focus:bg-blue-100 pl-10 pr-4 rounded w-full border-2 border-indigo-100 focus:outline-none  focus:border-indigo-600" placeholder="categro">
          </div>
          <div class="h-[10%] w-[70%]  mt-2"><button @click.prevent="send" class="h-[70%] rounded font-bold text-white text-lg w-full bg-blue-500 hover:bg-blue-700">Sign In</button></div>

      </form>
      </div>
      </div>
</template>

<script>
import axios from 'axios'
export default {
name:'view',
data(){
    return{
        view:null,
        notfound:false,
        title:null,
        description:null,
        descriptionOfRequerment:null,
        price:null,
        afterThisCourse:null,
        categorie:null,
        img:require('../assets/download.jpg'),
        id:this.$route.params.id

    }
},
methods:{
  send(){
let data = {
title: this.title,
description: this.description,
descriptionOfRequerment: this.descriptionOfRequerment,
price: this.price,
afterThisCourse: this.afterThisCourse,
categorie:this.categorie
};
const token =localStorage.getItem("token");
    const config = {
        headers: {
            "Content-type": "application/json",
              "Authorization": `Token ${localStorage.getItem("token")}`,
        },
    };

console.log(token)
        axios.post('https://hmmod2022.pythonanywhere.com/createCourse/',data, config).then((res)=>{
            console.log(res)
                         
        setTimeout(() => this.$router.push({path: '/'}), 500);
        }).catch((err)=>{
    console.log(err)
        });

    }
},
watch:{
 /*$route(){
 axios.get(`http://127.0.0.1:8000/api/onlinecourse/${this.$route.params.id}`).then((res)=>{
     if(!res.data.length){
            this.notfound=true
        }
        else{
        this.notfound=false
        }
                this.view=res.data
            }).catch((err)=>{
        console.log(err)
            });
 }*/
},
mounted(){
/*    axios.get(`http://127.0.0.1:8000/api/onlinecourse/${this.$route.params.id}`).then((res)=>{
        if(!res.data.length){
            this.notfound=true
            console.log(this.notfound)
        }
        else{
        this.notfound=false
        }
                this.view=res.data
            }).catch((err)=>{
        console.log(err)
            });
       
    */},
computed:{
}
}
</script>

<style scoped>
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
span a{
    
    text-decoration: none;
    float: left;
    margin: 20px auto;
}
.content{
    width: 80%;
    margin: 10px auto;
    
}
.info{
    width: 100%;
    margin: 40px 2px 10px 2px;
    overflow: hidden;
}
.info button{
    float: right;
    margin-left: 5px;
}
.info button:hover{
    opacity: .8;
}
#edit{
    width: 70px;
    color: #fff;
    font-weight: bold;
    padding: 8px;
    outline: none;
    background-color: dodgerblue;
    border: transparent;
}
#del{
    width: 70px;
    color: #fff;
    font-weight: bold;
    padding: 8px;
    outline: none;
    background-color: crimson;
    border: transparent;
}
.nu1,.nu2{
    width: 100%;
    text-align: left;
    padding: 10px;
}
.nu1 p{
    width: 100%;
    border: 1px solid #ddd;
    padding: 10px;
}
.nu2 p{
    width: 100%;
    border: 1px solid #ddd;
    padding: 10px;
}
</style>