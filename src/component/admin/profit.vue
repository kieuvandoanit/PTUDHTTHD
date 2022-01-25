<template>
  <div class="container">
    <Header/>
    <div class="row">
      <div class="col-3 sidebar">
        <Sidebar/>
      </div>
      <div class="col-9 body">
        <div class="row header-body">
          <div class="col-12">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Tìm kiếm Cửa hàng">
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">Tìm kiếm</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row content-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên cửa hàng</th>
                <th scope="col">Tổng hoa hồng</th>
              </tr>
            </thead>
           <tbody>
              <tr v-for="(profit, index) in profitListShow" :key="index">
                <th scope="row">{{index + 1}}</th>
                <td>{{profit.storeName}}</td>
                <td>{{profit.profit}} VNĐ</td>
              </tr>
              <tr>
                <th scope="row">Tổng:</th>
                <td></td>
                <td>{{totalProfit}} VNĐ</td>
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
import Header from './partials/header';
import Sidebar from './partials/sidebar';

export default {
  components: {
    Header,
    Sidebar
  },
  data () {
    return {
      profitListShow: [],
      errors: [],
      totalProfit: 0
    }
  },
  created(){
    axios.get("http://localhost:8099/orders")
    .then(response =>{
      this.stores = response.data
      let storeIdList = []
      let profitList = []
      this.stores.forEach((item, index) =>{
          if(storeIdList.indexOf(item.storeId) === -1){
              storeIdList.push(item.storeId)
          }
          if(index === this.stores.length - 1){
              storeIdList.forEach((storeID, indexStore) =>{
                  let sum = 0;
                  let OrderListByStore = this.stores.filter(store => store.storeId == storeID)
                  OrderListByStore.forEach((profitItem, subIndex) => {
                      sum += profitItem.totalPrice*0.05
                      if(subIndex === OrderListByStore.length - 1){
                          this.totalProfit += sum
                          profitList.push({
                              storeID: storeID,
                              profit: sum
                          })
                      }
                  })
                if(indexStore === storeIdList.length - 1){
                    axios.get("http://localhost:8099/stores")
                    .then(res =>{
                        let storesList = res.data;
                        profitList.forEach((profitStore, indexProfit) =>{
                            let storeByProfit = storesList.filter(store => store.id === profitStore.storeID)
                            if(storeByProfit.length > 0){
                                profitList[indexProfit].storeName = storeByProfit[0].name;
                            }
                            if(indexProfit === profitList.length - 1){
                                this.profitListShow = profitList
                            }
                        })
                    })
                 }
              })
          }
      })
    })
    .catch(e =>{
      this.errors.push(e)
    })
  },
  methods:{
  }
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
