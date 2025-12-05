<script>
  import { onMount } from "svelte";
  import gsap from "gsap/dist/gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  let boxesContainer;

  onMount(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector(".box");
      boxes.forEach((box) => {
        gsap.from(box, {
          x: -250,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
          },
        });
      });
    }, boxesContainer); // <- Scope

    return () => ctx.revert(); // <- Cleanup
  });
</script>

<div>

  <section>
    <h1>Basis ScrollTrigger met SvelteKit</h1>
    <h2>Scroll down to see the magic happen!!</h2>
  </section>

  <section bind:this={boxesContainer}>
    <div class="box">box</div>
    <div class="box">box</div>
    <div class="box">box</div>
    <div class="box">box</div>
    <div class="box">box</div>
    <div class="box">box</div>
    <div class="box">box</div>
    <div class="box">box</div>
    <div class="box">box</div>
    <div class="box">box</div>
    <div class="box">box</div>
    <div class="box">box</div>
  </section>

  <section>
  </section>

</div>

<style>
  section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .box {
    background: var(--color-green);
    color: var(--color);
    width: 10rem;
    height: 10rem;
    border-radius: 1rem;
    font-size: 2rem;
    display: grid;
    place-items: center;
  }
</style>