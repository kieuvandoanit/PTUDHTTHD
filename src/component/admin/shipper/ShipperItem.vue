<template>
  <tr>
        <th scope="row">{{index+1}}</th>
        <td>{{shipper.fullname}}</td>
        <td>{{shipper.phoneNumber}}</td>
        <td>{{shipper.isApprove}}</td>
        <td>
            <router-link type="button" class="btn btn-primary" v-bind:to="'/admin/shipper/'+shipper.Id">Xem</router-link>
        </td>
    </tr>
</template>

<script>
export default {
    props:{
        shipper:"",
        index:""
    }
}
</script>

<style>

</style>