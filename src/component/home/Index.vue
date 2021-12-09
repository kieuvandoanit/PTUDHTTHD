<template>
  <div id="home">
      <p>Đã vào</p>
      <p>{{employees_num}}</p>
      <ul>
          <li v-for="employee in employees" 
            :key="employee.id">
              <p>Xin chào: {{employee.first_name}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: "Home",
    created(){
        this.getEmployee()
    },
    computed:{
        ...mapGetters(['employees', 'employees_num'])
    },
    methods:{
        ...mapActions(['getEmployee'])
    }
    

}
</script>

<style scoped>

</style>