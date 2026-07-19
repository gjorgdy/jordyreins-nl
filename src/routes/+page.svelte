<script lang="ts">
    // libraries
    import { fade, scale } from 'svelte/transition';
    import { copy } from 'svelte-copy';
    import { m } from '$lib/paraglide/messages.js';
    import { TypeWriter } from 'svelte-typewrite'
    import { resolve } from '$app/paths';
    // assets
    import initials_m from '$lib/assets/initials_modern.png';
    import initials_mw from '$lib/assets/initials_modern_white.png';
    import aboutMeThumbnail from '$lib/assets/index/jordy_2007.jpg';
    import experiencesThumbnail from '$lib/assets/index/experiences.jpg';
    import helixThumbnail from '$lib/assets/projects/helix-survival/thumbnail.png';
    import symphonicThumbnail from '$lib/assets/projects/symphonic-smp/thumbnail.png';
    import helixBotThumbnail from '$lib/assets/projects/helix-bot/thumbnail.png';
    import contactThumbnail from '$lib/assets/index/contact.jpg';
    // data
    import { showHeaderTitle, headerHeight } from '$lib/store';
    // components
    import CategoryTitle from '$lib/components/index/categoryTitle.svelte';
    import Tile from '$lib/components/index/tile.svelte';
    import Title from '$lib/components/title.svelte';
    import { page } from '$app/state';

    const hobbies = [
      'web developer',
      'game modder',
      'graphic designer',
      'video editor',
      'gamer'
    ];

    // moving title
    let scrollY = $state(0);
    let titleHeight = $state(0);
    let titleWrapperHeight = $state(0);
    let power = $derived(1 - (titleHeight / titleWrapperHeight));
    $effect(() => {
        $showHeaderTitle = scrollY > titleWrapperHeight * power;
    });

    // copied toast
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

<svelte:window bind:scrollY/>

{#if toast}
    <div transition:scale={{duration: 500}} class="z-50 pointer-events-none translate-[-50%] fixed shadow-sm shadow-black/50 bg-linear-to-r from-blue-600  to-purple-500 text-white p-1 rounded-sm" style:left={`${x}px`} style:top={`${y}px`}>
        {m.copy_toast()}
    </div>
{/if}

<!-- Main Overview -->
<div id="title" class="z-10 flex flex-col mb-6 pb-2 md:pb-8 md:m-0 h-[calc(100dvh-48px)] md:h-[calc(100dvh-80px)]">
    <!-- Title -->
    <div
        in:fade
        class="grow flex flex-col items-center justify-center"
        bind:clientHeight={titleWrapperHeight}
        style:transform={`translateY(${Math.pow(scrollY, power) + (Math.max(0, scrollY / titleWrapperHeight) * $headerHeight)}px)`}
        style:opacity={`${scrollY == 0 ? 1 : $showHeaderTitle ? 0 : Math.min(1.5 - scrollY / titleWrapperHeight, 1)}`}
    >
        <div bind:clientHeight={titleHeight} class="flex flex-col items-center justify-center relative">
            <img src={initials_mw} alt="" class="not-dark:hidden absolute opacity-5 -z-10 scale-50">
            <img src={initials_m} alt="" class="dark:hidden absolute opacity-5 -z-10 scale-50">
            <button use:copy={{ text: page.url.href, onCopy: (copy) =>  showCopiedToast(copy.event as MouseEvent) }} class="cursor-copy flex justify-start">
                <Title class="text-4xl md:text-8xl"/>
            </button>
            <span class="pointer-none font-subtitle italic tracking-widest font-thin text-sm md:text-xl text-black/70 dark:text-white/40 overflow-hidden max-h-lh flex flex-row gap-0">
                {m.quote()}
                <span class="not-md:hidden">
                    ; <TypeWriter texts={hobbies} afterTyped={{wait: 5000}} deleteSpeed={80} typeSpeed={80} />
                </span>
            </span>
        </div>
    </div>
    <!-- Personal -->
    <div class="shrink">
        <CategoryTitle text={m.personal()}/>
        <div id="me" class="w-full h-min grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Tile class="col-span-2" title={m.about_me()} thumbnail={aboutMeThumbnail} href={resolve("/about")}/>
            <Tile imgClass="object-left" title={m.experience_and_skills()} thumbnail={experiencesThumbnail} href={resolve("/experience-and-skills")}/>
            <Tile title={m.contact_me()} thumbnail={contactThumbnail} href={resolve("/contact")}/>
        </div>
    </div>
</div>
<!-- Body -->
<div class="flex flex-col gap-4 md:gap-8 pb-16">
    <!-- Software Projects -->
    <div>
        <CategoryTitle text={m.software_projects()}/>
        <div id="projects" class="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Tile title="Helix Survival Minecraft Server" thumbnail={helixThumbnail} href={resolve("/projects/helix-survival")}/>
            <Tile title="Helix (Discord) Bot" thumbnail={helixBotThumbnail} href={resolve("/projects/helix-bot")}/>
            <Tile title="Symphonic SMP Creators Website" thumbnail={symphonicThumbnail} href={resolve("/projects/symphonic-smp")}/>
        </div>
    </div>
    <!-- Tools -->
    <!-- <div>
        <CategoryTitle text="Tools"/>
        <div id="projects" class="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Tile title="Tool A" thumbnail="" href={resolve("/projects/tool-a")}/>
            <Tile title="Tool B" thumbnail="" href={resolve("/projects/tool-b")}/>
            <Tile title="Tool C" thumbnail="" href={resolve("/projects/tool-c")}/>
            <Tile title="Tool D" thumbnail="" href={resolve("/projects/tool-d")}/>
        </div>
    </div> -->
</div>
