<template>
  <div class="container">
    <Header/>
    <div class="row">
      <div class="col-3 sidebar">
        <Sidebar/>
      </div>
      <div class="col-9 body">
        <div class="row header-body">
          <div class="col-6">
            <button type="button" class="btn btn-success" v-on:click="AddProduct">Thêm sản phẩm</button>
          </div>
          <div class="col-6">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Tìm kiếm sản phẩm">
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">Tìm kiếm</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row content-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Hình ảnh</th>
                <th scope="col">Tên</th>
                <th scope="col">Đơn giá</th>
                <th scope="col">Số lượng tồn</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products" :key="index">
                <th scope="row">{{index + 1}}</th>
                <td><img :src="product.image" style="width: 75px;"/></td>
                <td>{{product.name}}</td>
                <td>{{product.price}} VNĐ</td>
                <td>{{product.numberInventory}}</td>
                <td>
                    <button type="button" class="btn btn-primary" v-on:click="UpdateProduct(product.id)">Sửa</button>
                    <button type="button" class="btn btn-danger" v-on:click="DeleteProduct(product.id)">Xóa</button>
                    <button type="button" class="btn btn-success" v-on:click="OriginProduct(product.id)">Nguồn gốc</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Header from '../partials/header';
import Sidebar from '../partials/sidebar';

export default {
  components: {
    Header,
    Sidebar
  },
  data () {
    return {
      products: [],
      errors: []
    }
  },
  created(){
    //http://localhost:8099/products
    axios.get("http://localhost:6040/productAll")
    .then(response =>{
      this.products = response.data
    })
    .catch(e =>{
      this.errors.push(e)
    })
  },
  methods:{
    AddProduct: function(){
      this.$router.push('product/create')
    },
    DeleteProduct: function(productID){
      axios.delete(`http://localhost:8099/deleteProduct/${productID}`)
        .then(response =>{
          if(response.status === 200){
            this.$router.go(this.$router.currentRoute)
          }
        })
    },
    UpdateProduct: function(productID){
      this.products.forEach(product =>{
        if(product.id === productID){
          this.$router.push({
            name: 'UpdateProduct',
            params: {
              product: product
            }
          })
        }
      })
    },
    OriginProduct: function(productID){
      this.products.forEach(product =>{
        if(product.id === productID){
          this.$router.push({
            name: 'ProductDetail',
            params: {
              product: product
            }
          })
        }
      })
    }
  }
}
</script>
<style scoped>
  .sidebar{
    height: 800px;
    background-color: #DCDCDC;
  }
  .header-body{
    margin: 15px 0;
  }
  .content-body{
    margin: 5px 0;
  }
  .content-center{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
