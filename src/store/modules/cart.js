import axios from 'axios'
const cart = {
    state: {
        cart:null,
    },
    getters:{
        cart: state => state.cart
       
    },
    mutations:{
        SET_CART(state, cart){
            state.cart = cart
        },
        UPDATE_CART(state, data){
            let productID = data.productID;
            let number = data.quantity;
            
            for(let i = 0; i < state.cart.product.length; i++){
                if(state.cart.product[i].productID === productID){
                    if(number < 1){
                        state.cart.product.splice(i, 1);
                    }else{
                        state.cart.product[i].quantity = number;
                    }
                }
            }
            let sum = 0;
            for(let j = 0; j < state.cart.product.length; j++){
                sum = sum + state.cart.product[j].quantity * state.cart.product[j].productPrice;
            }
            
            state.cart.totalPrice = sum;
        }
    },
    actions:{
        async getCart({commit}, userID){
            try{
                const response = await axios.get(`http://localhost:52861/api/cart/${userID}`);
                commit('SET_CART', response.data)
            }catch(error){
                console.log(error)
            }
        },
        async updateCart({commit}, data){
            commit('UPDATE_CART', data);
        }
    }
}

export default cart