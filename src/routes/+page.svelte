<script>
  let { data } = $props()

  const { methods } = data

  import Carousel from '$lib/components/organism/Carousel.svelte';

</script>

<h1>Goed onderwijs ontstaat wanneer we kennis delen, ook met AI.</h1>
<h2>Methode van de week</h2>

<a href="/methods">Bekijk alle methoden</a>


<Carousel/>
