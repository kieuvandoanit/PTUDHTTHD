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
                <th scope="col">Tổng shipper</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(countshipper, index) in shippers" :key="index">
                <th scope="row">{{index + 1}}</th>
                <td>{{countshipper.District.district}}</td>
                <td>{{countshipper.District.province}}</td>
                <td>{{countshipper.Count}}</td>
              </tr>
            </tbody>
          </table>
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
      shippers: [],
      errors: []
    }
  },
  created(){
    axios.get("http://localhost:36028/api/Shipper")
    .then(response =>{
      this.shippers = response.data;
      console.log(this.shippers);
    })
    .catch(e =>{
      this.errors.push(e)
    })
  },

}
</script>

<style scoped>
  .sidebar{
    height: 800px;
    background-color: #DCDCDC;
  }
  .header-body{
    margin: 15px 0;
  }
  .content-body{
    margin: 5px 0;
  }
  .content-center{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
