<template>
  <div class="container">
    <Header />
    <div class="row">
      <div class="col-3 sidebar">
        <Sidebar />
      </div>
      <div class="col-9 body">
        <div class="row header-body">
          <div class="col-6"></div>
          <div class="col-6">
            <div>
              <select
                class="form-control"
                :required="true"
                v-model="time"
                @change="changeLocation"
              >
                <option
                  v-for="(option, index) in options"
                  :key="index"
                  v-bind:value="option.id"
                >
                  {{ option.name }}
                </option>
              </select>
              <div class="input-group-append"></div>
            </div>
          </div>
        </div>
        <div class="row content-body">
          <table class="table table-striped" v-if="this.time == 1">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Thời gian</th>
                <th scope="col">Số lượng</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(product, index) in statistical" :key="index">
                <td scope="row">{{ index + 1 }}</td>
                <td>{{ product.ProductName }}</td>
                <td>{{ product.Year }}</td>
                <td>{{ product.Quantity }}</td>
              </tr>
              </tbody>

          </table>
          <table class="table table-striped" v-if="this.time == 2">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Thời gian</th>
                <th scope="col">Số lượng</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in statistical" :key="index">
                <td scope="row">{{ index + 1 }}</td>
                <td>{{ product.ProductName }}</td>
                <td>{{product.Month+"/"+product.Year}}</td>
                <td>{{ product.Quantity }}</td>
              </tr>
              </tbody>
          </table>
          <table class="table table-striped" v-if="this.time == 3">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Thời gian</th>
                <th scope="col">Số lượng</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in statistical" :key="index">
                <td scope="row">{{ index + 1 }}</td>
                <td>{{ product.ProductName }}</td>
                <td>{{"Quý-"+product.Quater+"/"+product.Year}}</td>
                <td>{{ product.Quantity }}</td>
              </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../partials/header";
import Sidebar from "../partials/sidebar";

export default {
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      time: 1,
      options: [
        {
          id: 1,
          name: "Năm",
        },
        {
          id: 3,
          name: "Quý",
        },
        {
          id: 2,
          name: "Tháng",
        },
      ],
      Orders: [],
      statistical: [],
    };
  },
  created() {
    axios.get("http://localhost:36028/api/Order").then((response) => {
      this.Orders = response.data;
      this.changeLocation();
    });
  },
  methods: {
    changeLocation: function () {
      console.log(this.time)
        axios.get(`http://localhost:36028/api/Order/topStatisticalProduct?option=${this.time}`)
          .then((response) => {
              this.statistical = response.data;
              //console.log(this.statistical);
        });
        console.log(this.statistical);
    },
  },
};
</script>

