import axios from 'axios'
const store = {
    state: {
        stores:[],
        product:[]
    },
    getters:{
        stores: state => state.stores,
        productInStore: state => state.product
       
    },
    mutations:{
        SET_STORES(state, stores){
            state.stores = stores
        },
        SET_PRODUCT(state, products){
            state.product = products
        }
    },
    actions:{
        async getStore({commit}){
            try{
                const response = await axios.get('https://localhost:44340/api/store');
                commit('SET_STORES', response.data)
            }catch(error){
                console.log(error)
            }
        },
        async getProduct({commit}, storeID){
            try{
                const response = await axios.get(`https://localhost:44331/api/product?storeID=${storeID}`);
                commit('SET_PRODUCT', response.data)
            }catch(error){
                console.log(error)
            }
        }
    }
}

export default store