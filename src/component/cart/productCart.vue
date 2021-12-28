<template>
  <tr> 
        <td data-th="Product"> 
            <div class="row"> 
            <div class="col-sm-3 hidden-xs"><img v-bind:src="product.productImage" alt="Sản phẩm 1" class="img-responsive" width="100"></div> 
            <div class="col-sm-9"> 
                <h4 class="nomargin">{{product.productName}}</h4> 
            </div> 
            </div> 
        </td> 
        <td data-th="Price">{{product.productPrice}} đ</td> 
        <td data-th="Quantity"><input class="form-control text-center" v-model="quantity" type="number" @change="changeNumberHandle"></td> 
        <td data-th="Subtotal" class="text-center">{{quantity * product.productPrice}} đ</td> 
    </tr> 
</template>

<script>
export default {
    data:function(){
        return{
            quantity:this.product.quantity
        }
    },
    props:{
        product:{
            type:Object,
            default: null
        }
    },
    methods:{
        changeNumberHandle(){
            let data  = {
                productID: this.product.productID, 
                quantity: this.quantity
            }
            this.$store.dispatch('updateCart', data)
        }
    }
}
</script>

<style>

</style>