<template>
    <div class="w-full h-full">
          <div class="flex flex-row bg-gray-100 border-2 border-gray-200 h-full mx-auto my-auto w-[85%]">
            <div class="w-[50%] h-auto w-full rounded-l-lg">
             <img :src="img2" class="w-full h-full bg-cover"></div>
            <div class="w-[50%] rounded-r-lg mx-4">
              <h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
              <form class="w-full h-full text-left">
                <div class="flex flex-row justify-between mb-3 py-4">
                  <div class="mb-3">
									<label class="block mb-2 text-lg font-bold text-gray-700" for="firstName">First Name</label>
									<input  v-model="fristName" class="w-full px-3 py-2  focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance-none focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name"	/>
								</div>
                <div class="mb-3">
									<label class="block mb-2 text-lg font-bold text-gray-700" for="firstName">last Name</label>
									<input v-model="lastName" class="w-full px-3 py-2  focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance-none focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name"/>
								</div>
                </div>
                                <div class="flex flex-row justify-between mb-3 py-4">
                <div class="mb-3 py-4">
                  <label class="block text-left mb-2 text-lg font-bold text-gray-700">User Name</label>
                  <input type="text" v-model="username" placeholder="username" class="w-full px-3 py-2 focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance focus:outline-none focus:shadow-outline">
                </div>
                                <div class="mb-3 py-4">
                  <label class="block text-left mb-2 text-lg font-bold text-gray-700">Email</label>
                  <input type="text" v-model="email" placeholder="Email" class="w-full px-3 py-2 focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance focus:outline-none focus:shadow-outline">
                </div>
                                </div>
                                <div class="flex flex-row justify-between mb-3 py-4">
                                <div class="mb-3 py-4">
                  <label class="block text-left mb-2 text-lg font-bold text-gray-700">Password</label>
                  <input type="password" v-model="password" placeholder="Password" class="w-full px-3 py-2 focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance focus:outline-none focus:shadow-outline">
                </div>
                                <div class="mb-3 py-4">
                  <label class="block text-left mb-2 text-lg font-bold text-gray-700">Education</label>
                  <input type="text" v-model="education" placeholder="Education" class="w-full px-3 py-2 focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance focus:outline-none focus:shadow-outline">
                </div>
                                </div>
                <div class="flex flex-row justify-between my-4 mb-4 py-4">
                                                  <div class="mb-3 py-4">
                  <label class="block text-left mb-2 text-lg font-bold text-gray-700">Image</label>
                  <input type="text" v-model="image" placeholder="Image" class="w-full px-3 py-2 focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance focus:outline-none focus:shadow-outline">
                </div>
                 <div class="mb-3 py-4">
									<label class="block mb-2 text-lg font-bold text-gray-700" for="password">Description</label>
									<input  v-model="description"	class="w-full px-3 py-2 focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance-none focus:outline-none focus:shadow-outline" type="text" placeholder="Description"/>
								</div>
                </div>
                <div class="mb-4 text-center">
								<button @click.prevent="send"	class="w-full px-4 py-2 font-bold text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"	type="button">
									Create an Account
								</button>
							</div>
							<hr class="mb-6 my-4 border-t" />
              <div class="text-center py-1">
                <a href="#" class="inline-block hover:underline text-lg text-blue-500 hover:text-blue-700">Forget Password</a>
              </div>
              <div class="text-center py-1">
                <a class="inline-block text-lg text-blue-500 hover:underline hover:text-blue-700" href="#">Alerady Have an Account</a>
              </div>
              </form>
            </div>
          </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
data(){
    return{
      img:require('../assets/images.png'),
      img2:require('../assets/sign.jpg'),
      username:null,
        fristName:null,
        lastName:null,
        password:null,
        education:null,
        email:null,
        image:null,
        description:null,
      
    }
},
methods:{
  send(){
let data = {
      username:this.username,
        fristName:this.fristName,
        lastName:this.lastName,
        password:this.password,
        education:this.education,
        email:this.email,
        image:this.image,
        description:this.description,
};
        axios.post('https://hmmod2022.pythonanywhere.com/signUp/',data).then((res)=>{
            console.log(res)
        setTimeout(() => this.$router.push({path: '/'}), 500);
        }).catch((err)=>{
    console.log(err)
        });

    }
}
}
</script>

<style scoped>

</style>