<template>
   <div class="container-fluid">
        <div class="row product-detail" style="margin-top: 30px">
            <div class="col-6">
                <img :src="this.product.image" />
            </div>
            <div class="col-6" style="padding-top: 50px;">
                <h2>{{this.product.name}}</h2>
                <p class="price"><i>Giá:</i> <b>{{this.product.price}} VNĐ/ {{this.product.unit}} </b></p>
                <div class="price"><i>Bạn muốn mua:</i> 
                    <button style="margin: 0 10px;" class="btn btn-secondary">-</button>{{this.quantity}}<button style="margin: 0 10px;" class="btn btn-secondary">+</button>
                </div>
                <p class="price"><i>Thành tiền:</i> <b style="color: red">{{this.subTotal}} VNĐ </b></p> 
                <div class="price">{{this.product.desc}}</div>
                <div class="price">
                    <button class="btn btn-success">Mua hàng</button>
                </div>
            </div>
        </div>
        <div class="review">
            <h4>Đánh giá sản phẩm <i>(2 đánh giá)</i></h4>
            <div style="padding-top: 15px;">
                <b>Nguyễn Đức Hiếu - <i>20/01/2022 15:00:00</i></b>
                <div>Sản phẩm rất tuyệt vời</div>
            </div>
            <div class="input-group mb-3" style="padding-top: 30px;">
                <input type="text" class="form-control" placeholder="Đánh giá của bạn" >
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">Đánh giá</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  components: {
  },
  data () {
    return {
        errors: [],
        products: [],
        quantity: 1,
        subTotal: 0,
    }
  },
  created(){
    this.product = this.$route.params.product;
    this.subTotal = this.quantity*this.product.price;
    console.log(this.product)
  },
  methods:{
      
  }
   
}
</script>
<style scoped>
    .product-detail{
        height:600px;
    }
    img{
        width: 100%;
    }
    .price{
        font-size: 20px;
        padding-top: 10px;
    }
    .btn-success{
        width: 150px;
        height: 50px;
    }
</style>
