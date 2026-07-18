<script lang="ts">
    import Markdown from '$lib/components/markdown.svelte';
    import { m } from '$lib/paraglide/messages.js';
    import { getLocale } from '$lib/paraglide/runtime';
    import type { PageProps } from './$types';
	import type { Content } from './+page';
	import Image from '$lib/components/image.svelte';

    let { params, data }: PageProps = $props();

    function getImage(path: string|undefined): string|undefined {
        const paths = import.meta.glob('$lib/assets/projects/*/*', { eager: true, query: '?url', import: 'default' });
        return Object.entries(paths).find((e): boolean => e[0].includes(`${params.project}/${path}`))?.[1];
    }

    let content: Content|undefined = $derived(data.content);
    $effect(() => {data.getContent(getLocale()).then(r => content = r)})
</script>

<svelte:head>
    <title>Jordy Reins / Projects / {data.title}</title>
</svelte:head>

<div class="h-full flex flex-col items-center gap-2 md:gap-6 pb-12">
    <Image wClass="md:rounded-xs" class="md:rounded-xs max-w-dvw w-300 h-30 md:h-50" src={getImage("banner")} loading="eager"/>
    {#if content}
        <Markdown
            source={content.text}
            error={!content.isCurrentLocale ? m.only_in() + " " + (getLocale() === 'en' ? m.lang_nl() : m.lang_en()) : undefined}
            imageProvider={getImage}
        />
    {/if}
</div>
