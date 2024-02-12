<template>
    <div class="container-fluid main-wrap">
        <div>
            
            <!--    0.1 course        -->
            <div class="d-flex">
                <div class="d-flex-item p-10">
                    <h1 class="f-tektur">0.1 <span>COURSE</span></h1>
                    <StyledLineComponent :color="'red'"></StyledLineComponent>
                </div>
            </div>

            <br>
            <StyledLineComponent :color="'blue'"></StyledLineComponent>
            <br>

            <!--   block courses        -->
            <DisplayComponent :is-header="true" :color="'blue'">
                <br>
                <br>
                <div class="container">
                    
                    <div class="d-flex jc-sa ai-c fw-w">
                        <div class="d-flex-item b-1_">
                            <DisplayComponent :is-header="false" :color="'blue'">
                                <div class="displayItem">
                                    <h1>FULLSTACK</h1>
<!--                                    <StyledLineComponent :color="'blue'"></StyledLineComponent>-->
                                    <p class="label f-tektur">Developer</p>
                                    <p>PHP, Yii2 </p>
                                </div>
                            </DisplayComponent>
                        </div>
                        <div class="d-flex-item b-1_">
                            <DisplayComponent :is-header="false" :color="'blue'">
                                <div class="displayItem">
                                    <h1>FRONTEND</h1>
<!--                                    <PinkLineDottedComponent :height="'1px'"></PinkLineDottedComponent>-->
                                    <h6>developer</h6>
                                    <p>VueJs</p>
                                </div>
                            </DisplayComponent>
                        </div>
                        <div class="d-flex-item b-1_">
                            <DisplayComponent :is-header="false" :color="'blue'">
                                <div class="displayItem">
                                    <h1>GAME</h1>
<!--                                    <BlueLineDottedComponent :height="'1px'"></BlueLineDottedComponent>-->
                                    <h6>developer</h6>
                                </div>
                            </DisplayComponent>
                        </div>
                    </div>
                </div>
                <br>
                <br>
                <br>
            </DisplayComponent>
            
            <br> <br>
            <DisplayComponent :is-header="false" :color="'red'">
                <p>2222</p>
            </DisplayComponent>
            
            
            <br> <br>
            <h1 class="cyber-h"> f dgf hbgfhfg</h1>
            <br> <br>
            <div class="d11"></div>
            <br> <br>
            <div class="d9"></div>
            <br> <br>
        </div>
    </div>
</template>

<script>

import DisplayComponent from "@/components/blocks/DisplayComponent";
import LineComponent from "@/components/additional/LineComponent";
import StyledLineComponent from "@/components/additional/StyledLineComponent";
import UnderlineComponent from "@/components/additional/UnderlineComponent";
import PinkLineDottedComponent from "@/components/basic/PinkLineDottedComponent";
import BlueLineDottedComponent from "@/components/basic/BlueLineDottedComponent";

export default {
    name: 'BaseComponent',
    components: {
        DisplayComponent,
        LineComponent,
        StyledLineComponent,
        UnderlineComponent,
        PinkLineDottedComponent,
        BlueLineDottedComponent
    },
    props: {
        message: String
    }
}
</script>

<style scoped>
    .main-wrap {
        padding-top: 40px;
    }
    h1 {
        color: #a5a5a5;
        font-size: 60px;
        /*opacity: 0.4;*/
    }


</style>
