<script lang="ts">
  import type { Pathname } from '$app/types';
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { locales, localizeHref } from '$lib/paraglide/runtime';
  import './layout.css';
  import initialsModern from '$lib/assets/initials_modern.png';
  import initialsModernWhite from '$lib/assets/initials_modern_white.png';
  import { showHeaderTitle, headerHeight } from '$lib/store';
  // components
  import Language from '$lib/components/language.svelte';
  import LastUpdated from '$lib/components/last_updated.svelte';
  import Title from '$lib/components/title.svelte';
  import { fade } from 'svelte/transition';

  let { children, data } = $props();

  let scrollY = $state(0);
  let border = $derived(Math.min(scrollY / 250, 0.2));
  let shadow = $derived(Math.min(scrollY / 250, 0.25));

  $effect(() => {
    if (!data.isHomePage) {
      showHeaderTitle.set(true);
    }
  });

  let dark = true;
</script>

<svelte:window bind:scrollY />

<svelte:head>
    <link rel="icon" href={dark ? initialsModernWhite : initialsModern} />
    <title>Jordy Reins</title>
</svelte:head>

<div id="bg" class="{dark ? 'dark' : ''} bg-white dark:bg-black dark:text-white min-h-dvh min-w-dvw relative flex flex-col items-center">
    <div
        class="z-10 sticky top-0 bg-white dark:bg-black w-full flex justify-center border-b"
        bind:clientHeight={$headerHeight}
        style:border-color={dark ? `rgb(255, 255, 255, ${border})` : `rgb(0, 0, 0, ${border})`}
        style:box-shadow={`0 2px 20px ${`rgb(0, 0, 0, ${shadow})`}`}
    >
        <div class="w-300 max-w-[95dvw] h-12 md:h-20 px-2 grid grid-cols-[4fr_1fr] md:grid-cols-3 items-center">
            <LastUpdated class="font-code dark:text-white/40 not-md:hidden flex items-center justify-start h-full"/>
            <span class="flex md:justify-center">
                {#if $showHeaderTitle}
                    <a transition:fade={{duration: 150}} href={resolve("/")} ><Title class="text-2xl"/></a>
                {/if}
            </span>
            <Language class="font-code dark:text-white/40 flex items-center justify-end h-full"/>
        </div>
    </div>
    <div class="z-0 grow w-300 max-w-[95dvw]">
        {@render children()}
    </div>
</div>

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
	{/each}
</div>
