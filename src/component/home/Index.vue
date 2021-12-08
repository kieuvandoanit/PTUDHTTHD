<template>
  <div id="home">
      <p>Đã vào</p>
      <!-- <p>{{numdept}}</p> -->
      <ul>
          <li v-for="employee in employees" :key="employee.id">
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
        ...mapGetters(['employees'])
    },
    methods:{
        ...mapActions(['getEmployee'])
    }
    

}
</script>

<style>

</style>