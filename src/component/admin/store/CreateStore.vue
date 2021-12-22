<template>
  <div class="container">
    <Header/>
    <div class="row">
      <div class="col-3 sidebar">
        <Sidebar/>
      </div>
      <div class="col-9 body">
        <h1>Thêm mới cửa hàng</h1>
        <form class="needs-validation cus-form" v-on:submit.prevent="submitForm">
        <p v-if="errors.length">
          <b>Lỗi:</b>
          <ul>
            <li v-for="(error, index) in errors" :key="index" style="color: red">{{ error }}</li>
          </ul>
        </p>
          <div class="form-group item-input">
              <label for="name">Tên cửa hàng*</label>
              <input type="text" class="form-control" id="name" placeholder="Nhập tên cửa hàng" v-model="form.name">
          </div>
          <div class="form-group item-input">
            <label for="phone_number">Số điện thoại*</label>
            <input type="text" class="form-control" id="phone_number" placeholder="Nhập đơn giá" v-model="form.phone_number">
          </div>
        <div class="form-group item-input">
            <label for="province">Thành phố*</label>
            <input type="text" class="form-control" id="province" placeholder="Nhập thành phố" v-model="form.province">
        </div>
        <div class="form-group item-input">
            <label for="distric">Quận/huyện*</label>
            <input type="text" class="form-control" id="distric" placeholder="Nhập quận/huyện" v-model="form.distric">
        </div>
        <div class="form-group item-input">
            <label for="ward">Phường/xã*</label>
            <input type="text" class="form-control" id="ward" placeholder="Nhập phường/xã" v-model="form.ward">
        </div>
        <div class="form-group item-input">
            <label for="street">Tên đường*</label>
            <input type="text" class="form-control" id="street" placeholder="Nhập phường/xã" v-model="form.street">
        </div>
        <div class="form-group item-input">
            <label for="home_number">Số nhà*</label>
            <input type="text" class="form-control" id="home_number" placeholder="Nhập số nhà" v-model="form.home_number">
        </div>
        <div class="form-group item-input" >
            <button class="btn btn-success btn-add">Thêm mới</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../partials/header';
import Sidebar from '../partials/sidebar';
import axios from 'axios';
 
export default {
  components: {
    Header,
    Sidebar
  },
  data () {
    return {
      errors: [],
      form: {
        name: '',
        phone_number: '',
        province: '',
        distric: '',
        ward: '',
        street: '',
        home_number:'',
        isApprove: ''
      }
    }
  },
  methods:{
    submitForm(){
      this.errors = []
      this.form.isApprove = "no";
      if(this.form.name && this.form.phone_number && this.form.province && this.form.distric && this.form.ward && this.form.street && this.form.home_number){
        axios.post('http://localhost:8099/createStore', this.form)
        .then((res) => {
          if(res.data){
            this.$router.push('/admin/store')
          }
        })
        .catch((error) =>{
          this.errors.push(error)
        }) 
      }
      if(!this.form.name){
      this.errors.push("Tên bắt buộc phải nhập")
      }
      if(!this.form.phone_number){
        this.errors.push("Điện thoại bắt buộc phải nhập")
      }
      if(!this.form.province && !this.form.distric && !this.form.ward && !this.form.street && !this.form.home_number){
        this.errors.push("Địa chỉ bắt buộc phải nhập đầy đủ")
      }
    }
  }
}
</script>
<style scoped>
  .sidebar{
    height: 800px;
    background-color: #DCDCDC;
  }
  .cus-form{
    margin: 30px 10px;
  }
  .btn-add{
    margin-top: 20px;
  }
  .item-input{
    margin: 10px 0;
  }
</style>
