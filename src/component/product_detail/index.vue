<template>
  <div class="container">
    <Header />
    <div class="row">
      <div class="col-3 sidebar">
        <Sidebar />
      </div>
      <div class="col-9 body">
        <form
          class="needs-validation cus-form"
          v-on:submit.prevent="submitForm"
        >
          <h1>Thông tin nguồn gốc sản phẩm</h1>
          <div class="form-group item-input">
            <label for="name">Tên sản phẩm*</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Nhập tên sản phẩm"
              disabled
              v-model="form.name"
            />
          </div>
          <div class="form-group item-input">
            <label for="unit">Tên nhà chung ứng*</label>
            <input
              type="text"
              class="form-control"
              id="unit"
              placeholder="Nhập đơn giá"
              disabled
              v-model="form.supplier"
            />
          </div>
          <div class="form-group item-input">
            <label for="desc" class="form-label">Hình ảnh</label>
            <div>
              <img
                v-bind:src="form.image"
                class="img-fluid"
                alt="Responsive image"
              />
            </div>
          </div>
          <div class="form-group item-input">
            <label for="desc" class="form-label">Mô tả sản phẩm</label>
            <textarea
              class="form-control"
              id="desc"
              rows="3"
              v-model="form.desc"
              disabled
              name="desc"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "../admin/partials/header.vue";
import Sidebar from "../admin/partials/sidebar.vue";
import axios from "axios";
export default {
  name: "ProductDetail",
  data() {
    return {
      errors: [],
      form: {
        name: "",
        price: "",
        numberInventory: "",
        unit: "",
        desc: "",
        image: "",
        supplier: "",
        storeID: "",
      },
    };
  },
  components: {
    Header,
    Sidebar,
  },
  created() {
    this.product = this.$route.params.product;

    axios
      .get(`http://localhost:6040/products/${this.product.id}`)
      .then((response) => {
        this.form.name = response.data.name;
        this.form.numberInventory = response.data.numberInventory;
        this.form.price = response.data.price;
        this.form.unit = response.data.unit;
        this.form.desc = response.data.desc;
        this.form.image = response.data.image;
        this.form.supplier = response.data.supplier;
        this.form.storeID = response.data.storeID;
      });
  },
  methods: {
    ...mapActions(["getProductById"]),
  },
};
</script>

<style scoped>
.custom-body {
  border: solid 1px black;
  height: 150px;
  width: 450px;
}
.row {
  margin-left: 20px;
}
</style>
