<script>
  let { data } = $props();
  import logo from "$lib/assets/HvA-mobiel.png";
</script>

<header>
  <button
    class="menu-toggle"
    popovertarget="menupopover"
    aria-label="menu openen of sluiten"
  >
    <svg class="icon icon-open" width="30" height="24" viewBox="0 0 24 24">
      <path
        d="M3 6h18M3 12h18M3 18h18"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
    <svg class="icon icon-close" width="30" height="24" viewBox="0 0 24 24">
      <path
        d="M6 6l12 12M6 18L18 6"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  </button>

  <a href="/">
    <img src={logo} alt="HvA-Logo" class="HvA-mobiel" />
  </a>

  <div id="menupopover" popover>
    <nav class="nav-mobiel">
      <ul>
        <li><a href="/methods">Methoden</a></li>
      </ul>
    </nav>
  </div>

  <button>
    <svg
      class="profile"
      width="69"
      height="67"
      viewBox="0 0 69 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.5 0.5C53.2934 0.5 68.5 15.2341 68.5 33.375C68.5 51.5159 53.2934 66.25 34.5 66.25C15.7066 66.25 0.5 51.5159 0.5 33.375C0.500013 15.2341 15.7066 0.5 34.5 0.5Z"
        stroke="black"
      />
      <path
        d="M34.4995 36.3657C44.6454 36.3657 52.7028 42.6626 53.0405 50.3101H15.9595C16.2972 42.6627 24.3539 36.3659 34.4995 36.3657Z"
        stroke="black"
      />
      <path
        d="M33.9854 14.4479C39.4126 14.448 43.7833 18.7003 43.7833 23.9108C43.7832 29.1212 39.4125 33.3735 33.9854 33.3737C28.5582 33.3737 24.1867 29.1213 24.1866 23.9108C24.1866 18.7002 28.5581 14.4479 33.9854 14.4479Z"
        stroke="black"
      />
    </svg>
  </button>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    height: 60px;
  }

  button.menu-toggle  {
    width: 40px;
    height: 40px;
    padding: 0;  
    cursor: pointer;
    border: none;
    background: none;
  }

  button.menu-toggle .icon {
    width: 40px;
    height: 40px;
    margin: 0;  
  }

  button.menu-toggle:hover .icon {
    transform: scale(1.1);
  }

  /* button.menu-toggle:focus svg,
button.menu-toggle:focus svg { 
    outline: 2px solid transparent;
    outline-offset: 0;
} */

  .icon-close {
    display: none;
  }

  img.HvA-mobiel {
    align-items: center;
    object-fit: cover;
    width: 200px;
    height: 60px;
    display: block;
    /* transition: transform 5s ease-in; */
  }

  /* img.HvA-mobiel:hover {
    transform: scale(1.1);
  } */

  #menupopover {
    position: absolute;
    top: 50px;
    right: 0;
    width: 400px;
    height: 100vh;
    border: none;
    background-color: pink;
  }

  @media (max-width: 768px) {
    #menupopover {
      position: absolute;
      top: 50px;
      right: 0;
      width: 100vw;
      height: 100vh;
      background-color: pink;
    }
  }

  nav ul li a {
    padding-left: 20px;
  }

  a:hover {
    color: pink;
  }

  .profile {
    object-fit: cover;
    width: 40px;
    height: 40px;
    display: block;
  }

  header:has(#menupopover:popover-open) {
    background-color: pink;
  }

  header:has(#menupopover:popover-open) .icon-open {
    display: none;
  }

  header:has(#menupopover:popover-open) .icon-close {
    display: block;
  }
</style>
