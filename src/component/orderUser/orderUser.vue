<template>
  <tr>    
    <td><router-link v-bind:to='"/user/order/"+order.id'>{{order.id}}</router-link></td>
    <td>{{order.orderDate}}</td>
    <td>{{order.totalPrice}}</td>
    <td>{{order.status}}</td>
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