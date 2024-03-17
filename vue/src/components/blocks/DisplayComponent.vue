<template>
    <div>
        <div v-if="isHeader"
             class="displayHeader"
             :class="{redHeader: isRed, blueHeader: isBlue, yellowHeader: isYellow}"
             :style="{margin: getHeaderPosition}"
        >
        </div>
        <LineComponent :color="color"></LineComponent>
        <div class="display drop-chars"
            :class="{displayRed: isRed, displayBlue: isBlue, displayYellow: isYellow, displayWhite: isWhite}"
        >
            <slot></slot>
        </div>
        <LineComponent :color="color"></LineComponent>
        
    </div>
</template>

<script>

import LineComponent from "@/components/additional/LineComponent";

export default {
    name: 'DisplayComponent',
    components: {
        LineComponent
    },
    props: {
        isHeader: Boolean,
        headerPosition: String,
        color: String
    },
    computed: {
        getHeaderPosition() {
            return this.headerPosition ? this.headerPosition : 'auto'
        },
        isRed() {
            return this.color == 'red'
        },
        isYellow() {
            return this.color == 'yellow'
        },
        isBlue() {
            return this.color == 'blue'
        },
        isWhite() {
            return this.color == 'white'
        }
    }

}
</script>

<style scoped>
    .display {
        min-height: 200px;
        padding: 1px;
    }
    .displayRed {
        background: rgba(219, 36, 146, 0.06);
        /*background: linear-gradient(315deg, rgba(131, 82, 221, 0.1), rgba(239, 127, 212, 0.05));*/
    }
    .displayYellow {
        background: rgba(221, 182, 82, 0.11);
        /*background: linear-gradient(315deg, rgba(172, 147, 72, 0.11), rgba(239, 219, 121, 0.05));*/
    }
    .displayBlue {
        background: rgba(82, 189, 221, 0.05);
        /*background: linear-gradient(315deg, rgba(92, 72, 172, 0.11), rgba(121, 169, 239, 0.05));*/
    }
    .displayWhite {
        background: rgba(255, 255, 255, 0.05);
        /*background: linear-gradient(315deg, rgba(92, 72, 172, 0.11), rgba(121, 169, 239, 0.05));*/
    }
    .displayHeader {
        /*margin: auto;*/
        height: 0;
        width: 60%;
        /*border-bottom: 5px solid #ffc83d;*/
        opacity: 80%;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
    }
    .redHeader {
        border-bottom: 5px solid #E8615AFF;
    }
    .blueHeader {
        border-bottom: 5px solid #34a1cb;
    }
    .yellowHeader {
        border-bottom: 5px solid #d2ab34;
    }
</style>
