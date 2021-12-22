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
            <button type="button" class="btn btn-success" v-on:click="AddStore">Thêm cửa hàng</button>
          </div> 
          <div class="col-6">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Tìm kiếm cửa hàng">
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
                <th scope="col">Tên</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Trạng thái</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(store, index) in stores" :key="index">
                <th scope="row">{{index + 1}}</th>
                <td>{{store.name}}</td>
                <td>{{store.phone_number}}</td>
                <td>{{store.isApprove}}</td>
                <td>
                    <button type="button" class="btn btn-primary" v-on:click="UpdateStore(store.id)">Sửa</button>
                    <button type="button" class="btn btn-danger" v-on:click="DeleteStore(store.id)">Xóa</button>
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
      stores: [],
      errors: []
    }
  },
  created(){
    axios.get("http://localhost:8099/stores")
    .then(response =>{
      this.stores = response.data
    })
    .catch(e =>{
      this.errors.push(e)
    })
  },
  methods:{
    AddStore: function(){
      this.$router.push('store/create')
    },
    DeleteStore: function(storeID){
      axios.delete(`http://localhost:8099/deleteStore/${storeID}`)
        .then(response =>{
          if(response.status === 200){
            this.$router.go(this.$router.currentRoute)
          }
        })
    },
    UpdateStore: function(storeID){
      this.stores.forEach(store =>{
        if(store.id === storeID){
          this.$router.push({
            name: 'UpdateStore',
            params: {
              store: store
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
