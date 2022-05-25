import { retrieveLocalCache } from '@/globalFunctions/retrieveLocalCache'
import store from '@/store'

import { createRouter, createWebHashHistory } from 'vue-router'
import login from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/TestSocketView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from) =>{
  console.log(store.getters['isLoggedIn'])
  if (!store.getters['isLoggedIn'] && (to.name !== 'login' && to.name !== 'register')){
    return { name: 'login' }
  }
  if (store.getters['isLoggedIn'] && (to.name === 'login' || to.name === 'register')){
    return { name: 'home' }
  }
  retrieveLocalCache()

})

export default router
