<script>
  export let method;
</script>

<article class="method-card">
  <h3>{method.title}</h3>
  <p>{method.description}</p>
  <span>Filter type</span>
  <a href="/methods/{method.slug}">Bekijk</a>
</article>

<style>
  .method-card {
    border: solid 1px black;
  }
</style>
