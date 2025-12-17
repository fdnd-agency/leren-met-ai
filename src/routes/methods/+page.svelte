<script>
    let { data } = $props()
  
    const { methods } = data
  
  </script>
  
  <h2>AI methoden</h2>
  {#each methods as method}
    <article>
      <h3>{method.title}</h3>
      <p>{method.description}</p>
    </article>
  {/each}  