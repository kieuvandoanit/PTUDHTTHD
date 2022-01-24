<template>
  <tr>
    <td scope="row">{{index + 1}}</td>
    <td>{{item.time}}</td>
    <td>{{item.totalPrice}}</td>
  </tr>
</template>

<script>
export default {
    props:{
        item:{
            type:Object,
            default: null
        },
        index:{
            type:Number,
            default: null
        },
    }
}
</script>
<style scoped>

</style>
