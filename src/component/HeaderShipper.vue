<template>
  <div id="header">
    <div id="logo" class="col-md-2">
      <a href="/" class="logo_link"
        ><b-icon icon="cart-plus-fill"></b-icon>R1</a>
    </div>
    <div id="menu" class="col-md-10">
      <ul>
        <li>
          <router-link tag="a" class="menu-link" to="/">Trang chủ</router-link>
        </li>
        <li>
          <router-link tag="a" class="menu-link" to="/shipper/order">Đơn hàng</router-link>
        </li>
        <li>
          <router-link tag="a" class="menu-link" to="/shipper/orderHistory">Lịch sử giao hàng</router-link>
        </li>
        <li>
          <router-link tag="a" class="menu-link" to="/login">Đăng xuất</router-link>
        </li>
        <!-- <li class="nav-item">
          <a class="btn btn-outline-primary mr-sm-2 btn-xs pull-right" href="/">
            <i class="fa fa-sign-in" aria-hidden="true"></i>
            Đăng nhập
          </a>
        </li>
        <li class="nav-item">
          <a class="btn btn-outline-success btn-xs pull-right" href="/register">
            <i class="fa fa-user-plus" aria-hidden="true"></i>
            Đăng ký
          </a>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
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