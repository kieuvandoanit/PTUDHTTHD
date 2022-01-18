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
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Mã cửa hàng</th>
                <th scope="col">Doanh Thu</th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr v-for="(countshipper, index) in shippers" :key="index">
                <th scope="row">{{ index + 1 }}</th>
                <td></td>
                <td></td>
              </tr> -->
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
          id: 2,
          name: "Quý",
        },
        {
          id: 3,
          name: "Tháng",
        },
      ],
      Orders: [],
      TotalStoreStore: [],
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
      if (this.time == 1) {
        let listyears = [];
        this.Orders.forEach((year, index) => {
          if (listyears.indexOf(new Date(year.orderDate).getFullYear()) === -1) {
            listyears.push(new Date(year.orderDate).getFullYear());
          }
          if(index === this.Orders.length - 1){
              listyears.forEach((yearEl, indexYear)=>{
                let storeByYear=[];
                let totalByStore = 0;
                storeByYear = this.Orders.filter(item => new Date(item.orderDate).getFullYear() === yearEl && item.storeId === "1");
                storeByYear.forEach((record, subIndex) =>{
                    totalByStore += record.totalPrice;
                    if(subIndex === storeByYear.length - 1){
                      this.TotalStoreStore.push({
                        storeId: '1',
                        time: yearEl,
                        total: totalByStore,
                      })
                    }
                })
                if(indexYear === listyears.length - 1){
                  console.log(this.TotalStoreStore)
                }
            })
          }
        });
      }
    },
  },
};
</script>
