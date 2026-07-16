<script lang="ts">
    const { class: className }: { class?: string } = $props();
    import { m } from '$lib/paraglide/messages.js';
</script>

<div class={className}>{`{"${m.last_updated_sk()}": "2026-07-16"}`}</div>
