<template>
  <!-- <div class="container">
    <h1>Đăng nhập</h1>
        <form class="needs-validation cus-form" v-on:submit.prevent="submitForm">
        
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
  </div> -->
<section class="login-block">
  <div class="container">
	<div class="row">
		<div class="col-md-4 login-sec">
      <h2 class="text-center">Đăng nhập ngay bây giờ</h2>
      <form class="login-form needs-validation cus-form" v-on:submit.prevent="submitForm">

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
               <router-link to="/register" class="btn btn-primary" style="margin-top: 20px;">Đăng ký</router-link>
          </div>

      </form>
    </div>         
  </div>
</div>
</section>
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
            localStorage.setItem('userID', res.data[0].Id)
            localStorage.setItem('name', res.data[0].name)
            localStorage.setItem('phone', res.data[0].phone)
            localStorage.setItem('province', res.data[0].province)
            localStorage.setItem('district', res.data[0].district)
            localStorage.setItem('ward', res.data[0].ward)
            localStorage.setItem('street', res.data[0].street)
            localStorage.setItem('home_number', res.data[0].home_number)
            localStorage.setItem('role', res.data[0].role)
            localStorage.setItem('storeID', '61ecdbd2f5e01747ffbe02f8')
            let role = res.data[0].role;
            if(role === 1){// user
              this.$router.push('/storepage');
            }else if(role === 2){ // cua hang
              this.$router.push('/store/product');
            }else if(role === 3){ // shipper
              this.$router.push('/shipper/order');
            }else{//admin
              this.$router.push('/admin/order');
            }
            
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

  .login-block{
    background: #DE6262;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #FFB88C, #DE6262);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #FFB88C, #DE6262); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
float:left;
width:100%;
padding : 50px 0;
}
.banner-sec{background:url(https://static.pexels.com/photos/33972/pexels-photo.jpg)  no-repeat left bottom; background-size:cover; min-height:500px; border-radius: 0 10px 10px 0; padding:0;}
.container{background:#fff; border-radius: 10px; box-shadow:15px 20px 0px rgba(0,0,0,0.1);}
.carousel-inner{border-radius:0 10px 10px 0;}
.carousel-caption{text-align:left; left:5%;}
.login-sec{padding: 50px 30px; position:relative;}
.login-sec .copy-text{position:absolute; width:80%; bottom:20px; font-size:13px; text-align:center;}
.login-sec .copy-text i{color:#FEB58A;}
.login-sec .copy-text a{color:#E36262;}
.login-sec h2{margin-bottom:30px; font-weight:800; font-size:30px; color: #DE6262;}
.login-sec h2:after{content:" "; width:100px; height:5px; background:#FEB58A; display:block; margin-top:20px; border-radius:3px; margin-left:auto;margin-right:auto}
.btn-login{background: #DE6262; color:#fff; font-weight:600;}
.banner-text{width:70%; position:absolute; bottom:40px; padding-left:20px;}
.banner-text h2{color:#fff; font-weight:600;}
.banner-text h2:after{content:" "; width:100px; height:5px; background:#FFF; display:block; margin-top:20px; border-radius:3px;}
.banner-text p{color:#fff;}
</style>
