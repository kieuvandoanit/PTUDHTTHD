<template>
  <div id="Payment">
      <Header/>
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
                <h4>Billing Address</h4>
                <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                <input type="text" id="fname" name="fullname" placeholder="John M. Doe" v-model="fullname">
                <label for="email"><i class="fa fa-envelope"></i> Email</label>
                <input type="text" id="email" name="email" placeholder="john@example.com" v-model="email">
                <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" v-model="address">
                <label for="city"><i class="fa fa-institution"></i> City</label>
                <input type="text" id="city" name="city" placeholder="New York" v-model="city">

                <div class="row">
                  <div class="col-50">
                    <label for="state">State</label>
                    <input type="text" id="state" name="state" placeholder="NY" v-model="state">
                  </div>
                  <div class="col-50">
                    <label for="zip">Zip</label>
                    <input type="number" id="zip" name="zip" placeholder="10001" v-model="zip">
                  </div>
                </div>
              </div>

              <div class="col-50">
                <h4>Payment</h4>
                <label for="fname">Accepted Cards</label>
                <div class="icon-container">
                  <i class="fa fa-cc-visa" style="color:navy;"></i>
                  <i class="fa fa-cc-amex" style="color:blue;"></i>
                  <i class="fa fa-cc-mastercard" style="color:red;"></i>
                  <i class="fa fa-cc-discover" style="color:orange;"></i>
                </div>
                <label for="cname">Name on Card</label>
                <input type="text" id="cname" name="cardname" placeholder="John More Doe" v-model="cardname">
                <label for="ccnum">Credit card number</label>
                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" v-model="cardnumber">
                <label for="expmonth">Exp Month</label>
                <input type="text" id="expmonth" name="expmonth" placeholder="September" v-model="expmonth">
                <div class="row">
                  <div class="col-50">
                    <label for="expyear">Exp Year</label>
                    <input type="text" id="expyear" name="expyear" placeholder="2018" v-model="expyear">
                  </div>
                  <div class="col-50">
                    <label for="cvv">CVC Number</label>
                    <input type="number" id="cvv" name="cvc" placeholder="333" v-model="cvc">
                  </div>
                </div>
              </div>
              
            </div>
            
            <input type="submit" value="Submit" class="btn">
          </form>
        </div>
      </div>
  <div class="col-25">
    <div class="container">
      <h4>Cart <span class="price" style="color:black"><i class="fa fa-shopping-cart"></i> <b></b></span></h4>
      <p><a href="#">Product 1</a> <span class="price">$15</span></p>
      <p><a href="#">Product 2</a> <span class="price">$5</span></p>
      <p><a href="#">Product 3</a> <span class="price">$8</span></p>
      <p><a href="#">Product 4</a> <span class="price">$2</span></p>
      <hr>
      <p>Total <span class="price" style="color:black"><b>$30</b></span></p>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import axios from 'axios'
import Header from '../Header.vue'
export default {
    name: "Payment",
    components:{
        Header,

    },
    created(){
        this.getPayment()
    },
    computed:{
        ...mapGetters(['payments'])
    },
    data:function(){
      return {
        fullname:"",
        email:"",
        address:"",
        city:"",
        state:"",
        zip:"",
        cardname:"",
        cardnumber:"",
        expmonth:"",
        expyear:"",
        cvc:""
      }
    },
    methods:{
        ...mapActions(['getPayment']),
        submitPayment(e){
          e.preventDefault();
          
        axios.post('https://localhost:44337/api/payment/add',{
           "fullname": this.fullname,
           "email":this.email,
           "address":this.address,
           "city":this.city,
           "state":this.state,
           "zip":this.zip,
           "cardname":this.cardname,
           "cardnumber":this.cardnumber,
           "expmonth":this.expmonth,
           "expyear":this.expyear,
           "cvc":this.cvc
        })
        .then(function(res){
                alert(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
      }
    },
    
}
</script>

<style scoped>
body {
  font-family: Arial;
  font-size: 17px;
  padding: 8px;
}

h4{
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

input[type=text] {
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
  background-color: #04AA6D;
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
  color: #2196F3;
}

hr {
  border: 1px solid lightgrey;
}

span.price {
  float: right;
  color: grey;
}

</style>