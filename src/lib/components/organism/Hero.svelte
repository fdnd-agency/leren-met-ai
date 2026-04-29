<script>
  import logo from "$lib/assets/Logo.png";
  import lightbulb from "$lib/assets/Light-bulb.png";
  import teachers from "$lib/assets/Teachers.png";
  import pinkrobot from "$lib/assets/Pink-robot.png";
</script>

<header class="hero">
  <h1>Leren met AI</h1>

  <nav class="hero-nav">
    <a href="/" class="nav-logo-link"><img src={logo} class="nav-logo" alt="Logo-leren-met-ai" /></a>
    <a href="/methods" class="methods-link">Methodes</a>
  </nav>

  <div class="triangles">
    <img src={pinkrobot} alt="pink-robot" class="pink-robot" />

    <svg class="triangle triangle-dark" viewBox="0 0 100 100">
      <polygon points="0,0 100,50 0,100" />
    </svg>

    <svg class="triangle triangle-pink" viewBox="0 0 100 100">
      <polygon points="0,0 100,50 0,100" />
    </svg>
  </div>

  <img src={lightbulb} class="light-bulb" alt="Light-bulb-illustrations" />
  <div class="hero-images">
    <img src={logo} class="large-logo" alt="Logo-leren-met-ai" />
    <img src={teachers} class="teachers" alt="Teachers-illustrations" />
  </div>
</header>

<section class="intro">
  <h2 class="intro-title">AI in de klas. Hoe pak je dat aan?</h2>

  <p>
    Op <span>‘AI de Hoe’s’</span> vind je praktische werkvormen van collega-docenten
    die je direct kunt gebruiken. Concrete voorbeelden uit de onderwijspraktijk,
    door en voor docenten.
  </p>

  <p>
    Laat je inspireren, pas aan wat bij jou past, en voeg jouw eigen werkvormen
    toe. Want jouw aanpak is waardevol voor anderen.
  </p>
</section>

<style>
  :root {
    --purple: #443d9f;
    --dark-purple: #28255a;
    --pink: #f25279;
    --white: #fff;
  }

  .hero {
    position: relative;
    background: var(--purple);
  }

  .hero::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 30px;
    background-color: var(--dark-purple);
    z-index: 1;
  }

  .hero-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-logo {
    width: clamp(50px, 6vw, 60px);
    height: auto;
    margin: 10px;
  }

  .methods-link {
    color: var(--white);
    text-decoration: underline;
    padding: 0.5rem;
  }

  .hero-images {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    position: relative;
  }

  h1 {
    position: absolute;
    left: -1000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .intro {
    background-color: var(--dark-purple);
    color: var(--white);
    text-align: center;
  }

  h2 {
    padding-top: 10px;
  }

  .light-bulb {
    position: absolute;
    top: 50px;
    right: 0;
    width: clamp(60px, 10vw, 100px);
  }

  .triangles {
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 0;
  }

  .triangle-dark {
    position: absolute;
    /* top: 40px; */
    top: clamp(40px, 5vw, 80px);
    left: 0;
    width: clamp(90px, 16vw, 140px);
    z-index: 1;
  }

  .triangle-pink {
    position: absolute;
    top: clamp(140px, 25vw, 220px);
    left: 0;
    width: clamp(40px, 8vw, 70px);
    fill: var(--pink);
    z-index: 1;
  }

  .pink-robot {
    position: absolute;
    top: 5px;
    left: 0;
    width: clamp(65px, 10vw, 100px);
    z-index: 0;
  }

  .large-logo {
    width: clamp(220px, 45vw, 320px);
    /* width: 260px; */
    /* padding-left: 30px; */
    transform: translate(20px);
    margin: 0 auto;
    display: block;
  }

  .teachers {
    width: clamp(260px, 75vw, 420px);
    z-index: 2;
  }

  @media (min-width: 425px) {
    .large-logo {
      width: clamp(260px, 50vw, 360px);
    }
    .teachers {
      width: clamp(300px, 80vw, 500px);
    }

    .pink-robot {
      width: clamp(85px, 12vw, 115px);
      top: 0;
      left: 10px;
    }

    .light-bulb {
      width: clamp(80px, 12vw, 120px);
    }

    .triangle-dark {
      width: clamp(120px, 22vw, 180px);
    }

    .triangle-pink {
      top: 180px;
      width: clamp(50px, 8vw, 80px);
    }
  }

  @media (min-width: 768px) {
    .large-logo {
      width: clamp(320px, 40vw, 500px);
    }
    .teachers {
      width: clamp(420px, 70vw, 800px);
    }

    .pink-robot {
      width: clamp(100px, 10vw, 140px);
      top: 5px;
      left: 10px;
    }

    .light-bulb {
      width: clamp(100px, 10vw, 150px);
    }

    .triangle-dark {
      top: 55px;
      width: clamp(160px, 20vw, 230px);
      /* width: clamp(120px, 14vw, 200px); */
    }

    .triangle-pink {
      top: 220px;
      width: clamp(65px, 8vw, 110px);
    }
  }

  @media (min-width: 1024px) {
    .pink-robot {
      width: clamp(100px, 10vw, 140px);
      top: 5px;
      left: 10px;
    }

    .light-bulb {
      width: clamp(100px, 10vw, 150px);
    }

    .triangle-dark {
      top: 70px;
    }

    .triangle-pink {
      top: 310px;
    }
  }
</style>
