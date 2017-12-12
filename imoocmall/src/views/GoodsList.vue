<template>
  <div>
    <nav-header></nav-header>
    <Nav-Bread>
        <span slot="bread">Goods</span>
        <span slot="b">Goodx</span>
    </Nav-Bread>
    <button @click="getGoodsList">getgoodsdata</button>
    <!-- <div>{{status.status.st}}</div> -->
    <div class="accessory-result-page accessory-page">
    <div class="container">
        <div class="filter-nav">
        <span class="sortby">Sort by:</span>
        <a href="javascript:void(0)" class="default cur">Default</a>
        <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
        <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
        </div>
        <div class="accessory-result">
        <!-- filter -->
        <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
            <dl class="filter-price">
            <dt>Price:</dt>
            <dd><a href="javascript:void(0)" v-bind:class="{'cur':priceChecked=='all'}">All</a></dd>
            <dd v-for="(price,index) in priceFilter" >
                <a href="javascript:void(0)" @click="setPriceFilter(index)" v-bind:class="{'cur':priceChecked==index}">{{price.startPrice}}--{{price.endPrice}}</a>
            </dd>
            </dl>
        </div>
    
        <!-- search result accessories list -->
        <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
            <ul>
                <li v-for="(item,index) in GoodsList">
                    <div class="pic">
                        <a href="javascript:;"><img v-lazy="'/static/'+item.prodcutImg" alt=""></a>
                    </div>
                    <div class="main">
                        <div class="name">{{item.productName}}</div>
                        <div class="price">{{item.productPrice}}</div>
                        
                        <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                        </div>
                    </div>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    </div>
    <!-- <div class="md-overla hidden" v-show="overLayFlag＂ ></div> -->
    <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>
    <nav-footer></nav-footer>
  </div>
</template>
<style></style>
<script>
    
    import '@/assets/css/base.css'
    import '@/assets/css/login.css'
    import '@/assets/css/product.css'

    import NavHeader from '@/components/NavHeader'
    import NavFooter from '@/components/NavFooter'
    import NavBread from '@/components/NavBread'

    export default {
        data(){//必须函数形式，为了不让组件之间数据共享
            return{
                GoodsList:[],
                priceFilter:[
                    {
                        startPrice:'0.00',
                        endPrice:'50.00'
                    },
                    {
                        startPrice:'50.00',
                        endPrice:'100.00'
                    },
                    {
                        startPrice:'100.00',
                        endPrice:'150.00'
                    },
                    {
                        startPrice:'150.00',
                        endPrice:'200.00'
                    }
                ],
                priceChecked:'all',
                filterBy:false,
                overLayFlag:false,  
                status:{}
            }
        },
        components:{
            NavHeader,
            NavFooter,
            NavBread
        },
        mounted:function (){
            this.getGoodsList();
        },
        methods:{
            getGoodsList: function () {
                var _this = this;
                this.$http.get("http://localhost:3000/getjson/getGoodsData",{
                  params:{
                    // userId:"123"
                  },
                  headers:{
                    // access_token:"abcded"
                  }
                }).then(function (res) {
                    console.log("加载")
                    _this.status=res.body;
                //   console.log("res:"+res.data);
                  _this.GoodsList= res.body.result
                }, function (error) {
                  console.log("error:"+error);
                  _this.GoodsList = error;
                });
              },
              showFilterPop:function(){
                this.filterBy=true;
                this.overLayFlag=true;
              },
              closePop:function(){
                this.filterBy=false;
                this.overLayFlag=false;
              },
              setPriceFilter:function(index){
                this.priceChecked=index;
                this.closePop();
              }
        }
    }

</script>
