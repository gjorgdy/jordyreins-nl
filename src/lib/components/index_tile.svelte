<script lang="ts">
  import type { ResolvedPathname } from '$app/types';

  const { class: className, imgClass, title, subtitle, thumbnail, href, saturated }: { class?: string; imgClass?: string; title: string; subtitle?: string; thumbnail: string; href: ResolvedPathname; saturated?: boolean } = $props();
</script>

<a href={href} class="w-full h-full group flex flex-col gap-2 {className}">
    <img src={thumbnail} alt={title} class="w-full h-full object-cover {saturated ? 'group-focus:saturate-30 group-hover:saturate-30' : 'saturate-30 group-focus:saturate-100 group-hover:saturate-100'} transition-all max-h-40 md:max-h-80 {imgClass}"/>
    <span class="flex flex-row justify-between items-end">
        <span class="underline group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors not-md:text-sm">{title}</span>
        {#if subtitle}
            <span class="not-md:hidden overflow-hidden text-gray-600 dark:text-white/40 text-sm italic md:opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-0 transition-all">
                {subtitle}
            </span>
        {/if}
    </span>
</a>
