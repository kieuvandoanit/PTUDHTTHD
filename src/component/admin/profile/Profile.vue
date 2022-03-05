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
            <button type="button" class="btn btn-success" v-on:click="AddProfile">Thêm hồ sơ</button>
          </div>
          <div class="col-6">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Tìm kiếm sản phẩm">
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
                  <th scope="col">Giấy phép kinh doanh</th>
                  <th scope="col">Giấy chứng nhận an toàn thực phẩm</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
              <tr v-for="(profile, index) in profiles" :key="index">
                <th scope="row">{{index + 1}}</th>
                <td>{{profile.storeName}}</td>
                <td><img  v-bind:src="profile.businessLicense" style="width:230px;height:170px"></td>
                <td><img  v-bind:src="profile.foodSafetyCertificate" style="width:230px;height:170px"></td>
                <td>{{profile.isApproved}}</td>
                <td>
                    <button type="button" class="btn btn-primary" v-on:click="UpdateProfile(profile.id)">Sửa</button>
                    <button type="button" class="btn btn-danger" v-on:click="DeleteProfile(profile.id)">Xóa</button>
                    <button v-if="profile.isApproved == 'no'" type="button" class="btn btn-success" v-on:click="Approved(profile.id, profile.store_id)">Duyệt</button>
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
      profiles: [],
      errors: []

    }
  },
  created(){
    this.getProfileList();
  },
  methods:{
    getProfileList: function(){
       axios.get("http://localhost:6040/profile")
        .then(response =>{
          this.profiles = response.data
          console.log(this.profiles)
        })
        .catch(e =>{
          this.errors.push(e)
        })
    },
    AddProfile: function(){
      this.$router.push('profile/create')
    },
    DeleteProfile: function(profileID){
      axios.delete(`http://localhost:6040/deleteProfile/${profileID}`)
        .then(response =>{
          if(response.status === 200){
            this.$router.go(this.$router.currentRoute)
          }
        })
    },
    UpdateProfile: function(profileID){
      this.profiles.forEach(profile =>{
        if(profile.id === profileID){
          this.$router.push({
            name: 'UpdateProfile',
            params: {
              profile: profile
            }
          })
        }
      })
    },
    Approved: function(profileID, storeID){
      axios.put(`http://localhost:6040/updateProfile/${profileID}`,{isApproved: 'approved'})
      .then((res) => {
          if(res.data){
            axios.put(`http://localhost:8099/updateStore/${storeID}`,{isApproved: 'approved'})
            .then(response =>{
              if(response.data){
                this.profiles.filter(item => item.id == profileID)[0].isApproved = 'approved'
              }
            })
          }
        })
        .catch((error) =>{
          this.errors.push(error)
        })

    }
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
