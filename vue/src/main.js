import Vue from  '../node_modules/vue/dist/vue.common'
import BaseComponent from "@/components/BaseComponent"
import FullstackComponent from "@/components/FullstackComponent";
import FrontendComponent from "@/components/FrontendComponent";
import GamedevComponent from "@/components/GamedevComponent";
import FaqComponent from "@/components/FaqComponent";

window.Vue = Vue;
window.Vue.component('base-component', BaseComponent)
window.Vue.component('fullstack-component', FullstackComponent)
window.Vue.component('frontend-component', FrontendComponent)
window.Vue.component('gamedev-component', GamedevComponent)
window.Vue.component('faq-component', FaqComponent)
