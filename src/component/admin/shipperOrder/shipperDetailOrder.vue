<template>
<div id="order_detail_page">
    <Header/>
    <div class="d-flex flex-column justify-content-center align-items-center" id="order-heading">
        <div class="text-uppercase">
            <p>Order detail</p>
        </div>
        <div class="h4">{{ordersDetail.order_date}}</div>
        <div class="pt-1">
            <p>Order #{{ordersDetail.id}} is currently<b class="text-dark"> {{ordersDetail.status}}</b></p>
        </div>
    </div>
    <div class="wrapper bg-white">
        <div class="table-responsive">
            <table class="table table-borderless">
                <thead>
                    <tr class="text-uppercase text-muted">
                        <th scope="col" class="col-md-1">#</th>
                        <th scope="col" class="col-md-6">Product</th>
                        <th scope="col" class="text-right col-md-3">Price</th>
                        <th scope="col" class="text-right col-md-2">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <Product
                        v-for="product in ordersDetail.product"
                        :key="product.product_id"
                        v-bind:product="product"
                    />
                </tbody>
            </table>
        </div>
        <div class="pt-2 border-bottom mb-3"></div>
        <div class="d-flex justify-content-start align-items-center pl-3">
            <div class="text-muted">Payment Method: </div>
            <div class="ml-auto"><b>  {{ordersDetail.payments}}</b></div>
        </div>
        <!-- <div class="d-flex justify-content-start align-items-center py-1 pl-3">
            <div class="text-muted">Shipper ID: </div>
            <div class="ml-auto"> <label>{{ordersDetail.shipperId}}</label> </div>
        </div> -->
        <div class="d-flex justify-content-start align-items-center pb-4 pl-3 border-bottom">
            <div class="text-muted"> <button class="text-white btn">Discount</button> </div>
            <div class="ml-auto price"> {{ordersDetail.discount}} </div>
        </div>
        <div class="d-flex justify-content-start align-items-center pl-3 py-3 mb-4 border-bottom">
            <div class="text-muted"> Total price: </div>
            <div class="ml-auto h5"> {{ordersDetail.totalPrice}} VNĐ</div>
        </div>
        <div class="row border rounded p-1 my-3">
            <div class="col-md-12 py-3">
                <div class="d-flex flex-column align-items start"> <b>Shipping Address</b>
                    <p class="text-justify pt-2">{{ordersDetail.address.home_number}} {{ordersDetail.address.street}}, phường {{ordersDetail.address.ward}}, quận {{ordersDetail.address.district}}</p>
                    <p class="text-justify">{{ordersDetail.address.province}}</p>
                </div>
            </div>
        </div>
        <div class="row border rounded p-1 my-3">
            <div class="col-md-12 py-3">
                <div class="d-flex flex-column align-items start"> <b>Nhận đơn hàng</b>
                    <form v-on:submit="updateShipperOrder">
                        <div class="form-row align-items-center">
                            <div class="col-auto my-1">
                            <label class="mr-sm-2" for="inlineFormCustomSelect">Mã Shipper</label>
                            <!-- <input type="text" v-model="ordersDetail.shipperId" style="width: 500px"><br> -->
                            <select class="custom-select mr-sm-2" v-model="ordersDetail.shipperId" id="orderDetailShipper">
                            <option value="61ee168df15889fb267ec54b" selected>Shipper 1</option>
                            <option value="61ee6071a75d1fa02395b812">Shipper 2</option>
                            <option value="61ee624ba75d1fa02395b813">Shipper 3</option>
                            <option value="61ee6436a75d1fa02395b814">Shipper 4</option>
                            </select>
                            <label class="mr-sm-2" for="inlineFormCustomSelect">Họ Tên Shipper</label>
                            <select class="custom-select mr-sm-2" v-model="ordersDetail.shipperName" id="orderDetailShipper">
                            <option value="Nguyễn Tuấn Anh" selected>Nguyễn Tuấn Anh</option>
                            <option value="Nông Thị Làm">Nông Thị Làm</option>
                            <option value="Hồ Thị Làm">Hồ Thị Làm</option>
                            <option value="Dương Văn Tam">Dương Văn Tam</option>
                            </select>
                            </div>
                            <div class="col-auto my-1">
                                <button type="submit" class="btn btn-primary">Giao đơn</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import axios from 'axios';
import Header from '../partials/header';
import Product from './product.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
    data:function(){
        return {
            status:""
        }
    },
    components:{
        Header,
        Product,
    },
    created(){
        let order_id = this.$route.params.id;
        this.getOrderDetail(order_id);
    },
    computed:{
        ...mapGetters(['ordersDetail'])
    },
    methods:{
        ...mapActions(['getOrderDetail']),
        updateShipperOrder(e){
            e.preventDefault()
            axios.put('http://localhost:6039/order/' + this.$route.params.id,{
            address: this.ordersDetail.address,
            orderDate: this.ordersDetail.orderDate,
            fullname: this.ordersDetail.fullname,
            phoneNumber: this.ordersDetail.phoneNumber,
            totalPrice: this.ordersDetail.totalPrice,
            product: this.ordersDetail.product,
            status: 'Chờ tiếp nhận',
            payments: this.ordersDetail.payments,
            customerId: this.ordersDetail.customerId,
            discount: this.ordersDetail.discount,
            shipperId: this.ordersDetail.shipperId,
            shipperName: this.ordersDetail.shipperName,
            storeId: this.ordersDetail.storeId
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
#order-heading {
    background-color: #edf4f7;
    position: relative;
    border-top-left-radius: 25px;
    max-width: 800px;
    padding-top: 20px;
    margin: 30px auto 0px
}

#order-heading .text-uppercase {
    font-size: 0.9rem;
    color: #777;
    font-weight: 600
}

#order-heading .h4 {
    font-weight: 600
}

#order-heading .h4+div p {
    font-size: 0.8rem;
    color: #777
}

.close {
    padding: 10px 15px;
    background-color: #777;
    border-radius: 50%;
    position: absolute;
    right: -15px;
    top: -20px
}

.wrapper {
    padding: 0px 50px 50px;
    max-width: 800px;
    margin: 0px auto 40px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px
}

.table th {
    border-top: none
}

.table thead tr.text-uppercase th {
    font-size: 0.8rem;
    padding-left: 0px;
    padding-right: 0px
}

.table tbody tr th,
.table tbody tr td {
    font-size: 0.9rem;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 5px
}

.table-responsive {
    height: 100px
}

.list div b {
    font-size: 0.8rem
}

.list .order-item {
    font-weight: 600;
    color: #6db3ec
}

.list:hover {
    background-color: #f4f4f4;
    cursor: pointer;
    border-radius: 5px
}

label {
    margin-bottom: 0;
    padding: 0;
    font-weight: 900
}

button.btn {
    font-size: 0.9rem;
    background-color: #66cdaa
}

button.btn:hover {
    background-color: #5cb99a
}

.price {
    color: #5cb99a;
    font-weight: 700
}

p.text-justify {
    font-size: 0.9rem;
    margin: 0
}

.row {
    margin: 0px
}

.subscriptions {
    border: 1px solid #ddd;
    border-left: 5px solid #ffa500;
    padding: 10px
}

.subscriptions div {
    font-size: 0.9rem
}
</style>