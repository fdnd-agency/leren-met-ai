<script>
  import gsap from "gsap/dist/gsap";
</script>

<header>
  <nav>
    <ul>
      <li>Home</li>
      <li>Methodes</li>
      <li>Contact</li>
      <li>Get Started</li>
    </ul>
  </nav>
</header>

<h1>3D Scene with GSAP</h1> 

<main>
  <section></section>
  <section></section>
  <section></section>
  <section></section>
  <section></section>
  <section></section>
</main>


<footer>
  <p>© 2025 Leren met AI</p>
</footer>

<style>
  header {
    position: sticky;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    padding: 1rem;
    margin: 0;
  }

  :hover ul li {
    cursor:pointer;
  }

  h1 {
    text-align: center;
    margin: 2rem 0;
  }

  main {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    padding: 1rem;
  }

  section {
    height: 320px;
    width: 210px;
    /* background-color: rgb(38, 35, 25); */
    /* background-color: crimson; */
    background-color: hsl(0, 10%, 20%);
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    padding: 1rem 0;
  }
</style>