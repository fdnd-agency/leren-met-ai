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
    background-color: var(--card-bg);
    color: white;
    border: solid 5px var(--card-accent);
    border-radius: 1.5em;
  }

  /* ----------- Card Dummy colors -------------- */
    .method-card:nth-child(5n + 1) {
    --card-bg: #2b2460;
    --card-accent: #5b4bff;
  }

  .method-card:nth-child(5n + 2) {
    --card-bg: #e84c72;
    --card-accent: #ff7fa1;
  }

  .method-card:nth-child(5n + 3) {
    --card-bg: #4338ca;
    --card-accent: #8c83ff;
  }

  .method-card:nth-child(5n + 4) {
    --card-bg: #0f766e;
    --card-accent: #2dd4bf;
  }

  .method-card:nth-child(5n + 5) {
    --card-bg: #d778b2;
    --card-accent: #ff9ed2;
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
