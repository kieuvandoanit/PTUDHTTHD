<template>
  <div class="container">
    <Header/>
    <div class="row">
      <div class="col-3 sidebar">
        <Sidebar/>
      </div>
      <div class="col-9 body">
        <h1>Thông tin shipper</h1>
        <form class="needs-validation cus-form" v-on:submit.prevent="submitForm">
        <!-- <p v-if="errors.length">
          <b>Lỗi:</b>
          <ul>
            <li v-for="(error, index) in errors" :key="index" style="color: red">{{ error }}</li>
          </ul>
        </p> -->
          <div class="form-group item-input">
              <label for="name">Họ và tên</label>
              <input type="text" class="form-control" id="name" placeholder="Nhập họ và tên" v-bind:value="shipperDetail.fullname" disabled>
          </div>
          <div class="form-group item-input">
            <label for="price">Ngày sinh</label>
            <input type="text" class="form-control" id="price" placeholder="Nhập ngày sinh" v-bind:value="shipperDetail.dateOfBirth" disabled>
          </div>
           <div class="form-group item-input">
            <label for="numberInventory">Số CMND</label>
            <input type="text" class="form-control" id="numberInventory" placeholder="Nhập số CMND" v-bind:value="shipperDetail.numberID" disabled>
          </div>
          <div class="form-group item-input">
            <label for="unit">Số điện thoại</label>
            <input type="text" class="form-control" id="unit" placeholder="Nhập số điện thoại" v-bind:value="shipperDetail.phoneNumber" disabled>
          </div>
          <div class="form-group item-input">
            <label for="state">Trạng thái</label>
            <div v-if="shipperDetail.isApprove === true">
                <select id="state" class="form-control" disabled>
                    <option value="True" selected>Đã được duyệt</option>
                    <option value="False">Không được duyệt</option>
                </select>
            </div>
            <div v-if="shipperDetail.isApprove === false">
                <select id="state" class="form-control" disabled>
                    <option value="True">Duyệt</option>
                    <option value="False" selected>Không duyệt</option>
                </select>
            </div>
            
          </div>
          <div class="form-group item-input">
            <label for="unit">Địa chỉ</label>
            <div class="row" style="margin: 0px 2px;">
                <input type="text" class="form-control" style="width: 150px;" placeholder="Số nhà" v-bind:value="shipperDetail.address.home_number" disabled>
                <input type="text" class="form-control" style="width: 300px; margin-left: 20px;" placeholder="Đường" v-bind:value="'đường '+shipperDetail.address.street" disabled>
                <input type="text" class="form-control" style="width: 150px; margin-left: 20px;" placeholder="Phường" v-bind:value="'phường '+shipperDetail.address.ward" disabled>
                <input type="text" class="form-control" style="width: 153px; margin-left: 20px;" placeholder="Quận" v-bind:value="'quận '+shipperDetail.address.district" disabled>
                <input type="text" class="form-control" style="margin: 10px 0px;" placeholder="Thành phố" v-bind:value="'thành phố '+shipperDetail.address.province" disabled>
            </div>
          </div>
           <!-- <div class="form-group item-input" >
               <button class="btn btn-success btn-add">Cập nhật</button>
          </div> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../partials/header.vue'
import Sidebar from '../partials/sidebar.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
    components: {
        Header,
        Sidebar,
    },
    data:function(){
        return {
            form: {
                fullname: '',
                phoneNumber: '',
                numberID: '',
                dateOfBirth: '',
                isApprove: '',
                address:{
                    home_number:'',
                    street:'',
                    ward:'',
                    district:'',
                    province:''
                }
            },
        }
    },
    created(){
        let id = this.$route.params.id;
        this.getShipperDetail(id)
    },
    methods:{
        submitForm:function(){

        },
        ...mapActions(['getShipperDetail'])
    },
    computed:{
        ...mapGetters(['shipperDetail'])
    }
}
</script>

<style>

</style>