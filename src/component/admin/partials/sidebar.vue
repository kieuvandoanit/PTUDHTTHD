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
    <div class="row item-manager">
        <div class="col-2"><b-icon icon="journal-bookmark-fill"></b-icon> </div>
        <div class="col-10" v-on:click="profileManager">Quản lý hồ sơ</div>
    </div>
    <!-- Thống kê -->
    <div class="row item-manager">
        <div class="col-2"><b-icon icon="journal-bookmark-fill"></b-icon> </div>
        <div class="col-10" v-on:click="countShipper">Thống kê Shipper</div>
    </div>
    <div class="row item-manager">
        <div class="col-2"><b-icon icon="journal-bookmark-fill"></b-icon> </div>
        <div class="col-10" v-on:click="countUser">Thống kê khách hàng</div>
    </div>
    <div class="row item-manager">
        <div class="col-2"><b-icon icon="journal-bookmark-fill"></b-icon> </div>
        <div class="col-10" v-on:click="countStore">Thống kê cửa hàng</div>
    </div>
    <div class="row item-manager">
        <div class="col-2"><b-icon icon="journal-bookmark-fill"></b-icon> </div>
        <div class="col-10" v-on:click="topProduct">Thống kê mặt hàng thiết yếu</div>
    </div>
    <div class="row item-manager">
        <div class="col-2"><b-icon icon="journal-bookmark-fill"></b-icon> </div>
        <div class="col-10" v-on:click="statisticalProduct">Thống kê mặt hàng cùng kỳ</div>
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
        },
        profileManager: function(){
            this.$router.push('/admin/profile');
        },
        //Thống kê
        countShipper: function(){
            this.$router.push('/admin/statistical/countShipper');
        },
        countUser: function(){
            this.$router.push('/admin/statistical/countUser');
        },
        countStore: function(){
            this.$router.push('/admin/statistical/countStore');
        },
        topProduct: function(){
            this.$router.push('/admin/statistical/topProduct');
        },
        statisticalProduct: function(){
            this.$router.push('/admin/statistical/StatisticalProduct');
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
