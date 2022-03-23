<template>
    <div class="w-full h-screen">
          <div class="flex flex-row bg-gray-100 border-2 border-gray-200 h-[800px] mx-auto my-auto w-[85%]">
            <div class="w-[50%] h-auto w-full rounded-l-lg">
             <img :src="img" class="w-full h-full bg-cover"></div>
            <div class="w-[50%] rounded-r-lg mx-4">
              <h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
              <form class="w-full h-full text-left">
                <div class="flex flex-row justify-between mb-3 py-4">
                  <div class="mb-3">
									<label class="block mb-2 text-lg font-bold text-gray-700" for="firstName">
										First Name
									</label>
									<input
										class="w-full px-3 py-2  focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance-none focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name"
									/>
								</div>
                <div class="mb-3">
									<label class="block mb-2 text-lg font-bold text-gray-700" for="firstName">
										last Name
									</label>
									<input
										class="w-full px-3 py-2  focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance-none focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name"
									/>
								</div>
                </div>
                <div class="mb-3 py-4">
                  <label class="block text-left mb-2 text-lg font-bold text-gray-700">Email</label>
                  <input type="text" placeholder="Email" class="w-full px-3 py-2 focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance focus:outline-none focus:shadow-outline">
                </div>
                <div class="flex flex-row justify-between my-4 mb-4 py-4">
                 <div class="mb-3">
									<label class="block mb-2 text-lg font-bold text-gray-700" for="password">
										Password
									</label>
									<input	class="w-full px-3 py-2 focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance-none focus:outline-none focus:shadow-outline" type="password" placeholder="Password"/>
								</div>
                <div class="mb-4">
									<label class="block mb-2 text-lg font-bold text-gray-700" for="password conf">
										 Confirm Password
									</label>
									<input
										class="w-full px-3 py-2 focus:border-blue-500 border-2 text-lg leading-tight text-white bg-blue-300 placeholder-white rounded appearance-none focus:outline-none focus:shadow-outline" type="password" placeholder="Confirm Password"
									/>
								</div>
                </div>
                <div class="mb-4 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
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
import axios from 'axios'
export default {
    name:'addvideo',
data(){
    return{
       Title:'',
       Description:'',
       file:'',
       thumb:'',
       urlimg:null,
       img:require('../assets/sign.jpg'),
       urlvid:null,
       id:this.$route.params.id,
       vali:false,
    }
},
methods:{
    handlethumbUpload(){
this.thumb = this.$refs.thumb.files[0];
this.urlimg = URL.createObjectURL(this.thumb);
    },
  handleFileUpload(){
        this.file = this.$refs.file.files[0];
        this.urlvid = URL.createObjectURL(this.file);
      },
      submitFile(){
            let formData = new FormData();
            console.log(this.id)
            if(this.Title =='' || this.Description =='' || this.file =='' || this.thumb ==''){
              this.vali=true
            }
            formData.append('Title', this.Title);
            formData.append('Description', this.Description);
            formData.append('Video', this.file);
            formData.append('Thumb', this.thumb);
            formData.append('course_id',this.id)
        if(this.Title !=''&& this.Description !=''&& this.file !=''&&this.thumb !=''){
            axios.post( 'http://127.0.0.1:8000/api/addvideo',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!')
          
          setTimeout(() => this.$router.push({path: `/myvideo/${this.id}`}), 10);
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      }
      }
},
}
</script>