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
                <th scope="col">Tên Sản Phẩm</th>
                <th scope="col">Số lượng</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(topProduct, index) in TopProducts" :key="index">
                <th scope="row">{{index + 1}}</th>
                <td>{{topProduct.Product}}</td>
                <td>{{topProduct.Quantity}}</td>
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
      TopProducts: [],
      columChart:[],
      errors: []
    }
  },
  created(){
    axios.get("http://localhost:36028/api/Order/topProduct")
    .then(response =>{
      this.TopProducts = response.data;
      //console.log(this.TopProducts)
      let ArrTopProducts= this.TopProducts;
      for(let i=0;i<ArrTopProducts.length;i++){
        let Arr=[];
        let term = ArrTopProducts[i].Product ;
        Arr.push(term);
        Arr.push(ArrTopProducts[i].Quantity);
        this.columChart.push(Arr);
      }
    })
    .catch(e =>{
      this.errors.push(e)
    })
  },

}
</script>
