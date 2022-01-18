<template>
  <div class="container">
    <Header/>
    <div class="row">
      <div class="col-3 sidebar">
        <Sidebar/>
      </div>
      <div class="col-9 body">
        <h1>Sửa sản phẩm</h1>
        <form class="needs-validation cus-form" v-on:submit.prevent="submitForm">
        <p v-if="errors.length">
          <b>Lỗi:</b>
          <ul>
            <li v-for="(error, index) in errors" :key="index" style="color: red">{{ error }}</li>
          </ul>
        </p>
          <div>
              <label for="name">Hình ảnh*</label>
              <input type="file" @change="previewImage" accept="image/*">
              <p>Loading: {{uploadValue.toFixed()+"%"}}
                <progress :value="uploadValue" max="100"></progress>
              </p>
              <img :src="form.image" style="width: 200px">
          </div>
          <div class="form-group item-input">
              <label for="name">Tên sản phẩm*</label>
              <input type="text" class="form-control" id="name" placeholder="Nhập tên sản phẩm" v-model="form.name">
          </div>
          <div class="form-group item-input">
            <label for="price">Đơn giá*</label>
            <input type="number" class="form-control" id="price" placeholder="Nhập đơn giá" v-model="form.price">
          </div>
           <div class="form-group item-input">
            <label for="numberInventory">Số lượng*</label>
            <input type="number" class="form-control" id="numberInventory" placeholder="Nhập đơn giá" v-model="form.numberInventory">
          </div>
          <div class="form-group item-input">
            <label for="unit">Đơn vị*</label>
            <input type="text" class="form-control" id="unit" placeholder="Nhập đơn giá" v-model="form.unit">
          </div>
          <div class="form-group item-input">
            <label for="desc" class="form-label">Mô tả sản phẩm</label>
            <textarea class="form-control" id="desc" rows="3" v-model="form.desc" name="desc"></textarea>
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
import firebase from 'firebase';
 
export default {
   name: 'UpdateProduct',
  components: {
    Header,
    Sidebar
  },
  data () {
    return {
      errors: [],
      imageData: null,
      picture: null,
      uploadValue: 0,
      form: {
        name: '',
        price: '',
        numberInventory: '',
        unit: '',
        desc: '',
        image: '',
      }
    }
  },
  created(){
    this.product = this.$route.params.product;
    console.log(this.product)
    this.form.name = this.product.name;
    this.form.price = this.product.price;
    this.form.numberInventory = this.product.numberInventory;
    this.form.unit = this.product.unit;
    this.form.desc = this.product.desc;
    this.form.image = this.product.image;
  },
  methods:{
    previewImage(event){
      this.uploadValue=0;
      this.picture=null;
      this.imageData=event.target.files[0];
      this.onUpload()
    },
    onUpload(){
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`, snapshot=>{
          this.uploadValue=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        }, error => {
          console.log(error.message)
        },
        ()=>{
          this.uploadValue=100;
          storageRef.snapshot.ref.getDownloadURL().then((url)=>{
            this.picture=url;
            this.form.image= url;
          });
        })
    },
    submitForm(){
      this.errors = []
      if(this.form.name && this.form.price && this.form.unit && this.form.numberInventory){
        axios.put(`http://localhost:8099/updateProduct/${this.product.id}`, this.form)
        .then((res) => {
          if(res.data){
            this.$router.push('/admin/product')
          }
        })
        .catch((error) =>{
          this.errors.push(error)
        }) 
      }
      if(!this.form.name){
      this.errors.push("Tên bắt buộc phải nhập")
      }
      if(!this.form.price){
        this.errors.push("Đơn giá bắt buộc phải nhập")
      }
      if(!this.form.numberInventory){
        this.errors.push("Số lượng tồn kho bắt buộc phải nhập")
      }
      if(!this.form.unit){
        this.errors.push("Đơn vị tính bắt buộc phải nhập")
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
