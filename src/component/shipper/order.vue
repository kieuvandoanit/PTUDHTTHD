<template>
  <tr id="order_item">
      <th class="col-md-2" style="font-weight: 400">{{order.orderDate}}</th>
      <th class="col-md-2" style="font-weight: 400">{{order.fullname}}</th>
      <th class="col-md-2" style="font-weight: 400">{{order.address.home_number}} {{order.address.street}}, {{order.address.ward}}, {{order.address.district}}, {{order.address.province}}</th>
      <th class="col-md-2" style="font-weight: 400">{{order.phoneNumber}}</th>
      <th class="col-md-2" style="font-weight: 400; padding: 0px;">
          <span v-bind:class="classObject" style="font-size: 12px; margin-top: 15px;">{{order.status}}</span>
      </th>
      <th class="col-md-1" style="font-weight: 400">{{order.totalPrice}}</th>
      <th class="col-md-1" style="font-weight: 400"><router-link class="btn btn-outline-success" v-bind:to="'/shipper/order/'+order.id">Cập nhật</router-link></th>
  </tr>
</template>

<script>
export default {
    props:{
        order:{
            type:Object,
            default: null
        },
        
    },
    data:function(){
        return {
            isTrue:true
        }
    },
    computed:{
        classObject: function(){
            return {
                btn:true, 
                disabled: true, 
                'btn-danger': this.order.status === 'Đã hủy',
                'btn-primary': this.order.status === 'Đã tiếp nhận',
                'btn-success': this.order.status === 'Thành công',
                'btn-info': this.order.status === 'Đang giao',
                'btn-warning': this.order.status === 'Chuẩn bị',
            }
        }
    }
}
</script>

<style>
    
</style>