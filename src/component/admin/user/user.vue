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
              <input type="text" class="form-control" placeholder="Tìm kiếm tài khoản">
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">Tìm kiếm</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row content-body" style="height: 708px;overflow-y: scroll;">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Địa chỉ</th>
                <th scope="col">Vai trò</th>
              </tr>
            </thead>
           <tbody>
              <tr v-for="(user, index) in users" :key="index">
                <th scope="row">{{index + 1}}</th>
                <td>{{user.name}}</td>
                <td>{{user.phone}}</td>
                <td>{{user.home_number}} {{user.street}} P.{{user.ward}} Q.{{user.district}} {{user.province}}</td>
                <td v-if="user.role == 1">
                    Khách hàng
                </td>
                <td v-if="user.role == 2">
                    Cửa hàng
                </td>
                <td v-if="user.role == 3">
                    Shipper
                </td>
                <td v-if="user.role == 4">
                   Admin
                </td>
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
      users: [],
      errors: []
    }
  },
  created(){
    axios.get("https://localhost:44331/api/user")
    .then(response =>{
      this.users = response.data
      console.log(this.users)
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
