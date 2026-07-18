<script lang="ts">
  import Image from '$lib/components/image.svelte';
  import type { ResolvedPathname } from '$app/types';

  const { class: className, imgClass, title, thumbnail, href }: { class?: string; imgClass?: string; title: string; thumbnail: string; href: ResolvedPathname; } = $props();
</script>

<a href={href} class="before:transition-colors dark:hover:before:bg-white/10 hover:before:bg-black/10 relative before:absolute hover:before:border before:-inset-1.5 before:rounded-sm dark:before:border-white/10 before:border-black/10 w-full h-full group flex flex-col gap-1.25 {className}">
    <Image src={thumbnail} wClass="rounded-xs h-30 md:h-60" class="z-10 rounded-xs w-full h-30 md:h-60 object-cover transition-all {imgClass}"/>
    <span class="z-10 flex flex-row justify-between items-end">
        <span class="not-md:text-sm">{title}</span>
    </span>
</a>
