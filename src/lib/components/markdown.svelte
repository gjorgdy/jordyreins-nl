<script lang="ts">
    import SvelteMarkdown from '@humanspeak/svelte-markdown';
    import Image from '$lib/components/image.svelte';
    import { formatter } from '$lib/code_formatting';

    const { source, imageProvider, class: className }: { source: string; imageProvider?: ((path: string|undefined) => string|undefined)|undefined; class?: string|undefined } = $props();

    function getModifiers(title: string|undefined): string {
        let classString = '';
        // picture placement
        if (title?.includes('|top')) classString += ' object-top';
        else if (title?.includes('|bottom')) classString += ' object-bottom';
        else if (title?.includes('|left')) classString += ' object-left';
        else if (title?.includes('|right')) classString += ' object-right';
        else classString += ' object-center';
        // size
        if (title?.includes('|small')) classString += ' h-15 md:h-20';
        if (title?.includes('|medium')) classString += ' h-30 md:h-65';
        if (title?.includes('|large')) classString += ' h-60 md:h-80';
        else classString += ' h-40 md:h-50'
        return classString;
    }

</script>

<article class="prose dark:prose-invert {className}">
    <SvelteMarkdown {source} renderers={{ code: formatter }}>
        {#snippet blockquote({ children })}
            <span class="border-l-2 rounded-r-xs border-black/40 bg-black/5 dark:border-white/40 dark:bg-white/5 px-2 flex flex-col gap-2 [&>p]:m-0 mt-2">
                {@render children?.()}
            </span>
        {/snippet}

        {#snippet image({ href, text })}
            {#if imageProvider && !href?.includes("http")}
                <Image wClass="rounded-sm" class="rounded-sm not-prose max-w-full w-full object-cover {getModifiers(text)}" src={imageProvider(href)}/>
                <span class="text-sm md:text-xs italic opacity/50">{text?.split('|')[0]}</span>
            {:else}
                <img loading="lazy" src={href} alt={text} class="rounded-sm not-prose max-w-full w-full object-cover {getModifiers(text)}" />
            {/if}
        {/snippet}
    </SvelteMarkdown>
</article>
