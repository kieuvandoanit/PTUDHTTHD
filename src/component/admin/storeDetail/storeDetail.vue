<template>
  <div class="container">
    <Header/>
    <div class="row">
        <div class="col-3 sidebar">
            <Sidebar/>
        </div>
        <div class="col-9 body">
            <h3>Thông tin chi tiết của hàng</h3>
            <p>Tên cửa hàng: <span>{{this.store[0].name}}</span></p>
            <p>Địa chỉ: <span>{{this.store[0].address.home_number}} {{this.store[0].address.street}}, {{this.store[0].address.ward}}, {{this.store[0].address.district}}, {{this.store[0].address.province}}</span></p>
            <p>Số điện thoại: <span>{{this.store[0].phoneNumber}}</span></p>
            <p>Approve: <span>{{this.store[0].isApprove}}</span></p>
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
      store: [],
      errors: []
    }
  },
  created(){
    let storeID = this.$route.params.id;
    axios.get(`http://localhost:52861/api/store/${storeID}`)
    .then(response =>{
      this.store = response.data
    })
    .catch(e =>{
      this.errors.push(e)
    })
  },
  methods:{
    
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
