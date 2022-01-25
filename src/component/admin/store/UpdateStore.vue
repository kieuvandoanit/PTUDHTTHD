<template>
  <div class="container">
    <Header/>
    <div class="row">
      <div class="col-3 sidebar">
        <Sidebar/>
      </div>
      <div class="col-9 body">
        <h1>Sửa cửa hàng</h1>
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
            <label for="province">Chọn tỉnh/thành phố*</label>
            <select class="form-control" v-model="form.address.province" @change="changeProvince">
                <option v-for="province in provinces" v-bind:value="province.name" >{{ province.name }}</option>  
            </select>
          </div>
          <div class="form-group item-input">
            <label for="district">Chọn quận/huyện*</label>
            <select class="form-control" v-model="form.address.district" @change="changeDistrict">
                <option v-for="district in districts" v-bind:value="district.name" >{{ district.name }}</option>  
            </select>
          </div>
        <div class="form-group item-input">
            <label for="ward">Phường/xã*</label>
            <input type="text" class="form-control" id="ward" placeholder="Nhập phường/xã" v-model="form.address.ward">
        </div>
        <div class="form-group item-input">
            <label for="street">Tên đường*</label>
            <input type="text" class="form-control" id="street" placeholder="Nhập phường/xã" v-model="form.address.street">
        </div>
        <div class="form-group item-input">
            <label for="home_number">Số nhà*</label>
            <input type="text" class="form-control" id="home_number" placeholder="Nhập số nhà" v-model="form.address.home_number">
        </div>
        <div class="form-group item-input" >
            <button class="btn btn-success btn-add">Cập nhật</button>
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
  name: 'UpdateStore',
  components: {
    Header,
    Sidebar
  },
  data () {
    return {
      errors: [],
      districts: [],
      provinces: [],
       form: {
        name: '',
        phone_number: '',
        address:{
          province: '',
          district: '',
          ward: '',
          street: '',
          home_number:''
        },
        isApprove: ''
      }
    }
  },
  created(){
    this.store = this.$route.params.store;
    axios.get('https://provinces.open-api.vn/api/?depth=2')
        .then((res) => {
          this.provinces = res.data;
    })
    this.form.name = this.store.name;
    this.form.phone_number = this.store.phone_number;
    this.form.address.province = this.store.address.province;
    this.form.address.district = this.store.address.district;
    this.form.address.ward = this.store.address.ward;
    this.form.address.street = this.store.address.street;
    this.form.address.home_number = this.store.address.home_number;
    this.form.isApprove = this.store.isApprove;
  },
  methods:{
    changeProvince(){
        this.districts = this.provinces.filter(item => item.name === this.form.address.province)[0]['districts']
    },
    changeDistrict(){

    },
    submitForm(){
      this.errors = []
      this.form.isApprove = "no";
      if(this.form.name && this.form.phone_number && this.form.address.province && this.form.address.district && this.form.address.ward && this.form.address.street && this.form.address.home_number){
        axios.put(`http://localhost:8099/updateStore/${this.store.id}`, this.form)
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
      if(!this.form.address.province && !this.form.address.district && !this.form.address.ward && !this.form.address.street && !this.form.address.home_number){
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
