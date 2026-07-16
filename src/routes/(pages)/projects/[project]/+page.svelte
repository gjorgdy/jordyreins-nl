<script lang="ts">
    import { error } from '@sveltejs/kit';
    import { m } from '$lib/paraglide/messages.js';
    import SvelteMarkdown from '@humanspeak/svelte-markdown'
    import { getLocale } from '$lib/paraglide/runtime';
    import type { PageProps } from './$types';

    let { params }: PageProps = $props();

    type Project = {
      banner: string;
      content: string;
      locale: string;
    }

    const content = $derived.by(async () => {
        return await getContent(params.project, getLocale());
    })

    async function getContent(project: string, locale: string): Promise<Project> {
      const files = import.meta.glob('$lib/pages/projects/*.md', { query: '?raw', import: 'default' });
      const file = files[`/src/lib/pages/projects/${project}_${locale}.md`];
      if (file) {
        return { banner: `/src/lib/assets/projects/${project}/banner.png`, content: await file?.(), locale: 'en' };
      } else {
        return { banner: `/src/lib/assets/projects/${project}/banner.png`, content: await files[`/src/lib/pages/projects/${project}_en.md`]?.(), locale: 'en' }
      }
    }
</script>

<div class="flex flex-col items-center gap-2 md:gap-6 pb-6">
{#key getLocale()}
    {#await content then project}
        <img src={project.banner} alt="Banner" class="max-w-dvw w-400 max-h-50 object-cover" />
        <article class="prose dark:prose-invert w-170 max-w-[90dvw]">
            {#if project.locale !== getLocale()}
                <p class="bg-red-600/40 border-2 border-red-600/80 rounded w-fit px-2 -mb-6">
                    {m.only_in() + " " + (getLocale() === 'en' ? m.lang_nl() : m.lang_en())}
                </p>
            {/if}
            {#if project.content}
                <SvelteMarkdown source={project.content} />
            {:else}
                {error(404, {message: 'Project not found'})}
            {/if}
        </article>
    {/await}
{/key}
</div>
