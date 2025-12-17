<script>
  import MethodCard from '$lib/components/molecules/MethodCard.svelte';

    let { data } = $props()
  
    const { methods } = data
  
  </script>
  
  <h2>AI methoden</h2>
  {#each methods as method}
    <MethodCard {method} />
  {/each}  
