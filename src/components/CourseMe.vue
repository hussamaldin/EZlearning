<template>
<div class="w-[100%] h-[100%]">
    <div class="w-full flex justify-center items-center mb-4">
          <p class=" text-3xl font-bold text-blue-500">Course created by me</p>
    </div>
    <div class="w-[100%] h-full flex flex-row flex-wrap justify-center ">
        <div x-data="{ toggle: false }" v-for="dod in courses" :key="dod.id" class="w-[30%] h-[510px] flex flex-col p-4 relative bg-blue-500 text-white rounded m-4">
            <div :class="!dod.active ?'animate__animated animate__fadeIn animate__faster flex flex-col text-left w-full bg-white h-[50%] absolute left-0 top-0':'animate__animated animate__fadeIn animate__faster flex flex-col text-left w-full bg-white hidden h-[50%] absolute left-0 top-0'">
                <div class="w-full h-[33%] relative flex items-center hover:bg-blue-400 border-b group cursor-pointer border-gray-300"><a href="/control" class="w-full flex items-center"><span class="p-1"><i class="group-hover:text-white w-[40px] text-3xl h-[30px] text-blue-300 fa fa-pencil"></i></span><p class="text-lg group-hover:text-white text-blue-500">Edit</p></a><span @click="dod.active =!dod.active" class="cursor-pointer p-2 w-[30px] h-[30px] flex items-center justify-center rounded-full absolute top-2 right-1 text-white bg-blue-500 hover:bg-blue-700"><i class="fa fa-close"></i></span></div>
                <div class="w-full h-[33%] flex items-center hover:bg-blue-400 border-b group cursor-pointer border-gray-300"><span class="p-1"><i class="group-hover:text-white w-[40px] text-3xl h-[30px] text-blue-300 fa fa-trash-o"></i></span><p class="text-lg group-hover:text-white text-blue-500">Delete</p></div>
                <div class="w-full h-[33%] flex items-center hover:bg-blue-400 cursor-pointer group"><span class="p-1"><i class="group-hover:text-white w-[40px] text-3xl h-[30px] text-blue-300 fa fa-dot-circle-o"></i></span><p class="text-lg group-hover:text-white text-blue-500">Available</p></div>
            </div>
            <div class="w-[100%] text-lg flex flex-row justify-between"><p>{{dod.title}}</p> <span  @click="dod.active = !dod.active" class="hover:bg-white w-[30px] h-[30px] cursor-pointer rounded-full"><i class="fa fa-ellipsis-v text-lg m-auto w-full h-full hover:text-blue-500"></i></span></div>
            <div class="w-[100%] h-[150px] mt-2 rounded"><img class=" rounded w-full h-full" :src="img"></div>
            <div class="w-[100%] text-left text-lg mt-3"><p>{{dod.description}}</p></div>
            <div class="w-[100%] text-left text-lg mt-3 text-center break-words"><p>oewcjeocnowencencnewicencencienwicneicneicunewicunecneiwnciuewnciencuewnciunewicnwecencinewciuencencencwiecni</p></div>
            <div class="w-[100%] text-xl font-bold rounded mt-3 p-2 text-yellow-400 bg-white text-center"><p class="w-full h-full">{{dod.price}}</p></div>
            <div class="w-[100%] text-xl font-bold hover:text-blue-900 mt-3 rounded p-2 bg-white text-blue-500 text-center"><a href="/publish" class="w-full h-full"><button class="w-full h-full">View Content</button></a></div>
        </div>
        <div class="w-[100%] h-[80px] mt-4">
            <div class="w-[300px] bg-blue-500 border-2 border-blue-700 hover:bg-blue-700 rounded-xl group p-2 text-white mx-auto flex flex-row my-auto justify-around cursor-pointer h-full">
            <a href="/newcourse" class="w-full flex hover:text-white items-center"><span class="w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center"><i class="fa fa-plus group-hover:text-blue-700 text-blue-500 text-3xl"></i></span><button class="w-[70%] text-xl font-bold">Create new Course</button></a>
            </div>
        </div> 
        
    </div>
    
</div>
</template>
<script>
import axios from 'axios'
export default {
    
name:'myvideos',
data(){
    return{
        img:require('../assets/Swagger.jpg'),
         view:null,
         courses:null,
         doted:false,
         id:this.$route.params.id
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
        axios.get('https://hmmod2022.pythonanywhere.com/course/my_cousrses/', config).then((res)=>{
            console.log(res)
                         this.courses=res.data

        }).catch((err)=>{
    console.log(err)
        });

    },
methods:{
doed(v){
this.mycourse.filter(item => {
    if(item.id == v)
         item.open="true"
      })
},

},


}
</script>
<style scoped>

</style>