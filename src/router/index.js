import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from '@/layout/default'
import Blank from '@/layout/blank'
import Index from '@/page/index.vue'
import ChangeCity from '@/page/changeCity.vue'
import GoodsList from '@/page/goodsList.vue'
import Login from '@/page/login.vue'
import Register from '@/page/register.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'default',
    component: Default,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/s/:name',
        name: 'goods',
        component: GoodsList
      },
      {
        path: '/changeCity',
        name: 'changeCity',
        component: ChangeCity
      }
    ]
  },
  {
    path: '/blank',
    name: 'blank',
    component: Blank,
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      }]
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
