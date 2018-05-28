import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Publish from '@/components/Publish'
import MyInfo from '@/components/MyInfo'
import Login from '@/components/Login'
import Register from '@/components/Register'
import NotFound from '@/components/NotFound'
import PersonalInfo from '@/components/my_info/PersonalInfo'
import NodeInfo from '@/components/index/NodeInfo'
Vue.use(Router)


export default new Router({
  mode: 'history',
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
      component: MyInfo,
      children:[
        {
          path:'personal_info',
          name:'personal_info',
          component : PersonalInfo
        },
        {
          path:'node_info',
          name:'node_info',
          component:NodeInfo
        },
      ]

    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
