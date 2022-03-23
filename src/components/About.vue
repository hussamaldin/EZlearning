<template>
    <div class="w-[100%] h-[100%]">
    <div class="w-full flex justify-center mb-2 items-center">
          <p class=" text-3xl font-bold text-blue-500">About Instructor</p>
    </div>
    <div class=" w-[60%] mx-auto p-4">
        <div class="flex flex-row text-left mb-4">
            <div class="pr-4">
                <div class="h-[280px] mb-2 w-[250px]"><img :src="img" class="w-full h-full"></div>
            </div>
            <div class="pl-1">
                <div class="mb-2 p-2 text-2xl text-yellow-400 font-bold">John Doe</div>
                <div class="text-gray-400 mb-2 leading-8 p-2 text-lg">DescripeCourse DescripeCourse DescripeCourse DescripeCourse DescripeCourse DescripeCourse DescripeCourse DescripeCourse DescripeCourse DescripeCourse DescripeCourse DescripeCourse DescripeCourse</div>
                <div class="text-2xl mb-2 p-2 font-bold">Standford University</div>
            </div>
        </div>
        <div class="flex flex-col justify-center w-[700px]">
            <div class="text-2xl mb-2 text-blue-500 font-bold">Course Reviews</div>
            <div class="mx-auto mb-4">
                <div class="text-lg font-bold text-gray-400 leading-8 mb-4 flex flex-row justify-center items-center w-[700px]"><div class="w-[200px] h-[150px] flex flex-col justify-center items-center mr-2 pr-2"><div class="w-[50px] h-[50px]"><img :src="img2" class="w-full h-full rounded-full"></div><div class=" w-full text-lg text-blue-400">Reviewer name</div></div><div class=" border-2 border-gray-200 pl-2">Lesson 1: Here is the lesson name Lesson 1: Here is the lesson name Lesson 1: Here is the lesson name</div></div>
                <div class="text-lg font-bold text-gray-400 leading-8 mb-4 flex flex-row justify-center items-center w-[700px]"><div class="w-[200px] h-[150px] flex flex-col justify-center items-center mr-2 pr-2"><div class="w-[50px] h-[50px]"><img :src="img2" class="w-full h-full rounded-full"></div><div class=" w-full text-lg text-blue-400">Reviewer name</div></div><div class=" border-2 border-gray-200 pl-2">Lesson 1: Here is the lesson name Lesson 1: Here is the lesson name Lesson 1: Here is the lesson name</div></div>
                <div class="text-lg font-bold text-gray-400 leading-8 mb-4 flex flex-row justify-center items-center w-[700px]"><div class="w-[200px] h-[150px] flex flex-col justify-center items-center mr-2 pr-2"><div class="w-[50px] h-[50px]"><img :src="img2" class="w-full h-full rounded-full"></div><div class=" w-full text-lg text-blue-400">Reviewer name</div></div><div class=" border-2 border-gray-200 pl-2">Lesson 1: Here is the lesson name Lesson 1: Here is the lesson name Lesson 1: Here is the lesson name</div></div>
            </div>
            <div class="text-lg font-bold text-blue-500 mb-3 w-full"><textarea placeholder="Add Your Comment ....." class="w-full border-2 border-gray-200 h-[150px]"></textarea></div>
            <div class="text-xl text-blue-500 font-bold ">Rate The Course Now</div>
            <div class="mb-2"><i class="fa fa-star text-4xl text-yellow-200 p-3 ml-2"></i><i class="fa fa-star text-4xl text-yellow-200 p-3 ml-2"></i><i class="fa fa-star text-4xl text-yellow-200 p-3 ml-2"></i><i class="fa fa-star text-4xl text-yellow-200 p-3 ml-2"></i><i class="fa fa-star text-4xl text-yellow-200 p-3 ml-2"></i></div>
            <div class="text-xl mb-2 text-blue-500 font-bold">What's next ?</div>
            <div>apply Youe Skills hith Hands-on project and build a portfolio
                apply Youe Skills hith Hands-on project and build a portfolio
                apply Youe Skills hith Hands-on project and build a portfolio
                apply Youe Skills hith Hands-on project and build a portfolio
                apply Youe Skills hith Hands-on project and build a portfolio
                apply Youe Skills hith Hands-on project and build a portfolio
            </div>
        </div>

    </div>
    </div>
</template>
<script>
export default {
    data(){
       return{
           img:require('../assets/java.png'),
           img2:require('../assets/empty.png')
       }
    }
}
</script>