<template>
    <div class="dottedLine2" :style="{borderWidth: getHeight, margin: getMargin, borderStyle: getBorderStyle}"></div>
</template>

<script>
export default {
    name: 'BlueLineDottedComponent',
    props: {
        height: String,
        margin: String,
        borderStyle: String
    },
    computed: {
        getHeight() {
            return this.height ? this.height : '2px'
        },
        getMargin() {
            let marginHorizontal = this.margin ? this.margin : '0px'
            return '0px ' + marginHorizontal
        },
        getBorderStyle() {
            return this.borderStyle ? this.borderStyle : 'dotted'
        }
    }

}
</script>

<style scoped>
    .dottedLine2 {
        height: 0px;
        background: #34a1cb;
        /*border: 2px dotted #E8615AFF;*/
        /*border-style: dashed;*/

        /*-webkit-box-shadow: 0px 0px 6px 2px rgba(255, 206, 249, 0.2);*/
        /*-moz-box-shadow: 0px 0px 6px 2px rgba(255, 206, 249, 0.2);*/
        box-shadow: 0px 0px 9px 1px rgba(88,190, 226, 0.3);
    }
</style>
