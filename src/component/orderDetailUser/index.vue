<template>
<div id="orderDetailUser">
  <HeaderUser/>
  <div class="wrapper bg-white">
    <div class="table-responsive">
        <table class="table table-borderless">
            <thead>
                <tr class="text-uppercase text-muted">
                    <th scope="col" class="col-md-1">#</th>
                    <th scope="col" class="col-md-6">Product</th>
                    <th scope="col" class="text-right col-md-3">Price</th>
                    <th scope="col" class="text-right col-md-2">Quantity</th>
                </tr>
            </thead>
            <tbody>
                <ProductUser
                    v-for="product in orderUserDetail.product"
                    :key="product.product_id"
                    v-bind:product="product"
                />
            </tbody>
        </table>
    </div>
    <div class="pt-2 border-bottom mb-3"></div>
    <div class="d-flex justify-content-start align-items-center pl-3">
        <div class="text-muted">Payment Method: </div>
        <div class="ml-auto" style="padding-left: 15px"><b>{{orderUserDetail.payments}}</b></div>
    </div>
    <div class="d-flex justify-content-start align-items-center py-1 pl-3">
        <div class="text-muted">Shipper ID: </div>
        
        <div class="ml-auto" v-if="orderUserDetail.shipperId != ''"> 
            <label style="padding-left: 15px">{{orderUserDetail.shipperId}}</label> 
        </div>
        <div class="ml-auto" v-else> 
            <router-link to="/findShipper">Tìm shipper</router-link>
        </div>
    </div>
    <div class="d-flex justify-content-start align-items-center pb-4 pl-3 border-bottom">
        <div class="text-muted">Discount: </div>
        <div class="ml-auto price" style="padding-left: 15px"> {{orderUserDetail.discount*100}}%</div>
    </div>
    <div class="d-flex justify-content-start align-items-center pl-3 py-3 mb-4 border-bottom">
        <div class="text-muted"> Total price: </div>
        <div class="ml-auto h5"> {{orderUserDetail.totalPrice}} VNĐ</div>
    </div>
    <div class="row border rounded p-1 my-3">
        <div class="col-md-12 py-3">
            <div class="d-flex flex-column align-items start"> <b>Shipping Address</b>
                <p class="text-justify pt-2">{{orderUserDetail.address.home_number}} {{orderUserDetail.address.street}}, phường {{orderUserDetail.address.ward}}, quận {{orderUserDetail.address.district}}</p>
                <p class="text-justify">{{orderUserDetail.address.province}}</p>
            </div>
        </div>
    </div>
    <div class="row border rounded p-1 my-3">
        <div class="col-md-12 py-3">
            <div class="d-flex flex-column align-items start"> <b>Update status</b>
               <form v-on:submit="updateOrder">
                <div class="form-row align-items-center">
                    <div class="col-auto my-1">
                    <label class="mr-sm-2" for="inlineFormCustomSelect">Status</label>
                    <select class="custom-select mr-sm-2" v-model="status" id="inlineFormCustomSelect">
                      <option selected>Chọn...</option>
                      <option value="Đã hủy">Hủy</option>
                    </select>
                    </div>
                    <div class="col-auto my-1">
                      <button type="submit" class="btn btn-primary">Cập nhật</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import HeaderUser from '../Header_user.vue';
import ProductUser from './productuser.vue';
import {mapGetters, mapActions} from 'vuex'
export default {
  data: function(){
    return{
      "status":"",
    }
  },
  components: {
      HeaderUser,
      ProductUser
  },
  created(){
    let orderID = this.$route.params.id;
    this.getOrderUserDetail(orderID);
  },
  computed:{
    ...mapGetters(['orderUserDetail'])
  },
  methods:{
    ...mapActions(['getOrderUserDetail']),
    updateOrder(e){
        e.preventDefault()

        axios.put('http://localhost:6039/order/' + this.$route.params.id,{
            address: this.orderUserDetail.address,
            orderDate: this.orderUserDetail.orderDate,
            fullname: this.orderUserDetail.fullname,
            phoneNumber: this.orderUserDetail.phoneNumber,
            totalPrice: this.orderUserDetail.totalPrice,
            product: this.orderUserDetail.product,
            status: this.status,
            payments: this.orderUserDetail.payments,
            customerId: this.orderUserDetail.customerId,
            discount: this.orderUserDetail.discount,
            shipperId: this.orderUserDetail.shipperId,
            shipperName: this.orderUserDetail.shipperName,
            storeId: this.orderUserDetail.storeId
        })
        .then(function(res){
            alert("Đơn hàng đã được hủy!");
        })
        .catch(function (error) {
            console.log(error);
        });
    }
  }

}
</script>

<style>

</style>