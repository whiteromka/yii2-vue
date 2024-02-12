<template>
    <div class="dottedLine" :style="{borderWidth: correctHeight, margin: correctMargin}"></div>
</template>

<script>
export default {
    name: 'PinkLineDottedComponent',
    props: {
        height: String,
        margin: String
    },
    computed: {
        correctHeight() {
            return this.height ? this.height : '2px'
        },
        correctMargin() {
            let marginHorizontal = this.margin ? this.margin : '0px'
            return '0px ' + marginHorizontal
        }
    }
}
</script>

<style scoped>
    .dottedLine {
        height: 0px;
        border-color: #E8615AFF;
        border-style: dotted;

        -webkit-box-shadow: 0px 1px 9px 1px rgba(255, 206, 249, 0.3);
        -moz-box-shadow: 0px 1px 9px 1px rgba(255, 206, 249, 0.3);
        box-shadow: 0px 1px 9px 1px rgba(255, 206, 249, 0.3);
    }
</style>
