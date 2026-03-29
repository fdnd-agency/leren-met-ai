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
  .methods-grid {
  --max-width: 78rem;
  --min-card-width: 18rem;
  
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(var(--min-card-width), 100%), 1fr));
    gap: var(--space-lg);
    padding: var(--space-lg);
    width: min(100%, var(--max-width));
    margin-inline: auto;
    container-type: inline-size;
  }

  @container (min-width: 40rem) {
    :global(.method-card) {
      aspect-ratio: 1 / 1;
    }
  }
</style>