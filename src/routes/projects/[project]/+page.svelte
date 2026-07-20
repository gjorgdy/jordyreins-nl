<script lang="ts">
    import Markdown from '$lib/components/markdown.svelte';
    import { m } from '$lib/paraglide/messages.js';
    import { getLocale } from '$lib/paraglide/runtime';
    import type { PageProps } from './$types';
	import type { Content } from './+page';
	import Image from '$lib/components/image.svelte';
	// icons
	import { Code, Globe } from '@lucide/svelte';

    let { params, data }: PageProps = $props();

    function getImage(path: string|undefined): string|undefined {
        const paths = import.meta.glob('$lib/assets/projects/*/*', { eager: true, query: '?url', import: 'default' });
        return Object.entries(paths).find((e): boolean => e[0].includes(`${params.project}/${path}`))?.[1];
    }

    let content: Content|undefined = $derived(data.content);
    $effect(() => {data.getContent(getLocale()).then(r => content = r)})
</script>

<svelte:head>
    <title>Jordy Reins / {m.projects()} / {data.project.title}</title>
</svelte:head>

<div class="h-full flex flex-col items-center gap-2 md:gap-6 pb-12">
    <Image wClass="md:rounded-xs" class="md:rounded-xs max-w-dvw w-300 h-30 md:h-50 object-cover" src={getImage("banner")} loading="eager"/>
    <div class="min-w-fit w-170 max-w-[90dvw]">
        <span class="flex flex-row flex-wrap gap-4 mb-6 items-end">
            <h1 class="text-2xl font-bold text-black dark:text-white not-md:w-full">{data.project.title}</h1>
            {#if data.project.source_code}
                <a href={data.project.source_code} class="flex flex-row gap-2 items-center underline text-black/80 dark:text-white/80 hover:text-black/60 hover:dark:text-white/60 transition-colors">
                    <Code size={20} /> {m.source_code()}
                </a>
            {/if}
            {#if data.project.website}
                <a href={data.project.website} class="flex flex-row gap-2 items-center underline text-black/80 dark:text-white/80 hover:text-black/60 hover:dark:text-white/60 transition-colors">
                    <Globe size={20} /> {m.website()}
                </a>
            {/if}
        </span>
        {#if !content?.isCurrentLocale}
            <p class="bg-red-600/40 border-2 border-red-600/80 text-white rounded w-fit px-2 mb-6">
                {m.only_in() + " " + (getLocale() === 'en' ? m.lang_nl() : m.lang_en())}
            </p>
        {/if}
        {#if content}
            <Markdown
                class="min-w-full"
                source={content.text}
                imageProvider={getImage}
            />
        {/if}
    </div>
</div>
