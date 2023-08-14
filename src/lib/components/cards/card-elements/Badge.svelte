<script lang="ts">
    export let avgRating: number | null;
    export let views: number;
</script>

<main
    class="text-center p-3 rounded-md ring-2 ring-inset ring-secondary-focus bg-secondary"
>
    {#if avgRating}
        <h3 class="text-2xl text-neutral-100">
            {avgRating.toFixed(2)}
        </h3>
    {:else}
        <h3 class="text-2xl text-neutral-100">-</h3>
    {/if}

    <h2 class="text-base text-neutral-100">views: {views}</h2>
</main>
