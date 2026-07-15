<script lang="ts">
  import { resolve } from '$app/paths';
  import Language from '$lib/components/language.svelte';
  let { children } = $props();
 </script>

 <svelte:head>
     <title>Jordy Reins / Projects</title>
 </svelte:head>

<div id="bg" class="min-h-dvh bg-black/80 text-white flex flex-col items-center">
    <div class="w-full max-w-400 h-20 relative bg-black flex justify-center items-center">
        <a href={resolve("/")} class="text-2xl font-bold tracking-widest hover:scale-105 transition-transform">JORDY REINS</a>
        <div class="absolute right-6 h-fit"><Language/></div>
    </div>
    <div class="w-full max-w-400">
        {@render children()}
    </div>
</div>
