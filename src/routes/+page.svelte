<script lang="ts">
  // libraries
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

  const hobbies = [
    'web developer',
    'game modder',
    'graphic designer',
    'video editor',
    'gamer'
  ];

  let saturated = true;
</script>

<!-- Title Header -->
<div id="title" class="flex flex-col md:gap-4 items-center py-3 md:py-12">
    <h1 id="jordyreins" class="text-4xl md:text-8xl font-bold tracking-widest">JORDY REINS</h1>
    <span class="italic tracking-widest font-thin md:text-xl text-black/70 dark:text-white/40 overflow-hidden max-h-lh flex flex-row gap-0">
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
            <Tile class="col-span-2" title={m.about_me()} thumbnail={aboutMeThumbnail} href={resolve("/about")} {saturated}/>
            <Tile imgClass="object-left" title={m.experiences()} thumbnail={experiencesThumbnail} href={resolve("/experiences")} {saturated}/>
            <Tile title={m.contact_me()} thumbnail={contactThumbnail} href={resolve("/contact")} {saturated}/>
        </div>
    </div>
    <!-- Software Projects -->
    <div>
        <CategoryTitle text={m.software_projects()}/>
        <div id="projects" class="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Tile title="Helix Survival Minecraft Server" thumbnail={helixThumbnail} href={resolve("/projects/helix-survival")} {saturated}/>
            <Tile title="Helix (Discord) Bot" thumbnail={helixBotThumbnail} href={resolve("/projects/helix-bot")} {saturated}/>
            <Tile title="Symphonic SMP Creators Website" thumbnail={symphonicThumbnail} href={resolve("/projects/symphonic-smp")} {saturated}/>
        </div>
    </div>
</div>
