<script>
  import Nav from "../components/Nav.svelte";
  import { fade } from "svelte/transition";
  import { stores } from "@sapper/app";
  import PageLoadingBar from "sapper-page-loading-bar/PageLoadingBar.svelte";

  const { preloading } = stores();

  export let segment;
</script>

<Nav {segment} />

<PageLoadingBar {preloading} />

<!-- {#if !$preloading}
  <main transition:fade>
    <slot />
  </main>
{/if} -->

<main>
  <slot />
</main>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
