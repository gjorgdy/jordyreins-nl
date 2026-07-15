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
  import Language from '$lib/components/language.svelte';
  import IndexTile from '$lib/components/index_tile.svelte';

  const hobbies = [
    'web developer',
    'game modder',
    'graphic designer',
    'video editor',
    'gamer'
  ];

  let saturated = false;
</script>

<div id="bg" class="min-h-dvh bg-blue-50 text-gray-900 dark:bg-black dark:text-white flex flex-col items-center">
    <div class="w-full max-w-400 h-full relative pb-4">
        <div id="title" class="flex flex-col md:gap-4 md:items-center p-3 py-4 md:py-20">
            <div id="bar" class="flex flex-row justify-between items-center">
                <h1 class="text-4xl md:text-8xl font-bold tracking-widest">JORDY REINS</h1>
                <div class="md:absolute md:right-6 md:top-6"><Language/></div>
            </div>
            <span class="italic tracking-widest font-thin text-xs md:text-xl text-gray-700 dark:text-gray-400 overflow-hidden max-h-lh">
                {m.quote()};
                <TypeWriter texts={hobbies} afterTyped={{wait: 5000}} deleteSpeed={80} typeSpeed={80} />
            </span>
        </div>
        <h2 class="p-2 pb-4 pt-0 md:p-8 md:pt-0 text-xl text-gray-500">// Personal</h2>
        <div id="me" class="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-4 px-2 md:px-8">
            <IndexTile class="col-span-2" title={m.about_me()} subtitle={m.gaming_at_4()} thumbnail={aboutMeThumbnail} href={resolve("/about")} {saturated}/>
            <IndexTile imgClass="object-left" title={m.experiences()} subtitle={m.current_school()} thumbnail={experiencesThumbnail} href={resolve("/experiences")} {saturated}/>
            <IndexTile title={m.contact_me()} subtitle={m.contact_me_subtitle()} thumbnail={contactThumbnail} href={resolve("/contact")} {saturated}/>
        </div>
        <h2 class="p-2 py-4 md:p-8 text-xl text-gray-500">// Projects</h2>
        <div id="projects" class="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-4 px-2 md:px-8">
            <IndexTile title="Helix (Discord) Bot" subtitle={m.helix_bot_subtitle()} thumbnail={helixBotThumbnail} href={resolve("/projects/helix-bot")} {saturated}/>
            <IndexTile title="Helix Survival Server" subtitle={m.helix_subtitle()} thumbnail={helixThumbnail} href={resolve("/projects/helix-survival")} {saturated}/>
            <IndexTile title="Symphonic SMP Website" subtitle={m.symphonic_subtitle()} thumbnail={symphonicThumbnail} href={resolve("/projects/symphonic-smp")} {saturated}/>
        </div>
        <!-- <h2 class="p-2 py-4 md:p-8 text-xl text-gray-500">// Tools</h2> -->
    </div>
</div>
