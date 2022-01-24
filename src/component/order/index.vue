<template>
  <div id="list_order">
    <Header/>
    <h3>Lọc đơn hàng</h3>
    <form v-on:submit="findStatus">
        <div class="form-row align-items-center row">
            <div class="col-auto my-1">
            <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Trạng thái: </label>
            <select class="custom-select mr-sm-2 form-group" id="inlineFormCustomSelect" v-model="status" style="width: 200px; height: 40px;">
                <option value="All" selected>Tất cả</option>
                <option value="Receive">Đã tiếp nhận</option>
                <option value="Prepare">Chuẩn bị</option>
                <option value="Delivering">Đang giao</option>
                <option value="Success">Thành công</option>
                <option value="Delete">Đã hủy</option>
            </select>
            </div>
            <div class="col-auto my-1">
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
    <h4>Danh sách đơn hàng</h4>
    <table class="table table-striped">
        <thead>
            <tr>
                <th class="col-md-1">Order date</th>
                <th class="col-md-2">Fullname</th>
                <th class="col-md-4">Address</th>
                <th class="col-md-2">Phone number</th>
                <th class="col-md-1">Status</th>
                <th class="col-md-1">Total price</th>
                <th class="col-md-1">Action</th>
            </tr>
        </thead>
        <tbody>
            <Order
                v-for="order in orderStore"
                :key="order.id"
                v-bind:order="order"
            />
        </tbody>
    </table>

  </div>
</template>

<script>
import Header from '../Header.vue'
import Order from './order.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
    components:{
        Header,
        Order
    },
    data: function(){
        return {
            status:"",
        }
    },
    created(){
        let storeID = localStorage.getItem('storeID');
        this.getOrderByStoreID(storeID)
    },
    computed:{
        ...mapGetters(['orderStore'])
    },
    methods:{
        ...mapActions(['getOrderByStoreID']),
        findStatus(e){
            e.preventDefault();
            this.$store.dispatch('filterOrder',this.status)
        }
    }

}
</script>

<style scoped>
.order{
    width: 100%;
}
</style>