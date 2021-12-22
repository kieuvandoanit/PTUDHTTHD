import axios from 'axios';

const order = {
    state: {
        orders:[],
        order_detail:0,
    },
    getters:{
        orders: state => state.orders,
        ordersDetail: state => state.order_detail,
    },
    mutations:{
        SET_ORDERS(state, orders){
            state.orders = orders
        },
        SET_ORDER_DETAIL(state, id){
            for(let i = 0; i< state.orders.length; i++){
                if(state.orders[i].id === id){
                    state.order_detail = state.orders[i]
                }
            }
        }
    },
    actions:{
        async getOrder({commit}){
            try{
                const response = await axios.get('http://localhost:52861/api/order');
                commit('SET_ORDERS', response.data)
            }catch(error){
                console.log(error)
            }
        },
        async getOrderDetail({commit},id){
            try{
                commit('SET_ORDER_DETAIL', id)
            }catch(error){
                console.log(error);
            }
        }
    }
}

export default order