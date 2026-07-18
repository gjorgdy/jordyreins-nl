<script lang="ts">
    import SvelteMarkdown from '@humanspeak/svelte-markdown'
    import {
        createShikiHighlighter,
        ShikiCode,
        setShikiHighlighter
    } from '@humanspeak/svelte-markdown/extensions/shiki'
    import csharp from 'shiki/langs/csharp.mjs'
    import ts from 'shiki/langs/typescript.mjs'
    import githubDark from 'shiki/themes/github-dark.mjs'
    import Image from '$lib/components/image.svelte';

    setShikiHighlighter(
        createShikiHighlighter({ langs: [ts, csharp], themes: [githubDark] })
    )

    const { source, error, imageProvider, class: className }: { source: string; error?: string|undefined; imageProvider?: ((path: string|undefined) => string|undefined)|undefined; class?: string|undefined } = $props();

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

<article class="prose dark:prose-invert w-170 max-w-[90dvw] {className}">
    {#if error}
        <p class="bg-red-600/40 border-2 border-red-600/80 text-white rounded w-fit px-2 -mb-6">
            {error}
        </p>
    {/if}
    <SvelteMarkdown {source} renderers={{ code: ShikiCode }}>
        {#snippet blockquote({ children })}
            <span class="border-l-2 rounded-r-xs border-black/40 bg-black/5 dark:border-white/40 dark:bg-white/5 px-2 flex flex-col gap-2 [&>p]:m-0 -mt-4">
                {@render children?.()}
            </span>
        {/snippet}

        {#snippet image({ href, text })}
            {#if imageProvider && !href?.includes("http")}
                <Image wClass="rounded-sm" class="rounded-sm not-prose max-w-full w-full object-cover {getModifiers(text)}" src={imageProvider(href)}/>
            {:else}
                <img loading="lazy" src={href} alt={text} class="rounded-sm not-prose max-w-full w-full object-cover {getModifiers(text)}" />
            {/if}
        {/snippet}
    </SvelteMarkdown>
</article>
