<script lang="ts">
    import CardUser from "$lib/components/cards/CardUser.svelte";
    import AuthCheck from "$lib/components/utils/AuthCheck.svelte";
    import GridSecondary from "$lib/components/utils/GridSecondary.svelte";
    import { fade, fly } from "svelte/transition";
    import type { PageData } from "./$types";

    export let data: PageData;
    const { menus } = data;
</script>

<svelte:head>
    <title>Your Favorite - SharedRecipe</title>
</svelte:head>

<main in:fly={{ y: 50, duration: 400, delay: 500 }} out:fade>
    <AuthCheck>
        <h2 class="text-3xl font-semibold font-serif ml-6 mt-4 mb-8">
            Your favorite menu:
        </h2>

        {#if menus.length === 0}
            <h1 class="text-center text-xl m-6">
                You don't have any favorite menu yet!
            </h1>
        {:else}
            <GridSecondary>
                {#each menus as menu}
                    <CardUser
                        uid={menu.uid}
                        menuId={menu.menuId}
                        menuImg={menu.menuImg}
                        menuName={menu.menuName}
                        tags={menu.tags}
                        avgRating={menu.avgRating}
                        views={menu.views}
                        about={menu.about}
                    />
                {/each}
            </GridSecondary>
        {/if}
    </AuthCheck>
</main>
