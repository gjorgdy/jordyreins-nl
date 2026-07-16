<script lang="ts">
  import { resolve } from '$app/paths';
  import Language from '$lib/components/language.svelte';
  import LastUpdated from '$lib/components/last_updated.svelte';

  let { children } = $props();
 </script>

 <svelte:head>
     <title>Jordy Reins / Projects</title>
 </svelte:head>

<div id="bg" class="min-h-dvh bg-white dark:bg-black dark:text-white flex flex-col items-center">
    <div class="w-full p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 items-center max-w-400">
        <LastUpdated class="dark:text-white/40 not-md:hidden flex justify-start"/>
        <a href={resolve("/")} class="text-2xl font-bold tracking-widest hover:scale-105 transition-transform flex justify-center">JORDY REINS</a>
        <Language class="dark:text-white/40 not-md:hidden justify-end"/>
    </div>
    <div class="w-full max-w-400">
        {@render children()}
    </div>
</div>
