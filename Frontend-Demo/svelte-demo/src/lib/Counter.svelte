<script lang="ts">
  let count: number = $state(0)
</script>

<div class="counter-display">{count}</div>
<div class="button-group">
  <button onclick={() => count--}>Decrement</button>
  <button onclick={() => count++}>Increment</button>
</div>
<button onclick={() => count = 0} class="reset-btn">Reset</button>
