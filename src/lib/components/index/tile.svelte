<script lang="ts">
  import type { ResolvedPathname } from '$app/types';

  const { class: className, imgClass, title, thumbnail, href, saturated }: { class?: string; imgClass?: string; title: string; thumbnail: string; href: ResolvedPathname; saturated?: boolean } = $props();
</script>

<a href={href} class="w-full h-full group flex flex-col gap-2 {className}">
    <img src={thumbnail} alt={title} class="w-full h-full object-cover {saturated ? 'group-focus:saturate-30 group-hover:saturate-30' : 'saturate-0 group-focus:saturate-100 group-hover:saturate-100'} transition-all min-h-25 max-h-25 md:max-h-60 {imgClass}"/>
    <span class="flex flex-row justify-between items-end">
        <span class="underline group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors not-md:text-sm">{title}</span>
    </span>
</a>
