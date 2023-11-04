<template>
    <div>
      <h1>{{ msg }}</h1>
      <p>This is vue component!</p>
      <span>#!&^</span>
    </div>
</template>

<script>
export default {
  name: 'HelloComponent',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h1 {
  cursor: pointer;
  margin: 40px 0 0;
}
</style>
