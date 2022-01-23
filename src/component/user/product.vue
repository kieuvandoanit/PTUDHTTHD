<template>
   <div class="container-fluid">
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
            </div>
        </div>
        <div class="body">
            <div class="row">
                 <div class="col-4" v-for="(product, index) in products" :key="index">
                    <div class="card" v-on:click="GetProductDetail(product.id)" style="cursor: pointer;">
                        <div class="image">
                            <img :src="product.image" style="witdh: 100px"/>
                        </div>
                        <div class="content">
                                <h6>{{product.name}}</h6>
                                {{product.price}} VNĐ/{{product.unit}}
                        </div>
                        <div class="footer">
                            <button type="button" class="btn btn-success">Mua hàng</button>
                        </div>
                    </div>
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
        store: {},
    }
  },
  created(){
        this.store = this.$route.params.store;
        console.log(this.store)
        this.callAPI()
  },
  methods:{
      NextPage: function() {
          this.page++ 
          this.callAPI()
      },
      callAPI: function(){
          axios.get(`https://localhost:44331/api/product?storeID=${this.store.id}`)
            .then(response =>{
                console.log(response)
                this.products = response.data
            })
            .catch(e =>{
            this.errors.push(e)
        })
      },
      PreviousPage: function() {
          this.page = (this.page > 0) ? this.page-1 : 0 
          console.log(this.page)
          this.callAPI()
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
