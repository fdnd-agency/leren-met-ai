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
}

h1 {
    visibility: hidden;
}

.light-bulb {
    position: absolute;
    top: 40px;
    right: 0;
    width: 80px;
}

.triangles {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100px;
  z-index: 0;
}

.triangle-dark {
  position: absolute;
  top: 30px;
  left: 0;
  width: 120px;
  z-index: 1;
}

.triangle-pink {
    position: absolute;
    top: 150px;
    left: 0;
    width: 60px;
    fill: var(--pink);
    z-index: 1;
}

.pink-robot {
    width: 80px;
    z-index: 0;
}

.large-logo {
    width: 260px;
    padding-left: 30px;
    margin: 0 auto;
    display: block;
}

.teachers {
    width: 300px;
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