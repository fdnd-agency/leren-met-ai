<section class="carousel-container">
  <button class="prev"> </button>

  <ul class="carousel">
    <li class="card">
      <h3>Beeld Audio</h3>
      <p class="subtitle">Visuele generatie</p>
      <p class="description">Maakt afbeeldingen en ontwerpen op basis van tekst</p>
      <div class="labels">
        <a href="/">label</a>
        <a href="/">label</a>
      </div>
    </li>

    <li class="card">
        <h3>Beeld Audio</h3>
        <p class="subtitle">Visuele generatie</p>
        <p class="description">Maakt afbeeldingen en ontwerpen op basis van tekst</p>
        <div class="labels">
          <a href="/">label</a>
          <a href="/">label</a>
        </div>
      </li>

      <li class="card">
        <h3>Beeld Audio</h3>
        <p class="subtitle">Visuele generatie</p>
        <p class="description">Maakt afbeeldingen en ontwerpen op basis van tekst</p>
        <div class="labels">
          <a href="/">label</a>
          <a href="/">label</a>
        </div>
      </li>

      <li class="card">
        <h3>Beeld Audio</h3>
        <p class="subtitle">Visuele generatie</p>
        <p class="description">Maakt afbeeldingen en ontwerpen op basis van tekst</p>
        <div class="labels">
          <a href="/">label</a>
          <a href="/">label</a>
        </div>
      </li>

      <li class="card">
        <h3>Beeld Audio</h3>
        <p class="subtitle">Visuele generatie</p>
        <p class="description">Maakt afbeeldingen en ontwerpen op basis van tekst</p>
        <div class="labels">
          <a href="/">label</a>
          <a href="/">label</a>
        </div>
      </li>
  </ul>

  <button class="next"></button>
</section>

<style>

/* colors */


/* carousel */

  .carousel-container {
    position: relative;
    width: 100%;
    max-width: 1200px;
    padding: 0 1rem;
    /* margin: 0 auto; */
  }

  .carousel {
    display: flex;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .card {
    flex: 0 0 300px;
    min-height: 250px;
    scroll-snap-align: start;
    border: 1px solid black;
    list-style: none;
    border-radius: 10px;
    padding: 1rem;
  }


  .card h3 + p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .card p {
    margin-bottom: 1rem;
  }

  .labels {
    display: flex;
    gap: 1rem;
  }

  .labels a {
    text-decoration: none;
    border-radius: 20px;
    border: 1px solid black;
    padding: 8px 16px;
    margin-bottom: 1rem;
  }


</style>
