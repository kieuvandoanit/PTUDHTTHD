import Vue from 'vue'
import Vuex from 'vuex'

import employee from './modules/employee'
import store from './modules/store'
import order from './modules/order'
import payment from './modules/payment'
import cart from './modules/cart'
Vue.use(Vuex)
const storeData={
    modules: {
        employee,
        store,
        order, 
        payment,
        cart
    }
}

const stores = new Vuex.Store(storeData)

export default stores