<script>
    import { m } from '$lib/paraglide/messages.js';
    import { resolve } from '$app/paths';
    import { page } from '$app/state';
</script>

<div class="w-full h-full text-center flex flex-col gap-4">
    <h1 class="text-4xl font-bold">
        {#if page.error}
            {page.status}: {page.error.message}
        {:else}
            Error {page.status}
        {/if}
    </h1>
    <a href={resolve('/')} class="underline">{m.go_back()}</a>
</div>
