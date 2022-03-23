<template>
    <div class="w-[100%] h-[100%]">
    <div class="w-full flex justify-center mb-2 items-center">
          <p class=" text-3xl font-bold text-blue-500">My Course Progress</p>
    </div>
    <div class="bg-gray-100 w-[80%] mx-auto flex flex-col space-y-[50px] p-4 text-left">
        <div class="flex flex-row mb-4">
            <div class="pr-4">
                <div class="h-[210px] mb-2 w-[250px]"><img :src="img" class="w-full h-full"></div>
                <div class="bg-blue-500 font-bold text-center text-white text-lg w-[250px]">8h 17min</div>
            </div>
            <div class="pl-1">
                <div class="mb-2 p-2"><span class="text-xl font-bold">Category:</span> <span class="text-xl font-bold text-yellow-400">Computer Science</span></div>
                <div class="font-bold mb-2 text-xl p-2">How To Become Java Developer</div>
                <div class="font-bold text-gray-400 mb-2 leading-8 p-2 text-lg">DescripeCourse DescripeCourse DescripeCourse DescripeCourse DescripeCourse DescripeCourse DescripeCourse DescripeCourse DescripeCourse</div>
                <div><span class="text-xl mb-2 p-2 font-bold">Instrctor:</span> <span class="text-xl font-bold text-yellow-400">John Doe</span></div>
            </div>
        </div>

        <div class="mb-[100px]">
            <div class="text-xl font-bold">Course Content</div>
            <div class=" flex flex-row justify-between flex-wrap">
                <div class="w-[30%] h-[200px] m-2"><img :src="img" class="w-full h-full"></div>
                <div class="w-[30%] h-[200px] m-2"><img :src="img" class="w-full h-full"></div>
                <div class="w-[30%] h-[200px] m-2"><img :src="img" class="w-full h-full"></div>
                <div class="w-[30%] h-[200px] m-2"><img :src="img" class="w-full h-full"></div>
                <div class="w-[30%] h-[200px] m-2"><img :src="img" class="w-full h-full"></div>
                <div class="w-[30%] h-[200px] m-2"><img :src="img" class="w-full h-full"></div>
            </div>
        </div>

        <div class="flex flex-row mt-4 mb-2 items-center">
            <div class="text-2xl w-[48%] font-bold text-blue-500">Course progress</div>
            <div class="w-[48%] text-center "><div class="w-[400px] h-[20px] rounded-full bg-gray-200"><p class="w-[350px] bg-yellow-500 h-full rounded-full"></p></div>
            <div class="text-2xl text-blue-500 text-center font-bold"> 80% Finshed</div>
            </div>
        </div>

    </div>
    </div>
</template>
<script>
export default {
    data(){
       return{
           img:require('../assets/pc.jpg'),
       }
    }
}
</script>