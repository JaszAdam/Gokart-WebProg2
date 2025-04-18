<script lang="ts">
    export let MenuOpen: boolean;
    export let ToggleMenu: () => void;
  </script>
  
  <button class="burger" on:click={ToggleMenu} aria-label="Toggle navigation">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </button>
  
  <style>
    .burger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 5px;
    }
  
    .bar {
      width: 25px;
      height: 3px;
      background-color: black;
    }
  
    @media (max-width: 768px) {
      .burger {
        display: flex;
      }
    }
  </style>
  