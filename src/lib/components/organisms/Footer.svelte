<script>
 
</script>

<footer>
  <div class="menu">
    <label for="">Menu</label>
    <a href="/">Home</a>
    <a href="/">Methodes</a>
    <a href="/">Over AI</a>  
  </div>
  <label for="logo">Creating Tomorrow</label>
  <div class="contact">
    <label for="">Contact</label>
    <a href="/">janedoe@gmail.com</a>
  </div>
  

</footer>

<style>
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 20em;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    
    background-color: indianred;
    padding: 1rem;
    font-size: 0.875rem;
  }

  label {
    color: snow;
  }

  a {
    cursor: pointer;
  }

  [for="logo"] {
    align-self: self-end;
    color: snow;
    font-style: bold;
    padding: 1.75em;
    grid-column: 1 / span 1;
  }

  .menu {
    display: grid;
    padding: 1.75em;
    height:fit-content;
  }

  .contact {
    display: grid;
    justify-self: end;
    padding: 1.75em;
    height:fit-content;
    grid-column: 3;
    grid-row: 1;
  }

  a:hover {
    color: violet;
  }



</style>