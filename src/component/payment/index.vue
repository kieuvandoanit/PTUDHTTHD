<template>
  <div id="Payment">
    <Header />
    <!-- <ul>
          <li v-for="payment in payments" 
            :key="payment.PaymentId">
              <p>Thanh toan: {{payment.PaymentMethod}}</p>
          </li>
      </ul> -->
    <div class="row">
      <div class="col-75">
        <div class="container">
          <form class="needs-validation" v-on:submit="submitPayment">
            <div class="row">
              <div class="col-50">
                <h4>Thông tin giao hàng</h4>
                <label for="fullname"
                  ><i class="fa fa-user"></i>Họ và tên</label
                >
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="John M. Doe"
                  v-model="fullname"
                />
                <label for="phoneNumber"
                  ><i class="fa fa-phone-card-o"></i> Số điện thoai</label
                >
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="012345678"
                  v-model="phoneNumber"
                />
                <label for="email"><i class="fa fa-envelope"></i> Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  v-model="email"
                />
 
                <div class="row">
                  <div class="col-50">
                    <label for="home_number">Số nhà</label>
                    <input type="number" id="home_number" name="home_number" placeholder="542" v-model="address.home_number">
                  </div>
                  <div class="col-50">
                    <label for="street">Tên đường</label>
                    <input type="text" id="street" name="street" placeholder="Nguyễn Tất Thành" v-model="address.street">
                  </div>
                  <div class="col-50">
                    <label for="ward">Phường</label>
                    <input type="text" id="ward" name="ward" placeholder="Phường" v-model="address.ward">
                  </div>
                  <div class="col-50">
                    <label for="district">Quận</label>
                    <input type="text" id="district" name="district" placeholder="Quận" v-model="address.district">
                  </div>
                  <div class="col-50">
                    <label for="province">Tỉnh/ Thành phố</label>
                    <input type="text" id="province" name="province" placeholder="Tỉnh/Thành phố" v-model="address.province">
                  </div>
                </div>
              </div>

              <div class="col-50">
                <h4>Thanh toán</h4>
                <label for="paymentMethod">Chọn hình thức thanh toán</label>
                <button
                  type="submit"
                  v-on:click="changeMethod()"
                  value="Submit"
                >
                  Online
                </button>
                <button
                  type="submit"
                  v-on:click="changeMethod()"
                  value="Submit"
                >
                  Offline
                </button>
                <!-- <select class="col-50" name="paymentMethod" id="paymentMethod">
                  <option @click="online" value="Trực tuyến">Trực tuyến</option>
                  <option value="Trực tiếp">Trực tiếp</option>
                </select> -->
                <div v-if="this.paymentMethod === 'online'">
                  <label for="bankName">Tên Ngân Hàng</label>
                  <select class="col-50" name="bankName" id="bankName">
                    <option value="Agribank">Agribank</option>
                    <option value="Saccombank">Saccombank</option>
                    <option value="TP Bank">TP Bank</option>
                    <option value="Vietcombank">Vietcombank</option>
                  </select>

                  <label for="nameOnCard">Tên chủ tài khoản</label>
                  <input
                    type="text"
                    id="nameOnCard"
                    name="nameOnCard"
                    placeholder="John More Doe"
                    v-model="paymentOnline.nameOnCard"
                  />
                  <label for="creditCardNumber">Số tài khoản</label>
                  <input
                    type="text"
                    id="creditCardNumber"
                    name="creditCardNumber"
                    placeholder="1111-2222-3333-4444"
                    v-model="paymentOnline.creditCardNumber"
                  />
                  <!-- <label for="expMonth">Tháng hết hạn</label>
                  <input type="text" id="expMonth" name="expMonth" placeholder="September" v-model="expMonth"> -->
                  <div class="row">
                    <div class="col-50">
                      <label for="expYear">Năm hết hạn</label>
                      <input
                        type="text"
                        id="expYear"
                        name="expYear"
                        placeholder="2018"
                        v-model="paymentOnline.expYear"
                      />
                    </div>
                    <div class="col-50">
                      <label for="cvcNumber">CVC Number</label>
                      <input
                        type="number"
                        id="cvcNumber"
                        name="cvcNumber"
                        placeholder="333"
                        v-model="paymentOnline.cvcNumber"
                      />
                    </div>
                  </div>
                </div>
                <div v-if="this.paymentMethod === 'offline'">Bạn đã chọn thanh toán trực tiếp!</div>
              </div>
            </div>

            <input type="submit" value="Submit" class="btn" />
          </form>
        </div>
      </div>
      <div class="col-25">
        <div class="container">
          <h4>
            Cart
            <span class="price" style="color: black"
              ><i class="fa fa-shopping-cart"></i> <b></b
            ></span>
          </h4>
          <p>
            <a href="#">{{ this.product[0].productName }}</a>
            <span class="price">{{ this.product[0].price }}</span>
          </p>
          <p>
            <a href="#">{{ this.product[1].productName }}</a>
            <span class="price">{{ this.product[1].price }}</span>
          </p>
          <hr />
          <p>
            Total
            <span class="price" style="color: black"><b>100.000 VNĐ</b></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import Header from "../Header.vue";
export default {
  name: "Payment",
  components: {
    Header,
  },
  created() {
    this.getPayment();
  },
  computed: {
    ...mapGetters(["Payments"]),
  },
  data: function () {
    return {
      paymentMethod: "online",
      online: false,
      offline: false,
      orderDate: "",
      payments: "",
      paymentOnline: {
        bankName: "",
        nameOnCard: "",
        creditCardNumber: "",
        expYear: "",
        cvcNumber: "",
      },
      fullname: "",
      phoneNumber: "",
      email: "",
      address: {
        province: "",
        district: "",
        ward: "",
        street: "",
        home_number: "",
      },
      product: [
            {
              productName: "Cà rốt",
              price: "25.000",
              unit: "kg",
              quantity: "2",
              productImage: "",
            },
            {
              productName: "Khoai lang Nhật",
              price: "25.000",
              unit: "kg",
              quantity: "2",
              productImage: "",
            },
          ],
      discount: "",
      totalPrice: "100000",
      customerId: "",
      status: "",
      shipperId: "",
      shipperName: "",
      storeId: "",
      _class: "",
    };
  },
  methods: {
    changeMethod(){
      if(this.paymentMethod === "online"){
        this.paymentMethod = "offline"
      }else{
        this.paymentMethod = "online"
      }
    },
    ...mapActions(["getPayment"]),
    submitPayment(e) {
      e.preventDefault();
      axios.post("https://localhost:44337/api/payment/add", {
          "orderDate": this.paymentMethod,
          "payments": this.paymentMethod,
          "paymentOnline": {
            "bankName": this.bankName,
            "nameOnCard": this.nameOnCard,
            "creditCardNumber": this.creditCardNumber,
            "expYear": this.expYear,
            "cvcNumber": this.cvcNumber,
          },
          "fullname": this.fullname,
          "phoneNumber": this.phoneNumber,
          "email": this.email,
          "address": {
            "province": this.province,
            "district": this.district,
            "ward": this.ward,
            "street": this.street,
            "home_number": this.home_number,
          },
          "product": [
            {
              "productName": "Cà rốt",
              "price": "25.000",
              "unit": "kg",
              "quantity": "2",
              "productImage": "",
            },
            {
              "productName": "Khoai lang Nhật",
              "price": "25.000",
              "unit": "kg",
              "quantity": "2",
              "productImage": "",
            },
          ],
          "discount": "",
          "totalPrice": "80000",
          "customerId": "",
          "status": "",
          "shipperId": "",
          "shipperName": "",
          "storeId": "",
          "_class": "",
        })
        .then(function (res) {
          alert(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial;
  font-size: 17px;
  padding: 8px;
}
button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
}

h4 {
  text-align: center;
}
* {
  box-sizing: border-box;
}

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
}

input[type="text"] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}

.btn {
  background-color: #4caf50;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}

.btn:hover {
  background-color: #45a049;
}

a {
  color: #2196f3;
}

hr {
  border: 1px solid lightgrey;
}

span.price {
  float: right;
  color: grey;
}
</style>