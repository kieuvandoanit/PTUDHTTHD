<template>
  <div class="container">
    <h1>Đăng nhập</h1>
        <form class="needs-validation cus-form" v-on:submit.prevent="submitForm">
        <p v-if="errors.length">
          <b>Lỗi:</b>
          <ul>
            <li v-for="(error, index) in errors" :key="index" style="color: red">{{ error }}</li>
          </ul>
        </p>
          <div class="form-group item-input">
              <label for="username">Tên đăng nhập*</label>
              <input type="text" class="form-control" id="username" placeholder="Nhập tên đăng nhập" v-model="form.username">
          </div>
          <div class="form-group item-input">
            <label for="password">Mật khẩu*</label>
            <input type="text" class="form-control" id="password" placeholder="Nhập mật khẩu" v-model="form.passWord">
          </div>
           <div class="form-group item-input" >
               <button class="btn btn-success btn-add">Đăng nhập</button>
          </div>
        </form>
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
      form: {
        username: '',
        passWord: '',
      }
    }
  },
  created(){ 
  },
  methods:{
    submitForm(){
      this.errors = []
      if(this.form.username && this.form.passWord){
        axios.post('https://localhost:44331/login', this.form)
        .then((res) => {
          if(res.data){
            localStorage.setItem('userID', res.data.Id)
            localStorage.setItem('name', res.data.name)
            localStorage.setItem('phone', res.data.phone)
            localStorage.setItem('province', res.data.province)
            localStorage.setItem('district', res.data.district)
            localStorage.setItem('ward', res.data.ward)
            localStorage.setItem('street', res.data.street)
            this.$router.push('/product')
          }
        })
        .catch((error) =>{
          this.errors.push(error)
        }) 
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
