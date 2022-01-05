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
                <th class="col-md-1">Ngày đặt hàng</th>
                <th class="col-md-1">Họ tên</th>
                <th class="col-md-1">Địa chỉ</th>
                <th class="col-md-1">Điện thoại</th>
                <th class="col-md-1">Trạng thái</th>
                <th class="col-md-1">Tổng tiền</th>
                <th class="col-md-2">Cập nhật</th>
            </tr>
        </thead>
        <tbody>
            <Order
                v-for="order in orders"
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
        this.getOrder()
    },
    computed:{
        ...mapGetters(['orders'])
    },
    methods:{
        ...mapActions(['getOrder']),
        findStatus(e){
            e.preventDefault();
            this.$store.dispatch('filterOrder',this.status)
        },
        updateStatus(e){
            e.preventDefault()
            axios.put('https://localhost:44337/api/ordershipper/'+this.$route.params.id,{
                status: this.status
            })
            .then(function(res){
                alert(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

}
</script>

<style scoped>
.order{
    width: 100%;
}
</style>