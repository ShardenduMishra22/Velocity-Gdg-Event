<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="counter-display">{{ count }}</div>
  <div class="button-group">
    <button type="button" @click="count--">Decrement</button>
    <button type="button" @click="count++">Increment</button>
  </div>
  <button type="button" @click="count = 0" class="reset-btn">Reset</button>
</template>

<style scoped>
.counter-display {
  font-size: 4em;
  font-weight: bold;
  color: #646cff;
  padding: 1rem 2rem;
  border: 2px solid #646cff;
  border-radius: 12px;
  min-width: 150px;
}

.button-group {
  display: flex;
  gap: 1rem;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.8em 1.5em;
  font-size: 1.1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #646cff;
  color: white;
  cursor: pointer;
  transition: all 0.25s;
}

button:hover {
  background-color: #535bf2;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(100, 108, 255, 0.3);
}

button:active {
  transform: translateY(0);
}

.reset-btn {
  background-color: #1a1a1a;
  border: 1px solid #646cff;
  color: #646cff;
}

.reset-btn:hover {
  background-color: #646cff;
  color: white;
}

@media (prefers-color-scheme: light) {
  .counter-display {
    color: #535bf2;
    border-color: #535bf2;
  }
  
  button {
    background-color: #535bf2;
  }
  
  button:hover {
    background-color: #646cff;
  }
  
  .reset-btn {
    background-color: #f9f9f9;
    border-color: #535bf2;
    color: #535bf2;
  }
  
  .reset-btn:hover {
    background-color: #535bf2;
    color: white;
  }
}
</style>
