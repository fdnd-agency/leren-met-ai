<script>
  import logo from "$lib/assets/Logo.png"; 
  import lightbulb from "$lib/assets/Light-bulb.png";
  import teachers from "$lib/assets/Teachers.png";
  import pinkrobot from "$lib/assets/Pink-robot.png";
</script>

<header class="hero">
    <nav class="hero-nav">
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

    <img src={lightbulb} class="light-bulb" alt="Light-bulb-illustrations">
<section class="hero-images">

<h1> Leren met AI</h1>
   
<img src={logo} class="large-logo" alt="Logo-leren-met-ai">
<img src={teachers} class="teachers" alt="Teachers-illustrations">

</section>

<section class="intro">

    <h2 class="intro-title">Welkom bij Leren met AI</h2>
    <p>
      Ontdek de wereld van kunstmatige intelligentie en robotica. Hier vind je
      inspiratie en methodes om AI in je les toe te passen.
    </p>

</section>

</header>

<style>

:root {
  --purple: #443d9f;
  --dark-purple: #28255a;
  --pink: #F25279;
  --white: #fff;
}    

header.hero {
    position: relative;
    background: var(--purple);
    min-height: 100vh;
}    

.hero-nav {
   display: flex;
   justify-content: end;
} 

.methods-link {
  color: var(--white);
  text-decoration: underline;
  padding: 1em;
}

.hero-images {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    position: relative;
}

h1 {
    visibility: hidden;
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
  top: clamp(40px, 5vw, 65px);
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
    transform: translate(10px);
    margin: 0 auto;
    display: block;
}

.teachers {
    width: clamp(260px, 75vw, 420px);
    z-index: 2;
}

.intro {
    background-color: #28255a;
    color: var(--white);
    text-align: center;
    transform: translateY(-40px);
    padding-bottom: 40px;
}

h2 {
    padding-top: 60px;
}


</style>