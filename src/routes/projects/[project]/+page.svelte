<script lang="ts">
    import Markdown from '$lib/components/markdown.svelte';
    import { m } from '$lib/paraglide/messages.js';
    import { getLocale } from '$lib/paraglide/runtime';
    import type { PageProps } from './$types';

    let { params, data }: PageProps = $props();

    async function getImage(path: string|undefined): Promise<string | undefined> {
        const paths = import.meta.glob('$lib/assets/projects/*/*', { eager: true, query: '?url', import: 'default' });
        return Object.entries(paths).find((e): boolean => e[0].includes(`${params.project}/${path}`))?.[1];
    }

    let content: { text: string, isCurrentLocale: boolean } | undefined = $state(undefined);
    $effect(() => {
      const langPref: string[] = getLocale() === 'en' ? ['en', 'nl'] : ['nl', 'en'];
      (async () => {
          const files = import.meta.glob('$lib/assets/projects/*/*', { query: '?raw', import: 'default' });
          for (const lang in langPref) {
            const file = files[`/src/lib/assets/projects/${params.project}/content_${langPref[lang]}.md`];
            if (file) {
              return { isCurrentLocale: langPref[lang] === getLocale(), text: await file() };
            }
          }
          return undefined;
      })().then(r => content = r)
    })
</script>

<svelte:head>
    <title>Jordy Reins / Projects / {data.title}</title>
</svelte:head>

<div class="h-full flex flex-col items-center gap-2 md:gap-6 pb-12">
    {#await getImage("banner")}
        <div class="md:rounded-xs max-w-dvw w-300 max-h-50 bg-white/10"></div>
    {:then banner} {#if banner}
        <img src={banner} alt="Banner" class="md:rounded-xs max-w-dvw w-300 max-h-50 object-cover" />
    {/if} {/await}
    {#if content}
        <Markdown
            source={content.text}
            error={!content.isCurrentLocale ? m.only_in() + " " + (getLocale() === 'en' ? m.lang_nl() : m.lang_en()) : undefined}
            imageProvider={getImage}
        />
    {/if}
</div>
