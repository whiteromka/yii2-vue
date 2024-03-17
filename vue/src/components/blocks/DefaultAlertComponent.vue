<template>
    <div class="custom-alert-no-width brackets-wrap_ mb-50">
        <div class="bracket bracket-blue-tl"></div>
        <div class="bracket bracket-blue-tr"></div>
        <div class="bracket bracket-blue-bl"></div>
        <div class="bracket bracket-blue-br"></div>
        <h4 class="">{{ level }}</h4>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: 'DefaultAlertComponent',
    props: {
       level: String,
       message: String
    }
}
</script>

<style scoped>
</style>
