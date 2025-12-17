<script>
  let { data } = $props()

  const { method } = data
</script>

<header>
  <a href="/methods">Terug naar alle methodes</a>
</header>

<article>
  <h2>{method.title}</h2>
  <p>{method.description}</p>
</article>
