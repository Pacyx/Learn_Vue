<template>
    <div class="cart">
        <h2>Your Cart</h2>
        <p ><i>Please add some products to cart.</i></p>
       
        <p>Total:{{Price}}</p>
        <p><button>Checkout</button></p>
        <p>Checkout</p>
    </div>
</template>

<script>
    // import {mapGetters, mapActions} from 'vuex';
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            Price () {
                return store.state.Prices
            }
          },
        mounted:function (){
            this.checkout();
        },
        methods: {
            checkout:function() {
                // var x=this.$store.state.Price;
                // console.log(x);
            }
        }
    }
</script>