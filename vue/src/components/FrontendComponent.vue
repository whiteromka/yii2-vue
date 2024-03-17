<template>
    <div>
        <br>
        <div class="main-wrap">
            <br>
            <h1 class="cyber-h f-tektur mw-450">FRONTEND MAP</h1>
            <DisplayComponent class="grid-bg" :is-header="true" :color="'blue'">
                
                <div style="height: 8px"></div>
                <DefaultAlertComponent
                        :level="'warning'"
                        :message="`Курс разбит на разделы. В каждом разделе определенное количество тем. Они(темы) отображены кубиками. 1 кубик это
                         не 1 урок. Иногда за урок мы пройдем несколько тем, иногда несколько уроков понадобятся для освоения одной темы.`"
                ></DefaultAlertComponent>
                
                <LegendComponent></LegendComponent>
                <div v-for="(part) in developer" :key="part.name">
                    <br>
                    <div class="pre-course">
                        <h4>{{ part.name }}</h4>
                        <p>Краткое описание: <span v-html="part.descr"></span></p>
                        <p>Кол-во уроков: {{ part.lessons }}</p>
                    </div>
                    <div class="d-flex fw-w">
                        <div class="d-flex-item brackets-wrap cart-map cart-map-green"
                             v-for="(item, i) in part.courses" :key="i"
                             @mouseover="mouseoverCart(item)"
                             @mouseleave="mouseleaveCart(item)"
                        >
                            <div class="cart-map-additional">
                                <div class="ico-indicator">
                                    <SvgDifficultyComponent></SvgDifficultyComponent>
                                    <span>{{ item.difficulty }}</span>
                                </div>
                                <div class="ico-indicator">
                                    <SvgNeedComponent></SvgNeedComponent>
                                    <span>{{ item.need }}</span>
                                </div>
                                <div class="ico-indicator isFree" v-show="item.isFree">
                                    <SvgIsFreeComponent></SvgIsFreeComponent>
                                </div>
                            </div>
                            
                            <div class="bracket br-o2 bracket-tl-5"></div>
                            <div class="bracket br-o2 bracket-tr-5"></div>
                            <div class="bracket br-o2 bracket-bl-5"></div>
                            <div class="bracket br-o2 bracket-br-5"></div>
                            <br>
                            <h5>{{ item.name }}</h5>
    
                            <div class="cart-map-info" v-show="item.state">
                                <p>{{ item.desc }}</p>
                            </div>
                        </div>
                    </div>
                    <br>
                </div>
                
            </DisplayComponent>
            <br><br><br><br>
            
        </div>
    </div>
</template>

<script>
import DisplayComponent from "@/components/blocks/DisplayComponent";
import LegendComponent from "@/components/blocks/LegendComponent";
import {perc} from "@/components/data/dataBaseComponent";
import {frontend} from "@/components/data/dataCourseFront";
import SvgDifficultyComponent from "@/components/basic/SvgDifficultyComponent";
import SvgNeedComponent from "@/components/basic/SvgNeedComponent";
import SvgIsFreeComponent from "@/components/basic/SvgIsFreeComponent";
import DefaultAlertComponent from "@/components/blocks/DefaultAlertComponent";

export default {
  name: 'FrontendComponent',
    components: {
        DisplayComponent,
        LegendComponent,
        SvgDifficultyComponent,
        SvgNeedComponent,
        SvgIsFreeComponent,
        DefaultAlertComponent
    },
    data() {
        return {
            perc: perc,
            itemTextTimer: {
                t1: false,
                t2: false,
                t3: false,
                interval1: 0,
                interval2: 0,
                interval3: 0,
            },
            developer: frontend
        }
    },
    methods: {
        mouseoverCart(cart) {
            cart.state = true
        },
        mouseleaveCart(cart) {
            cart.state = false
        }
    }
}
</script>

<style scoped>

</style>
