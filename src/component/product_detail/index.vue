<template>
    <!-- <div class="container custom-body">
      <div class="row">
        <p><b> Tên sản phẩm:</b> {{product.name}}</p>
        <p><b> Giá sản phẩm:</b> {{product.price}} vnđ</p>
        <p><b> Mô tả:</b> {{product.desc}}</p>
        <p><b> Số lượng tồn kho:</b> {{product.numberInventory}} {{product.unit}}</p>
      </div>
    </div> -->
<form class="needs-validation cus-form" v-on:submit.prevent="submitForm">
  <Header/>
          <h1>Thông tin sản phẩm</h1>
          <div class="form-group item-input">
              <label for="name">Tên sản phẩm*</label>
              <input type="text" class="form-control" id="name" placeholder="Nhập tên sản phẩm" disabled v-model="form.name">
          </div>
          <div class="form-group item-input">
            <label for="price">Đơn giá*</label>
            <input type="number" class="form-control" id="price" placeholder="Nhập đơn giá" disabled v-model="form.price">
          </div>
           <div class="form-group item-input">
            <label for="numberInventory">Số lượng*</label>
            <input type="number" class="form-control" id="numberInventory" placeholder="Nhập đơn giá" disabled v-model="form.numberInventory">
          </div>
          <div class="form-group item-input">
            <label for="unit">Đơn vị*</label>
            <input type="text" class="form-control" id="unit" placeholder="Nhập đơn giá" disabled v-model="form.unit">
          </div>
          <div class="form-group item-input">
            <label for="desc" class="form-label">Mô tả sản phẩm</label>
            <textarea class="form-control" id="desc" rows="3" v-model="form.desc" disabled name="desc"></textarea>
          </div>
        </form>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Header from '../Header.vue'
import axios from 'axios'
export default {
    name: "ProductDetail",
    data () {
    return {
      errors: [],
      form: {
        name: '',
        price: '',
        numberInventory: '',
        unit: '',
        desc: ''
      }
    }
  },
  components:{
        Header
    },
    created(){
      let product_id = this.$route.params.id;
      // this.getProductById(product_id)
    axios.get(`http://localhost:6040/products/${product_id}`).then(response=>{
        this.form.name=response.data.name;
        this.form.numberInventory=response.data.numberInventory;
        this.form.price=response.data.price;
        this.form.unit=response.data.unit;
        this.form.desc=response.data.desc;
    })
    },
    // computed:{
    //     ...mapGetters(['product'])
    // },
    methods:{
        ...mapActions(['getProductById'])
    },


}
</script>

<style scoped>
  .custom-body {
    border: solid 1px black;
    height: 150px;
    width: 450px;
  }
  .row{
        margin-left: 20px;
  }
</style>
