import axios from 'axios';

const order = {
    state: {
        orders:[],
        orderSum: [],
        order_detail:0,
        orderUser:[],
        orderUserDetail: 0,
        orderShipper: [],
        orderStore: []
    },
    getters:{
        orders: state => state.orders,
        ordersDetail: state => state.order_detail,
        orderUser: state => state.orderUser,
        orderUserDetail: state => state.orderUserDetail,
        orderShipper: state => state.orderShipper,
        orderStore: state => state.orderStore,
    },
    mutations:{
        SET_ORDERS(state, orders){
            state.orders = orders;
            state.orderSum = orders;
        },
        SET_ORDER_DETAIL(state, id){
            for(let i = 0; i< state.orderSum.length; i++){
                if(state.orderSum[i].id === id){
                    state.order_detail = state.orderSum[i]
                }
            }
        },
        SET_ORDER_USER_DETAIL(state, id){
            for(let i = 0; i< state.orderUser.length; i++){
                if(state.orderUser[i].id === id){
                    state.orderUserDetail = state.orderUser[i]
                }
            }
        },
        SET_ORDER_FILTER(state, status){
            state.orders = [];
            for(let i = 0; i< state.orderSum.length; i++){
                if(state.orderSum[i].status === status){
                    state.orders.push(state.orderSum[i]);
                }
            }
            if(status == "All"){
                state.orders = state.orderSum;
            }
        },
        SET_ORDER_USER(state, order){
            state.orderUser = order;
        },
        SET_ORDER_SHIPPER(state, order){
            state.orderShipper = order;
        },
        SET_ORDER_STORE(state, order){
            state.orderStore = order;
        }
    },
    actions:{
        async getOrder({commit}){
            try{
                //const response = await axios.get('http://localhost:52861/api/order');
                 const response = await axios.get('http://localhost:52861/api/order');
                commit('SET_ORDERS', response.data)
            }catch(error){
                console.log(error)
            }
        },
        async getOrderByStoreID({commit},storeID){
            try{
                //const response = await axios.get('http://localhost:52861/api/order');
                 const response = await axios.get(`http://localhost:52861/api/orderShipper/storeID/${storeID}`);
                commit('SET_ORDER_STORE', response.data)
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
        },
        async getOrderUserDetail({commit},id){
            try{
                commit('SET_ORDER_USER_DETAIL', id)
            }catch(error){
                console.log(error);
            }
        },
        async filterOrder({commit}, status){
            try{
                commit('SET_ORDER_FILTER', status);
            }catch(error){
                console.log(error);
            }
        },
        async getOrderByUser({commit}, userID){
            try{
                const response = await axios.get(`http://localhost:6039/order/user/${userID}`);

                commit('SET_ORDER_USER', response.data);
            }catch(error){
                console.log(error)
            }
        },
        async getOrderByShipper({commit}, shipperID){
            try{
                const response = await axios.get(`http://localhost:52861/api/ordershipper/${shipperID}`);

                commit('SET_ORDER_SHIPPER', response.data);
            }catch(error){
                console.log(error)
            }
        }
    }
}

export default order