<script>
    let { data } = $props()

    const { methods } = data

    import Filter from '$lib/components/organism/Filter.svelte';
  
  </script>

  <Filter/>
  
  <h2>AI methoden</h2>
  {#each methods as method}
    <article>
      <h3>{method.title}</h3>
      <p>{method.description}</p>
      <a href="/methods/{method.slug}">Bekijk {method.title}</a>
    </article>
  {/each}  