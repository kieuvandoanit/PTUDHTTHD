<template>
  <div class="container">
    <Header/>
    <div class="row">
      <div class="col-3 sidebar">
        <Sidebar/>
      </div>
      <div class="col-9 body">
        <div class="row header-body">
           <!-- <div class="col-6">
            <button type="button" class="btn btn-success" v-on:click="AddStore">Danh sách đơn hàng</button>
          </div>  -->
          <div class="col-6">
            <button type="button" class="btn btn-success" >Danh sách đơn hàng</button>
          </div> 
          <div class="col-6">
            <!-- <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Tìm kiếm đơn hàng">
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">Tìm kiếm</span>
              </div>
            </div> -->
          </div>
        </div>
        <div class="row content-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Mã đơn hàng</th>
                <th scope="col">Khách Hàng</th>
                <th scope="col">Tổng Tiền</th>
                <th scope="col">ID Shipper</th>
                <th scope="col">Tên Shipper</th>
                 <th scope="col">Cập nhật</th>
              </tr>
            </thead>
            <tbody>
              <Order
                v-for="order in orders"
                :key="order.id"
                v-bind:order="order"
              />
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
import Order from './order.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  components: {
    Header,
    Sidebar,
    Order,

  },
  data () {
    return {
      
    }
  },
  created(){
    this.getOrder()
    // axios.get("http://localhost:8099/stores")
    // .then(response =>{
    //   this.stores = response.data
    // })
    // .catch(e =>{
    //   this.errors.push(e)
    // })
  },
  computed:{
    ...mapGetters(['orders'])
  },
  methods:{
    ...mapActions(['getOrder']),
    AddStore: function(){
      this.$router.push('store/create')
    },
    
    
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
