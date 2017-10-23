new Vue({
  el: '.app',
  data: {
    message: 'hello world',
    msg:'你好世界',
    seen:true,
    // seen:false
  }
})

var vm =new Vue({
  el:'#example',
  data:{
    message:'HEllO'
  },
  computed:{
    reversedMessage:function(){
      return this.message.split('').reverse().join('')
    }
  }
})

var app5 = new Vue({
  el:'#app-5',
  data:{
    message:'Hello Vue.js!'
  },
  methods:{
    reverseMwssage:function(){
      this.message=this.message.split('').reverse().join('')
    }
  }
})

var app6 =new Vue({
  el:"#app-6",
  data:{
    message:'Hello Vue!'
  },
})

Vue.component('todo-item',{
  props:['todo'],
  template:'<li>{{todo.text}}</li>'
})


var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其他什么人吃的东西' }
    ]
  }
})


var data ={a:1}

var vm = new Vue({
  data:data
})

var app8=new Vue({
  el:".static",
  data:{
    isActive:true,
    hasError:true
  }
})

var app9=new Vue({
  el:'#app-9',
  data:{
    items:[
      {message:'foo'},
      {message:'Bar'}
    ]
  }
})

Vue.component('todo-item',{
  template:'\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})

var app10=new Vue({
  el:'#todo-list-example',
  data:{
    newTodoText:'',
    todos:[],
    nextTodoId:0
  },
  methods:{
    addNewTodo:function(){
      this.todos.push({
        id:this.nextTodoId++,
        title:this.newTodoText
      })
      this.newTodoText=''
    }
  }
})



var app11=new Vue({
  el: '#example-textarea',
  data: {
    message: ''
  }
})

var app12=new Vue({
  el: '#app_12',
  data: {
    message: ''
  }
})

var app13=new Vue({
  el: '#app13',
  data: {
    picked: ''
  }
})

//先注册
Vue.component('my-component',{
  template: '<div>A custom component!</div>'
})
//再创建实例
var app14=new Vue({
  el:'#app-14',
})

var data = { counter: 0 }
Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // 技术上 data 的确是一个函数了，因此 Vue 不会警告，
  // 但是我们返回给每个组件的实例却引用了同一个 data 对象
  data: function () {
    return data
  }
})
new Vue({
  el: '#app-15'
})



Vue.component('button-counter',{
  template:'<button v-on:click="incrementCounter">{{ counter }}</button>',
  data:function(){
    return {
      counter:0
    }
  },
  methods:{
    incrementCounter:function(){
      this.counter +=1
      this.$emit('increment')
    }
  }
})

new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
})

