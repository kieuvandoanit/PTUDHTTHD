import axios from 'axios'
const employee = {
    state: {
        employees:[],
    },
    getters:{
        employees: state => state.employees,
        employees_num: state => state.employees.length
       
    },
    mutations:{
        SET_EMPLOYEES(state, employees){
            state.employees = employees
        }
    },
    actions:{
        async getEmployee({commit}){
            try{
                const response = await axios.get('https://reqres.in/api/users?page=2');
                console.log(response.data.data);
                commit('SET_EMPLOYEES', response.data.data)
            }catch(error){
                console.log(error)
            }
        }
    }
}

export default employee