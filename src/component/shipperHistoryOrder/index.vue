<template>
  <div id="list_order">
    <Header/>
    <h4>Danh sách đơn hàng</h4>
    <table class="table table-striped">
        <thead>
            <tr>
                <th class="col-sm-1">Mã đơn hàng</th>
                <th class="col-md-1">Ngày đặt hàng</th>
                <!-- <th class="col-md-2">Họ tên khách</th> -->
                <th class="col-md-2">Trạng thái</th>
                <th class="col-md-2">Tổng tiền</th>
                <th class="col-md-2">Mã Shipper</th>
                <th class="col-md-2">Tên Shipper</th>
                <th class="col-md-2">Chi tiết</th>
            </tr>
        </thead>
        <tbody>
            <Order
                v-for="order in orderShipper"
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
        let shipperID = localStorage.getItem('userID');
        this.getOrderByShipper(shipperID)
    },
    computed:{
        ...mapGetters(['orderShipper'])
    },
    methods:{
        ...mapActions(['getOrderByShipper']),
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