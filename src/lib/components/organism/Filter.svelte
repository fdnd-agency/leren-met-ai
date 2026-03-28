<details>
  <summary>Filter methodes</summary>
  <span class="icon">+ </span>

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

.filter-container input {
  display: none;
}

.filter-container label {
    background-color: pink;
    border-radius: 20px;
    padding: 8px 16px;
    margin: 10px;
}

.filter-container input:checked + label {
    background-color: black;
    color: white;

}

</style>
