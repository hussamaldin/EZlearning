<template>
  <div class="w-[45%] p-2 mx-auto h-auto flex flex-col justify-end rounded ">
      <div class="h-[60px] w-[90%] mx-auto pb-4 flex flex-col mb-4 justify-center items-center">
          <p class="mb-2"><i class="fa fa-user-circle text-8xl text-blue-200"></i></p>
          <p class="text-3xl mb-4 font-bold text-blue-500">Add your profile picture</p>
      </div>
      <div class="w-[100%] h-[500px] mt-4 flex bg-gray-50 w-[90%] mx-auto justify-center">
          <form class="flex flex-col space-y-24 h-full w-full">
                            <div class="w-[100%] h-[15%] mt-4 mb-4"><input class="mb-2 placeholder-white focus:outline-none border-2 focus:border-blue-500 px-3 py-2 rounded text-lg bg-blue-200 h-full w-[100%]" type="text" placeholder="User Name"></div>
              <div class="w-[100%] h-[15%] mb-4">
                  <select class="w-[100%] mb-2 transition text-white text-lg px-2 py-2 ease-in-out rounded h-full bg-blue-200" >
                  <option value="" disabled selected>Your Academic level</option>
                  <option class="text-white bg-gray-300" value="Science">Graduate</option>
                  <option class="text-white bg-gray-300" value="Computer and It">Undergraduate</option>
                  <option class="text-white bg-gray-300" value="Medicine">Teacher</option>
                  </select>
                  </div>
              <div class="w-[100%] h-[15%] mb-4 mt-4"><input class="mb-2 placeholder-white focus:outline-none border-2 focus:border-blue-500 px-3 py-2 rounded text-lg bg-blue-200 h-full w-[100%]" type="text" placeholder="Enter Amount Number"></div>
              <div class="w-[100%] h-[15%] mb-4 mt-4"><input class=" mb-2 bg-blue-200 focus:outline-none border-2 focus:border-blue-500 px-3 py-2 h-full text-lg rounded placeholder-white w-[100%]" type="text" placeholder="Amount of mony you want to withdraw"></div>
              <div class="w-[100%] h-[15%] mb-4 mt-4"><button class="mb-2 bg-blue-500 px-3 py-2 h-full w-[100%] rounded-lg text-lg hover:bg-blue-700 text-white"><a class="w-full h-full hover:text-white">Save</a></button></div>
          </form>
      </div>
      </div>
</template>
<script>
export default {
name:'edit',
data(){
    return{
     img:require('../assets/download.jpg'),
     open:false,
     comments:null,
     user:'hussam',
     up:0
    }
},
methods:{
    
}
}
</script>

<style scoped>
</style>