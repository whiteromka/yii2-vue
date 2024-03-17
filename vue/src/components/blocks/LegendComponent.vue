<template>
    <div class="legend-wrap">
        <p class="legend">
            <SvgDifficultyComponent style="color: #9e5fe3;"></SvgDifficultyComponent>
            - это показатель сложности. 1 - легко, 10 - сложно
        </p>
        <p class="legend">
            <SvgNeedComponent style="color: #9e5fe3;"></SvgNeedComponent>
            - это показатель востребованности знаний. Как часто Вам придется их применять на работе. 1 - редко, 10 - постоянно
        </p>
        <p class="legend">
            <SvgIsFreeComponent style="color: #2bd957;"></SvgIsFreeComponent>
            - этот маркер значит тема полностью бесплатная. Никто не платит за эту тему
        </p>
    </div>
</template>

<script>
import SvgIsFreeComponent from "@/components/basic/SvgIsFreeComponent";
import SvgNeedComponent from "@/components/basic/SvgNeedComponent";
import SvgDifficultyComponent from "@/components/basic/SvgDifficultyComponent";

export default {
    name: 'LegendComponent',
    components: {
        SvgIsFreeComponent,
        SvgNeedComponent,
        SvgDifficultyComponent
    }
}
</script>

<style scoped>
</style>
