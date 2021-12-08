import axios from 'axios'
const employee = {
    stage: {
        employees:[],
    },
    getters:{
        employees: stage => stage.employees,
       
    },
    mutations:{
        SET_EMPLOYEES(stage, employees){
            stage.employees = employees
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