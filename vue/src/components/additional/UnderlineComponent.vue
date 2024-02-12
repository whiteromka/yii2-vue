<template>
    <div>
        <div class="line"
             :style="{height: getHeight, background: getBgColor, boxShadow: getBoxShadow}"
        >
        </div>
        <div class="underlineBlock" :style="{borderBottom: getBorderBottom}"></div>
    </div>
</template>

<script>
export default {
    name: 'UnderlineComponent',
    props: {
        height: String,
        color: String
    },
    computed: {
        getHeight() {
            return this.height ? this.height : '2px'
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
        getBorderBottom() {
            let color = this.color ? this.color : 'blue';
            if (color == 'red') {
                return '5px solid #E8615AFF'
            } else {
                return '5px solid #34a1cb'
            }
        }
    }
}
</script>
<style scoped>
    .line {
        margin-left: 0;
        min-width: 280px;
        width: 18%;
    }
    .underlineBlock {
        /*margin: auto;*/
        height: 0;
        width: 10%;
        min-width: 220px;
        /*border-bottom: 5px solid #ffc83d;*/
        opacity: 90%;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        transform: scaleY(-1);
    }
</style>
