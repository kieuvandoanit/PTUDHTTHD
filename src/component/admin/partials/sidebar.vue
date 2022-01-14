<template>
<div>
    <div class="row item-manager">
        <div class="col-2"><b-icon icon="menu-button-wide"></b-icon> </div>
        <div class="col-10" v-on:click="ProductManager">Quản lý sản phẩm</div>
    </div>
    <div class="row item-manager">
        <div class="col-2"><b-icon icon="journal-bookmark-fill"></b-icon> </div>
        <div class="col-10" v-on:click="StoreManager">Quản lý cửa hàng</div>
    </div>
    <div class="row item-manager">
        <div class="col-2"><b-icon icon="journal-bookmark-fill"></b-icon> </div>
        <div class="col-10" v-on:click="ShipperManager">Quản lý người giao hàng</div>
    </div>
    <div class="row item-manager">
        <div class="col-2"><b-icon icon="journal-bookmark-fill"></b-icon> </div>
        <div class="col-10" v-on:click="ShipperOrder">Quản lý đơn hàng (Shipper)</div>
    </div>
</div>
</template>

<script>
export default {
    methods:{
        ProductManager: function(){
            this.$router.push('/admin/product');
        },
        StoreManager: function(){
            this.$router.push('/admin/store');
        },
        ShipperManager: function(){
            this.$router.push('/admin/shipper');
        },
        ShipperOrder: function(){
            this.$router.push('/admin/order');
        }
    }
}
</script>

<style scoped>
  .item-manager{
    margin: 15px 0;
    cursor: pointer;
  }
</style>