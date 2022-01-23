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
            <h4>Đánh giá sản phẩm <i>({{this.commentList.length}} đánh giá)</i></h4>
            <div style="padding-top: 15px;" v-for="(comment, index) in this.commentList">
                <b>{{comment.userName}} - <i>{{comment.createdAt}}</i></b>
                <div>{{comment.content}}</div>
            </div>
            <div class="input-group mb-3" style="padding-top: 30px;" v-if="this.isBuy">
                <input type="text" class="form-control" placeholder="Đánh giá của bạn" v-model="contentInput">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" v-on:click="AddComment()">Đánh giá</button>
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
        userID : '',
        isBuy : false,
        commentList: [],
        contentInput: '',
    }
  },
  created(){
    this.product = this.$route.params.product;
    this.subTotal = this.quantity*this.product.price;
    this.userID = localStorage.getItem('userID')
    this.getOrderByUserId();
    this.GetCommentByProductIdAndUserID();
  },
  methods:{
      getOrderByUserId(){
        axios.get(`https://localhost:44331/api/order/${this.userID}`)
            .then(response =>{
                let ordersListByUserId = response.data
                ordersListByUserId.forEach((order, indexOrder) => {
                    let productsOfOrder = order.product;
                    productsOfOrder.forEach((product, indexProduct) =>{
                        if(product.productName == this.product.name){
                            this.isBuy = true;
                        }
                    })
                })
            })
            .catch(e =>{
            this.errors.push(e)
        })
      },
      AddComment(){
          let date = new Date();
          let dateStr =
            ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
            ("00" + date.getDate()).slice(-2) + "/" +
            date.getFullYear() + " " +
            ("00" + date.getHours()).slice(-2) + ":" +
            ("00" + date.getMinutes()).slice(-2) + ":" +
            ("00" + date.getSeconds()).slice(-2);
          let form = {
                content:this.contentInput,
                userId: this.userID,
                productId: this.product.Id,
                userName: localStorage.getItem('name'),
                createdAt: dateStr,
            }
          axios.post(`https://localhost:44331/api/comment`, form)
            .then(response => {
                if(response.data){
                    this.commentList.push(response.data)
                    this.contentInput = ''
                }
            })
      },
      GetCommentByProductIdAndUserID(){
          axios.get(`https://localhost:44331/api/comment?userId=${this.userID}&productId=${this.product.Id}`)
            .then(response =>{
                this.commentList = response.data;
            })
            .catch(e =>{
            this.errors.push(e)
        })
      }
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
