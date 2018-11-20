import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/index.vue'
import Product from './views/product.vue'
import Detail from './views/detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path:'/product',
      name:'product',
      component:Product
    },
    {
      path:'/detail',
      name:'detail',
      component:Detail
    }
  ]
})
