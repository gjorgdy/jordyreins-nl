<script lang="ts">
    import { m } from '$lib/paraglide/messages.js';
    import { browser } from '$app/environment';
    import { fade } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';

    const { wClass, class: className, src, loading, instant }: { wClass?: string|undefined; class?: string|undefined; src: string|undefined; loading?: "eager"|"lazy"|null|undefined, instant?: boolean } = $props();

    async function loadImage(): Promise<string|undefined> {
        if (!src) return undefined;
        if (!browser || instant) return src;
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(src);
            img.onerror = () => reject(new Error(`Failed to load image at ${src}`));
            img.src = src;
        });
    }
</script>

<span class="not-prose grid {wClass ?? className}">
    {#await loadImage()}
        <span out:fade={{duration: 500, easing: cubicOut}} class="{className} bg-black/5 dark:bg-white/5 col-start-1 row-start-1 animate-pulse"></span>
    {:then src} {#if src}
        <img {loading} in:fade={{duration: 500}} {src} alt="Banner" class="{className} bg-black/5 dark:bg-white/5 col-start-1 row-start-1 object-cover" />
    {:else}
        <span in:fade={{duration: 500, easing: cubicOut}} class="{className} bg-black/5 dark:bg-white/5 col-start-1 row-start-1 flex items-center justify-center text-black/25 dark:text-white/15 font-code">
            {m.image_not_found()}
        </span>
    {/if} {/await}
</span>
