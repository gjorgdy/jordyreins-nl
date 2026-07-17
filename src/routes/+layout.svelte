<script lang="ts">
  import type { Pathname } from '$app/types';
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { locales, localizeHref } from '$lib/paraglide/runtime';
  import './layout.css';
  import initialsModern from '$lib/assets/initials_modern.png';
  import initialsModernWhite from '$lib/assets/initials_modern_white.png';
  // components
  import Language from '$lib/components/language.svelte';
  import LastUpdated from '$lib/components/last_updated.svelte';

  let { children } = $props();
  let dark = true;

  const hideName = $derived(page.route.id === resolve("/"));
</script>

<svelte:head>
    <link rel="icon" href={dark ? initialsModernWhite : initialsModern} />
    <title>Jordy Reins</title>
</svelte:head>

<div id="bg" class="{dark ? 'dark' : ''} bg-white dark:bg-black dark:text-white min-h-dvh min-w-dvw relative flex flex-col items-center">
    <div class="sticky top-0 bg-white dark:bg-black w-full flex justify-center">
        <div class="w-300 max-w-[90dvw] h-12 md:h-20 px-2 grid grid-cols-1 md:grid-cols-3 items-center {hideName ? 'not-md:hidden' : ''}">
            <LastUpdated class="dark:text-white/40 not-md:hidden flex items-center justify-start h-full"/>
            {#if hideName}
                <div></div>
            {:else}
                <a id="jordyreins" href={resolve("/")} class="text-2xl font-bold tracking-widest hover:scale-105 transition-transform flex justify-center">JORDY REINS</a>
            {/if}
            <Language class="dark:text-white/40 not-md:hidden flex items-center justify-end h-full"/>
        </div>
    </div>
    <div class="w-300 max-w-[95dvw]">
        {@render children()}
    </div>
</div>

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
	{/each}
</div>
