import axios from 'axios'
const payment = {
    state: {
        Payments:[],
    },
    getters:{
        Payments: state => state.Payments,
       
    },
    mutations:{
        SET_PAYMENT(state, Payments){
            state.Payments = Payments
        }
    },
    actions:{
        async getPayment({commit}){
            try{
                const response = await axios.get('https://localhost:44337/api/payment');
                console.log(response.data);
                commit('SET_PAYMENT', response.data);
            }catch(error){
                console.log(error)
            }
        },
        async addPayment({commit}){
            try{
                const response = await axios.get('https://localhost:44337/api/payment/add');
                console.log(response.data);
                commit('SET_PAYMENT', response.data);
            }catch(error){
                console.log(error)
            }
        },
        // async getDay(){
        //     const d = new Date();
        //     let day = d.getDate();
        //     return day;
        // }
    }
}

export default payment