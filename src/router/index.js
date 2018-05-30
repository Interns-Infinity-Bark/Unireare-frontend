import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Publish from '@/components/Publish'
import MyInfo from '@/components/MyInfo'
import Login from '@/components/Login'
import Register from '@/components/Register'
import NotFound from '@/components/NotFound'
import PersonalInfo from '@/components/my_info/PersonalInfo'
import UpdatePassword from '@/components/my_info/UpdatePassword'
import MyNodeInfo from '@/components/my_info/MyNodeInfo'
import Detail from '@/components/Detail'
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
          path:'/personal_info',
          name:'personal_info',
          component : PersonalInfo
        },
        {
          path:'/my_node_info',
          name:'my_node_info',
          component:MyNodeInfo
        },
        {
          path:'/update_password',
          name:'update_password',
          component:UpdatePassword
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
      path: '/detail',
      component: Detail
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
