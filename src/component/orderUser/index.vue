<template>
  <div id="orderUser">
      <HeaderUser/>
      <h2>Lịch sử đặt hàng</h2>
      <table class="table">
        <thead class="thead-light">
            <tr>
            <th scope="col">Mã đơn hàng</th>
            <th scope="col">Ngày đặt</th>
            <th scope="col">Tổng số tiền</th>
            <th scope="col">Trạng thái</th>
            </tr>
        </thead>
        <tbody>
            <OrderUser1
                v-for="order in orderUser"
                :key="order.id"
                v-bind:order="order"
            />
        </tbody>
        </table>
  </div>
</template>

<script>
import HeaderUser from '../Header_user.vue'
import OrderUser1 from './orderUser.vue'

import {mapGetters, mapActions} from 'vuex'

export default {
    components:{
        HeaderUser,
        OrderUser1
    },
    created(){
        let userID = localStorage.getItem('userID');
        this.getOrderByUser(userID);
    },
    computed:{
        ...mapGetters(['orderUser'])
    },
    methods:{
        ...mapActions(['getOrderByUser'])
    }
}
</script>

<style>

</style>