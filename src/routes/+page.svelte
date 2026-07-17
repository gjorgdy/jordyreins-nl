<script lang="ts">
    // libraries
    import { fade, scale } from 'svelte/transition';
    import { copy } from 'svelte-copy';
    import { m } from '$lib/paraglide/messages.js';
    import { TypeWriter } from 'svelte-typewrite'
    import { resolve } from '$app/paths';
    // assets
    import aboutMeThumbnail from '$lib/assets/index/jordy_2007.jpg';
    import experiencesThumbnail from '$lib/assets/index/experiences.jpg';
    import helixThumbnail from '$lib/assets/projects/helix-survival/thumbnail.png';
    import symphonicThumbnail from '$lib/assets/projects/symphonic-smp/thumbnail.png';
    import helixBotThumbnail from '$lib/assets/projects/helix-bot/thumbnail.png';
    import contactThumbnail from '$lib/assets/index/contact.jpg';
    // components
    import CategoryTitle from '$lib/components/index/categoryTitle.svelte';
    import Tile from '$lib/components/index/tile.svelte';
    import { page } from '$app/state';

    const hobbies = [
      'web developer',
      'game modder',
      'graphic designer',
      'video editor',
      'gamer'
    ];

    let toast = $state(false);
    let x = $state(0);
    let y = $state(0);
    let hideTimeoutId: ReturnType<typeof setTimeout>;

    function showCopiedToast(event: MouseEvent) {
      x = event.clientX;
      y = event.clientY;
      clearTimeout(hideTimeoutId);
      toast = true;
      hideTimeoutId = setTimeout(() => {
        toast = false;
      }, 700);
    }
</script>

{#if toast}
    <div transition:scale={{duration: 500}} class="pointer-events-none translate-[-50%] fixed shadow-sm shadow-black/50 bg-linear-to-r from-blue-600  to-purple-500 text-white p-1 rounded-sm" style:left={`${x}px`} style:top={`${y}px`}>
        {m.copy_toast()}
    </div>
{/if}

<!-- Title Header -->
<div id="title" class="flex flex-col md:gap-4 md:items-center py-3 md:py-12">
    <button use:copy={{ text: page.url.href, onCopy: (copy) => showCopiedToast(copy.event as MouseEvent) }} class="flex justify-start">
        <h1 id="jordyreins" class="cursor-copy font-title text-4xl md:text-8xl tracking-widest bg-clip-text text-transparent bg-linear-to-r from-black/60 to-black dark:from-white dark:to-gray-400  hover:from-blue-600  hover:to-purple-500 transition-colors duration-500">JORDY REINS</h1>
    </button>
    <span class="font-subtitle italic tracking-widest font-thin text-sm md:text-xl text-black/70 dark:text-white/40 overflow-hidden max-h-lh flex flex-row gap-0">
        {m.quote()}
        <span class="not-md:hidden">
            ; <TypeWriter texts={hobbies} afterTyped={{wait: 5000}} deleteSpeed={80} typeSpeed={80} />
        </span>
    </span>
</div>
<!-- Body -->
<div class="flex flex-col gap-4 md:gap-8 pb-4">
    <!-- Personal -->
    <div>
        <CategoryTitle text={m.personal()}/>
        <div id="me" class="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Tile class="col-span-2" title={m.about_me()} thumbnail={aboutMeThumbnail} href={resolve("/about")}/>
            <Tile imgClass="object-left" title={m.experiences()} thumbnail={experiencesThumbnail} href={resolve("/experiences")}/>
            <Tile title={m.contact_me()} thumbnail={contactThumbnail} href={resolve("/contact")}/>
        </div>
    </div>
    <!-- Software Projects -->
    <div>
        <CategoryTitle text={m.software_projects()}/>
        <div id="projects" class="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Tile title="Helix Survival Minecraft Server" thumbnail={helixThumbnail} href={resolve("/projects/helix-survival")}/>
            <Tile title="Helix (Discord) Bot" thumbnail={helixBotThumbnail} href={resolve("/projects/helix-bot")}/>
            <Tile title="Symphonic SMP Creators Website" thumbnail={symphonicThumbnail} href={resolve("/projects/symphonic-smp")}/>
        </div>
    </div>
</div>
