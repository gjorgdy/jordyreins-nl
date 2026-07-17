<script>
    import { m } from '$lib/paraglide/messages.js';
    import { resolve } from '$app/paths';
    import { page } from '$app/state';
</script>

<div class="w-full h-full min-h-dvh flex flex-col items-center justify-center max-w-400">
    <div class="text-center flex flex-col gap-4 -translate-y-12 md:-translate-y-20">
        <h1 class="text-4xl font-bold">Error {page.status}</h1>
        <a href={resolve('/')} class="underline">{m.go_back()}</a>
    </div>
</div>
