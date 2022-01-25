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
                <th scope="col">Tổng khách hàng</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(countUser, index) in Users" :key="index">
                <th scope="row">{{index + 1}}</th>
                <td>{{countUser.District.district}}</td>
                <td>{{countUser.District.province}}</td>
                <td>{{countUser.Count}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h1>Biểu đồ</h1>
          <column-chart :data="columChart"></column-chart>
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
      Users: [],
      columChart:[],
      errors: []
    }
  },
  created(){
    axios.get("http://localhost:36028/api/User")
    .then(response =>{
      this.Users = response.data;
      let ArrUsers= this.Users;
      for(let i=0;i<ArrUsers.length;i++){
        let Arr=[];
        let term ="Quận: " + ArrUsers[i].District.district + "-" + ArrUsers[i].District.province;
        Arr.push(term);
        Arr.push(ArrUsers[i].Count);
        this.columChart.push(Arr);
      }
    })
    .catch(e =>{
      this.errors.push(e)
    })
  },

}
</script>
