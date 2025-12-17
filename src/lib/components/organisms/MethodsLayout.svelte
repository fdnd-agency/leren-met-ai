<script>
  import MethodCard from '../molecules/MethodCard.svelte';
  export let methods = [];
</script>

<section>
  {#each methods as method}
    <MethodCard {method} />
  {/each}
</section>