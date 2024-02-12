<template>
    <div class="line"
         :style="{
        height: getHeight,
        background: getBgColor,
        boxShadow: getBoxShadow,
        marginLeft: getMargin,
        marginRight: getMargin
    }"></div>
</template>

<script>
export default {
    name: 'LineComponent',
    props: {
        height: String,
        color: String,
        margin: String
    },
    computed: {
        getHeight() {
            return this.height ? this.height : '2px'
        },
        getBgColor() {
            let color = this.color ? this.color : 'blue';
            if (color == 'red') {
                return '#E8615AFF'
            } else if (color == 'yellow') {
                return '#c49f2c'
            } else if (color == 'white') {
                return '#d7d5d2'
            } else {
                return '#34a1cb'
            }
        },
        getBoxShadow() {
            let color = this.color ? this.color : 'blue';
            if (color == 'red') {
                return '0px 1px 9px 1px rgba(255, 206, 249, 0.3)'
            } else if (color == 'yellow') {
                return '0px 1px 9px 1px rgba(231, 225, 44, 0.3)'
            } else if (color == 'white') {
                return '0px 0px 9px 1px rgba(88, 190, 226, 0.3)'
            } else {
                return '0px 0px 9px 1px rgba(88, 190, 226, 0.3)'
            }
        },
        getMargin() {
            return this.margin ? this.margin : '0px'
        }
    }
}
</script>
<style scoped>

</style>
