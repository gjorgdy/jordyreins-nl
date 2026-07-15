<script lang="ts">
   	import { fade } from 'svelte/transition';
    import { setLocale, getLocale } from '$lib/paraglide/runtime';
    import { m } from '$lib/paraglide/messages.js';
</script>

<button onclick={() => setLocale(getLocale() === "en" ? "nl" : "en")} class="cursor-pointer dark:text-white/40 hover:text-gray-600 dark:hover:text-white/30 transition-colors flex flex-row">
    <div class="not-md:hidden flex flex-row gap-0">
        <span>{`{"`}</span>
        {#key getLocale()}
            <span in:fade>{m.lang_lowercase()}</span>
        {/key}
        <span>": </span>
    </div>
    <span> "</span>
    {#key getLocale()}
        <span in:fade>{getLocale()}</span>
    {/key}
    "
    <span class="not-md:hidden">}</span>
</button>
