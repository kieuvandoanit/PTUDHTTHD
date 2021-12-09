<template>
<div class="store_page">
    <Header/>
    <table class="store">
    <thead>
        <tr>
        <th class="col-md-1">Store ID</th>
        <th class="col-md-4">Name</th>
        <th class="col-md-5">Address</th>
        <th class="col-md">Phone number</th>
        </tr>
    </thead>
    <tbody>
        <Store
            v-for="store in stores"
            :key="store.store_id"
            v-bind:store="store"
            />
    </tbody>
    </table>
</div>

</template>

<script>
import{mapActions, mapGetters} from 'vuex';
import Header from '../Header.vue'
import Store from './store.vue';
export default {
    components:{
        Store,
        Header
    },
    created(){
        this.getStore()
    },
    computed:{...mapGetters(['stores'])},
    methods:{...mapActions(['getStore'])},
}
</script>

<style scoped>
    .store{
        width: 100%;
    }
</style>