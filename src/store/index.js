import Vue from 'vue'
import Vuex from 'vuex'

import employee from './modules/employee'
import store from './modules/store'
Vue.use(Vuex)
const storeData={
    modules: {
        employee,
        store,
    }
}

const stores = new Vuex.Store(storeData)

export default stores