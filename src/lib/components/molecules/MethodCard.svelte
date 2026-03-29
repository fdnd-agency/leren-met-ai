<script>
  export let method;
</script>

<article class="method-card">
  <h3>{method.title}</h3>
  <p>{method.description}</p>
  <footer class="method-card-footer">
      <span>Filter type</span>
      <a href="/methods/{method.slug}">Bekijk</a>
  </footer>
</article>

<style>
  /* ----------- Card styling -------------- */

  .method-card {
    /* layout */
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: var(--space-md);
    /* spacing */
    min-width: 0;
    padding: var(--space-md);
    /* appearance */
    border: solid 1px black;
    border-radius: 1em;
  }

  /* ----------- Card content styling --------------*/

  h3, p {
  margin: 0;
  /* text behaviour */
  hyphens: auto;
  overflow-wrap: break-word;
  }

  h3 {
  text-wrap: balance;
  }

  p {
  text-wrap: pretty;
  }

  .method-card-footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--space-sm);
  }

  .method-card-footer > span,
  .method-card-footer > a {
    display: inline-flex;
    align-items: center;
    min-height: 2.5rem;
  }
</style>
