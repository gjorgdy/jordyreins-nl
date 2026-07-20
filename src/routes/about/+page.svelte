<script lang="ts">
	import { m } from '$lib/paraglide/messages';
    import { getLocale } from '$lib/paraglide/runtime';
    import { onMount } from 'svelte';
    // components
    import Markdown from '$lib/components/markdown.svelte';
    import Image from '$lib/components/image.svelte';
    // images
    import Seven from '$lib/assets/about/2007.webp';
    import TwentyTwo from '$lib/assets/about/2022.webp';
    import TwentyFive from '$lib/assets/about/2025.webp';

    let index = $state(2);
    let interacted = $state(false);
    const images = [Seven, TwentyTwo, TwentyFive];

    function loop() {
      setTimeout(() => {
        if (!interacted) {
          index = (index + 1) % images.length;
          loop();
        }
      }, 5000);
    }

    function select(new_index: number) {
      interacted = true;
      index = new_index % images.length;
    }

    onMount(() => {
      loop();
    });

    const intro = $derived.by(() => {
      switch (getLocale()) {
        case 'en': return `
I am **Jordy Reins**, *Gjorgdy*, *Yordeaux*, *Dyce*, or way-way back; *soep_in_blik*.
Born in a small town in the Netherlands 23 years ago.

As the main page says, I have a lot of hobbies, most of them surrounding technology.
But the one thing that truly binds them all together is creativity.

My biggest non-IT interest is video and film. Either creating, learning about it, or consuming it.`
        case 'nl': return `
Ik ben **Jordy Reins**, *Gjorgdy*, *Yordeaux*, *Dyce*, of heel lang geleden; *soep_in_blik*.
Geboren in een klein Nederlands dorpje 23 jaar geleden.

Zoals de hoofdpagina zegt, heb ik een hele hoop hobby's. Het grootste deel hiervan hebben iets te maken met technologie.
Maar het ding dat ze echt allemaal samenbind is creativiteit.

Mijn grootste niet ICT gerelateerde interesse is video en film. Het maken, er over leren, of het kijken.`
      }
    })
</script>

<svelte:head>
    <title>Jordy Reins / {m.about_me()}</title>
</svelte:head>

<div class="h-full flex flex-col items-center md:justify-center">
    <div class="w-240 max-w-[90dvw]">
        <div class="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8">
            <Markdown source={intro} class="grow"/>
            <div class="bg-black/5 dark:bg-white/5 rounded-xl">
                <Image src={images[index]} wClass="w-[90dvw] md:w-100" class="rounded-xl aspect-square object-cover object-top"/>
                <span class="text-sm p-2 divide-x divide-white/20 w-full grid grid-cols-3 items-center">
                    <button class="cursor-pointer hover:opacity-80 {index === 0 ? 'font-bold' : ''}" onclick={() => select(0)}>2007</button>
                    <button class="cursor-pointer hover:opacity-80 {index === 1 ? 'font-bold' : ''}" onclick={() => select(1)}>2022</button>
                    <button class="cursor-pointer hover:opacity-80 {index === 2 ? 'font-bold' : ''}" onclick={() => select(2)}>2025</button>
                </span>
            </div>
        </div>
    </div>
</div>
