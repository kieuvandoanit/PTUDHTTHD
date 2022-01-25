<template>
  <div class="container">
    <Header/>
    <div class="row">
      <div class="col-3 sidebar">
        <Sidebar/>
      </div>
      <div class="col-9 body">
        <h1>Thêm mới Hồ Sơ</h1>
        <form class="needs-validation cus-form" v-on:submit.prevent="submitForm">
        <p v-if="errors.length">
          <b>Lỗi:</b>
          <ul>
            <li v-for="(error, index) in errors" :key="index" style="color: red">{{ error }}</li>
          </ul>
        </p>
          <div>
              <label for="name">Giấy phép kinh doanh*</label>
              <input type="file" @change="previewImage" accept="image/*">
              <p>Loading: {{uploadValue.toFixed()+"%"}}
                <progress :value="uploadValue" max="100"></progress>
              </p>
              <img :src="businessLicenseImg" style="width: 200px">
          </div>
          <div>
              <label for="name">Chứng nhận vệ sinh an toàn thực phẩm*</label>
              <input type="file" @change="previewImage2" accept="image/*">
              <p>Loading: {{uploadValue2.toFixed()+"%"}}
                <progress :value="uploadValue2" max="100"></progress>
              </p>
              <img :src="foodSafetyCertificateImg" style="width: 200px">
          </div>
          <div class="form-group item-input">
              <label for="name">Tên cửa hàng</label>
              <input type="text" class="form-control" id="name" placeholder="Nhập tên cửa hàng" v-model="form.storeName">
          </div>
          <div class="form-group item-input">
            <label for="price">Mã cửa hàng</label>
            <input type="text" class="form-control" id="price" placeholder="Mã cửa hàng" v-model="form.store_id">
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
import firebase from 'firebase';

export default {
  components: {
    Header,
    Sidebar
  },
  data () {
    return {
      errors: [],
      businessLicenseData: null,
      businessLicenseImg: null,
      foodSafetyCertificateData: null,
      foodSafetyCertificateImg: null,
      uploadValue: 0,
      uploadValue2: 0,
      store: [],
      form: {
        storeName: '',
        store_id: '',
        businessLicense: '',
        foodSafetyCertificate:'',
        isApproved:''
      }
    }
  },
  methods:{
    previewImage(event){
      this.uploadValue=0;
      this.businessLicenseImg=null;
      this.businessLicenseData=event.target.files[0];
      this.onUpload()
    },
    onUpload(){
      const storageRef=firebase.storage().ref(`${this.businessLicenseData.name}`).put(this.businessLicenseData);
      storageRef.on(`state_changed`, snapshot=>{
          this.uploadValue=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        }, error => {
          console.log(error.message)
        },
        ()=>{
          this.uploadValue=100;
          storageRef.snapshot.ref.getDownloadURL().then((url)=>{
            this.businessLicenseImg=url;
            this.form.businessLicense= url;
          });
        })
    },
    previewImage2(event){
      this.uploadValue2=0;
      this.foodSafetyCertificateImg=null;
      this.foodSafetyCertificateData=event.target.files[0];
      this.onUpload2()
    },
    onUpload2(){
      const storageRef=firebase.storage().ref(`${this.foodSafetyCertificateData.name}`).put(this.foodSafetyCertificateData);
      storageRef.on(`state_changed`, snapshot=>{
          this.uploadValue=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        }, error => {
          console.log(error.message)
        },
        ()=>{
          this.uploadValue2=100;
          storageRef.snapshot.ref.getDownloadURL().then((url)=>{
            this.foodSafetyCertificateImg=url;
            this.form.foodSafetyCertificate= url;
          });
        })
    },
    submitForm(){
      this.errors = []
      if(this.form.storeName && this.form.store_id){
        console.log(this.form.store_id);
        let storeID = this.form.store_id;
        let isAprrove = '';
        axios.get(`http://localhost:36028/api/Store/${storeID}`)
        .then(response =>{
          this.store = response.data;
          isAprrove = this.store[0].isApprove;
          this.form.isApproved = isAprrove;
          axios.post('http://localhost:6040/createprofile', this.form)
          .then((res) => {
          if(res.data){
            this.$router.push('/admin/profile')
          }
          })
          .catch((error) =>{
            this.errors.push(error)
          })
        });


      }
      if(!this.form.storeName){
      this.errors.push("Tên bắt buộc phải nhập")
      }
      if(!this.form.store_id){
        this.errors.push("Mã bắt buộc phải nhập")
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
