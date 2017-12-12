import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList'
import Img from './../views/image'

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
      component: Img 
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
