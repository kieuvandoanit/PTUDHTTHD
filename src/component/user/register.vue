<template>
  <div class="container">
      <div class="body">
        <h1>Đăng ký tài khoản</h1>
        <form class="needs-validation cus-form" v-on:submit.prevent="submitForm">
        <p v-if="errors.length">
          <b>Lỗi:</b>
          <ul>
            <li v-for="(error, index) in errors" :key="index" style="color: red">{{ error }}</li>
          </ul>
        </p>
        <div class="form-group item-input">
              <label for="name">Tên của bạn*</label>
              <input type="text" class="form-control" id="name" placeholder="Nhập tên của bạn" v-model="form.name">
          </div>
          <div class="form-group item-input">
              <label for="username">Tên đăng nhập*</label>
              <input type="text" class="form-control" id="username" placeholder="Nhập tên đăng nhập" v-model="form.username">
          </div>
          <div class="form-group item-input">
            <label for="password">Mật khẩu*</label>
            <input type="text" class="form-control" id="password" placeholder="Nhập mật khẩu" v-model="form.passWord">
          </div>
           <div class="form-group item-input">
            <label for="resetPassword">Nhập lại mật khẩu*</label>
            <input type="text" class="form-control" id="resetPassword" placeholder="Nhập lại mật khẩu" v-model="resetPassword">
          </div>
          <div class="form-group item-input">
            <label for="phone">Số điện thoại*</label>
            <input type="text" class="form-control" id="phone" placeholder="Nhập số điện thoại" v-model="form.phone">
          </div>
          <div class="form-group item-input">
            <label for="province">Chọn tỉnh/thành phố*</label>
            <select class="form-control" v-model="form.province" @change="changeProvince">
                <option v-for="province in provinces" v-bind:value="province.name" >{{ province.name }}</option>  
            </select>
          </div>
          <div class="form-group item-input">
            <label for="district">Chọn quận/huyện*</label>
            <select class="form-control" v-model="form.district" @change="changeDistrict">
                <option v-for="district in districts" v-bind:value="district.name" >{{ district.name }}</option>  
            </select>
          </div>
          <div class="form-group item-input">
            <label for="ward">Nhập phường/xã*</label>
            <input type="text" class="form-control" id="ward" placeholder="Nhập phường/xã" v-model="form.ward">
          </div>
          <div class="form-group item-input">
            <label for="street">Nhập tên đường*</label>
            <input type="text" class="form-control" id="street" placeholder="Nhập số nhà - tên đường" v-model="form.street">
          </div>
          <div class="form-group item-input">
            <label for="street">Nhập số nhà*</label>
            <input type="text" class="form-control" id="street" placeholder="Nhập số nhà - tên đường" v-model="form.home_number">
          </div>
          <div class="form-group item-input">
            <label for="role">Chọn chức năng của bạn*</label>
            <select class="form-control" v-model="form.role" @change="changeProvince">
                <option v-for="role in roles" v-bind:value="role.value" >{{ role.name }}</option>  
            </select>
          </div>
           <div class="form-group item-input" >
               <button class="btn btn-success btn-add">Đăng ký</button>
          </div>
        </form>
      </div>
  </div>
</template>
<script>
import axios from 'axios';
import firebase from 'firebase';
 
export default {
  components: {
  },
  data () {
    return {
      errors: [],
      provinces: [],
      districts: [],
      resetPassword: '',
      roles: [
        {value: 1, name: "Khách hàng"},
        {value: 2, name: "Cửa hàng"},
        {value: 3, name: "Shipper"},
      ],
      form: {
        name: '',
        username: '',
        passWord: '',
        phone: '',
        province: null,
        district: null,
        ward: '',
        street: '',
        role: 1,
        home_number: '',
      }
    }
  },
  created(){
     axios.get('https://provinces.open-api.vn/api/?depth=2')
        .then((res) => {
          this.provinces = res.data;
    })  
  },
  methods:{
    changeProvince(){
        this.districts = this.provinces.filter(item => item.name === this.form.province)[0]['districts']
    },
    changeDistrict(){

    },
    submitForm(){
      this.errors = []
      if(this.form.name && this.form.username && this.form.passWord && this.form.phone && this.form.province && this.form.district && this.form.ward && this.form.street && this.form.role){
        if(this.form.passWord === this.resetPassword){
          axios.post('https://localhost:44331/api/user', this.form)
            .then((res) => {
              if(res.data){
                this.$router.push('/login')
              }
            })
            .catch((error) =>{
              this.errors.push(error)
            }) 
        }else{
          this.errors.push("Mật khẩu nhập lại không chính xác!!")
        }
      }else{
        this.errors.push("Dữ liệu không được để trống!!")
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
