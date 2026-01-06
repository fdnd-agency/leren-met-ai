<script>
  let { data } = $props()

  const { method } = data

  import Header from '$lib/components/organisms/Header.svelte'

</script>

<header>

<Header/>
  <a href="/methods">Terug naar alle methodes</a>
</header>

<article>
  <h2>{method.title}</h2>
  <p>{method.description}</p>
</article>
