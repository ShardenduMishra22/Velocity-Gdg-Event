<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <div class="container">
    <img src={svelteLogo} class="logo" alt="Svelte Logo" />
    <h1>Counter App</h1>
    <Counter />
  </div>
</main>

<style>
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
