<section class="carousel-container">
  <button class="prev"> </button>

  <ul class="carousel">
    <li class="card is-hidden-left">
      <h3>Beeld Audio</h3>
      <p class="subtitle">Visuele generatie</p>
      <p class="description">Maakt afbeeldingen en ontwerpen op basis van tekst</p>
      <div class="labels">
        <a href="/">label</a>
        <a href="/">label</a>
      </div>
    </li>

    <li class="card is-prev">
        <h3>Beeld Audio</h3>
        <p class="subtitle">Visuele generatie</p>
        <p class="description">Maakt afbeeldingen en ontwerpen op basis van tekst</p>
        <div class="labels">
          <a href="/">label</a>
          <a href="/">label</a>
        </div>
      </li>

      <li class="card is-active">
        <h3>Beeld Audio</h3>
        <p class="subtitle">Visuele generatie</p>
        <p class="description">Maakt afbeeldingen en ontwerpen op basis van tekst</p>
        <div class="labels">
          <a href="/">label</a>
          <a href="/">label</a>
        </div>
      </li>

      <li class="card is-next">
        <h3>Beeld Audio</h3>
        <p class="subtitle">Visuele generatie</p>
        <p class="description">Maakt afbeeldingen en ontwerpen op basis van tekst</p>
        <div class="labels">
          <a href="/">label</a>
          <a href="/">label</a>
        </div>
      </li>

      <li class="card is-hidden-right">
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
    padding: 0.5rem;
    margin: 0 auto;
    overflow: hidden;
  }

  .carousel {
    position: relative;
    min-height: 400px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .card {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 220px;
    min-height: 320px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 1rem;
    transform: translate(-50%, -50%);
  }

  .card.is-prev {
    opacity: 1;
    transform: translate(-140%, -50%);
    z-index: 3;
  }

  .card.is-active {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    z-index: 4;
  }

  .card.is-next {
    opacity: 1;
    transform: translate(40%, -50%);
    z-index: 3;
  }

  .card.is-hidden-left {
    opacity: 0;
    transform: translate(-200%, -50%);
  }

  .card.is-hidden-right {
    opacity: 0;
    transform: translate(100%, -50%);
  }



  /* .card:last-child {
       margin-right: 1em;
    }

  @media (min-width: 1000px) {
    .carousel-container{
        max-width: 1250px;
    }

    .carousel {
        padding-right: 0 ;
    }

    .card:last-child {
       margin-right: 0;
    }
  } */


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
  }


</style>
