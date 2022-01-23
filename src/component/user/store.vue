<template>
   <div class="container-fluid">
       <HeaderUser/>
        <div class="header">
            <div class="row d-flex align-items-center h-100">
                <div class="col-4" style="padding-left: 20px">
                    <h1>Dịch vụ đi chợ thuê</h1> 
                    <div>Giải pháp hữu ích cho mùa dịch</div>
                </div>
                <div class="col-8 h-100">
                    <img class="logo" src="https://abenla.com/wp-content/uploads/2020/04/di-cho-thue.jpg" />
                </div>
            </div>
        </div>
        <div class="search">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Tìm kiếm sản phảm" v-model="keySearch">
                <div class="input-group-append">
                    <button class="input-group-text" v-on:click="SearchProductByName()">Tìm kiếm</button>
                </div>
            </div>
        </div>
        <div class="body">
            <div class="row">
                 <div class="col-4" v-for="(store, index) in storesShow" :key="index">
                    <div class="card" v-on:click="GetStoreDetail(store.id)" style="cursor: pointer;">
                        <div class="image">
                            <img src="https://cms.luatvietnam.vn/uploaded/Images/Original/2020/03/27/co-so-kinh-doanh-duoc-mo-cua_2703224203.jpg" style="witdh: 100px"/>
                        </div>
                        <div class="content">
                                <h6>{{store.name}}</h6>
                                <div>Địa chỉ: {{store.address.home_number}} - {{store.address.street}} - P.{{store.address.ward}} - Q.{{store.address.district}} - {{store.address.province}}</div>
                        </div>
                        <div class="footer">
                            <button type="button" class="btn btn-success">Mua sắm</button>
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import HeaderUser from '../Header_user.vue';
export default {

  components: {
      HeaderUser
  },
  data () {
    return {
      errors: [],
      stores: [],
      keySearch: "",
      storesShow: [],
    }
  },
  created(){
    this.callAPI()
  },
  methods:{
    GetStoreDetail(storeId){
      axios.get(`https://localhost:44331/api/store/${storeId}`)
            .then(response =>{
                let store = response.data
                this.$router.push({
                    name: 'Product page',
                    params: {
                        store: store
                    }
                })
            })
            .catch(e => {
                this.errors.push(e)
            })
    },
    callAPI: function(){
      this.storesShow = []
        axios.post(`https://localhost:44331/api/store`, {keySearch: this.keySearch})
          .then(response =>{
              let stores = response.data.Result;
              stores.filter(store => store.address.street.toUpperCase() === localStorage.getItem('street').toUpperCase())
                .forEach(item =>{     
                  this.storesShow.push(item)
                  let index = stores.indexOf(item);
                  stores.splice(index, 1)
              })
              stores.filter(store => store.address.ward.toUpperCase() === localStorage.getItem('ward').toUpperCase())
                .forEach(item =>{     
                  this.storesShow.push(item)
                  let index = stores.indexOf(item);
                  stores.splice(index, 1)
              })
              stores.filter(store => store.address.district.toUpperCase() === localStorage.getItem('district').toUpperCase())
                .forEach(item =>{     
                  this.storesShow.push(item)
                  let index = stores.indexOf(item);
                  stores.splice(index, 1)
              })
              stores.filter(store => store.address.province.toUpperCase() === localStorage.getItem('province').toUpperCase())
                .forEach(item =>{     
                  this.storesShow.push(item)
                  let index = stores.indexOf(item);
                  stores.splice(index, 1)
              })
          })
          .catch(e =>{
          this.errors.push(e)
      })
    },
    SearchProductByName: function(){
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
