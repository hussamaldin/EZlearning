import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue';
import MonyWith from '../components/MonyWith.vue';
import NewCourse from '../components/NewCourse.vue';
import Control from '../components/Control.vue';
import Login from '../components/Login.vue';
import Mybilling from '../components/Mybilling.vue';
import CourseMe from '../components/CourseMe.vue';
import SignUp2 from '../components/SignUp2.vue';
import Mcprogress from '../components/Mcprogress.vue';
import Publish from '../components/Publish.vue';
import About from '../components/About.vue';
import Paid from '../components/Paid.vue';
import Search from '../components/Search.vue';
import Profile from '../components/Profile.vue';
import SignUp from '../components/SignUp.vue';
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/newcourse",
    name: "newcourse",
    component: NewCourse,
  },
  {
    path: "/monywithdraw",
    name: "monywithdraw",
    component: MonyWith,
  },
  {
    path: "/control",
    name: "control",
    component: Control,
  },
  {
    path: "/mybilling",
    name: "mybilling",
    component: Mybilling,
  },
  {
    path:'/login',
    name:'Login',
    component:Login,
  },
  {
    path:'/courseme',
    name:'courseme',
    component:CourseMe,
  },
  {
    path:'/signup2',
    name:'signup',
    component:SignUp2,
  },
  {
    path:'/publish',
    name:'publish',
    component:Publish,
  },
  {
    path:'/myprogress',
    name:'mcprogress',
    component:Mcprogress,
  },
  {
    path:'/paid/:id',
    name:'paid',
    component:Paid,
  },
  {
    path:'/about',
    name:'about',
    component:About,
  },
  {
    path:'/search',
    name:'search',
    component:Search,
  },
  {
    path:'/profile',
    name:'profile',
    component:Profile,
  }
  ,
  {
    path:'/signup',
    name:'signup',
    component:SignUp,
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  
});
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !localStorage.getItem("token")) {
      next("/login");
  }
  if(to.meta.requireAdmin && !localStorage.getItem("token")){
    next("/login")
  }
  else{
    next()
  }
});
export default router;
