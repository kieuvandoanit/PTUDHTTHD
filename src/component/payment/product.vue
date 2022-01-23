<template>
    <p>
        <bold href="#">{{ this.product.productName }}</bold>
        <span class="price">{{ this.product.productPrice }} VNĐ</span>
    </p>
</template>

<script>
export default {
    props:{
        product:{
            type: Object,
            default: 0
        }
    }
}
</script>

<style scoped>
    p{
        display: flex;
        justify-content: space-between;
    }
</style>