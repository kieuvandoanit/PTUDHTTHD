<template>
<div class="container">
    <Header/>
    <div class="d-flex justify-content-center row">
        <div class="col-md-12">
            <div class="rounded">
                <div class="table-responsive table-borderless">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Store #</th>
                                <th>Store name</th>
                                <th>Status</th>
                                <th>Address</th>
                                <th>Phone number</th>
                            </tr>
                        </thead>
                        <tbody class="table-body">
                            <Store
                                v-for="store in stores"
                                :key="store.store_id"
                                v-bind:store="store"
                            />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
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
    .cell-1 {
    border-collapse: separate;
    border-spacing: 0 4em;
    background: #fff;
    border-bottom: 5px solid transparent;
    background-clip: padding-box
}

thead {
    background: #dddcdc
}

.toggle-btn {
    width: 40px;
    height: 21px;
    background: grey;
    border-radius: 50px;
    padding: 3px;
    cursor: pointer;
    -webkit-transition: all 0.3s 0.1s ease-in-out;
    -moz-transition: all 0.3s 0.1s ease-in-out;
    -o-transition: all 0.3s 0.1s ease-in-out;
    transition: all 0.3s 0.1s ease-in-out
}

.toggle-btn>.inner-circle {
    width: 15px;
    height: 15px;
    background: #fff;
    border-radius: 50%;
    -webkit-transition: all 0.3s 0.1s ease-in-out;
    -moz-transition: all 0.3s 0.1s ease-in-out;
    -o-transition: all 0.3s 0.1s ease-in-out;
    transition: all 0.3s 0.1s ease-in-out
}

.toggle-btn.active {
    background: blue !important
}

.toggle-btn.active>.inner-circle {
    margin-left: 19px
}
</style>