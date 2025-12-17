<script>
  export let method;
</script>

<article>
  <h3>{method.title}</h3>
  <p>{method.description}</p>
  <a href="/methods/{method.slug}">Bekijk {method.title}</a>
</article>
