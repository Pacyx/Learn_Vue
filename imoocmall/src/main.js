// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import {sum} from './until'
// import * as until from './until'

// console.log(`sum:${until.sum(1,3)}`); 
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// define('until',function(){
//   return {
//     sum:function(){

//     },
//     minus:function(){

//     }
//   }
// })
