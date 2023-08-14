<script lang="ts">
    import { fly, type EasingFunction } from "svelte/transition";

    export let easing: EasingFunction | undefined = undefined;
    export let x: number | undefined = undefined;
    export let y: number | undefined = undefined;
    export let duration: number | undefined = undefined;
</script>

<main in:fly={{easing: easing, x: x, y: y, duration: duration }}>
    <slot />
</main>
