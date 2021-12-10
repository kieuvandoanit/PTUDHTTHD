<template>
  <tr id="order_item">
      <th class="col-md-1">{{order.order_date}}</th>
      <th class="col-md-2">{{order.fullname}}</th>
      <th class="col-md-4">{{order.address.home_number}} {{order.address.street}}, phường {{order.address.ward}}, quận {{order.address.distric}},{{order.address.province}}</th>
      <th class="col-md-2">{{order.phone_number}}</th>
      <th class="col-md-1">{{order.status}}</th>
      <th class="col-md-1">{{order.total_price}}</th>
      <th class="col-md-1"><router-link class="btn btn-outline-success" v-bind:to="'/order/'+order.id">Chi tiết</router-link></th>
  </tr>
</template>

<script>
export default {
    props:{
        order:{
            type:Object,
            default: null
        }
    }

}
</script>

<style>
    
</style>