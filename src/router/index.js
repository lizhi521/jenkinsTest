import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes:[
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      name:'Login',
      component:()=>import('./../view/login')
    },
    {
      path:'/success',
      name:'Success',
      component:()=>import('./../view/success')
    }
  ]
})

export default router