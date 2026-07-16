<script lang="ts">
  import type { Pathname } from '$app/types';
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { locales, localizeHref } from '$lib/paraglide/runtime';
  import './layout.css';
  import initialsModern from '$lib/assets/initials_modern.png';
  import initialsModernWhite from '$lib/assets/initials_modern_white.png';

  let { children } = $props();
  let dark = false;
</script>

<svelte:head>
    <link rel="icon" href={dark ? initialsModernWhite : initialsModern} />
    <title>Jordy Reins</title>
</svelte:head>

<div class="{dark ? 'dark' : ''} bg-white dark:bg-black h-dvh w-dvw relative">
    {@render children()}
</div>

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
	{/each}
</div>
