
<template>
    <div>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>        
        <p><span>{{number}}</span></p>
    </div>
</template>
      
    <script>
    import Counter from './Counter'
    export default {
        props:['number'],
        data () {
            return {
                number:0,
            }
        },
        methods:{
            increment(){
                this.$emit("incre");

                // import('./../until');//异步加载js文件
            },
            decrement(){
                this.$emit("decre")
            }
        }
    }
    </script>
