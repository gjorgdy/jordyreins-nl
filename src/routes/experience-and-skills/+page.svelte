<script lang="ts">
    import Markdown from '$lib/components/markdown.svelte';
	import { m } from '$lib/paraglide/messages';
    import { getLocale } from '$lib/paraglide/runtime';
    import Image from '$lib/components/image.svelte';
    // images
    import Windesheim from '$lib/assets/experience/windesheim.jpg';
    import Homelab from '$lib/assets/experience/homelab.png';
    import Modding from '$lib/assets/experience/modding.webp';
    import Zed from '$lib/assets/experience/zed.png';

    const { data } = $props();
    const { study, homelab, modding, languages } = $derived(data);
</script>

<svelte:head>
    <title>Jordy Reins / {m.experience_and_skills()}</title>
    <meta property="og:title" content="Jordy Reins / {m.experience_and_skills()}" />
</svelte:head>

<div class="flex flex-col gap-8 mb-12">
    <!-- Study -->
    <div class="grid grid-rows-[auto] md:grid-cols-2 gap-4 md:gap-8 h-full">
        <Image src={Windesheim} class="rounded not-md:max-h-40 w-full h-full"/>
        <Markdown source={study(getLocale())} class="w-full"/>
    </div>
    <!-- Homelab -->
    <div class="grid grid-rows-[auto] md:grid-cols-2 gap-4 md:gap-8 h-full">
        <Image src={Homelab} class="rounded not-md:max-h-40 w-full h-full md:col-start-2 object-left"/>
        <Markdown source={homelab(getLocale())} class="w-full md:row-start-1"/>
    </div>
    <!-- Modding -->
    <div class="grid grid-rows-[auto] md:grid-cols-2 gap-4 md:gap-8 h-full">
        <Image src={Modding} class="rounded not-md:max-h-40 w-full h-full"/>
        <Markdown source={modding(getLocale())} class="w-full"/>
    </div>
    <!-- Languages & Tools -->
    <div class="grid grid-rows-[auto] md:grid-cols-2 gap-4 md:gap-8 h-full">
        <Image src={Zed} class="rounded not-md:max-h-40 w-full h-full md:col-start-2 object-left"/>
        <Markdown source={languages(getLocale())} class="w-full md:row-start-1"/>
    </div>
</div>
