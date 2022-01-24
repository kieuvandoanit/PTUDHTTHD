<template>
  <div id="header">
      <div id="logo" class="col-md-2">
          <a href="#" class="logo_link">R01</a>
      </div>
      <div id="menu" class="col-md-10">
          <ul>
            <li>
                <router-link tag="a" class="menu-link" to="/">Trang chủ</router-link>
                </li>
            <li>
                <router-link tag="a" class="menu-link" to="/storepage">Cửa hàng</router-link>
                </li>
            <li>
                <router-link tag="a" class="menu-link" to="/user/Order">Đơn hàng</router-link>
                </li>
            <li>
                <router-link tag="a" class="menu-link" to="/user/cart">Giỏ hàng</router-link>
                </li>
            <li>
                <router-link tag="a" class="menu-link" to="/login">Đăng xuất</router-link>
                </li>
              
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#header{
        padding: 10px 0px;
        display: flex;
        background-color: beige;
    }
    #logo>a{
        font-size: 25px;
        font-weight: 700;
        color: #6c2d2d;
    }
    #menu>ul{
        display: flex;
        list-style: none;
        justify-content: space-around;
        margin: 7px 125px;
        
    }
    #menu>ul>li>a{
        font-size: 17px;
    }
    a{
        text-decoration: none;
    }
    li{
        margin: 0px 20px;
    }
</style>