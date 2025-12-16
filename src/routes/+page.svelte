<script>
  let { data } = $props()

  const { methods } = data

</script>

<h1>Goed onderwijs ontstaat wanneer we kennis delen, ook met AI.</h1>
<h2>AI methoden</h2>
{#each methods as method}
  <article>
    <h3>{method.title}</h3>
    <p>{method.description}</p>
    <a href="/{method.slug}">Bekijk {method.title}</a>
  </article>
{/each}

