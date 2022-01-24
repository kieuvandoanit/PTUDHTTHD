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
                <th scope="col">Thời gian</th>
                <th scope="col">Doanh Thu</th>
              </tr>
            </thead>
            <tbody v-if="this.time === 3">
              <StatisticalByMonth
                v-for="(item, index) in statisticalByMonth"
                :key="index"
                v-bind:item="item"
                v-bind:index="index"
              />
            </tbody>
            <tbody v-else-if="this.time === 2">
              <StatisticalByQuarter
                v-for="(item, index) in statisticalByQuater"
                :key="index"
                v-bind:item="item"
                v-bind:index="index"
              />
            </tbody>
            <tbody v-else>
              <StatisticalByYear
                v-for="(item, index) in statisticalByYear"
                :key="index"
                v-bind:item="item"
                v-bind:index="index"
              />
            </tbody>
          </table>
        </div>
        <div>
          <h1>Biểu đồ</h1>
          <!-- <line-chart :data="lineChart"></line-chart> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../partials/header";
import Sidebar from "../partials/sidebar";
import StatisticalByMonth from "./statisticalByMonth.vue";
import StatisticalByQuarter from "./statisticalByQuarter.vue";
import StatisticalByYear from "./statisticalByYear.vue";

export default {
  components: {
    Header,
    Sidebar,
    StatisticalByMonth,
    StatisticalByQuarter,
    StatisticalByYear
  },
  data() {
    return {
      time: 3,
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
      statisticalByMonth: [],
      statisticalByYear: [],
      statisticalByQuater: [],
      lineChart:{}
    };
  },
  created() {
    this.store = this.$route.params.store;
    axios.get("http://localhost:6040/Order").then((response) => {
      this.Orders = response.data;
      this.changeLocation();
    });
  },
  methods: {
    changeLocation: function () {
      let listOrder = [];
      listOrder = this.Orders.filter((item) => item.storeId === this.store.id);
      if (this.time == 1) {
        this.StatisticalYear(listOrder);
      }
      if (this.time == 3) {
        this.StatistcalMonth(listOrder);
      }
      if (this.time == 2) {
        this.statisticalQuater(listOrder);
      }
      // for(let i=0;i<listOrder.length;i++){
      //   let Arr=[];
      //   let term = ArrTopProducts[i].Product ;
      //   Arr.push(term);
      //   Arr.push(ArrTopProducts[i].Quantity);
      //   this.columChart.push(Arr);
      // }
    },
    StatisticalYear(listOrder){
      if (this.statisticalByYear.length > 0) {
      }
      else {
        let listyears = [];
      listOrder.forEach((year, index) => {
          if (
            listyears.indexOf(new Date(year.orderDate).getFullYear()) === -1
          ) {
            listyears.push(new Date(year.orderDate).getFullYear());
          }
          if (index === listOrder.length - 1) {
            listyears.forEach((yearEl, indexYear) => {
              let storeByYear = [];
              let totalByStore = 0;
              storeByYear = listOrder.filter(
                (item) =>
                  new Date(item.orderDate).getFullYear() === yearEl &&
                  item.storeId === this.store.id
              );
              storeByYear.forEach((record, subIndex) => {
                totalByStore += record.totalPrice;
                if (subIndex === storeByYear.length - 1) {
                  this.statisticalByYear.push({
                    storeId: this.store.id,
                    time: yearEl,
                    totalPrice: totalByStore,
                  });
                }
              });
            });
          }
        });
      }

    },
    StatistcalMonth(listOrder) {
      if (this.statisticalByMonth.length > 0) {
      }
      else {
        let Listyears = [];
        listOrder.forEach((year, index) => {
          if (
            Listyears.indexOf(new Date(year.orderDate).getFullYear()) === -1
          ) {
            Listyears.push(new Date(year.orderDate).getFullYear());
          }
        });
        let Listmonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        let storeByMonth = [];
        let MonthOfYear = [];
        for (var i = 0; i < Listyears.length; i++) {
          MonthOfYear = listOrder.filter(
            (item) => new Date(item.orderDate).getFullYear() === Listyears[i]
          );
          for (var j = 1; j <= Listmonths.length; j++) {
            let totalByStore = 0;
            storeByMonth = MonthOfYear.filter(
              (item) =>
                new Date(item.orderDate).getMonth() + 1 === Listmonths[j - 1]
            );
            totalByStore = this.totalPrice(storeByMonth);
            this.statisticalByMonth.push({
              storeId: this.store.id,
              year: Listyears[i],
              month: Listmonths[j - 1],
              time: Listmonths[j - 1] + "/" + Listyears[i],
              totalPrice: totalByStore,
            });
          }
        }
      }
    },
    statisticalQuater(listOrder) {
      if (this.statisticalByQuater.length > 0) {
      }
      else {
        if (this.statisticalByMonth.length > 0) {
        let Listyears =[];
        let lsQuater1=[];
        let lsQuater2=[];
        let lsQuater3=[];
        let lsQuater4=[];
        listOrder.forEach((year, index) => {
          if (
            Listyears.indexOf(new Date(year.orderDate).getFullYear()) === -1
          ) {
            Listyears.push(new Date(year.orderDate).getFullYear());
          }
        })
        for (var i = 0; i < Listyears.length; i++) {
            lsQuater1 = this.statisticalByMonth.filter(
              (item) => item.year === Listyears[i] && (item.month == 1 || item.month == 2 || item.month==3)
            );
            lsQuater2 = this.statisticalByMonth.filter(
              (item) => item.year === Listyears[i] && (item.month == 4 || item.month == 5 || item.month==6)
            )
            lsQuater3 = this.statisticalByMonth.filter(
              (item) => item.year === Listyears[i] && (item.month == 7 || item.month == 8 || item.month==9)
            )
            lsQuater4 = this.statisticalByMonth.filter(
              (item) => item.year === Listyears[i] && (item.month == 10 || item.month == 11 || item.month==12)
            )
          }
        for(let i=0;i<Listyears.length; i++){
          this.totalQuater(lsQuater1,Listyears[i],1);
          this.totalQuater(lsQuater2,Listyears[i],2);
          this.totalQuater(lsQuater3,Listyears[i],3);
          this.totalQuater(lsQuater4,Listyears[i],4);
          }
        console.log( this.statisticalByQuater);
      }
      }

    },
    totalQuater(list, lsYear, num){
      let quaterOfYear= list.filter(item => item.year == lsYear)
          let total = this.totalPrice(quaterOfYear)
          this.statisticalByQuater.push({
            storeId: this.store.id,
            time: "Quý "+num + "-" + lsYear,
            totalPrice: total
          })
    },
    totalPrice(list) {
      let totalPrice = 0;
      for (let i = 0; i < list.length; i++) {
        totalPrice += list[i].totalPrice;
      }
      return totalPrice;
    },
  }
};
</script>
