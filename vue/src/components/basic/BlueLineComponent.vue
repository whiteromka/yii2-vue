<template>
    <div class="line" :style="{height: correctHeight}"></div>
</template>

<script>
export default {
    name: 'BlueLineComponent',
    props: {
        height: String
    },
    computed: {
        correctHeight() {
            return this.height ? this.height : '2px'
        }
    }
}
</script>

<style scoped>
    .line {
        background: #34a1cb;
        /*-webkit-box-shadow: 0px 0px 6px 2px rgba(255, 206, 249, 0.2);*/
        /*-moz-box-shadow: 0px 0px 6px 2px rgba(255, 206, 249, 0.2);*/
        box-shadow: 0px 0px 9px 1px rgba(88,190, 226, 0.3);
    }
</style>
