<template>
<div class="flex flex-col my-2 mx-2">
  <div class="text-left">
             <span>{{as.length}} comments</span>
             </div>
             <div>
              <textarea v-model="comments" class="w-[580px] md:w-[594px] form-textarea border-1 p-1 focus:outline-none focus:border-gray-500 mt-1 block border-lg" name="" id="" cols="50" rows="5"></textarea>
              </div>
              <div>
              <button @click.prevent="send" class="cursor-pointer justify-end text-lg bg-blue-300 hover:bg-blue-500 w-[120px] text-white hover:text-black my-1">comment</button>
              </div>
          </div>
    <div class="flex flex-col mx-2 md:w-[568px] w-[350px]">
          <div v-for="(com , index) in paginatedOrders" :key="index" class="relative flex flex-row mx-2 my-2 w-[100%] h-[130px] my-4 p-[10px] bg-gray-300 rounded-full border-gray-400 border-lg">
              <img class="w-[18%] h-[100px] rounded-full absolute l-1 top[10px]" :src="img">
              <div class="w-[70%] absolute break-words right-1 h-[130px] top-[10px] p-[15px] text-left">
              <p>{{com.comment}}</p>
              </div>
          </div>
          <div class="text-right p-2">
          <button @click="loadMore" v-if="currentPage * maxPerPage < as.length" class="text-gray-400 hover:text-gray-500">Load More</button>
          </div>
          </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
      
        return{
            img:require('../assets/download.jpg'),
            as:[],
            comments:null,
            id:this.$route.params.id,
            user:JSON.parse(localStorage.getItem("user")),
            currentPage: 1,
            maxPerPage: 3,
            file: '',
        }
    },
   computed: {
    paginatedOrders() {
      return this.as.slice(0, this.currentPage * this.maxPerPage);
    },
  },
  methods: {
    send(){
        var data=new FormData();
        data.append('comment',this.comments);
        data.append('user',this.user.id);
        data.append('video_id',this.id)
        axios.post('http://127.0.0.1:8000/api/AddComment',data).then((res)=>{
            if(res.data['result']=='Faild'){
             console.log('faild')
            }
            else{
              this.$store.commit('increment')
                this.comments=''
            
            
            }
        }).catch((err)=>{
    console.log(err)
        });
    },
    loadMore() {
      this.currentPage += 1;
    },
  },
    mounted(){
      let formData = new FormData();
            formData.append('id',this.username)
            console.log(this.username)
    axios.post('http://127.0.0.1:8000/api/ShowComments',formData).then((res)=>{
            if(res.data['result']=='Faild'){
             console.log('faild')
            }
            else{
                console.log(res.data.length)
             this.as= res.data
            }
        }).catch((err)=>{
    console.log(err)
        });
        

},
}
</script>