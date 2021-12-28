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
            <OrderUser/>
            <OrderUser/>
            <OrderUser/>
        </tbody>
        </table>
  </div>
</template>

<script>
import HeaderUser from '../Header_user.vue'
import OrderUser from './orderUser.vue'

import {mapGetters, mapActions} from 'vuex'

export default {
    components:{
        HeaderUser,
        OrderUser
    },
    created(){
        this.getOrder();
    },
    computed:{
        ...mapGetters(['orders'])
    },
    methods:{
        ...mapActions(['getOrder'])
    }
}
</script>

<style>

</style>