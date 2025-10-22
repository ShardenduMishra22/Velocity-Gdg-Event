<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container">
    <img src="./assets/vue.svg" class="logo" alt="Vue logo" />
    <h1>Counter App</h1>
    <HelloWorld />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.logo {
  height: 8em;
  padding: 1em;
  will-change: filter;
  transition: filter 300ms;
}

h1 {
  font-size: 3em;
  line-height: 1.1;
  margin: 0;
}
</style>
