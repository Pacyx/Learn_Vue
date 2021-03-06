import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList'
import CartwithProduct from './../views/CartwithProduct.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  // mode:'hash'
  routes: [
    {
      path: '/',
      component: GoodsList 
    },
    {
      path: '/xxx',
      component: CartwithProduct
    }
    // {
    //   path: '/cart/:cartId',
    //   name:'cart',
    //   component:Cart
    // },
    // {
    //   path: '/goods',
    //   name:'counter',
    //   component:Counter
    // }
  ]
})
