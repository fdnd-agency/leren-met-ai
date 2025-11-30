<script>
  let { data } = $props()

  const { methods } = data

</script>

{#each methods as method}
  <article>
    <h2>{method.title}</h2>
    <p>{method.description}</p>
    <a href="/{method.slug}">Bekijk {method.title}</a>
  </article>
{/each}

