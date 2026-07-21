<script lang="ts">
	import { m } from '$lib/paraglide/messages';
    import Icon from "@iconify/svelte";
</script>

<svelte:head>
    <title>Jordy Reins / {m.contact_me()}</title>
</svelte:head>

<div class="h-full flex flex-col items-center justify-center">
    <div class="flex flex-col gap-4 max-w-[max(calc(--spacing(240)),90dvw)]">
        <!-- Professional -->
        <div class="flex flex-col">
            <span>{m.professional()}</span>
            <a href="mailto:jordy.reins@proton.me" class="flex flex-row gap-2 items-center p-2 text-lg font-bold">
                <Icon icon="ic:baseline-email"/>
                <span>jordy.reins@proton.me</span>
            </a>
        </div>
        <!-- Mods -->
        <div class="flex flex-col">
            <span>{m.mods()}</span>
            <a href="https://hexasis.eu/dc/keycap" class="flex flex-row gap-2 items-center p-2 text-lg font-bold">
                <Icon icon="ic:baseline-discord"/>
                <span>keycap development</span>
            </a>
        </div>
        <!-- Minecraft -->
        <div class="flex flex-col">
            <span>{m.minecraft()}</span>
            <a href="https://hexasis.eu/dc/hexasis" class="flex flex-row gap-2 items-center p-2 text-lg font-bold">
                <Icon icon="ic:baseline-discord"/>
                <span>Helix Survival</span>
            </a>
        </div>
        <!-- Projects -->
        <div class="flex flex-col">
            <span>{m.git()}</span>
            <span class="flex flex-row items-center gap-2">
                <a href="https://github.com/gjorgdy" class="flex flex-row gap-2 items-center p-2 text-lg font-bold">
                    <Icon icon="mdi:github"/>
                    <span>Gjorgdy</span>
                </a>
                <span class="font-thin">/</span>
                <a href="https://codeberg.org/Gjorgdy" class="flex flex-row gap-2 items-center p-2 text-lg font-bold">
                    <Icon icon="fa7-brands:codeberg"/>
                    <span>Gjorgdy</span>
                </a>
            </span>
        </div>
        <!-- Media -->
        <div class="flex flex-col">
            <span>{m.media()}</span>
            <span class="flex flex-row items-center gap-2">
                <a href="https://tiktok.com/@yordeaux" class="flex flex-row gap-2 items-center p-2 text-lg font-bold">
                    <Icon icon="ic:baseline-tiktok"/>
                    <span>Yordeaux</span>
                </a>
                <span class="font-thin">/</span>
                <a href="https://www.youtube.com/@yordeaux" class="flex flex-row gap-2 items-center p-2 text-lg font-bold">
                    <Icon icon="mdi:youtube"/>
                    <span>Yordeaux</span>
                </a>
            </span>
        </div>
    </div>
</div>
