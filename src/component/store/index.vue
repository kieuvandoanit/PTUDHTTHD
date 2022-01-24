<template>
<div class="container">
    <Header/>
    <router-link class="btn btn-success" to="/store/addProduct" style="margin-bottom: 30px;">Thêm sản phẩm</router-link>
    <div class="row">
        <Product
            v-for="product in productInStore"
            :key="product._id"
            v-bind:product="product"
        />
    </div>
</div>  

</template>

<script>
import{mapActions, mapGetters} from 'vuex';
import Header from '../Header.vue'
import Product from './product.vue';
export default {
    components:{
        Product,
        Header
    },
    created(){
        let storeID = localStorage.getItem("storeID");
        this.getProduct(storeID)
    },
    computed:{...mapGetters(['productInStore'])},
    methods:{...mapActions(['getProduct'])},
}
</script>

<style scoped>
    .cell-1 {
    border-collapse: separate;
    border-spacing: 0 4em;
    background: #fff;
    border-bottom: 5px solid transparent;
    background-clip: padding-box
}

thead {
    background: #dddcdc
}

.toggle-btn {
    width: 40px;
    height: 21px;
    background: grey;
    border-radius: 50px;
    padding: 3px;
    cursor: pointer;
    -webkit-transition: all 0.3s 0.1s ease-in-out;
    -moz-transition: all 0.3s 0.1s ease-in-out;
    -o-transition: all 0.3s 0.1s ease-in-out;
    transition: all 0.3s 0.1s ease-in-out
}

.toggle-btn>.inner-circle {
    width: 15px;
    height: 15px;
    background: #fff;
    border-radius: 50%;
    -webkit-transition: all 0.3s 0.1s ease-in-out;
    -moz-transition: all 0.3s 0.1s ease-in-out;
    -o-transition: all 0.3s 0.1s ease-in-out;
    transition: all 0.3s 0.1s ease-in-out
}

.toggle-btn.active {
    background: blue !important
}

.toggle-btn.active>.inner-circle {
    margin-left: 19px
}
</style>