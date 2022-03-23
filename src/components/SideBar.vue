<template>
    <div :class="aall?'md:fixed fixed overflow-auto md:overflow-auto z-40 left-0 top-16 h-[100%] md:h-[90%] w-48 px-4 border-r bg-gray-300':'z-40 md:fixed md:overflow-auto left-0 top-16 hidden md:h-[90%] w-48 px-4 border-r bg-gray-300'">
       <div class="h-[87%] w-[100%] flex flex-col text-gray-500">
           <p @click="Goit(cat.name)" v-for="cat in show" :key="cat.id" class="pl-4 flex text-lg items-center cursor-pointer py-2 mb-2 hover:text-blue-500 transtion duration-200 ease-in">{{cat.name}}</p>

       </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
        show:null
        }
    },
    methods:{
      Goit(v){
          setTimeout(() => this.$router.push({path: `/view/${v}`}), 100);
      }
    },
    computed:{
        aall:function(){
            return this.$store.state.close
        },
    },
    mounted(){
        axios.get('http://127.0.0.1:8000/api/getCate').then((res)=>{
        console.log(res.data)
                this.show=res.data
            }).catch((err)=>{
        console.log(err)
            });
        
    }
}
</script>
<style scoped>

</style>