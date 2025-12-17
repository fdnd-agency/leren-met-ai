<script>
  import MethodsLayout from '$lib/components/organisms/MethodsLayout.svelte';

    let { data } = $props()
  
    const { methods } = data
  
  </script>
  
  <h2>AI methoden</h2>
  <MethodsLayout {methods} />
