<template>
    <div class="styledLine"
         :style="{
        borderWidth: getHeight,
        background: getBgColor,
        boxShadow: getBoxShadow,
        marginLeft: getMargin, marginRight: getMargin,
        borderStyle: getBorderStyle
    }"></div>
</template>

<script>
export default {
    name: 'StyledLineComponent',
    props: {
        height: String,
        color: String,
        margin: String,
        borderStyle: String
    },
    computed: {
        getHeight() {
            return this.height ? this.height : '1px'
        },
        getBgColor() {
            let color = this.color ? this.color : 'blue';
            if (color == 'red') {
                return '#E8615AFF'
            } else {
                return '#34a1cb'
            }
        },
        getBoxShadow() {
            let color = this.color ? this.color : 'blue';
            if (color == 'red') {
                return '0px 1px 9px 1px rgba(255, 206, 249, 0.3)'
            } else {
                return '0px 0px 9px 1px rgba(88, 190, 226, 0.3)'
            }
        },
        getMargin() {
            return this.margin ? this.margin : '0px'
        },
        getBorderStyle() {
            return this.borderStyle ? this.borderStyle : 'dotted'
        }
    }
}
</script>
<style scoped>
    .styledLine {
        height: 0px;
    }
</style>
