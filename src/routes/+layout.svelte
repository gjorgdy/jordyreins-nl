<script lang="ts">
  import type { Pathname } from '$app/types';
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { m } from '$lib/paraglide/messages.js';
  import { locales, localizeHref } from '$lib/paraglide/runtime';
  import './layout.css';
  import initialsModern from '$lib/assets/initials_modern.png';
  import initialsModernWhite from '$lib/assets/initials_modern_white.png';
  import { showHeaderTitle, headerHeight } from '$lib/store';
  import { browser } from '$app/environment';
  // components
  import Language from '$lib/components/language.svelte';
  import LastUpdated from '$lib/components/last_updated.svelte';
  import Title from '$lib/components/title.svelte';
  import { fade } from 'svelte/transition';
  // icons
  import Icon from "@iconify/svelte";

  let { children, data } = $props();

  let scrollY = $state(0);
  let border = $derived(Math.min(scrollY / 250, 0.2));
  let shadow = $derived(Math.min(scrollY / 250, 0.25));
  let pageHeight = $state(0);
  let footerHeight = $state(0);
  let footerInView = $state(false);

  $effect(() => {
    if (!data.isHomePage) {
      showHeaderTitle.set(true);
    }
    if (browser) {
      footerInView = pageHeight == window.innerHeight || scrollY > pageHeight - footerHeight - window.innerHeight;
    }
  });

  let dark = true;
</script>

<svelte:window bind:scrollY />

<svelte:head>
    <link rel="icon" href={dark ? initialsModernWhite : initialsModern} />
    <title>Jordy Reins</title>
    <meta name="darkreader-lock" content="true" />
	<meta property="og:title" content="Jordy Reins" />
	<meta name="keywords" content="Minecraft, Survival, development, web, portfolio, gaming, content" />
	<meta name="description" content="The portfolio of Jordy Reins">
	<meta property="description" content="The portfolio of Jordy Reins" />
	<meta property="og:description" content="The portfolio of Jordy Reins" />
	<meta property="og:image" content={initialsModern} />
</svelte:head>

<div bind:clientHeight={pageHeight} class="{dark ? 'dark' : ''} bg-white dark:bg-black dark:text-[#d0d0d0] min-h-full w-full relative grid grid-rows-[auto_1fr_auto]">
    <div
        class="z-10 sticky top-0 bg-white dark:bg-black w-full flex justify-center border-b"
        bind:clientHeight={$headerHeight}
        style:border-color={dark ? `rgb(255, 255, 255, ${border})` : `rgb(0, 0, 0, ${border})`}
        style:box-shadow={`0 2px 20px ${`rgb(0, 0, 0, ${shadow})`}`}
    >
        <div class="w-300 max-w-[95dvw] h-12 md:h-20 px-2 grid grid-cols-[4fr_1fr] md:grid-cols-[1fr_auto_1fr] items-center">
            <LastUpdated class="font-code dark:text-white/40 not-md:hidden flex items-center justify-start h-full"/>
            <span class="flex md:justify-center">
                {#if $showHeaderTitle}
                    <a transition:fade={{duration: 150}} href={resolve("/")} ><Title class="text-2xl"/></a>
                {/if}
            </span>
            <Language class="font-code dark:text-white/40 flex items-center justify-end h-full"/>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="z-0 h-full w-300 max-w-[95dvw]">
            {@render children()}
        </div>
    </div>
    <div bind:clientHeight={footerHeight} class="w-full flex items-center justify-center bg-white dark:bg-black border-t border-black/20 dark:border-white/20 h-16 md:h-10">
        <div class="w-300 max-w-[95dvw] flex flex-col-reverse gap-2 md:grid md:grid-cols-3 items-center justify-center text-black/50 dark:text-white/50 text-sm">
            {#if footerInView}
            <span in:fade>© 2026 Jordy Reins | All Rights Reserved</span>
            <span class="flex flex-row gap-4 items-center justify-center">
                <a href="https://github.com/gjorgdy" class="group grid">
                    <Icon class="group-hover:opacity-0 transition-opacity row-start-1 col-start-1" height="1lh" icon="line-md:github"/>
                    <Icon class="group-hover:opacity-100 opacity-0 transition-opacity row-start-1 col-start-1" height="1lh" icon="line-md:github-twotone"/>
                </a>
                <a href="https://www.youtube.com/@yordeaux" class="group grid">
                    <Icon class="group-hover:opacity-0 transition-opacity row-start-1 col-start-1" height="1lh" icon="line-md:youtube"/>
                    <Icon class="group-hover:opacity-100 opacity-0 transition-opacity row-start-1 col-start-1" height="1lh" icon="line-md:youtube-twotone"/>
                </a>
                <a href="https://hexasis.eu/dc/keycap" class="group grid">
                    <Icon class="group-hover:opacity-0 transition-opacity row-start-1 col-start-1" height="1lh" icon="line-md:discord"/>
                    <Icon class="group-hover:opacity-100 opacity-0 transition-opacity row-start-1 col-start-1" height="1lh" icon="line-md:discord-twotone"/>
                </a>
                <a href="https://modrinth.com/user/Gjorgdy" class="group grid">
                    <Icon class="group-hover:opacity-0 transition-opacity row-start-1 col-start-1" height="1lh" icon="line-md:download-outline"/>
                    <Icon class="group-hover:opacity-100 opacity-0 transition-opacity row-start-1 col-start-1" height="1lh" icon="line-md:download-twotone"/>
                </a>
            </span>
            <span in:fade class="text-end not-md:hidden">
                {m.made_with()}
                <a href="https://svelte.dev/" class="underline hover:text-black/40 hover:dark:text-white/40 transition-colors">Svelte</a>
            </span>
            {/if}
        </div>
    </div>
</div>

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
	{/each}
</div>
