<template>
  <div id="header">
    <div id="logo" class="col-md-2">
      <a href="/" class="logo_link"
        ><b-icon icon="cart-plus-fill"></b-icon>R1</a>
    </div>
    <div id="menu" class="col-md-8">
      <ul>
        <li>
          <router-link tag="a" class="menu-link" to="/store/product">Trang chủ</router-link>
        </li>
        <li>
          <router-link tag="a" class="menu-link" to="/store/product">Sản phẩm</router-link>
        </li>
        <li>
          <router-link tag="a" class="menu-link" to="/store/order">Đơn hàng</router-link>
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

};
</script>

<style>
#header {
  padding: 10px 0px;
  display: flex;
  background-color: #cad3f2;
  margin:15px 0;
}
#logo > a {
  font-size: 25px;
  font-weight: 700;
  color: #1589e7;
}
#menu > ul {
  display: flex;
  list-style: none;
  justify-content: space-around;
  margin: 7px 125px;
}
#menu > ul > li > a {
  font-size: 17px;
}
a {
  text-decoration: none;
}
</style>