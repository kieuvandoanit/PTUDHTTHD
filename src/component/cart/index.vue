<template>
  <div id="cart">
      <HeaderUser/>
      <h2>Chi tiết giỏ hàng</h2>
      <div class="container"> 
      <table id="cart" class="table table-hover table-condensed"> 
        <thead> 
        <tr> 
          <th style="width:50%">Tên sản phẩm</th> 
          <th style="width:10%">Giá</th> 
          <th style="width:8%">Số lượng</th> 
          <th style="width:22%" class="text-center">Thành tiền</th> 
        </tr> 
        </thead> 
        <tbody>
          <ProductCart
            v-for="product in cart.product"
            :key="product.productID"
            v-bind:product="product"
          />
        </tbody>
        <tfoot> 
          <tr> 
            <td><a href="http://hocwebgiare.com/" class="btn btn-warning"><i class="fa fa-angle-left"></i> Tiếp tục mua hàng</a></td> 
            <td><button class="btn btn-success" v-on:click="updateOrder"><i class="fa fa-angle-left"></i> Cập nhật giỏ hàng</button></td>
            <td colspan="1" class="hidden-xs"> </td> 
            <td class="hidden-xs text-center"><strong>Tổng tiền {{cart.totalPrice}} đ</strong></td> 
            <td><router-link to="/payment" class="btn btn-success btn-block">Thanh toán <i class="fa fa-angle-right"></i></router-link>
            </td> 
          </tr> 
        </tfoot> 
      </table>
      </div>
  </div>
</template>

<script>

import HeaderUser from "../Header_user.vue"
import ProductCart from "./productCart.vue"
import {mapGetters, mapActions} from 'vuex';
import axios from "axios";

export default {
  components: {
    HeaderUser,
    ProductCart
  },
  created(){
    this.getCart(12345)
  },
  computed: {
    ...mapGetters(['cart'])
  },
  methods:{
    ...mapActions(['getCart']),
    updateOrder(){
      let userID = 12345;
      let cart = {
        product: this.cart.product,
        totalPrice: this.cart.totalPrice
      }
      axios.put(`http://localhost:52861/api/cart/${userID}`,{
        product: cart.product,
        totalPrice: cart.totalPrice
      })
      .then(function(res){
        alert(res.data);
      })
      .catch(function (error) {
          console.log(error);
      });
    }
  }
}
</script>


<style type="text/css" scoped>
  
@media screen and (max-width: 600px) { 
table#cart tbody td .form-control { 
width:20%; 
display: inline !important;
} 
 
.actions .btn { 
width:36%; 
margin:1.5em 0;
} 
 
.actions .btn-info { 
float:left;
} 
 
.actions .btn-danger { 
float:right;
} 
 
table#cart thead {
display: none;
} 
 
table#cart tbody td {
display: block;
padding: .6rem;
min-width:320px;
} 
 
table#cart tbody tr td:first-child {
background: #333;
color: #fff;
} 
 
table#cart tbody td:before { 
content: attr(data-th);
font-weight: bold; 
display: inline-block;
width: 8rem;
} 
 
table#cart tfoot td {
display:block;
} 
table#cart tfoot td .btn {
display:block;
}
.hidden-xs{
  width: 100%;
  overflow: hidden;
}
}
</style>
