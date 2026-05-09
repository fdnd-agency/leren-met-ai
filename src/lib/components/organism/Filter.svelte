<script>

import { onMount } from 'svelte';

let methods = [];
let activeCategory = 'all';

const fetchData = async () =>{
  console.log('fetch')
  const res = await fetch (
    'https://fdnd-agency.directus.app/items/leren_met_ai_methodes'
  );

  const data = await res.json();

  console.log(data);

  methods = data.data || [];
  console.log(methods);
};

onMount(() => {
  fetchData();
});

const getCategory = (method) => {
  const text =`
  ${method.title}
  ${method.description}
  `.toLowerCase();

  if (text.includes(brainstorm)) {
    return 'creatief';
  }

  if (text.includes('quiz')) {
    return 'interactief';
  }

  if (text.includes('onderzoek')) {
    return 'onderzoekend';
  }


}

</script>

<details open>
  <summary>
    Filter methodes
  <span class="icon">+ </span>
</summary>

  <div class="filter-container">
    <input type="checkbox" id="creatief" name="filter" checked={activeCategory === 'creatief'} on:click={()=> activeCategory = 'creatief' } />
    <label for="creatief"> Creatief </label>

    <input type="checkbox" id="onderzoekend" name="filter" checked={activeCategory === 'onderzoekend'} on:click={()=> activeCategory = 'onderzoekend' }/>
    <label for="onderzoekend"> Onderzoekend </label>

    <input type="checkbox" id="educatief" name="filter" checked={activeCategory === 'edcuatief'} on:click={()=> activeCategory = 'educatief' } />
    <label for="educatief"> Educatief </label>

    <input type="checkbox" id="interactief" name="filter" checked={activeCategory === 'interactief'} on:click={()=> activeCategory = 'creatief' }/>
    <label for="interactief"> Interactief </label>
  </div>
</details>

  <h2>AI methoden</h2>
  {#each methods as method}
    <article>
      <h3>{method.title}</h3>
      <p>{method.description}</p>
      <a href="/methods/{method.slug}">Bekijk {method.title}</a>
    </article>
  {/each}   
<style>

details {
 /* width: fit-content; */
 border: 1px solid black;
 padding: 8px 16px;
 border-radius: 10px;
 margin: 10px;
 
}    

details[open] .icon {
    transform: rotate(45deg);
}

summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

summary::marker {
    content: none;
}

.icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid black;
    text-align: center;
}

/* colors     */

.filter-container {
  --color-creatief: #4A40FE;
  --color-onderzoekend: #242062;
  --color-educatief: #EA77B6;
  --color-interactief: #18887C;
  --color-text: white;
} 

/* filters */

.filter-container input {
  display: none;
}

.filter-container {
    display: flex;
    flex-direction: column;
}

.filter-container label {
    border: 1px solid black;
    border-radius: 10px;
    padding: 8px 16px;
    margin: 10px;
    text-align: center;
}

.filter-container input:checked + label {
    background-color: black;
    color: white;

}

@media (min-width: 768px) {

   details {
     display: block;
     border: none;
   }

    summary {
        display: none;
    }

    .filter-container {
        display: flex;
        flex-direction: row;
        align-items: center; 
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
    }

    .filter-container label {
        margin: 0;
    }
}

</style>
