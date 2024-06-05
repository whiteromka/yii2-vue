<template>
    <div>
        <div class="main-wrap">
            <br>
            <CustomAlertComponent
                :header="`САЙТ НАХОДИТСЯ В РАЗРАБОТКЕ`"
                :text="`Данный сайт находится в разработке, ведутся технические работы! Что-то может отображаться не верно или не работать, это норм!`"
            ></CustomAlertComponent>
            
            <div style="height: 150px; display: flex; flex-direction: column-reverse">
                <div class="footer-wrap-marquee animation-marque-grow-block">
                    <h1 class="cyber-h"> 0.0 ABOUT </h1>
                    <marquee class="marquee-show animation-marque-show animation-marque-bad-work_ fade-animation_">
                        {{ hello.marquee }}
                    </marquee>
                </div>
            </div>
            
            <DisplayComponent class="mb-90" :is-header="true" :color="'yellow'">
                <br>
                <div class="jc-c fw-w">
                    <div class="row">
                        <div class="mb-30 col-md-4 col-xl-3">
                            <DisplayComponent :is-header="false" :color="'yellow'">
                                <div style="height: 100%">
                                    <div class="brackets-wrap"
                                         @mouseover="mouseoverMyPhoto()"
                                         @mouseleave="mouseleaveMyPhoto()"
                                    >
                                        <div class="bracket bracket-tl"></div>
                                        <div class="bracket bracket-tr"></div>
                                        <div class="bracket bracket-bl"></div>
                                        <div class="bracket bracket-br"></div>
                                        <div class="photo-info" v-show="hello.myData.active">
                                            <h4 class="rom-txt0"> {{ hello.myData.name }} </h4>
                                            <StyledLineComponent
                                                    :height="'1px'"
                                                    :color="'blue'"
                                                    :borderStyle="'dotted'"
                                                    :margin="'40px'"
                                            ></StyledLineComponent>
                                            <br>
                                            <p class="rom-txt1" v-html="hello.myData.txt1">  </p>
                                            <p class="rom-txt2" v-html="hello.myData.txt2"></p>
                                            <p class="rom-txt3" v-html="hello.myData.txt3"></p>
                                        </div>
                                        <div class="vertical-label box-border-ani teacher-label"> Teacher </div>
                                        <div class="myPhoto-wrap">
<!--                                            <div class="vertical-label box-border-ani"> Teacher </div>-->
                                            <img :src="hello.pic" class="img-fluid cyber-glitch-0_ myPhoto" :alt="hello.myData.name">
                                        </div>
                                    </div>
                                    <span class="perc-btn-roman" @click="toggleMyPhoto()">Roman</span>
                                    <div class="console-content d-none d-md-block d-lg-block d-xl-none">
                                        <br>
                                        <h4 style="padding-left: 10px">ЧТО НУЖНО</h4>
                                        <ul>
                                            <li v-for="(item, i) in hello.need" :key="i"> {{ item }} </li>
                                        </ul>
                                    </div>
                                </div>
                            </DisplayComponent>
                        </div>

                        <div class="mb-30 col-md-8 col-xl-9">
                            <DisplayComponent :is-header="false" :color="'blue'">
                                <div class="p-10 console-content">
                                    <div class="row">
                                        <div class="col-md-12 col-xl-8">
                                            <h4>О СЕБЕ</h4>
                                            <p>{{ hello.txt1 }}</p>
                                            <h4>О КУРСАХ</h4>
                                            <p>{{ hello.txt2 }}</p>
                                            <p>{{ hello.txt3 }}</p>

<!--                                            <figure>-->
<!--                                                <audio controls src="/media/cc0-audio/t-rex-roar.mp3"></audio>-->
<!--                                            </figure>-->
                                            
                                        </div>
                                        <div class="col-md-12 col-xl-4 d-md-none d-lg-none d-xl-block">
                                            <h4>ЧТО НУЖНО ДЛЯ КУРСОВ</h4>
                                            <ul>
                                                <li v-for="(item, i) in hello.need" :key="i"> {{ item }} </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </DisplayComponent>
                        </div>
                    </div>
                </div>
                <br>
                <br>
            </DisplayComponent>
            
            
            <!--  1.0 COURSES  -->
            <h1 class="cyber-h mw-450 f-tektur">1.0 COURSES</h1>
            <DisplayComponent class="grid-bg_ mb-90" :is-header="true" :color="'blue'">
                <br>
                <div class="jc-c fw-w">
                    <div class="row">
                        <div class="mb-30 col-md-6 col-xl-3" v-for="item in perc" :key="item.title">
                            <DisplayComponent :is-header="false" :color="'blue'">
                                <div>
                                    <div class="brackets-wrap"
                                         @mouseover="mouseoverPerc(item.title)"
                                         @mouseleave="mouseleavePerc(item.title)"
                                    >
                                        <div class="bracket bracket-tl"></div>
                                        <div class="bracket bracket-tr"></div>
                                        <div class="bracket bracket-bl"></div>
                                        <div class="bracket bracket-br"></div>
                                        <div class="perc-info" v-show="item.state">
                                            <h4> {{ item.ru }} </h4>
                                            <StyledLineComponent
                                                    :height="'1px'"
                                                    :color="'red'"
                                                    :borderStyle="'dotted'"
                                                    :margin="'40px'"
                                            ></StyledLineComponent>
                                            <div style="height: 8px"></div>
                                            <p class="perc-txt1" v-show="itemTextTimer.t1"> {{ item.txt1 }} </p>
                                            <p class="perc-txt2" v-show="itemTextTimer.t2"> {{ item.txt2 }} </p>
                                            <p class="perc-txt3" v-show="itemTextTimer.t3"> {{ item.txt3 }} </p>
                                        </div>
                                        <div class="vertical-label box-border-ani" :class="item.label+'Label'">{{ item.label }}</div>
                                        <img :src="item.pic" class="img-fluid" :alt="item.ru">
                                    </div>
                                    <a class="perc-btn" :href="item.link">
                                        {{ item.title }}
                                    </a>
                                </div>
                            </DisplayComponent>
                        </div>
                    </div>
                </div>
                <br>
                <br>
            </DisplayComponent>
            
            
            <!-- 0.2 0.3 0.4 DESCRIPTION  -->
            <div v-for="course in [frontCourse, fullstackCourse, gamedevCourse]" :key="course.name">
                <div :id="course.name"></div>
                <div class="row">
                    <div class="col-md-6">
                        <h1 class="cyber-h mw-450 f-tektur">{{course.id + 1}}.0 {{course.name}}</h1>
                    </div>
                </div>
                
                <DisplayComponent :is-header="false" :color="'red'" class="js-block">
                    <div class="course-wrap-description">
                        <div class="row">
                            <div class="col-md-1 d-none d-xl-block">
                                <div class="big-vertical-label">
                                   {{course.label}}
                                </div>
                            </div>
                            <div class="col-md-3 col-xl-2">
                                <h4>О КУРСЕ:</h4>
                                <ul>
                                    <li v-for="(item, i) in course.about" :key="i" >
                                        {{ item.field }}: <span> {{ item.value }}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-xl-2">
                                <h4>ТЕХНОЛОГИИ:</h4>
                                <ul>
                                    <li v-for="(item, i) in course.tech" :key="i" >
                                        {{ item }}
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6 col-xl-7">
                                <h4>ОПИСАНИЕ:</h4>
                                <div v-if="course.warning">
                                    <div class="custom-alert mb-50">
                                        <div class="bracket bracket-blue-tl"></div>
                                        <div class="bracket bracket-blue-tr"></div>
                                        <div class="bracket bracket-blue-bl"></div>
                                        <div class="bracket bracket-blue-br"></div>
                                        <h4 class="d-none d-xl-block">{{ course.warning.type }}</h4>
                                        <p>{{ course.warning.message }}</p>
                                    </div>
                                </div>
                                <p class="pr-15" v-html="course.description"></p>
                            </div>
                        </div>
                    </div>
                </DisplayComponent>
                <br><br><br><br>
            </div>
            

            <!--  footer-wrap-marquee -->
            <div class="footer-wrap-marquee mb-40">
                <h1 class="cyber-h"> <span style="opacity: 0">.</span> </h1>
                <marquee class="">  {{ hello.marquee }} </marquee>
            </div>
            
        </div>
    </div>
    
</template>

<script>
import DisplayComponent from "@/components/blocks/DisplayComponent";
import StyledLineComponent from "@/components/additional/StyledLineComponent";
import CustomAlertComponent from "@/components/blocks/CustomAlertComponent";
import {hello, perc, frontCourse, fullstackCourse, gamedevCourse} from "@/components/data/dataBaseComponent";

export default {
    name: 'BaseComponent',
    components: {
        DisplayComponent,
        StyledLineComponent,
        CustomAlertComponent
    },
    props: {
        message: String
    },
    data() {
        return {
            perc: perc,
            frontCourse: frontCourse,
            fullstackCourse: fullstackCourse,
            gamedevCourse: gamedevCourse,
            printingHeadText: '',
            hello: hello,
            itemTextTimer: {
                t1: false,
                t2: false,
                t3: false,
                interval1: 0,
                interval2: 0,
                interval3: 0,
            },
            romProps: {
                t0: 0,
                t1: 0,
                t2: 0,
                t3: 0
            }
        }
    },
    methods: {
        printHeadText() {
            let text = "PHP, JS, C#";
            let textAsArray = text.split('')
            let speed = 100
            let interval = setInterval(() => {
                if (textAsArray.length == 0) {
                    clearInterval(interval);
                    return
                }
                let firstChar = textAsArray.shift()
                this.printingHeadText += firstChar
            }, speed)
        },
        toggleMyPhoto() {
            if (this.hello.myData.active) {
                this.mouseleaveMyPhoto();
            } else {
                this.mouseoverMyPhoto();
            }
        },
        mouseoverMyPhoto() {
            this.hello.myData.active = true
            let romHead = document.querySelector('.rom-txt0');
            let percTxt1 = document.querySelector('.rom-txt1');
            let percTxt2 = document.querySelector('.rom-txt2');
            let percTxt3 = document.querySelector('.rom-txt3');
            romHead.classList.add("rom-prop");
            percTxt1.classList.add("rom-prop1");
            percTxt2.classList.add("rom-prop2");
            percTxt3.classList.add("rom-prop3");
            // застопим анимацию лейбла
            let label = document.querySelector('.teacher-label');
            label.classList.add("box-border-ani-stoped");
           
        },
        mouseleaveMyPhoto() {
            this.hello.myData.active = false
            // запустим анимацию лейбла
            let label = document.querySelector('.teacher-label');
            label.classList.remove("box-border-ani-stoped");
        },
        mouseoverPerc(title) {
            let perc = this.perc.find((item) => item.title == title);
            perc.state = true
            let self = this
            this.interval1 = setTimeout(() => {self.itemTextTimer.t1 = true}, 200)
            this.interval2 = setTimeout(() => {self.itemTextTimer.t2 = true}, 400)
            this.interval3 = setTimeout(() => {self.itemTextTimer.t3 = true}, 600)
            let label = document.querySelector('.teacher-label');
            label.classList.add("box-border-ani-stoped");
        },
        mouseleavePerc(title) {
            let perc = this.perc.find((item) => item.title == title);
            perc.state = false
            clearInterval(this.interval1)
            clearInterval(this.interval2)
            clearInterval(this.interval3)
            this.itemTextTimer.t1 = false
            this.itemTextTimer.t2 = false
            this.itemTextTimer.t3 = false
        },
        resize() {
            // Пофиксим высоту для .big-vertical-label
            let blocks = document.querySelectorAll('.js-block');
            for (let i = 0; i < blocks.length; i++) {
                let block = blocks[i]
                let blockNeedHeight = block.querySelector('.big-vertical-label')
                blockNeedHeight.style.height = '350px'
                let height = block.offsetHeight;
                blockNeedHeight.style.height = height + 'px'
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this.printHeadText()
        }, 500)
        this.resize()
    },
    created() {
        window.addEventListener("resize", this.resize);
    },
    destroyed() {
        window.removeEventListener("resize", this.resize);
    }
}
</script>

<style scoped>

</style>
