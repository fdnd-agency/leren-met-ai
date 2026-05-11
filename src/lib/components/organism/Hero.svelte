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
    opacity:0;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 1rem; */
    background-color: var(--dark-purple);
    color: var(--white);
    text-align: center;
    padding: 2rem 1.5rem 4rem;
  }

  .intro-title, 
  .intro p {
   width: 100%;
   max-width: 700px;
   text-align: left;
   margin-bottom: 1rem;
  }


  .light-bulb {
    position: absolute;
    top: 30px;
    right: 0;
    width: clamp(50px, 7vw, 80px);
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
    width: clamp(70px, 14vw, 120px);
    z-index: 1;
  }

  .triangle-pink {
    position: absolute;
    top: clamp(110px, 18vw, 170px);
    left: 0;
    width: clamp(30px, 6vw, 55px);
    fill: var(--pink);
    z-index: 1;
  }

  .pink-robot {
    position: absolute;
    top: 5px;
    left: 0;
    width: clamp(55px, 8vw, 80px);
    z-index: 0;
  }

  .large-logo {
    width: clamp(180px, 32vw, 260px);
    transform: translate(20px);
    margin: 0 auto;
    display: block;
  }

  .teachers {
    width: clamp(220px, 55vw, 500px);
    z-index: 2;
  }

  @media (min-width: 425px) {
    .large-logo {
      width: clamp(200px, 38vw, 280px);
    }
    .teachers {
      width: clamp(240px, 65vw, 420px);
    }

    .pink-robot {
      width: clamp(60px, 9vw, 85px);
      top: 0;
      left: 10px;
    }

    .light-bulb {
      width: clamp(60px, 8vw, 90px);
    }

    .triangle-dark {
      width: clamp(90px, 8vw, 130px);
    }

    .triangle-pink {
      top: 140px;
      width: clamp(35px, 6vw, 55px);
    }
  }

  @media (min-width: 768px) {
    .large-logo {
      width: clamp(220px, 28vw, 320px);
    }
    .teachers {
      width: clamp(300px, 50vw, 520px);
    }

    .pink-robot {
      width: clamp(70px, 7vw, 100px);
      top: 5px;
      left: 10px;
    }

    .light-bulb {
      width: clamp(70px, 7vw, 100px);
    }

    .triangle-dark {
      top: 55px;
      width: clamp(120px, 14vw, 170px); 
    }

    .triangle-pink {
      top: 180px;
      width: clamp(45px, 5vw, 70px);
    }
  }

  @media (min-width: 1024px) {
    .pink-robot {
      width: clamp(70px, 6vw, 100px);
      top: 0;
      left: 10px;
    }

    .light-bulb {
      width: clamp(70px, 6vw, 100px);
    }

    .triangle-dark {
      top: 50px;
      width: clamp(120px, 12vw, 170px);
    }

    .triangle-pink {
      top: 220px;
      width: clamp(45px, 4vw, 70px);
    }
  }

  @media (min-width: 1200px) {
    .intro {
     padding: 4em 6em 6em ;
    }

    .intro-title, 
    .intro p {
      max-width: 1100px;
      margin-right: auto;
      margin-left: auto;
      line-height: 1.6;
    }

  }



</style>
