<template>
  <div class="w-[100%] h-[100%]">
      <div class="w-full h-[100px] flex justify-center"><p class="text-4xl font-bold text-blue-500 font-bold">Course Control Panel</p></div>
      <div class="w-[70%] mx-auto border border-gray-500 bg-gray-100 p-4">
         <div class="mt-4 text-left py-4 leading-relaxed">
           <p class="text-3xl my-2">How To Become Java Developer</p>
           <p class="text-lg text-gray-400">nerkjrv eejvnervj rervjervrv eevnervrv erjvnrevre vejvnrnvr 
             nvenvjkernv vjnervjknrev evjrenrvjrev ernvjnrejkvn erjnverkjvnre
             revjerkvjnrevj errvjervjkrev erjvnrejknvr ervnerv erkjvrekjjvn
           </p>
         </div>
         <div class="mt-4 text-left h-[100px] leading-relaxed">
           <p class="text-3xl my-2">Course Content</p>
           <p class=" text-lg my-2">lesson 1 : Here is The Lesson Name</p>
           <p class="text-sm text-gray-400">jrenjrejrnv rjvnrevnrejv revjnrevnerv rvnreovn eronernvrv
             jfevnekjrnv ervervkre ervnerv errovnervn ervnnervn rennnerv rrvr
           </p>
         </div>
         <div class="w-full h-full mt-4 flex h-[250px] flex-row justify-around">
           <div class="w-[40%] h-[200px]">
             <img :src="img">
           </div>
           <div class="w-[40%] h-[200px]">
             <img :src="img">
           </div>
         </div>
         <div class="mt-4 p-2 h-[100px]">
           <div class="w-[50%] mx-auto text-blue-500 h-[50px] border justify-around flex flex-row items-center border-gray-2 bg-white">
           <p class="text-lg">Tap Here To Download The Lesson</p><span class="text-lg"><i class="fa fa-download"></i></span>
           </div>
         </div>
         <div class="w-full text-white text-lg h-[150px] flex flex-row justify-around">
           <div class="w-[150px] h-[60px]"><button class="bg-blue-500 text-xl hover:bg-white hover:text-blue-600 border-2 hover:border-blue-500 border-blue-700 rounded-xl h-full w-full">Delete</button></div>
           <div class="w-[150px] h-[60px]"><button class="bg-blue-500 text-xl hover:bg-white hover:text-blue-600 border-2 hover:border-blue-500 border-blue-700 rounded-xl h-full w-full">Edit</button></div>
           
         </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name:'add',
data(){
    return{
       Title:'',
       Subject:'',
       Level:'',
       Description:'',
       University:'',
       file:'',
       urlimg:null,
       img:require('../assets/Apple.jpg')
    }
},
methods:{
  handleFileUpload(){
        this.file = this.$refs.file.files[0];
        this.urlimg=URL.createObjectURL(this.file);
      },
      submitFile(){
            let formData = new FormData();
            var user=JSON.parse(localStorage.getItem('user'));
            console.log(user.id)
            formData.append('Title', this.Title);
            formData.append('Subject', this.Subject);
            formData.append('Level', this.Level);
            formData.append('Description', this.Description);
            formData.append('University', this.University);
            formData.append('image', this.file);
            formData.append('user_id',user.id)
            axios.post( 'http://127.0.0.1:8000/api/store',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
           this.$router.push({path: '/'});
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      },
},
mounted(){

},
}
</script>

<style scoped>

</style>