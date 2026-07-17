<script lang="ts">
    import { getLocale, setLocale } from '$lib/paraglide/runtime';
    import { m } from '$lib/paraglide/messages.js';

    const { class: className }: { class?: string } = $props();

    const toggleLocale = async () => {
      const target =  getLocale() === "en" ? "nl" : "en";
      await setLocale(target, { reload: false });
    };
</script>

<button onclick={toggleLocale} class="cursor-pointer dark:text-white/40 hover:text-gray-600 dark:hover:text-white/30 transition-colors flex flex-row {className}">
    <div class="not-md:hidden flex flex-row gap-0">
        <span>{`{"`}</span>
        {#key getLocale()}
            <span>{m.lang_sk()}</span>
        {/key}
        <span>": </span>
    </div>
    <span> "</span>
    {#key getLocale()}
        <span>{getLocale()}</span>
    {/key}
    "
    <span class="not-md:hidden">}</span>
</button>
