<script lang="ts">
    import Markdown from '$lib/components/markdown.svelte';
    import { m } from '$lib/paraglide/messages.js';
	import { toTitleCase } from '$lib/utils';
    import type { PageProps } from './$types';

    let { params, data }: PageProps = $props();

    let content = $derived.by(async () => await data.getContent());
</script>

<svelte:head>
    <title>Jordy Reins / {m.resources()} / {toTitleCase(params.resource)}</title>
    <meta property="og:title" content="Jordy Reins / {m.resources()} / {toTitleCase(params.resource)}" />
</svelte:head>

<div class="h-full flex flex-col items-center gap-2 md:gap-6 pb-12">
    <div class="min-w-fit w-170 max-w-[90dvw]">
        {#await content then source}
            <Markdown
                class="min-w-full"
                {source}
            />
        {:catch}
            <p class="bg-red-600/40 border-2 border-red-600/80 text-white rounded w-fit px-2 mb-6">
                {m.project_not_loaded()}
            </p>
        {/await}
    </div>
</div>
