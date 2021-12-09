import axios from 'axios'
const store = {
    state: {
        stores:[],
    },
    getters:{
        stores: state => state.stores
       
    },
    mutations:{
        SET_STORES(state, stores){
            state.stores = stores
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
        }
    }
}

export default store