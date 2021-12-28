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
                <!-- <Product
                    v-for="product in ordersDetail.product"
                    :key="product.product_id"
                    v-bind:product="product"
                /> -->
            </tbody>
        </table>
    </div>
    <div class="pt-2 border-bottom mb-3"></div>
    <div class="d-flex justify-content-start align-items-center pl-3">
        <div class="text-muted">Payment Method: </div>
        <!-- <div class="ml-auto"><b>  {{ordersDetail.payments}}</b></div> -->
    </div>
    <div class="d-flex justify-content-start align-items-center py-1 pl-3">
        <div class="text-muted">Shipper ID: </div>
        <!-- <div class="ml-auto"> <label>{{ordersDetail.shipper_id}}</label> </div> -->
    </div>
    <div class="d-flex justify-content-start align-items-center pb-4 pl-3 border-bottom">
        <div class="text-muted"> <button class="text-white btn">Discount</button> </div>
        <!-- <div class="ml-auto price"> {{ordersDetail.discount}} </div> -->
    </div>
    <div class="d-flex justify-content-start align-items-center pl-3 py-3 mb-4 border-bottom">
        <div class="text-muted"> Total price: </div>
        <!-- <div class="ml-auto h5"> {{ordersDetail.total_price}} VNĐ</div> -->
    </div>
    <div class="row border rounded p-1 my-3">
        <div class="col-md-12 py-3">
            <div class="d-flex flex-column align-items start"> <b>Shipping Address</b>
                <!-- <p class="text-justify pt-2">{{ordersDetail.address.home_number}} {{ordersDetail.address.street}}, phường {{ordersDetail.address.ward}}, quận {{ordersDetail.address.distric}}</p> -->
                <!-- <p class="text-justify">{{ordersDetail.address.province}}</p> -->
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
                      <option selected>Choose...</option>
                      <option value="Receive">Cancel</option>
                    </select>
                    </div>
                    <div class="col-auto my-1">
                      <button type="submit" class="btn btn-primary">Submit</button>
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
import Product from './productuser.vue';
import {mapGetters, mapActions} from 'vuex'
export default {
  data: function(){
    return{
      "status":"",
    }
  },
  components: {
      HeaderUser,
      Product
  },
  created(){
    let orderID = $this.$route.params.id;
    this.getOrderDetail(order_id);
  },
  computed:{
    ...mapGetters(['ordersDetail'])
  },
  methods:{
    ...mapActions(['getOrderDetail']),
    updateOrder(e){
        e.preventDefault()
        axios.put('http://localhost:52861/api/order/'+this.$route.params.id,{
            status: this.status
        })
        .then(function(res){
            alert(res.data);
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