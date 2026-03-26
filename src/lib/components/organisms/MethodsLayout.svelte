<script>
  import MethodCard from '../molecules/MethodCard.svelte';
  export let methods = [];
</script>

<div class="methods-grid">
  {#each methods as method}
    <MethodCard {method} />
  {/each}
</div>

<style>
  
</style>