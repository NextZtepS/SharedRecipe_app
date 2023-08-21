<script lang="ts">
    import { user } from "$lib/stores/user";
</script>

{#if $user}
    <slot />
{:else}
    <div class="alert-error text-center">
        <p class="text-error text-xl m-6">
            You must be signed in to access this page!
        </p>
        <a class="btn btn-error mb-6" href="/">Return to Homepage</a>
    </div>
{/if}
