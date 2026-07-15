<script lang="ts">
    import type { PageProps } from './$types';

    let { params }: PageProps = $props();
</script>

<h1 class="text-2xl">{params.project}</h1>
