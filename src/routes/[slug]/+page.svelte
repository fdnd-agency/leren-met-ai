<script>
  let { data } = $props()

  const { method } = data
</script>

<header>
  <a href="/">Terug naar alle methodes</a>
</header>

<article>
  <h2>{method.title}</h2>
  <p>{method.description}</p>
  <a href="/{method.slug}">Bekijk {method.title}</a>
</article>
