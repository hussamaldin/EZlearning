<template>
<div class="w-[60%] p-2 mx-auto h-auto flex flex-col justify-end rounded ">
      <div class="h-[60px] w-[100%] mx-auto bg-blue-500 flex justify-center items-center">
          <p class="text-3xl text-white">Publish your course content</p>
      </div>
      <div class="h-full flex bg-gray-50 border-2 border-gray-100 p-4 w-[100%] mx-auto justify-center">
          <form class="flex flex-col p-4 h-full w-full">
              <div class="w-[100%] h-[60px] mt-4"><input class="placeholder-white rounded text-lg py-2 px-4 bg-blue-200 h-full w-[100%]" type="text" placeholder="Course Name"></div>
              <div class="w-[100%] h-[150px] mt-4"><textarea  class="resize-non placeholder-white py-2 px-4 rounded text-lg bg-blue-200 w-[100%] h-full text-white" placeholder="Course Discription"></textarea></div>
              <div class="w-[100%] h-[60px] mt-4"><input class="placeholder-white rounded text-lg py-2 px-4 bg-blue-200 h-full w-[100%]" type="text" placeholder="Course Name"></div>
              <div class="w-[100%] h-[70px] overflow-hidden relative mt-4"><button class="bg-gray-50 text-blue-500 font-bold py-2 px-4 w-full inline-flex items-center"><i class="bg-blue-500 text-white w-[50px] flex justify-center items-center h-[50px] rounded-full fa fa-download"></i><span class="pl-4">Upload File</span></button><input class="cursor-pointer absolute block py-2 px-4 w-full h-full opacity-0 left-0 top-0" type="file" placeholder="course price"></div>
              <div class="w-[100%] h-[70px] overflow-hidden relative mt-2"><button class="bg-gray-50 text-blue-500 font-bold py-2 px-4 w-full inline-flex items-center"><i class="bg-blue-500 text-white w-[50px] flex justify-center items-center h-[50px] rounded-full fa fa-download"></i><span class="pl-4">Upload Video</span></button><input class="cursor-pointer absolute block py-2 px-4 w-full h-full opacity-0 left-0 top-0" type="file" placeholder="course price"></div>
              <div class="w-[100%] h-[130px] mt-4"><textarea  class="resize-non placeholder-white rounded text-lg bg-blue-200 w-[100%] h-full text-lg py-2 px-4 text-white" placeholder="Course Discription"></textarea></div>
              <div class="w-[100%] h-[60px] mt-4"><button class="bg-blue-500 h-full w-[100%] rounded text-lg text-white">Publish</button></div>
         </form>
      </div>
      </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'myvideos',
    components: {
  },
data(){
    return{
         view:null,
         id:this.$route.params.id,
         com:this.$route.params.id
    }
},
methods:{
 plusview:function(){
         
        let Is = new FormData();
            Is.append('id',this.id)
     axios.post('http://127.0.0.1:8000/api/plusview',Is).then((res)=>{
        console.log(res.data)

            }).catch((err)=>{
        console.log(err)
            });
 }
},
mounted(){
    let Id = new FormData();
            Id.append('id',this.id)
     axios.post('http://127.0.0.1:8000/api/showvideo',Id).then((res)=>{
        console.log(res.data)
                this.view=res.data
            }).catch((err)=>{
        console.log(err)
            });
},
computed: {
    count () {
      return this.$store.state.count
    }
  }

}
</script>