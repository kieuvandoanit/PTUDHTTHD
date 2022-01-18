<template>
   <div class="container-fluid">
        <div class="header">
            <div class="row d-flex align-items-center h-100">
                <div class="col-4" style="padding-left: 20px">
                    <h1>BÁCH HÓA XANH</h1> 
                    <div>Địa chỉ:</div> <b>104 đường số 9, Linh tây, Thủ đức</b>
                </div>
                <div class="col-8 h-100">
                    <img class="logo" src="data:image/png;base64,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" />
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
                    <div class="card">
                        <div class="image">
                            <img src="https://media.phunutoday.vn/files/content/2020/08/12/thit-do-tang-can-nhanh-1421.jpg" />
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
        <div class="pagination">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"  v-on:click="PreviousPage()"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">{{page+1}}</a></li>
                    <li class="page-item"  v-on:click="NextPage()"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
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
        size: 6,
        page: 0,
    }
  },
  created(){
     this.callAPI()
  },
  methods:{
      NextPage: function() {
          this.page++ 
          this.callAPI()
      },
      callAPI: function(){
          axios.get(`http://localhost:8099/products?size=${this.size}&page=${this.page}`)
            .then(response =>{
                this.products = response.data['content']
            })
            .catch(e =>{
            this.errors.push(e)
        })
      },
      PreviousPage: function() {
          this.page = (this.page > 0) ? this.page-1 : 0 
          console.log(this.page)
          this.callAPI()
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
     height: 800px;
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
