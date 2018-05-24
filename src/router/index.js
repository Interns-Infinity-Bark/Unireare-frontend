import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Publish from '@/components/Publish'
import MyInfo from '@/components/MyInfo'
import Login from '@/components/Login'
import Registered from '@/components/Registered'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: Index
    },
    {
      path: '/publish',
      component: Publish
    },
    {
      path: '/myInfo',
      component: MyInfo
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/registered',
      component: Registered
    },
    {
      path: '/',
      redirect: '/index'
    }
  ]
})
