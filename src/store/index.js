import { createStore } from "vuex";
import axios from 'axios';
export default createStore({
  state: {
    close:localStorage.getItem('open')||false,
    count:0,
    Ctegory:null,
    login:localStorage.getItem('islog')||false
  },
  mutations: {
    open(state){
      state.close=!state.close
      localStorage.setItem('open', state.close)

    },
    getall(state,course){
      state.Ctegory=course
    },
    increment (state) {
      state.count++
    }
},
  actions: {
    open(context){
      context.commit('open')
    },
    getall(context){
      axios.get('http://127.0.0.1:8000/api/getCate').then((res)=>{
        console.log(res.data)
                context.commit('getall',res.data)
            }).catch((err)=>{
        console.log(err)
            });
    },
  },
  getters:{
    islogin:state =>{
       return state.login
    }
  },
  modules: {},
});
