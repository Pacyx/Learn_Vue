import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/image'
import Cart from '@/views/Cart'

import Counter from '@/components/Counter'
Vue.use(Router)

export default new Router({
  mode:'history',
  // mode:'hash'
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      components:{
        default:GoodsList,
        title:Title,
        img:Image
      }
    },
    {
      path: '/cart/:cartId',
      name:'cart',
      component:Cart
    },
    {
      path: '/goods',
      name:'counter',
      component:Counter
    }
  ]
})
