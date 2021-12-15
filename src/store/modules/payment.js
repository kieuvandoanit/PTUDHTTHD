import axios from 'axios'
const payment = {
    state: {
        payments:[],
    },
    getters:{
        payments: state => state.payments,
       
    },
    mutations:{
        SET_PAYMENT(state, payments){
            state.payments = payments
        }
    },
    actions:{
        async getPayment({commit}){
            try{
                const response = await axios.get('https://localhost:44337/api/payment');
                console.log(response.data);
                commit('SET_PAYMENT', response.data)
            }catch(error){
                console.log(error)
            }
        }
    }
}

export default payment