<template>
    <div>
        <br>
        <div class="main-wrap">
            <br>
            <h1 class="cyber-h f-tektur mw-450">FAQ </h1>
            <div>
                <div style="margin: auto">
                    <DisplayComponent
                            class="mb-90 brackets-wrap-no-active"
                            :is-header="true"
                            :color="'blue'"
                    >
                        <br>
                        <CustomAlertComponent
                            :text="`Ребят, пишите свои вопросы мне в Telegram`"
                        ></CustomAlertComponent>
                        
                        
                        <div style="margin: auto; max-width: 1280px">
                            <DisplayComponent
                                    class="mb-90 brackets-wrap-no-active"
                                    :is-header="false"
                                    :color="'yellow'"
                            >
                                    <div class="bracket bracket-tl" style="top: 7px"></div>
                                    <div class="bracket bracket-tr" style="top: 7px"></div>
                                    <div class="bracket bracket-bl" style="bottom: 2px"></div>
                                    <div class="bracket bracket-br" style="bottom: 2px"></div>
                                    <div class="faq-wrap">
                                        <div class="faq-item" v-for="(item, i) in hello.faq" :key="i">
                                            <p class="question">
                                                <span>Q: </span>
                                                <span v-html="item.q"></span>
                                            </p>
                                            <p class="answer">
                                                <span>A: </span>
                                                <span v-html="item.a"></span>
                                            </p>
                                        </div>
                                    </div>
                            </DisplayComponent>
                        </div>
                        
                    </DisplayComponent>
                </div>
            </div>
            <br><br><br><br>
            
        </div>
    </div>
</template>

<script>

import DisplayComponent from "@/components/blocks/DisplayComponent";
import {hello} from "@/components/data/dataBaseComponent";
import CustomAlertComponent from "@/components/blocks/CustomAlertComponent";

export default {
  name: 'FaqComponent',
    components: {
        DisplayComponent,
        CustomAlertComponent
    },
    data() {
        return {
            hello: hello
        }
    }
}
</script>

<style scoped>

</style>
