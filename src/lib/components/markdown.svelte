<script lang="ts">
    import SvelteMarkdown from '@humanspeak/svelte-markdown'
    import Image from '$lib/components/image.svelte';

    const { source, error, imageProvider, class: className }: { source: string; error?: string|undefined; imageProvider?: ((path: string|undefined) => string|undefined)|undefined; class?: string|undefined } = $props();
</script>

<article class="prose dark:prose-invert w-170 max-w-[90dvw] {className}">
    {#if error}
        <p class="bg-red-600/40 border-2 border-red-600/80 text-white rounded w-fit px-2 -mb-6">
            {error}
        </p>
    {/if}
    <SvelteMarkdown {source}>
        {#snippet blockquote({ children })}
            <span class="border-l-2 rounded-r-xs border-black/40 bg-black/5 dark:border-white/40 dark:bg-white/5 px-2 flex flex-col gap-2 [&>p]:m-0 -mt-4">
                {@render children?.()}
            </span>
        {/snippet}

        {#snippet image({ href, title })}
            {#if imageProvider && !href?.includes("http")}
                <Image wClass="rounded-xs" class="rounded-xs not-prose max-w-full w-full h-50 object-cover object-top" src={imageProvider(href)}/>
            {:else}
                <img loading="lazy" src={href} alt={title} class="rounded-xs not-prose max-w-full w-full h-50 object-cover object-top" />
            {/if}
        {/snippet}
    </SvelteMarkdown>
</article>
