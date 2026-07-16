<script>
    import Language from '$lib/components/language.svelte';
    import LastUpdated from '$lib/components/last_updated.svelte';

    import { m } from '$lib/paraglide/messages.js';
    import { resolve } from '$app/paths';
    import { page } from '$app/state';
</script>

<div id="bg" class="min-h-dvh bg-white dark:bg-black dark:text-white flex flex-col items-center">
    <div class="w-full p-6 grid grid-cols-3 items-center max-w-400">
        <LastUpdated class="dark:text-white/40 not-md:hidden flex justify-start"/>
        <a href={resolve("/")} class="text-2xl font-bold tracking-widest hover:scale-105 transition-transform flex justify-center">JORDY REINS</a>
        <Language class="dark:text-white/40 not-md:hidden justify-end"/>
    </div>
    <div class="w-full h-full min-h-dvh flex flex-col items-center justify-center max-w-400">
        <div class="text-center flex flex-col gap-4 -translate-y-20">
            <h1 class="text-4xl font-bold">Error {page.status}</h1>
            <a href={resolve('/')} class="underline">{m.go_back()}</a>
        </div>
    </div>
</div>
