<template>
  <div class="container">
    <Header/>
    <div class="row">
      <div class="col-3 sidebar">
        <Sidebar/>
      </div>
      <div class="col-9 body">
        <div class="row header-body">
          <div class="col-6">
          </div>
          <div class="col-6">
            <div class="input-group mb-3">
              <div class="input-group-append">
              </div>
            </div>
          </div>
        </div>
        <div class="row content-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên quận</th>
                <th scope="col">Tên tỉnh</th>
                <th scope="col">Tổng Cửa hàng</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(countStore, index) in Stores" :key="index">
                <th scope="row">{{index + 1}}</th>
                <td>{{countStore.District.district}}</td>
                <td>{{countStore.District.province}}</td>
                <td>{{countStore.Count}}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <h1>Biểu đồ</h1>
            <column-chart :data="columChart"></column-chart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import axios from 'axios';
import Header from '../partials/header';
import Sidebar from '../partials/sidebar';

export default {
  components: {
    Header,
    Sidebar
  },
  data () {
    return {
      Stores: [],
      columChart:[],
      errors: []
    }
  },
  created(){
    axios.get("http://localhost:36028/api/Store")
    .then(response =>{
      this.Stores = response.data;
      let ArrStores= this.Stores;
      for(let i=0;i<ArrStores.length;i++){
        let Arr=[];
        let term ="Quận: " + ArrStores[i].District.district + "-" + ArrStores[i].District.province;
        Arr.push(term);
        Arr.push(ArrStores[i].Count);
        this.columChart.push(Arr);
      }
    })
    .catch(e =>{
      this.errors.push(e)
    })
  },

}
</script>
