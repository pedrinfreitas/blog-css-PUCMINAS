<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { navigating } from "$app/stores";
  import { loading } from "../stores/";
  // import Nav from "$lib/Nav.svelte";
  import "../app.css";

  let isPageLoaded = false;

  $: $loading = !!$navigating;

  onMount(() => {
    isPageLoaded = true;
  });
</script>

<div>
  {#if !isPageLoaded || $loading}
    <div
      class="loader w-full h-full bg-gray-900 text-white grid grid-cols-1 grid-rows-1 place-items-center"
      transition:fade
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-arrow-repeat animate-spin"
        viewBox="0 0 16 16"
      >
        <path
          d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
        />
        <path
          fill-rule="evenodd"
          d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
        />
      </svg>
    </div>
  {/if}
  <!-- <Nav /> -->
  <slot />
</div>

<style>
  .loader {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: grid;
    place-items: center;
    background-color: rgb(0, 0, 0);
    z-index: 9999;
    transition: ease-in-out 1s;
  }
</style>
