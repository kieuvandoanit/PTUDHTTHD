<template>
  <!-- <tr id="store_item">
      <th class="col-md-1">{{store.store_id}}</th>
      <th class="col-md-4">{{store.name}}</th>
      <th class="col-md-5">{{store.address.home_number}} {{store.address.street}}, phường {{store.address.ward}}, quận {{store.address.distric}},{{store.address.province}}</th>
      <th class="col-md">{{store.phone_number}}</th>
  </tr> -->
  <tr class="cell-1">
    <td>{{store.store_id}}</td>
    <td>{{store.name}}</td>
    <td><b class="">{{store.isApprove}}</b></td>
    <td>{{store.address.home_number}} {{store.address.street}}, phường {{store.address.ward}}, quận {{store.address.distric}},{{store.address.province}}</td>
    <td>{{store.phone_number}}</td>
</tr>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
    props:{
        store:{
            type:Object,
            default: null
        }
    }
}
</script>

<style>

</style>