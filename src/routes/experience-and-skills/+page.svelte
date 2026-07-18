<script lang="ts">
    import Markdown from '$lib/components/markdown.svelte';
	import { m } from '$lib/paraglide/messages';
    import { getLocale } from '$lib/paraglide/runtime';
    import Image from '$lib/components/image.svelte';
    // images
    import Windesheim from '$lib/assets/experience/windesheim.jpg';
    import Homelab from '$lib/assets/experience/homelab.png';

    const { data } = $props();
</script>

<svelte:head>
    <title>Jordy Reins / {m.experience_and_skills()}</title>
</svelte:head>

<div class="flex flex-col gap-8">
    <!-- Study -->
    <div class="grid grid-rows-[auto] md:grid-cols-2 gap-8 h-full items-center">
        <Markdown source={data.study(getLocale())} class="w-full"/>
        <Image src={Windesheim} class="rounded not-md:max-h-40 w-full h-full"/>
    </div>
    <!-- Personal -->
    <div class="grid grid-rows-[auto] md:grid-cols-2 gap-8 h-full">
        <Image src={Homelab} class="rounded not-md:max-h-40 w-full h-full"/>
        <Markdown source={data.personal(getLocale())} class="w-full"/>
    </div>
</div>
