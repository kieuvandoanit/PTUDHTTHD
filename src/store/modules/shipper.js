import axios from 'axios'
const shipper = {
    state: {
        shipper:[],
        shipperDetail: null
    },
    getters:{
        shippers: state => state.shipper,
        shipperDetail: state => state.shipperDetail
    },
    mutations:{
        SET_SHIPPERS(state, shippers){
            state.shipper = shippers
        },
        SET_SHIPPER_DETAIL(state, id){
            for(let i = 0; i< state.shipper.length; i++){
                if(state.shipper[i].Id === id){
                    state.shipperDetail = state.shipper[i];
                }
            }
        }
    },
    actions:{
        async getShipper({commit}){
            try{
                const response = await axios.get('http://localhost:52861/api/shipper');
                commit('SET_SHIPPERS', response.data)
            }catch(error){
                console.log(error)
            }
        },
        async getShipperDetail({commit}, id){
            commit('SET_SHIPPER_DETAIL',id);
        }
    }
}

export default shipper