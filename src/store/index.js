import Vue from 'vue'
import Vuex from 'vuex'

import employee from './modules/employee'
Vue.use(Vuex)
const storeData={
    modules: {
        employee,
    }
}

const store = new Vuex.Store(storeData)

export default store