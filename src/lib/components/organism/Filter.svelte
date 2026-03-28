<details open>
  <summary>
    Filter methodes
  <span class="icon">+ </span>
</summary>

  <div class="filter-container">
    <input type="checkbox" id="f1" />
    <label for="f1"> Creatief </label>

    <input type="checkbox" id="f2" />
    <label for="f2"> Onderzoekend </label>

    <input type="checkbox" id="f3" />
    <label for="f3"> Educatief </label>

    <input type="checkbox" id="f4" />
    <label for="f4"> Interactief </label>
  </div>
</details>

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
    background-color: pink;
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
