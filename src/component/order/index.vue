<template>
  <div id="list_order">
      <Header/>
      <table class="order">
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
        <br>
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
    created(){
        this.getOrder()
    },
    computed:{
        ...mapGetters(['orders'])
    },
    methods:{
        ...mapActions(['getOrder'])
    }

}
</script>

<style scoped>
.order{
    width: 100%;
}
</style>