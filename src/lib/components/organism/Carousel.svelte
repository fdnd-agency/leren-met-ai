<script>
  // Temporary dummy data
  // Later this will be fetched from directus

  const cards = [
    {
      title: "Beeld AI",
      subtitle: "Visuele generatie",
      description: "Maakt afbeeldingen en ontwerpen op basis van tekst",
      labels: ["DALL·E", "Firefly"],
    },

    {
      title: "Tekst AI",
      subtitle: "Tekst generatie",
      description: "Helpt met schrijven en samenvatten",
      labels: ["ChatGPT", "Claude"],
    },

    {
      title: "Audio AI",
      subtitle: "Audio generatie",
      description: "Genereert spraak en geluid op basis van input",
      labels: ["Suno", "ElevenLabs"],
    },

    {
      title: "Video AI",
      subtitle: "Video generatie",
      description: "Maakt of bewerkt video’s met AI",
      labels: ["Runway", "Pika"],
    },

    {
      title: "Code AI",
      subtitle: "Code assistentie",
      description: "Ondersteunt bij programmeren en debuggen",
      labels: ["Copilot", "Cursor"],
    },
  ];

  let activeIndex =$state(2);
  // console.log("active index", activeIndex);

  function getCardState(index) {
    // console.log("card index", index);

   const prevIndex =
  (activeIndex - 1 + cards.length)
  % cards.length;
  // console.log("prev", prevIndex);


  const nextIndex =
  (activeIndex + 1)
  % cards.length;
  // console.log("next", nextIndex);
  

  if (index === activeIndex) {
    // console.log("active")
    return "is-active";
  }

  if (index === prevIndex){
    // console.log("prev")
    return "is-prev";
  }

  if (index === nextIndex){
    // console.log("next")
    return "is-next";
  }

  // console.log("hidden right")
    return "is-hidden-right";
  }

  function next(){
    activeIndex =(activeIndex +1) % cards.length;
  }

  function prev(){
    activeIndex =
    (activeIndex -1 + cards.length) % cards.length;
  }

</script>

<section class="carousel-container">
  <button class="prev" onclick={prev}>  ← </button>

  <ul class="carousel">
    {#each cards as card, index}
      <li class={`card ${getCardState(index)}`}>
        <h3>{card.title}</h3>
        <p class="subtitle">{card.subtitle}</p>
        <p class="description">{card.description}</p>
        <div class="labels">
          {#each card.labels as label}
            <a href="/">{label}</a>
          {/each}
        </div>
      </li>
    {/each}
  </ul>

  <button class="next" onclick={next}>→</button>
</section>

<style>
  /* colors */
.carousel-container {
  --border: #111111;
  --card-shadow: #5447a8;
  --card-bg: #2d1d8d;
  --label:#f45b8d;
  --text:  #ffffff;
}


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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 270px;
    min-height: 320px;
    border: 1px solid var(--border);
    border-radius: 30px;
    padding: 1.5rem 1rem 1rem ;
    transform: translate(-50%, -50%);
    background-color: var(--card-bg);
    color: var(--text);
    box-shadow: 8px 8px 0px var(--card-shadow) ;
  }

  .card.is-prev {
    opacity: 1;
    transform: translate(-160%, -50%) scale(0.9);
    z-index: 3;
  }

  .card.is-active {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    z-index: 4;
  }

  .card.is-next {
    opacity: 1;
    transform: translate(60%, -50%)scale(0.9);
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

  .card h3 {
    margin: 0 0 0.2rem;
  }

  .subtitle {
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
    padding: 8px 16px;
    background-color: var(--label);
  }
</style>
