<template>
    <div class="line"></div>
</template>

<script>
export default {
    name: 'PinkLineComponent'
}
</script>

<style scoped>
    .line {
        height: 2px;
        background: #E8615AFF;
        /*-webkit-box-shadow: 0px 0px 6px 2px rgba(255, 206, 249, 0.2);*/
        /*-moz-box-shadow: 0px 0px 6px 2px rgba(255, 206, 249, 0.2);*/
        box-shadow: 0px 0px 9px 1px rgba(255, 206, 249, 0.3);
    }
</style>
