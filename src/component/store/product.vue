<template>
    <div class="card" style="width: 18rem; margin-left: 40px; margin-bottom: 30px;">
        <img class="card-img-top" :src="product.image" alt="Card image cap" style="height: 300px;">
        <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <h5 class="card-title">Giá tiền: {{product.price}} VNĐ</h5>
            <p class="card-text" style="height: 55px">{{product.desc}}</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
    props:{
        product:{
            type:Object,
            default: null
        }
    }
}
</script>

<style>

</style>