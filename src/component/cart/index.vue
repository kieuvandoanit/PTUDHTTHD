<template>
  <div id="cart">
      <HeaderUser/>
      <h2>Chi tiết giỏ hàng</h2>
      <div class="container"> 
      <table id="cart" class="table table-hover table-condensed"> 
        <thead> 
        <tr> 
          <th style="width:50%">Tên sản phẩm</th> 
          <th style="width:10%">Giá</th> 
          <th style="width:8%">Số lượng</th> 
          <th style="width:22%" class="text-center">Thành tiền</th> 
        </tr> 
        </thead> 
        <tbody><tr> 
        <td data-th="Product"> 
          <div class="row"> 
          <div class="col-sm-3 hidden-xs"><img src="http://hocwebgiare.com/thiet_ke_web_chuan_demo/shopping_cart/images/090.jpg" alt="Sản phẩm 1" class="img-responsive" width="100">
          </div> 
          <div class="col-sm-9"> 
            <h4 class="nomargin">Sản phẩm 1</h4> 
            <p>Mô tả của sản phẩm 1</p> 
          </div> 
          </div> 
        </td> 
        <td data-th="Price">200.000 đ</td> 
        <td data-th="Quantity"><input class="form-control text-center" value="1" type="number">
        </td> 
        <td data-th="Subtotal" class="text-center">200.000 đ</td> 
        </tr> 
        <tr> 
        <td data-th="Product"> 
          <div class="row"> 
          <div class="col-sm-3 hidden-xs"><img src="http://hocwebgiare.com/thiet_ke_web_chuan_demo/shopping_cart/images/174.jpg" alt="Sản phẩm 1" class="img-responsive" width="100">
          </div> 
          <div class="col-sm-9"> 
            <h4 class="nomargin">Sản phẩm 2</h4> 
            <p>Mô tả của sản phẩm 2</p> 
          </div> 
          </div> 
        </td> 
        <td data-th="Price">300.000 đ</td> 
        <td data-th="Quantity"><input class="form-control text-center" value="1" type="number">
        </td> 
        <td data-th="Subtotal" class="text-center">300.000 đ</td> 
        </tr> 
        </tbody><tfoot> 
        <tr> 
          <td><a href="http://hocwebgiare.com/" class="btn btn-warning"><i class="fa fa-angle-left"></i> Tiếp tục mua hàng</a>
          </td> 
          <td><a href="http://hocwebgiare.com/" class="btn btn-success"><i class="fa fa-angle-left"></i> Cập nhật giỏ hàng</a>
          </td>
          <td colspan="1" class="hidden-xs"> </td> 
          <td class="hidden-xs text-center"><strong>Tổng tiền 500.000 đ</strong>
          </td> 
          <td><router-link to="/payment" class="btn btn-success btn-block">Thanh toán <i class="fa fa-angle-right"></i></router-link>
          </td> 
        </tr> 
        </tfoot> 
      </table>
      </div>
  </div>
</template>

<script>
import HeaderUser from "../Header_user.vue"
export default {
  components: {
    HeaderUser,
  }
}
</script>


<style type="text/css" scoped>
  
@media screen and (max-width: 600px) { 
table#cart tbody td .form-control { 
width:20%; 
display: inline !important;
} 
 
.actions .btn { 
width:36%; 
margin:1.5em 0;
} 
 
.actions .btn-info { 
float:left;
} 
 
.actions .btn-danger { 
float:right;
} 
 
table#cart thead {
display: none;
} 
 
table#cart tbody td {
display: block;
padding: .6rem;
min-width:320px;
} 
 
table#cart tbody tr td:first-child {
background: #333;
color: #fff;
} 
 
table#cart tbody td:before { 
content: attr(data-th);
font-weight: bold; 
display: inline-block;
width: 8rem;
} 
 
table#cart tfoot td {
display:block;
} 
table#cart tfoot td .btn {
display:block;
}
.hidden-xs{
  width: 100%;
  overflow: hidden;
}
}
</style>
