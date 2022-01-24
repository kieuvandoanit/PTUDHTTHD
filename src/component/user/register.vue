<template>
  <div class="container">
        <!-- <form class="needs-validation cus-form" v-on:submit.prevent="submitForm">
        <p v-if="errors.length">
          <b>Lỗi:</b>
          <ul>
            <li v-for="(error, index) in errors" :key="index" style="color: red">{{ error }}</li>
          </ul>
        </p>
        
          
           <div class="form-group item-input" >
               <button class="btn btn-success btn-add">Đăng ký</button>
          </div>
        </form> -->
      <div class="container register">
        <div class="row">
            <div class="col-md-3 register-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                <h3>Xin chào</h3>
                <p>Bạn đến với hệ thống bán hàng</p>
                <input type="submit" name="" value="Login"/><br/>
            </div>
            <div class="col-md-9 register-right" style="height: 600px;">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3 class="register-heading">Đăng kí vào hệ thống</h3>
                        <form class="needs-validation cus-form row" v-on:submit.prevent="submitForm" style="margin-top: 120px;">
                            <div class="col-md-6">
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
                                  <label for="role">Chọn chức năng của bạn*</label>
                                  <select class="form-control" v-model="form.role" @change="changeProvince">
                                      <option v-for="role in roles" :key="role.value" v-bind:value="role.value" >{{ role.name }}</option>  
                                  </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group item-input">
                                  <label for="province">Chọn tỉnh/thành phố*</label>
                                  <select class="form-control" v-model="form.province" @change="changeProvince">
                                      <option v-for="province in provinces" :key="province.name" v-bind:value="province.name" >{{ province.name }}</option>  
                                  </select>
                                </div>
                                <div class="form-group item-input">
                                  <label for="district">Chọn quận/huyện*</label>
                                  <select class="form-control" v-model="form.district" @change="changeDistrict">
                                      <option v-for="district in districts" :key="district.name" v-bind:value="district.name" >{{ district.name }}</option>  
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
                                <div class="form-group item-input" >
                                    <button class="btn btn-success btn-add">Đăng ký</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <h3  class="register-heading">Apply as a Hirer</h3>
                        <div class="row register-form">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="First Name *" value="" />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Last Name *" value="" />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Email *" value="" />
                                </div>
                                <div class="form-group">
                                    <input type="text" maxlength="10" minlength="10" class="form-control" placeholder="Phone *" value="" />
                                </div>


                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Password *" value="" />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Confirm Password *" value="" />
                                </div>
                                <div class="form-group">
                                    <select class="form-control">
                                        <option class="hidden"  selected disabled>Please select your Sequrity Question</option>
                                        <option>What is your Birthdate?</option>
                                        <option>What is Your old Phone Number</option>
                                        <option>What is your Pet Name?</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="`Answer *" value="" />
                                </div>
                                <input type="submit" class="btnRegister"  value="Register"/>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
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
                //tao cart 
                let userIDCart = res.data.Id;
                axios.post('http://localhost:6039/cart',
                  {
                    "userID":userIDCart,
                    "product":[],
                    "totalPrice":0
                  })
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
  .register{
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
    margin-top: 3%;
    padding: 3%;
}
.register-left{
    text-align: center;
    color: #fff;
    margin-top: 4%;
}
.register-left input{
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    width: 60%;
    background: #f8f9fa;
    font-weight: bold;
    color: #383d41;
    margin-top: 30%;
    margin-bottom: 3%;
    cursor: pointer;
}
.register-right{
    background: #f8f9fa;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
}
.register-left img{
    margin-top: 15%;
    margin-bottom: 5%;
    width: 25%;
    -webkit-animation: mover 2s infinite  alternate;
    animation: mover 1s infinite  alternate;
}
@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
.register-left p{
    font-weight: lighter;
    padding: 12%;
    margin-top: -9%;
}
.register .register-form{
    padding: 10%;
    margin-top: 10%;
}
.btnRegister{
    float: right;
    margin-top: 10%;
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    background: #0062cc;
    color: #fff;
    font-weight: 600;
    width: 50%;
    cursor: pointer;
}
.register .nav-tabs{
    margin-top: 3%;
    border: none;
    background: #0062cc;
    border-radius: 1.5rem;
    width: 28%;
    float: right;
}
.register .nav-tabs .nav-link{
    padding: 2%;
    height: 34px;
    font-weight: 600;
    color: #fff;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
}
.register .nav-tabs .nav-link:hover{
    border: none;
}
.register .nav-tabs .nav-link.active{
    width: 100px;
    color: #0062cc;
    border: 2px solid #0062cc;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
}
.register-heading{
    text-align: center;
    margin-top: 8%;
    margin-bottom: -15%;
    color: #495057;
}

</style>
