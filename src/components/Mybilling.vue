<template>
<div class="w-[100%] h-[100%]">
    <div class="w-full flex justify-center mb-4 items-center">
          <p class=" text-3xl font-bold text-blue-500">My Billing</p>
    </div>
    <div class="w-full flex justify-center items-center mt-4 mb-4">
        <table class="table-auto w-[80%] border-collapse border border-slate-400 mb-2">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-4 border border-slate-300 whitespace-nowrap">
                                    <div class="font-semibold text-left text-lg">Course Name</div>
                                </th>
                                <th class="p-4 border border-slate-300 whitespace-nowrap">
                                    <div class="font-semibold text-left text-lg">Viewers</div>
                                </th>
                                <th class="p-4 border border-slate-300 whitespace-nowrap">
                                    <div class="font-semibold text-left text-lg">Price</div>
                                </th>
                                <th class="p-4 border border-slate-300 whitespace-nowrap">
                                    <div class="font-semibold text-center text-lg">Price After Tax</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr>
                                <td class="p-4 border border-slate-300 whitespace-nowrap">
                                    <div class="font-medium text-lg text-gray-800">Burak Long</div>
                                </td>
                                <td class="p-4 border border-slate-300 whitespace-nowrap">
                                    <div class="text-left text-lg">160,000</div>
                                </td>
                                <td class="p-4 border border-slate-300 whitespace-nowrap">
                                    <div class="text-left text-lg font-medium text-green-500">$1,220.66</div>
                                </td>
                                <td class="p-4 border border-slate-300 whitespace-nowrap">
                                    <div class="text-lg text-center">$1,200.80</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-4 border border-slate-300 whitespace-nowrap">
                                    <div class="font-medium text-lg text-gray-800">Burak Long</div>
                                </td>
                                <td class="p-4 border border-slate-300 whitespace-nowrap">
                                    <div class="text-left text-lg">160,000</div>
                                </td>
                                <td class="p-4 border border-slate-300 whitespace-nowrap">
                                    <div class="text-left text-lg font-medium text-green-500">$1,220.66</div>
                                </td>
                                <td class="p-4 border border-slate-300 whitespace-nowrap">
                                    <div class="text-lg text-center">$1,200.80</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-4 border border-slate-300 whitespace-nowrap">
                                    <div class="font-medium text-lg text-gray-800">Burak Long</div>
                                </td>
                                <td class="p-4 border border-slate-300 whitespace-nowrap">
                                    <div class="text-left text-lg">160,000</div>
                                </td>
                                <td class="p-4 border border-slate-300 whitespace-nowrap">
                                    <div class="text-left font-medium text-lg text-green-500">$1,220.66</div>
                                </td>
                                <td class="p-4 border border-slate-300 whitespace-nowrap">
                                    <div class="text-lg text-center">$1,200.80</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-4 border border-slate-300 whitespace-nowrap">
                                        <div class="font-medium text-lg text-gray-800">Burak Long</div>
                                </td>
                                <td class="p-4 border border-slate-300 whitespace-nowrap">
                                    <div class="text-left text-lg">222,200.00</div>
                                </td>
                                <td class="p-4 border border-slate-300 whitespace-nowrap">
                                    <div class="text-left text-lg font-medium text-green-500">$1,890.66</div>
                                </td>
                                <td class="p-4 border border-slate-300 whitespace-nowrap">
                                    <div class="text-lg text-center">$1,333.77</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                        <div class="w-full flex justify-center space-y-4 flex-col mb-2 items-center">
                           <div class="mb-4"><span class="text-2xl text-blue-500 font-bold  p-2">Total bill:</span><span class="text-2xl text-yellow-500 font-bold p-2">300 SDG</span></div>
                           <div class="w-[180px] flex justify-center items-center h-[40px]"><router-link class="w-[180px] flex justify-center rounded-lg hover:bg-blue-700 items-center text-xl font-bold h-[40px] bg-blue-500 hover:text-white text-white" to="/monywithdraw">Withdraw</router-link></div>
    </div>

</div>
</template>
<script>
import axios from 'axios'
export default {
name:'mycourse',
data(){
    return{
         view:null,
         img:require('../assets/images.png'),

    }
},
methods:{
   getvideo(v){
       setTimeout(() => this.$router.push({path: `/myvideos/${v}`}), 100);
   }
},
mounted(){
    let formData = new FormData();
            var user=JSON.parse(localStorage.getItem('user'));
            formData.append('id',user.id)
            console.log(user.id)
     axios.post('http://127.0.0.1:8000/api/showcourse',formData).then((res)=>{
        console.log(res.data)
                this.view=res.data
            }).catch((err)=>{
        console.log(err)
            });
       
},

}
</script>
<style scoped>

</style>