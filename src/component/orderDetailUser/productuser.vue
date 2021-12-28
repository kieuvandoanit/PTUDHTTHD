<template>
  <tr>
    <th scope="" class="col-md-1"><img v-bind:src="product.productImage" alt="apple" class="rounded-circle" width="30" height="30"></th>
    <td class="col-md-6"><b>{{product.productName}}</b></td>
    <td class="col-md-3"><b>{{product.productPrice}}</b></td>
    <td class="col-md-2"><b>{{product.quantity}}</b></td>
</tr>
</template>

<script>
export default {
    props:{
        product:{
            type:Object,
            default: null
        }
    }
}
</script>

<style>

</style>