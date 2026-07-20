<script lang="ts">
  import Image from '$lib/components/image.svelte';
  import type { ResolvedPathname } from '$app/types';

  const { class: className, imgClass, title, thumbnail, logo, href }: { class?: string; imgClass?: string; title: string; thumbnail: string; logo?: string; href?: ResolvedPathname|undefined; } = $props();
</script>

<a href={href} class="before:transition-colors dark:hover:before:bg-white/10 hover:before:bg-black/10 relative before:absolute hover:before:border before:-inset-1.5 before:rounded-sm dark:before:border-white/10 before:border-black/10 w-full h-full group flex flex-col gap-1.25 {className}">
    {#if href}
        <Image src={thumbnail} wClass="rounded-xs h-30 md:h-60 {logo ? 'opacity-80' : ''}" class="z-10 rounded-xs w-full h-30 md:h-60 object-cover transition-all {imgClass}"/>
        {#if logo}
        <div class="absolute w-full h-30 md:h-60 flex items-center justify-center">
            <Image src={logo} wClass="max-w-[80%]" class="max-h-20 md:max-h-50 z-10 transition-all {imgClass}"/>
        </div>
        {/if}
    {:else}
    <div class="z-10 rounded-xs w-full h-30 md:h-60 object-cover transition-all bg-black/5 dark:bg-white/5 flex items-center justify-center text-black/25 dark:text-white/15 font-code {imgClass}">Coming Soon</div>
    {/if}
    <span class="z-10 flex flex-row justify-between items-end">
        <span class="not-md:text-sm text-black/80 dark:text-white/80">{title}</span>
    </span>
</a>
