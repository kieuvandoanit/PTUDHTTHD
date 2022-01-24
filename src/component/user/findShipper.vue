<template>
   <div class="container-fluid">
        <div class="header">
            <div class="row d-flex align-items-center h-100">
                <div class="col-4" style="padding-left: 20px">
                    <h1>Vui lòng chọn shipper khu vực gần bạn nhất</h1> 
                </div>
                <div class="col-8 h-100">
                    <img class="logo" src="https://www.quangbinhtravel.vn/wp-content/uploads/2021/09/shipper-la-gi.jpg" />
                </div>
            </div>
        </div>
        <div class="body">
            <div class="form-check" v-for="(shipper, index) in shipperShow" :key="index">
                <input class="form-check-input" type="radio" name="flexRadioDefault" :id="shipper.Id" :value="shipper.Id" v-model="choosed">
                <label class="form-check-label" for="flexRadioDefault1">
                    <b>{{shipper.fullname}}</b> (SĐT: <b>{{shipper.phoneNumber}}</b>, Đ/C: <b>{{shipper.address.home_number}} {{shipper.address.street}}, {{shipper.address.ward}}, {{shipper.address.district}}, {{shipper.address.province}}</b>)
                </label>
            </div>
        </div>
        <div>
            <button type="button" class="btn btn-success" v-on:click="UpdateOrder()">Xác nhận</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  components: {
  },
  data () {
    return {
      errors: [],
      stores: [],
      shipperShow: [],
      choosed: '',
    }
  },
  created(){
    let ward = localStorage.getItem('ward')
    let district = localStorage.getItem('district')
    this.getListShipperNearUser(ward, district)
  },
  methods:{
    getListShipperNearUser: function(ward, district){
        axios.get(`https://localhost:44331/api/shipper?ward=${ward}&district=${district}`)
          .then(response =>{
              let shippersList = response.data;
              shippersList.filter(shipper => shipper.address.street.toUpperCase() === localStorage.getItem('street').toUpperCase())
                .forEach(item =>{     
                  this.shipperShow.push(item)
                  let index = shippersList.indexOf(item);
                  shippersList.splice(index, 1)
              })
              shippersList.forEach((item) =>{
                  this.shipperShow.push(item)
              })
              console.log(this.shipperShow)
          })
          .catch(e =>{
          this.errors.push(e)
      })
    },
    UpdateOrder: function(){
        console.log(this.choosed) //Lấy được shipperID rồi nha
    }
  }
   
}
</script>
<style scoped>
  .header{
     height: 400px;
     background-color: #eee;
 }
 .logo{
     height: 100%;
     width: 100%;
 }
 .body{
     height: 400px;
     margin-top: 25px;
     font-size: 16px;
 }
 img{
     width: 100%;
 }
 .search{
     padding: 10px 0;
 }
 .card:hover{
     transform: scale(1.1);
 }
 .col-4{
     padding: 10px 5px;
 }
</style>
