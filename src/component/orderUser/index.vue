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
            <tr>    
            <td><router-link to="/">61b1bbc0fc692ccd16526664</router-link></td>
            <td>12/02/2021</td>
            <td>120000</td>
            <td>Delete</td>
            </tr>
            <tr>
            <td>61b1bbc0fc692ccd16526664</td>
            <td>12/02/2021</td>
            <td>120000</td>
            <td>Delete</td>
            </tr>
            <tr>
            <td>61b1bbc0fc692ccd16526664</td>
            <td>12/02/2021</td>
            <td>120000</td>
            <td>Delete</td>
            </tr>
        </tbody>
        </table>
  </div>
</template>

<script>
import HeaderUser from '../Header_user.vue'
export default {
    components:{
        HeaderUser
    },

}
</script>

<style>

</style>