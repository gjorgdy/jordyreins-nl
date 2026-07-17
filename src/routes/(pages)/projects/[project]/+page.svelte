<script lang="ts">
    import { m } from '$lib/paraglide/messages.js';
    import SvelteMarkdown from '@humanspeak/svelte-markdown'
    import { getLocale } from '$lib/paraglide/runtime';
    import type { PageProps } from './$types';

    let { params }: PageProps = $props();

    type Project = {
      banner: string | undefined;
      content: string;
      locale: string;
    }

    async function getImage(path: string|undefined): Promise<string | undefined> {
        const paths = import.meta.glob('$lib/assets/projects/*/*', { eager: true, query: '?url', import: 'default' });
        console.log(paths);
        console.log(`${params.project}/${path}`);
        return Object.entries(paths).find((e): boolean => e[0].includes(`${params.project}/${path}`))?.[1];
    }

    const projectPromise: Promise<Project|undefined> = $derived.by(async () => {
        // banner
        const banner = await getImage("banner")
        // content
        const files = import.meta.glob('$lib/assets/projects/*/*', { query: '?raw', import: 'default' });
        // try to get the content
        const localeFile = files[contentUrl(params.project, getLocale())];
        if (localeFile) {
            return { banner, content: await localeFile?.(), locale: getLocale() } as Project;
        }
        const englishFile = files[contentUrl(params.project, 'en')];
        if (englishFile) {
            return { banner, content: await englishFile?.(), locale: 'en' } as Project;
        }
        const dutchFile = files[contentUrl(params.project, 'nl')];
        if (dutchFile) {
            return { banner, content: await dutchFile?.(), locale: 'nl' } as Project;
        }
    })

    function contentUrl(project: string, locale: string) {
        return `/src/lib/assets/projects/${project}/content_${locale}.md`;
    }
</script>

<div class="h-full flex flex-col items-center gap-2 md:gap-6 pb-6">
{#key getLocale()}
    {#await projectPromise}
        <div class="w-full h-full flex justify-center items-center">
            <p class="font-bold">Loading...</p>
        </div>
    {:then project} {#if project}
        {#if project.banner}
            <img src={project.banner} alt="Banner" class="rounded-xs max-w-dvw w-300 max-h-50 object-cover" />
        {/if}
        <article class="prose dark:prose-invert w-170 max-w-[90dvw]">
            {#if project.locale !== getLocale()}
                <p class="bg-red-600/40 border-2 border-red-600/80 rounded w-fit px-2 -mb-6">
                    {m.only_in() + " " + (getLocale() === 'en' ? m.lang_nl() : m.lang_en())}
                </p>
            {/if}
            {#if project.content}
                <SvelteMarkdown source={project.content}>
                    {#snippet blockquote({ children })}
                        <span class="border-l-2 rounded-r-xs border-black/40 bg-black/5 dark:border-white/40 dark:bg-white/5 px-2 flex flex-col gap-2 [&>p]:m-0 -mt-4">
                            {@render children?.()}
                        </span>
                    {/snippet}

                    {#snippet image({ href, title })}
                        {#await getImage(href)}
                            <div class="bg-black/10 dark:bg-white/10 max-w-dvw w-300 max-h-50 object-cover">{title}</div>
                        {:then image}
                            <img src={image} alt={title} class="rounded-xs not-prose my-2 max-w-full w-full h-50 object-cover" />
                        {/await}
                    {/snippet}
                </SvelteMarkdown>
            {/if}
        </article>
    {/if} {/await}
{/key}
</div>
