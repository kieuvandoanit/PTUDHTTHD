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
                <option value="Đã tiếp nhận">Đã tiếp nhận</option>
                <option value="Chờ tiếp nhận">Chờ tiếp nhận</option>
                <option value="Đang giao">Đang giao</option>
                <option value="Thành công">Thành công</option>
                <option value="Đã hủy">Đã hủy</option>
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
                <th class="col-md-1">Mã đơn hàng</th>
                <th class="col-md-1">Họ tên khách</th>
                <th class="col-md-1">Địa chỉ</th>
                <th class="col-md-1">Điện thoại</th>
                <th class="col-md-1">Trạng thái</th>
                <!-- <th class="col-md-1">ShipperID</th> -->
                <th class="col-md-2">Tên Shipper</th>
                <th class="col-md-2">Tổng tiền</th>
                <th class="col-md-2">Nhận đơn</th>
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
import Header from '../HeaderShipper.vue'
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

            axios.put('http://localhost:52861/api/ordershipper/'+this.$route.params.id,{

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