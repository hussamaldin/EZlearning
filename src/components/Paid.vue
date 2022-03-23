<template>
    <div class="w-[100%] h-[100%]">
    <div class="w-full flex justify-center mb-2 items-center">
          <p class=" text-3xl font-bold text-blue-500">My Paid Courses</p>
    </div>
    <div class="bg-gray-100 w-[68%] mx-auto p-4 text-left" v-for="na in courses" :key="na.id">
        <div class="flex flex-row mb-4">
            <div class="pr-2 w-[35%] text-center">
                <div class="h-[210px] mb-2 w-[280px]"><img :src="img" class="w-full h-full"></div>
                <div class="bg-blue-500 font-bold text-center text-white text-lg w-[280px]">{{na.date}}</div>
                <div class="mb-2"><i class="fa fa-star text-2xl text-yellow-500 p-2"></i><i class="fa fa-star text-2xl text-yellow-500 p-2"></i><i class="fa fa-star text-2xl text-yellow-500 p-2"></i><i class="fa fa-star text-2xl text-yellow-500 p-2"></i><i class="fa fa-star text-2xl text-yellow-500 p-2"></i></div>
                <div class="text-xl mb-2 text-gray-400">{{na.price}}</div>
                <div class="text-xl text-gray-400">2,534,641 Views</div>
            </div>
            <div class="pl-4 w-[65%]">
                <div class="mb-2 p-2"><span class="text-2xl font-bold">Category:</span> <span class="text-2xl font-bold text-yellow-400">Computer Science</span></div>
                <div class="font-bold mb-2 text-2xl p-2">{{na.title}}</div>
                <div class=" text-gray-400 mb-2 leading-8 p-2 text-xl">DescripeCourse DescripeCourse DescripeCourse DescripeCourse DescripeCourse DescripeCourse DescripeCourse DescripeCourse DescripeCourse</div>
                <div class="mb-4 mt-2 text-gray-400 text-xl">
                <div class="text-2xl mb-1 font-bold text-gray-700">Course Requirements:</div>
                <div class="mb-1">- Her number one</div>
                <div class="mb-1">- and here</div>
                <div class="mb-1">- another requirements to add</div>
                <div class="mb-2">- here here here</div>
                </div>
                <div class="mb-4 mt-2 text-gray-400 text-xl">
                <div class="text-2xl text-gray-700 font-bold">Course Content:</div>
                <div class="mb-1">- Her number one</div>
                <div class="mb-1">- and here</div>
                <div class="mb-1">- another requirements to add</div>
                <div class="mb-1">- and here</div>
                <div class="mb-1">- another requirements to add</div>
                <div class="mb-1">- here here here</div>
                </div>
                <div class=" mb-4"><span class="text-2xl p-2 font-bold">Instrctor:</span> <span class="text-2xl font-bold text-yellow-400">John Doe</span></div>
                <div class="w-[250px] mt-4 h-[80px] " ><a href="/myprogress" class="w-full my-2 p-2 h-full rounded-xl bg-blue-500 text-xl font-bold hover:text-white text-white border-2 border-blue-700 hover:bg-blue-700">Start Now</a></div>
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
           img:require('../assets/java.png'),
           courses:null,
           id:this.$route.params.id
       }
    },
    mounted(){
        
    const config = {
        headers: {
            "Content-type": "application/json",
              "Authorization": `Token ${localStorage.getItem("token")}`,
        },
    };

console.log(config)
        axios.put(`https://hmmod2022.pythonanywhere.com/buy_course/${this.$route.params.id}/`,{}, config).then((res)=>{
            console.log(res)
                         this.courses=res.data
        }).catch((err)=>{
    console.log(err)
        });

    }
}
</script>