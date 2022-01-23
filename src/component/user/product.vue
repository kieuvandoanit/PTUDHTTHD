<template>
   <div class="container-fluid">
       <HeaderUser/>
        <div class="header">
            <div class="row d-flex align-items-center h-100">
                <div class="col-4" style="padding-left: 20px">
                    <h1>{{this.store.name}}</h1> 
                    <div>Địa chỉ:</div> <b>{{this.store.address.home_number}} {{this.store.address.street}}, P.{{this.store.address.ward}}, Q.{{this.store.address.district}}, {{this.store.address.province}}</b>
                </div>
                <div class="col-8 h-100">
                    <img class="logo" src="https://cms.luatvietnam.vn/uploaded/Images/Original/2020/03/27/co-so-kinh-doanh-duoc-mo-cua_2703224203.jpg" />
                </div>
            </div>
        </div>
        <div class="search">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Tìm kiếm sản phảm">
                <div class="input-group-append">
                    <button class="input-group-text">Tìm kiếm</button>
                </div>
                <div>
                    <router-link to="/user/cart"><img style="height: 35px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/116px-Shopping_cart_icon.svg.png" alt=""></router-link>
                </div>
            </div>
            
        </div>
        <div class="body">
            <div class="row">
                 <div class="col-4" v-for="(product, index) in products" :key="index">
                    <div class="card" style="cursor: pointer;">
                        <div class="image" v-on:click="GetProductDetail(product.Id)">
                            <img :src="product.image" style="witdh: 100px; height: 250px;"/>
                        </div>
                        <div class="content" v-on:click="GetProductDetail(product.Id)">
                                <h6>{{product.name}}</h6>
                                {{product.price}} VNĐ/{{product.unit}}
                        </div>
                        <div class="footer">
                            <button type="button" v-on:click="addCart(product.Id, product.name, product.price, product.unit, product.image)" class="btn btn-success">Mua hàng</button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import HeaderUser from '../Header_user.vue'
export default {
  components: {
      HeaderUser
  },
  data () {
    return {
        errors: [],
        products: [],
        store: {},
    }
  },
  created(){
        if(JSON.stringify(this.$route.params) === '{}'){
            let storeId = localStorage.getItem('storeID');
            this.GetStoreDetail(storeId)
            this.callAPI(storeId)
        }else{
            this.store = this.$route.params.store;
            this.callAPI(this.store.id)
            localStorage.setItem('storeID', this.store.id)
        }
  },
  methods:{
      GetStoreDetail: function(storeID){
          axios.get(`https://localhost:44331/api/store/${storeID}`)
            .then(response =>{
                console.log(response)
                this.store = response.data
            })
            .catch(e =>{
            this.errors.push(e)
        })
      },
      callAPI: function(storeID){
          axios.get(`https://localhost:44331/api/product?storeID=${storeID}`)
            .then(response =>{
                console.log(response)
                this.products = response.data
            })
            .catch(e =>{
            this.errors.push(e)
        })
      },
      GetProductDetail: function(id) {
          axios.get(`https://localhost:44331/api/product/${id}`)
            .then(response =>{
                let product = response.data
                this.$router.push({
                    name: 'Product Detail page',
                    params: {
                        product: product
                    }
                })
            })
            .catch(e => {
                this.errors.push(e)
            })
      },
      async addCart(productID, productName, productPrice, productUnit, productImage){
          //get userID, arayProduct, totalPrice
          //Lay cart hien tai
          //lay thong tin product
          let product = {
              productID: productID,
              productName: productName,
              productPrice: productPrice,
              unit: productUnit,
              quantity: 1,
              productImage: productImage
          };
        //   console.log(product);
          let userID = localStorage.getItem('userID');
          let cartTemp = await axios.get(`http://localhost:52861/api/cart/${userID}`);
          let cart = cartTemp.data;
          cart.product.push(product);
          cart.totalPrice = cart.totalPrice + productPrice;
          // update cart
          await axios.put(`http://localhost:6039/cart`,{
              userID: userID,
              product: cart.product,
              totalPrice: cart.totalPrice
          });
      }

  }
   
}
</script>
<style scoped>
 .header{
     height: 400px;
     background-color: #eee;
 }
 .logo{
     height: 100%;
     width: 100%;
 }
 .body{
     height: 900px;
     margin-top: 15px;
 }
 img{
     width: 100%;
 }
 .search{
     padding: 10px 0;
 }
 .card:hover{
     transform: scale(1.1);
 }
 .col-4{
     padding: 10px 5px;
 }
</style>
